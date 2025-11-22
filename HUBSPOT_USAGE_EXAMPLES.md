# HubSpot Contact Modal - Usage Examples

## 🎯 How to Use the HubSpot Contact Button Anywhere

### Basic Usage

Just import and use the component:

```tsx
import HubSpotContactModal from "@/components/HubSpotContactModal";

export default function MyPage() {
  return (
    <div>
      <h1>My Page</h1>
      <HubSpotContactModal />
    </div>
  );
}
```

### Custom Button Text

```tsx
<HubSpotContactModal 
  triggerText="Get a Demo"
/>
```

### Custom Styling

```tsx
<HubSpotContactModal 
  triggerText="Talk to Sales"
  triggerClassName="rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-4 text-white font-bold hover:shadow-2xl transition-all"
/>
```

### Custom Title & Description

```tsx
<HubSpotContactModal 
  triggerText="Request Demo"
  title="See Galactis in Action"
  description="Schedule a personalized demo with our product experts."
/>
```

### With Magnetic Button Effect

```tsx
import MagneticButton from "@/components/MagneticButton";

// Use the modal with your existing click handler
<MagneticButton
  onClick={() => {
    const button = document.querySelector('[data-contact-trigger]') as HTMLButtonElement;
    button?.click();
  }}
  className="rounded-lg bg-purple-600 px-6 py-3 text-white"
>
  Contact Sales
</MagneticButton>

{/* Hidden modal */}
<div className="hidden">
  <HubSpotContactModal />
</div>
```

## 📍 Real Examples in Your Codebase

### 1. In a Hero Section

```tsx
export default function HomePage() {
  return (
    <section className="hero">
      <h1>Transform Your Business</h1>
      <p>Get started with Galactis today</p>
      
      <HubSpotContactModal 
        triggerText="Start Free Trial"
        title="Start Your Free Trial"
        description="No credit card required. Get up and running in minutes."
      />
    </section>
  );
}
```

### 2. In a Pricing Card

```tsx
export default function PricingCard() {
  return (
    <div className="pricing-card">
      <h3>Enterprise Plan</h3>
      <p className="price">Custom Pricing</p>
      
      <HubSpotContactModal 
        triggerText="Contact Sales"
        triggerClassName="w-full rounded-lg bg-purple-600 px-6 py-3 text-white font-semibold hover:bg-purple-700"
      />
    </div>
  );
}
```

### 3. In a CTA Section

```tsx
export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-purple-900 to-indigo-900 py-20 text-white">
      <div className="text-center">
        <h2>Ready to Get Started?</h2>
        <p>Let's discuss how Galactis can help your business</p>
        
        <HubSpotContactModal 
          triggerText="Schedule a Call"
          triggerClassName="mt-6 rounded-full bg-white px-8 py-4 text-purple-900 font-bold hover:bg-gray-100"
          title="Schedule a Call"
          description="Pick a time that works for you and let's chat!"
        />
      </div>
    </section>
  );
}
```

### 4. In the Navbar (Already exists)

Your navbar already has contact buttons - just make sure they use the same `data-contact-trigger` attribute or directly use the `HubSpotContactModal` component.

### 5. Multiple Buttons on Same Page

You can have multiple triggers on the same page - just add one hidden modal and multiple visible buttons:

```tsx
export default function ProductPage() {
  return (
    <div>
      <section className="hero">
        <HubSpotContactModal triggerText="Get Demo" />
      </section>
      
      <section className="features">
        {/* content */}
      </section>
      
      <section className="cta">
        <HubSpotContactModal triggerText="Contact Sales" />
      </section>
      
      <section className="footer-cta">
        <HubSpotContactModal triggerText="Let's Talk" />
      </section>
    </div>
  );
}
```

## 🎨 Styling Variants

### Gradient Button
```tsx
<HubSpotContactModal 
  triggerClassName="rounded-lg bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 px-6 py-3 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
/>
```

### Outline Button
```tsx
<HubSpotContactModal 
  triggerClassName="rounded-lg border-2 border-purple-600 px-6 py-3 text-purple-600 font-semibold hover:bg-purple-600 hover:text-white transition-all"
/>
```

### Large CTA Button
```tsx
<HubSpotContactModal 
  triggerText="Get Started Today"
  triggerClassName="rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-12 py-6 text-xl font-bold text-white shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all"
/>
```

### Subtle Link Button
```tsx
<HubSpotContactModal 
  triggerText="Talk to an expert →"
  triggerClassName="text-purple-600 font-semibold hover:text-purple-700 underline"
/>
```

## 🔥 Pro Tips

1. **Keep one hidden modal** and trigger it with custom buttons using:
   ```tsx
   onClick={() => {
     document.querySelector('[data-contact-trigger]')?.click();
   }}
   ```

2. **Match your brand** by customizing the `triggerClassName` to use your brand colors

3. **Different contexts** - Use different titles/descriptions for different pages:
   - Pricing page: "Get a custom quote"
   - Product page: "See it in action"
   - Homepage: "Start your free trial"

4. **Track conversions** - The modal automatically tracks when it opens (see `trackEvent` in the component)

