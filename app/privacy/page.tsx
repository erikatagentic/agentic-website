import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE_CONFIG.name}. Learn how we collect, use, and protect your information.`,
};

export default function PrivacyPage() {
  return (
    <main className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-foreground-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="font-display text-3xl font-normal leading-[1.15] tracking-tight md:text-4xl lg:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-foreground-subtle">
          Last updated: February 8, 2026
        </p>

        <div className="mt-12 space-y-8 text-base leading-relaxed text-foreground-muted">
          <section>
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              1. Introduction
            </h2>
            <p>
              {SITE_CONFIG.name} (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
              &ldquo;us&rdquo;) respects your privacy and is committed to
              protecting your personal data. This Privacy Policy explains how we
              collect, use, and safeguard your information when you visit our
              website or engage our services.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              2. Information We Collect
            </h2>
            <p className="mb-4">
              We may collect the following types of information:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="text-foreground">Booking information:</strong>{" "}
                When you schedule a demo through Cal.com, we receive your name,
                email address, and any details you provide in the booking form.
              </li>
              <li>
                <strong className="text-foreground">Usage data:</strong>{" "}
                We automatically collect information about how you interact with
                our website, including pages visited, time spent, browser type,
                and referring URL.
              </li>
              <li>
                <strong className="text-foreground">Communications:</strong>{" "}
                If you contact us directly, we may receive your name, email
                address, and the contents of your message.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              3. How We Use Your Information
            </h2>
            <p className="mb-4">We use collected information to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Provide, maintain, and improve our services</li>
              <li>Respond to your inquiries and schedule consultations</li>
              <li>Send relevant communications about our services</li>
              <li>Analyze website usage to improve user experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              4. Third-Party Services
            </h2>
            <p className="mb-4">
              We use the following third-party services that may collect data:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="text-foreground">Cal.com:</strong> For
                scheduling demos and consultations. Subject to{" "}
                <a
                  href="https://cal.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline transition-colors hover:text-primary-hover"
                >
                  Cal.com&apos;s Privacy Policy
                </a>
                .
              </li>
              <li>
                <strong className="text-foreground">Vercel:</strong> For website
                hosting and deployment. Subject to{" "}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline transition-colors hover:text-primary-hover"
                >
                  Vercel&apos;s Privacy Policy
                </a>
                .
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              5. Data Retention
            </h2>
            <p>
              We retain your personal data only for as long as necessary to
              fulfill the purposes outlined in this policy, unless a longer
              retention period is required or permitted by law. Booking data is
              retained for the duration of our business relationship and a
              reasonable period thereafter.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              6. Your Rights
            </h2>
            <p className="mb-4">
              Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing of your data</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact us using the
              details below.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              7. Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal data against unauthorized access, alteration,
              disclosure, or destruction. However, no method of transmission over
              the Internet is 100% secure, and we cannot guarantee absolute
              security.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              8. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify
              you of any changes by posting the new policy on this page and
              updating the &ldquo;Last updated&rdquo; date. We encourage you to
              review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              9. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or our data
              practices, please reach out to us by booking a call at{" "}
              <a
                href={SITE_CONFIG.calLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline transition-colors hover:text-primary-hover"
              >
                {SITE_CONFIG.calLink}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
