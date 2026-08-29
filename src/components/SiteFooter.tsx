import { useTranslations } from "next-intl";
import Container from "@/components/Container";
import Wordmark from "@/components/Wordmark";
import { Facebook, LinkedIn, Upwork } from "@/components/icons";
import { Link } from "@/i18n/navigation";

const PLATFORM_LINKS = [
  { href: "/solutions", key: "solutions" },
  { href: "/work", key: "work" },
  { href: "/insights", key: "insights" },
  { href: "/company", key: "company" },
] as const;

const LEGAL_LINKS = [
  { href: "/privacy-policy", key: "privacy" },
  { href: "/terms-of-service", key: "terms" },
] as const;

const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/company/kogns/",
    label: "LinkedIn",
    Icon: LinkedIn,
  },
  {
    href: "https://www.facebook.com/profile.php?id=61593432899726",
    label: "Facebook",
    Icon: Facebook,
  },
  {
    href: "https://www.upwork.com/freelancers/~013c88afba45212e87",
    label: "Upwork",
    Icon: Upwork,
  },
];

const UNDERLINE_LINK =
  "text-sm text-fg-dim transition-colors duration-250 ease-smooth hover:text-foreground";

function ColumnHeading({ children }: { children: string }) {
  return (
    <h2 className="font-mono text-[11px] tracking-[0.16em] text-fg-mute uppercase">
      {children}
    </h2>
  );
}

export default function SiteFooter() {
  const t = useTranslations("Footer");
  const nav = useTranslations("Nav");

  return (
    <footer className="pt-30 pb-8">
      <Container>
        <div className="my-15 grid grid-cols-[2fr_1fr_1fr_1fr] gap-12 max-[800px]:grid-cols-2 max-[800px]:gap-10">
          <div className="flex flex-col items-start gap-3">
            <Wordmark size="footer" />
            <p className="mt-4 max-w-80 text-sm leading-relaxed text-fg-dim">
              {t("tagline")}
            </p>
            <div className="mt-4 flex gap-2">
              {SOCIAL_LINKS.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-full border border-line text-fg-dim transition-all duration-250 ease-smooth hover:scale-110 hover:border-line-strong hover:text-foreground"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start gap-3">
            <ColumnHeading>{t("platform")}</ColumnHeading>
            <ul className="flex list-none flex-col gap-3">
              {PLATFORM_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={UNDERLINE_LINK}>
                    {nav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start gap-3">
            <ColumnHeading>{t("engagement")}</ColumnHeading>
            <ul className="flex list-none flex-col gap-3">
              <li>
                <Link href="/contact" className={UNDERLINE_LINK}>
                  {nav("cta")}
                </Link>
              </li>
              <li>
                <a
                  href="mailto:hello@kogns.com"
                  className={`latin ${UNDERLINE_LINK}`}
                >
                  hello@kogns.com
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start gap-3">
            <ColumnHeading>{t("legal")}</ColumnHeading>
            <ul className="flex list-none flex-col gap-3">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={UNDERLINE_LINK}>
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-3 border-t border-line pt-8 font-mono text-xs tracking-[0.06em] text-fg-mute">
          <span>
            © {new Date().getFullYear()} {t("rights")}
          </span>
        </div>
      </Container>
    </footer>
  );
}
