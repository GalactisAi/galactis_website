import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  theme?: "light" | "dark";
};

export default function Breadcrumbs({ items, theme = "dark" }: BreadcrumbsProps) {
  const linkClass = theme === "dark" 
    ? "text-white/90 transition-colors hover:text-white hover:underline"
    : "text-zinc-700 transition-colors hover:text-zinc-900 hover:underline dark:text-zinc-300 dark:hover:text-white";
  
  const currentClass = theme === "dark"
    ? "font-semibold text-white"
    : "font-semibold text-zinc-900 dark:text-white";
  
  const separatorClass = theme === "dark"
    ? "text-white/60"
    : "text-zinc-400 dark:text-zinc-600";

  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            {item.href ? (
              <Link href={item.href} className={linkClass}>
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className={currentClass}>
                {item.label}
              </span>
            )}
            {index < items.length - 1 && <span className={separatorClass}>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

