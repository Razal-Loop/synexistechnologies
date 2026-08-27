"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Visual breadcrumb navigation component.
 * JSON-LD BreadcrumbList schema is injected separately via the schema utility.
 */
export default function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center gap-1.5 text-sm flex-wrap ${className}`}
    >
      <ol
        className="flex items-center gap-1.5 flex-wrap"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li
              key={item.href}
              className="flex items-center gap-1.5"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <meta itemProp="position" content={String(i + 1)} />

              {i === 0 && (
                <Home className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              )}

              {isLast ? (
                <span
                  itemProp="name"
                  className="text-white font-semibold truncate max-w-[200px]"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <>
                  <Link
                    href={item.href}
                    itemProp="item"
                    className="text-slate-400 hover:text-brand-primary transition-colors font-medium truncate max-w-[160px]"
                  >
                    <span itemProp="name">{item.label}</span>
                  </Link>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
