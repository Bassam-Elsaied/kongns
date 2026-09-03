import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

/**
 * The last word of every page title takes the serif-italic treatment. Arabic
 * has no italic and Instrument Serif carries no Arabic glyphs, so `globals.css`
 * swaps that emphasis for an accent colour under `lang="ar"`.
 */
export default function PageHeader({
  eyebrow,
  lead,
  tail,
  subtitle,
}: {
  eyebrow: string;
  lead: string;
  tail: string;
  subtitle?: string;
}) {
  return (
    <section className="relative pt-30 pb-16 max-[720px]:pt-32 max-[720px]:pb-12">
      <Container>
        <Reveal>
          <div className="font-mono text-[10px] font-medium tracking-[0.16em] text-fg-mute uppercase">
            <span className="me-2 inline-block size-1.5 rounded-full bg-brand align-middle shadow-[0_0_12px_var(--brand)]" />
            {eyebrow}
          </div>

          <h1 className="mt-4 text-[clamp(32px,5vw,52px)] leading-[1.15] font-medium tracking-[-0.035em]">
            {lead}{" "}
            <em className="font-serif font-normal tracking-[-0.02em] italic">
              {tail}
            </em>
            .
          </h1>

          {subtitle && (
            <p className="mt-5 max-w-135 text-[15px] leading-[1.7] text-fg-dim">
              {subtitle}
            </p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
