import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center"
    >
      <p className="text-sm font-medium uppercase tracking-widest text-primary-text">
        404
      </p>
      <h1 className="mt-4 font-display text-3xl font-normal leading-[1.15] tracking-tight md:text-4xl lg:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-foreground-muted">
        {"The page you're looking for doesn't exist or has been moved. Let's get you back on track."}
      </p>
      <Button asChild className="mt-8 hover:bg-primary-cta-hover">
        <Link href="/">Back to Home</Link>
      </Button>
    </main>
  );
}
