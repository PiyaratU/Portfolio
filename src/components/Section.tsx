import type { ReactNode } from "react";

/**
 * ส่วนของหน้าแบบเต็มความกว้าง — พื้นหลังสลับสีได้ (`tinted`) ส่วนเนื้อหาอยู่ในกรอบกลาง max-w-5xl
 */
export function Section({
  id,
  title,
  children,
  tinted = false,
}: {
  id: string;
  title: string;
  children: ReactNode;
  tinted?: boolean;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-16 py-16 sm:py-20 ${tinted ? "bg-tint" : ""}`}
    >
      <div className={CONTAINER}>
        <h2 className="mb-8 flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-accent">
          <span aria-hidden className="h-px w-8 bg-accent" />
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

/** กรอบเนื้อหากลางจอ — ใช้ร่วมกับ header / hero ให้ขอบตรงกันทั้งหน้า */
export const CONTAINER = "mx-auto w-full max-w-5xl px-4 sm:px-6";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted">
      {children}
    </span>
  );
}
