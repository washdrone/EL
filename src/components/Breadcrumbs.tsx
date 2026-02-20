import Link from "next/link";

export interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-surface-100 bg-surface-50 py-3">
      <div className="container-section">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-surface-400">
          <li>
            <Link href="/" className="transition-colors hover:text-brand-600">
              Hem
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-1.5">
              <span className="text-surface-300">/</span>
              {item.href && index < items.length - 1 ? (
                <Link href={item.href} className="transition-colors hover:text-brand-600">
                  {item.name}
                </Link>
              ) : (
                <span className="text-surface-600" aria-current="page">
                  {item.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
