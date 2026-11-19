import { existsSync } from "node:fs";
import path from "node:path";
import { CONTAINER, Section, Tag } from "@/components/Section";
import {
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  SKILL_ICONS,
} from "@/components/Icons";
import { profile, type Link } from "@/data/profile";

const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "case-studies", label: "Case Studies" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

// ปุ่ม Resume ขึ้นเมื่อมีไฟล์ใน public/ จริง (เช็คตอน build) — ไม่มีไฟล์ไม่แสดงลิงก์ที่กดแล้ว 404
const hasResume = existsSync(
  path.join(process.cwd(), "public", profile.resumePath.replace(/^\//, "")),
);
// ชื่อไฟล์มีอักษรไทย — encode ใน href ให้ลิงก์ถูกต้องทุกเบราว์เซอร์
const resumeHref = encodeURI(profile.resumePath);

const contactLinks: Link[] = profile.linkedin
  ? [...profile.links, { label: "LinkedIn", href: profile.linkedin }]
  : profile.links;

const LINK_ICONS: Record<string, () => React.JSX.Element> = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
};

/** ตัวย่อในวงกลมของส่วนแรก — อักษรแรกของชื่อและนามสกุล */
const initials = profile.name
  .split(" ")
  .map((part) => part[0])
  .join("")
  .slice(0, 2)
  .toUpperCase();

// ตัวเลขสรุปใต้ชื่อ — นับจากข้อมูลจริงใน profile.ts
const STATS = [
  { value: profile.yearsExperience, label: "Years as a developer" },
  { value: String(profile.workProjects.length), label: "Client projects" },
  {
    value: String(profile.projects.length),
    label: "Personal & academic projects",
  },
];

const PRIMARY_BUTTON =
  "inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:opacity-90";
const SECONDARY_BUTTON =
  "inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium transition hover:border-accent hover:text-accent";

function ExternalLinks({ links }: { links: Link[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-4 text-sm">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-accent hover:underline"
        >
          {link.label} ↗
        </a>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur">
        <nav
          className={`${CONTAINER} flex items-center justify-between gap-4 py-3`}
        >
          <a href="#top" className="flex shrink-0 items-center gap-2 font-semibold">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-xs font-bold text-white">
              {initials}
            </span>
            <span className="hidden sm:inline">{profile.name}</span>
          </a>
          <ul className="flex gap-4 overflow-x-auto text-sm text-muted">
            {NAV.map((item) => (
              <li key={item.id} className="shrink-0">
                <a href={`#${item.id}`} className="hover:text-foreground">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="top" className="flex-1">
        {/* ส่วนแรก — ซ้ายข้อความและปุ่ม · ขวาวงกลมตัวย่อ · พื้นหลังไล่สีอ่อน */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 right-0 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-accent-2/10 blur-3xl"
          />
          <div
            className={`${CONTAINER} relative grid items-center gap-12 py-20 sm:py-28 md:grid-cols-[1fr_auto]`}
          >
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                {profile.location}
              </p>
              <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
                {profile.name}
              </h1>
              <p className="mt-3 bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-xl font-semibold text-transparent sm:text-2xl">
                {profile.role}
              </p>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                {profile.tagline}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`mailto:${profile.email}`} className={PRIMARY_BUTTON}>
                  <MailIcon />
                  Contact Me
                </a>
                <a href="#work" className={SECONDARY_BUTTON}>
                  View My Work
                </a>
                {hasResume && (
                  <a
                    href={resumeHref}
                    download={profile.resumeDownloadName}
                    className={SECONDARY_BUTTON}
                  >
                    <DownloadIcon />
                    Download Resume
                  </a>
                )}
              </div>

              <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-6">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <dt className="sr-only">{s.label}</dt>
                    <dd className="text-3xl font-bold">{s.value}</dd>
                    <dd className="mt-1 text-xs leading-snug text-muted">
                      {s.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div aria-hidden className="relative mx-auto hidden md:block">
              <div className="absolute inset-0 -m-4 rounded-full border border-dashed border-accent/40" />
              <div className="flex h-60 w-60 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-7xl font-bold tracking-tight text-white shadow-2xl shadow-accent/30">
                {initials}
              </div>
            </div>
          </div>
        </section>

        <Section id="about" title="About">
          <div className="grid gap-4 text-lg leading-relaxed text-muted md:grid-cols-3 md:gap-8 md:text-base">
            {profile.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills" tinted>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(profile.skills).map(([group, items], i) => {
              const GroupIcon = SKILL_ICONS[i % SKILL_ICONS.length];
              return (
                <div
                  key={group}
                  className="rounded-2xl border border-border bg-card p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <GroupIcon />
                  </div>
                  <h3 className="mt-4 font-semibold">{group}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {items.map((s) => (
                      <Tag key={s}>{s}</Tag>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Section>

        {/* งานลูกค้าที่ทำกับบริษัท — repo เป็น private จึงไม่มีลิงก์ */}
        <Section id="work" title="Work Projects">
          <div className="grid gap-6 lg:grid-cols-2">
            {profile.workProjects.map((project) => (
              <article
                key={project.name}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <p className="text-xs font-medium uppercase tracking-wide text-accent">
                  {project.context}
                </p>
                <h3 className="mt-2 text-lg font-semibold">{project.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                {project.metrics && project.metrics.length > 0 && (
                  <dl className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {project.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-xl border border-border px-3 py-2"
                      >
                        <dt className="sr-only">{m.label}</dt>
                        <dd className="text-xl font-semibold text-accent">
                          {m.value}
                        </dd>
                        <dd className="text-xs text-muted">{m.label}</dd>
                      </div>
                    ))}
                  </dl>
                )}
                <ul className="mt-4 flex-1 list-disc space-y-1.5 pl-5 text-sm text-muted">
                  {project.contributions.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="case-studies" title="Case Studies" tinted>
          <div className="space-y-6">
            {profile.caseStudies.map((study) => (
              <article
                key={study.name}
                className="rounded-2xl border border-border bg-card p-6 sm:p-8"
              >
                <p className="text-xs font-medium uppercase tracking-wide text-accent">
                  {study.context}
                </p>
                <h3 className="mt-2 text-2xl font-semibold">{study.name}</h3>
                <p className="mt-2 max-w-3xl leading-relaxed text-muted">
                  {study.summary}
                </p>

                <div className="mt-6 grid gap-6 text-sm leading-relaxed md:grid-cols-3">
                  <div>
                    <h4 className="font-semibold">The problem</h4>
                    <p className="mt-2 text-muted">{study.problem}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">What I did</h4>
                    <ul className="mt-2 list-disc space-y-1.5 pl-5 text-muted">
                      {study.approach.map((a) => (
                        <li key={a}>{a}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold">Outcome</h4>
                    <ul className="mt-2 list-disc space-y-1.5 pl-5 text-muted">
                      {study.outcome.map((o) => (
                        <li key={o}>{o}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {study.tech.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
                {study.links && study.links.length > 0 && (
                  <ExternalLinks links={study.links} />
                )}
              </article>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {profile.projects.map((project) => (
              <article
                key={project.name}
                className="flex flex-col rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <h3 className="font-semibold">{project.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
                {"links" in project && project.links && (
                  <ExternalLinks links={project.links} />
                )}
              </article>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience" tinted>
          <ol className="relative space-y-10 border-l-2 border-border pl-8">
            {profile.experience.map((job) => (
              <li key={`${job.company}-${job.period}`} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-tint bg-accent"
                />
                <p className="inline-block rounded-full bg-accent/10 px-3 py-0.5 text-xs font-medium text-accent">
                  {job.period}
                </p>
                <h3 className="mt-2 text-lg font-semibold">{job.role}</h3>
                <p className="text-sm font-medium text-muted">{job.company}</p>
                <ul className="mt-3 max-w-3xl list-disc space-y-1.5 pl-5 text-sm text-muted">
                  {job.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="education" title="Education">
          <ol className="space-y-6">
            {profile.education.map((edu) => (
              <li
                key={`${edu.school}-${edu.period}`}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <p className="inline-block rounded-full bg-accent/10 px-3 py-0.5 text-xs font-medium text-accent">
                  {edu.period}
                </p>
                <h3 className="mt-2 text-lg font-semibold">{edu.degree}</h3>
                <p className="text-sm font-medium text-muted">{edu.school}</p>
                {edu.details && (
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {edu.details}
                  </p>
                )}
              </li>
            ))}
          </ol>
        </Section>

        <Section id="contact" title="Contact" tinted>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/15 blur-3xl"
            />
            <h3 className="relative text-2xl font-bold sm:text-3xl">
              Let&apos;s work together
            </h3>
            <p className="relative mt-3 max-w-xl text-muted">
              Open to Frontend and Full-Stack Developer roles. Reach me by
              email or grab my resume below.
            </p>
            <div className="relative mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}`} className={PRIMARY_BUTTON}>
                <MailIcon />
                {profile.email}
              </a>
              {hasResume && (
                <a
                  href={resumeHref}
                  download={profile.resumeDownloadName}
                  className={SECONDARY_BUTTON}
                >
                  <DownloadIcon />
                  Download Resume (PDF)
                </a>
              )}
              {contactLinks.map((link) => {
                const LinkIcon = LINK_ICONS[link.label];
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={SECONDARY_BUTTON}
                  >
                    {LinkIcon && <LinkIcon />}
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-border py-6 text-center text-xs text-muted">
        © {profile.copyrightYear} {profile.name}
      </footer>
    </>
  );
}
