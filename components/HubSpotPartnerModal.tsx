"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: {
          region: string;
          portalId: string;
          formId: string;
          target: string;
          onFormReady?: () => void;
        }) => void;
      };
    };
  }
}

export interface HubSpotPartnerModalProps {
  triggerText?: string;
  triggerClassName?: string;
  title?: string;
  description?: string;
  partnerType?: string;
}

export default function HubSpotPartnerModal({
  triggerText = "Apply as Partner",
  triggerClassName = "rounded-md bg-purple-600 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-700",
  title = "Apply to Partner Program",
  description = "Share a few details and our partnerships team will get back to you.",
  partnerType,
}: HubSpotPartnerModalProps) {
  const [open, setOpen] = useState(false);
  const [formRendered, setFormRendered] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) {
      setFormRendered(false);
      setLoadError(null);
      return;
    }

    console.log("Partner modal opened, starting form load process...");
    trackEvent("partner_modal_opened", {
      source: "hubspot_form",
      partnerType: partnerType,
    });
    setLoadError(null);
    setFormRendered(false);

    // Wait for the ref to be available (portal rendering takes time)
    let attempts = 0;
    const maxAttempts = 20;
    
    const waitForContainer = setInterval(() => {
      attempts++;
      console.log(`Checking for partner container... attempt ${attempts}`);
      
      if (formContainerRef.current) {
        console.log("Partner container found!", formContainerRef.current);
        clearInterval(waitForContainer);
        loadForm();
      } else if (attempts >= maxAttempts) {
        console.error("Partner container never became available");
        clearInterval(waitForContainer);
        setLoadError("Unable to initialize form. Please try refreshing the page.");
      }
    }, 100);

    const loadForm = () => {
      const container = formContainerRef.current;
      if (!container) {
        console.error("Container lost after finding it");
        setLoadError("Form container error. Please try again.");
        return;
      }

      // Clear any previous content
      container.innerHTML = "";
      
      // Generate unique ID
      const formId = `hubspot-partner-form-${Date.now()}`;
      container.id = formId;
      console.log(`Partner form container ID set to: ${formId}`);

      const createForm = () => {
        console.log("Attempting to create HubSpot partner form...");
        console.log("window.hbspt available:", !!window.hbspt);
        console.log("window.hbspt.forms available:", !!(window.hbspt && window.hbspt.forms));

        if (!window.hbspt || !window.hbspt.forms || !window.hbspt.forms.create) {
          console.error("HubSpot forms API not available");
          setLoadError("HubSpot forms API not loaded. Please refresh and try again.");
          return;
        }

        try {
          console.log("Creating HubSpot partner form with config:", {
            region: "na2",
            portalId: "244419566",
            formId: "9b765ab9-0e57-4011-aadc-e105e079e141",
            target: `#${formId}`,
          });

          window.hbspt.forms.create({
            region: "na2",
            portalId: "244419566",
            formId: "9b765ab9-0e57-4011-aadc-e105e079e141",
            target: `#${formId}`,
            onFormReady: () => {
              console.log("✅ HubSpot partner form ready!");
              setFormRendered(true);
            },
          });

          console.log("Partner form create() called successfully");

          // Backup check in case onFormReady doesn't fire
          setTimeout(() => {
            if (container.querySelector("iframe")) {
              console.log("✅ Partner form iframe detected (backup check)");
              setFormRendered(true);
            }
          }, 2000);

        } catch (error) {
          console.error("Error creating HubSpot partner form:", error);
          setLoadError("Unable to create form. Please try again.");
        }
      };

      // Load HubSpot script if needed
      const existingScript = document.querySelector('script[src*="hsforms.net/forms"]');
      
      if (window.hbspt && window.hbspt.forms) {
        console.log("HubSpot already loaded, creating partner form immediately");
        createForm();
      } else if (existingScript) {
        console.log("HubSpot script found in DOM, waiting for it to load...");
        // Script exists but API not ready, wait for it
        let checkAttempts = 0;
        const checkInterval = setInterval(() => {
          checkAttempts++;
          if (window.hbspt && window.hbspt.forms) {
            console.log("HubSpot API ready after waiting");
            clearInterval(checkInterval);
            createForm();
          } else if (checkAttempts > 50) {
            console.error("HubSpot API never became ready");
            clearInterval(checkInterval);
            setLoadError("HubSpot forms failed to load. Please refresh the page.");
          }
        }, 100);
      } else {
        console.log("Loading HubSpot script for the first time...");
        const script = document.createElement("script");
        script.src = "https://js.hsforms.net/forms/v2.js";
        script.charset = "utf-8";
        script.type = "text/javascript";
        
        script.onload = () => {
          console.log("HubSpot script loaded successfully");
          // Wait a bit for the API to initialize
          setTimeout(() => {
            if (window.hbspt && window.hbspt.forms) {
              createForm();
            } else {
              console.error("Script loaded but API not available");
              setLoadError("HubSpot initialization failed. Please refresh.");
            }
          }, 500);
        };
        
        script.onerror = () => {
          console.error("Failed to load HubSpot script");
          setLoadError("Unable to load HubSpot. Please check your internet connection.");
        };
        
        document.body.appendChild(script);
      }
    };

    return () => {
      if (waitForContainer) {
        clearInterval(waitForContainer);
      }
    };
  }, [open, partnerType]);

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(value) => {
        setOpen(value);
      }}
    >
      <Dialog.Trigger asChild>
        <button 
          data-contact-trigger 
          data-intent="partner" 
          data-partner-type={partnerType}
          className={triggerClassName}
        >
          {triggerText}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" />
        <Dialog.Content className="fixed inset-x-0 bottom-0 z-50 max-h-[95vh] w-full overflow-y-auto rounded-t-3xl border border-zinc-200 bg-white p-4 shadow-2xl focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 sm:inset-auto sm:left-1/2 sm:top-1/2 sm:max-h-[90vh] sm:w-[90vw] sm:max-w-2xl sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-2xl sm:p-6 md:p-8">
          <div className="flex items-start justify-between gap-6 mb-6">
            <div>
              <Dialog.Title className="text-lg font-semibold text-zinc-900 dark:text-white">
                {title}
                {partnerType && <span className="ml-2 text-purple-600">- {partnerType}</span>}
              </Dialog.Title>
              <Dialog.Description className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {description}
              </Dialog.Description>
            </div>
            <Dialog.Close asChild>
              <button
                className="rounded-full border border-transparent p-2 text-zinc-500 transition hover:border-zinc-200 hover:text-zinc-900 dark:hover:border-zinc-800 dark:hover:text-white text-2xl leading-none"
                aria-label="Close modal"
              >
                ×
              </button>
            </Dialog.Close>
          </div>
          
          {/* HubSpot partner form container */}
          <div className="hubspot-form-wrapper min-h-[200px]">
            {!formRendered && !loadError && (
              <div className="flex items-center justify-center py-12">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-purple-200 border-t-purple-600"></div>
              </div>
            )}
            {loadError && (
              <div className="text-center py-12">
                <p className="text-red-600 dark:text-red-400 mb-4">
                  {loadError}
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Email:{" "}
                  <a href="mailto:partners@galactis.ai" className="text-purple-600 hover:underline">
                    partners@galactis.ai
                  </a>
                </p>
              </div>
            )}
            <div ref={formContainerRef} className="hubspot-form-container" />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
