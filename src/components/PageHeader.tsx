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
    <section className="relative pt-50 pb-25 max-[720px]:pt-36 max-[720px]:pb-16">
      <Container>
        <Reveal>
          <div className="font-mono text-[11px] font-medium tracking-[0.16em] text-fg-mute uppercase">
            <span className="me-2 inline-block size-1.5 rounded-full bg-brand align-middle shadow-[0_0_12px_var(--brand)]" />
            {eyebrow}
          </div>

          <h1 className="mt-6 text-[clamp(56px,9vw,168px)] leading-[0.92] font-medium tracking-[-0.045em]">
            {lead}
            <br />
            <em className="font-serif font-normal tracking-[-0.02em] italic">
              {tail}
            </em>
            .
          </h1>

          {subtitle && (
            <p className="mt-8 max-w-135 text-lg leading-[1.55] text-fg-dim">
              {subtitle}
            </p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
