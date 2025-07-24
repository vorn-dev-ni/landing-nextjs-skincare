import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Not Found",
  description: "The page user search has not been shown.",
};

export default function NotFound() {
  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 ">
      <div className="text-center">
        {/* <p className="text-base font-semibold text-indigo-600">404</p> */}
        <h3 className="mt-4 text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
          Page not found
        </h3>
        <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-primary-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </Link>
          <Link href="#" className="text-sm font-semibold text-gray-900">
            Contact support <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
