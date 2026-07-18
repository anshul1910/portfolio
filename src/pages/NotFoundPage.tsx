import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-lg flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm text-accent-500">404</p>
      <h1 className="font-display mt-3 text-3xl font-extrabold tracking-tight">
        This page doesn't exist
      </h1>
      <p className="mt-3 text-[rgb(var(--fg-muted))]">
        The page you're looking for may have been moved or removed.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex h-11 items-center rounded-full bg-accent-500 px-6 text-sm font-semibold text-white"
      >
        Back home
      </Link>
    </div>
  );
}
