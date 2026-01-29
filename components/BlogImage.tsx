"use client";

interface BlogImageProps {
  src: string;
  alt: string;
  className?: string;
}

/**
 * Client component for blog images that hides on load error.
 * Use in Server Components where onError cannot be passed.
 */
export default function BlogImage({ src, alt, className }: BlogImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        e.currentTarget.style.display = "none";
      }}
    />
  );
}
