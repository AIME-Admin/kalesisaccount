import type { ReactNode } from "react";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { BUSINESS } from "../config";

interface LegalLayoutProps {
  title: string;
  metaTitle: string;
  metaDescription: string;
  path: string;
  updated: string;
  children: ReactNode;
}

export default function LegalLayout({
  title,
  metaTitle,
  metaDescription,
  path,
  updated,
  children,
}: LegalLayoutProps) {
  useDocumentMeta({ title: metaTitle, description: metaDescription, path });

  return (
    <main className="pt-[72px] bg-white">
      <div className="container-main py-12 md:py-16 max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#64748B] hover:text-[#B91C1C] transition-colors"
        >
          <ArrowLeft size={16} />
          Επιστροφή στην αρχική
        </Link>

        <h1 className="mt-6 text-3xl md:text-4xl font-bold text-[#111827]">
          {title}
        </h1>
        <p className="mt-3 text-sm text-[#94A3B8]">
          {BUSINESS.name} · Τελευταία ενημέρωση: {updated}
        </p>

        <div className="legal-prose mt-8">{children}</div>

        <div className="mt-12 pt-6 border-t border-[#E5E7EB] text-sm text-[#64748B]">
          Για οποιοδήποτε ερώτημα σχετικά με την παρούσα πολιτική, επικοινωνήστε
          στο{" "}
          <a href={BUSINESS.emailHref} className="text-[#B91C1C] hover:underline">
            {BUSINESS.email}
          </a>{" "}
          ή στο{" "}
          <a href={BUSINESS.phoneHref} className="text-[#B91C1C] hover:underline">
            {BUSINESS.phoneDisplay}
          </a>
          .
        </div>
      </div>
    </main>
  );
}
