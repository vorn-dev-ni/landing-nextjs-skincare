"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BreadCrumb = () => {
  const pathname = usePathname();

  const pathParts = pathname.split("/").filter(Boolean);

  const breadcrumbs = pathParts.map((part, idx) => {
    const href = "/" + pathParts.slice(0, idx + 1).join("/");
    const label = decodeURIComponent(part).replace(/-/g, " ");
    return { href, label: label.charAt(0).toUpperCase() + label.slice(1) };
  });

  return (
    <nav
      aria-label="Breadcrumb"
      className="text-sm font-medium text-gray-500 text-center"
    >
      <ol className="inline-flex items-center space-x-1 md:space-x-3 body1 text-lg">
        <li className="inline-flex items-center">
          <Link href="/" className="">
            Home
          </Link>
          <svg
            className="w-4 h-4 mx-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </li>

        {breadcrumbs.map((crumb, idx) => {
          const isLast = idx === breadcrumbs.length - 1;
          return (
            <li key={crumb.href} className="inline-flex items-center">
              {!isLast ? (
                <>
                  <Link
                    href={crumb.href}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {crumb.label}
                  </Link>
                  <svg
                    className="w-4 h-4 mx-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </>
              ) : (
                <span className=" text-primary-400" aria-current="page">
                  {crumb.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadCrumb;
