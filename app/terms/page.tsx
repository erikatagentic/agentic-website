import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${SITE_CONFIG.name}. Read our terms and conditions for using our services.`,
};

export default function TermsPage() {
  return (
    <main id="main-content" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-foreground-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="font-display text-3xl font-normal leading-[1.15] tracking-tight md:text-4xl lg:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-foreground-subtle">
          Last updated: February 8, 2026
        </p>

        <div className="mt-12 space-y-8 text-base leading-relaxed text-foreground-muted">
          <section>
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the {SITE_CONFIG.name} website and services,
              you agree to be bound by these Terms of Service. If you do not
              agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              2. Description of Services
            </h2>
            <p>
              {SITE_CONFIG.name} provides AI workflow automation consulting
              services, including but not limited to: workflow design and
              deployment, custom AI integrations, process intelligence audits,
              and ongoing optimization. The specific scope of services is defined
              in individual client agreements.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              3. Client Responsibilities
            </h2>
            <p className="mb-4">As a client, you agree to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Provide accurate and complete information necessary for service
                delivery
              </li>
              <li>
                Grant reasonable access to systems and tools required for
                integration work
              </li>
              <li>
                Designate a point of contact for project communication
              </li>
              <li>
                Review and provide timely feedback on deliverables
              </li>
              <li>
                Comply with all applicable laws regarding your use of our
                services
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              4. Intellectual Property
            </h2>
            <p>
              All custom workflows, automations, and integrations developed
              specifically for a client become the property of that client upon
              full payment. {SITE_CONFIG.name} retains ownership of proprietary
              tools, methodologies, frameworks, and general knowledge developed
              independently or prior to the engagement. Our website content,
              branding, and materials remain our intellectual property.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              5. Confidentiality
            </h2>
            <p>
              Both parties agree to maintain the confidentiality of proprietary
              information shared during the course of an engagement. This
              includes business processes, technical architecture, API
              credentials, and any data accessed during service delivery. This
              obligation survives the termination of any agreement.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              6. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, {SITE_CONFIG.name} shall
              not be liable for any indirect, incidental, special, consequential,
              or punitive damages arising from or related to your use of our
              services. Our total liability for any claim shall not exceed the
              total fees paid by you for the specific service giving rise to the
              claim.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              7. Indemnification
            </h2>
            <p>
              You agree to indemnify and hold harmless {SITE_CONFIG.name}, its
              officers, employees, and agents from any claims, damages, losses,
              or expenses arising from your use of our services, your violation
              of these terms, or your violation of any rights of a third party.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              8. Termination
            </h2>
            <p>
              Either party may terminate a service engagement with written
              notice as specified in the applicable project agreement. Upon
              termination, you remain responsible for payment for all services
              rendered through the termination date. We will provide reasonable
              assistance in transitioning any active workflows.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              9. Governing Law
            </h2>
            <p>
              These Terms of Service shall be governed by and construed in
              accordance with applicable law, without regard to conflict of law
              principles. Any disputes arising from these terms shall be resolved
              through good-faith negotiation, and if necessary, binding
              arbitration.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              10. Changes to These Terms
            </h2>
            <p>
              We reserve the right to modify these Terms of Service at any time.
              Changes will be posted on this page with an updated &ldquo;Last
              updated&rdquo; date. Continued use of our services after changes
              constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              11. Contact Us
            </h2>
            <p>
              If you have any questions about these Terms of Service, please
              reach out to us by booking a call at{" "}
              <a
                href={SITE_CONFIG.calLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-text underline transition-colors hover:text-primary-text-hover"
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
