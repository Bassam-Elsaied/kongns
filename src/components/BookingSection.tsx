"use client";

import { useTranslations } from "next-intl";
import { useState, type FormEvent } from "react";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

const MESSAGE_LIMIT = 180;

const LABEL =
  "block font-mono text-[11px] tracking-[0.1em] text-fg-mute uppercase";
const FIELD =
  "mt-2 w-full rounded-[10px] border border-line bg-background px-4 py-3.5 text-[15px] text-foreground transition-colors duration-250 ease-smooth outline-none focus:border-brand";

/** `standalone` drops the section divider and adds header clearance when the
 *  form is the whole page rather than the tail of a case study. */
export default function BookingSection({
  standalone = false,
}: {
  standalone?: boolean;
}) {
  const t = useTranslations("Booking");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // No submission endpoint is wired up yet; this only confirms the interaction.
    setSent(true);
  }

  return (
    <section
      id="booking"
      className={`scroll-mt-22.5 bg-background-2 py-30 max-[720px]:py-20 ${
        standalone ? "pt-50 max-[720px]:pt-36" : "border-t border-line"
      }`}
    >
      <Container>
        <Reveal>
          <div className="font-mono text-[11px] font-medium tracking-[0.16em] text-fg-mute uppercase">
            <span className="me-2 inline-block size-1.5 rounded-full bg-brand align-middle shadow-[0_0_12px_var(--brand)]" />
            {t("eyebrow")}
          </div>

          <h2 className="mt-4 text-[clamp(26px,4vw,40px)] leading-[1.2] font-medium tracking-[-0.03em]">
            {t("titleLead")}{" "}
            <em className="font-serif font-normal tracking-[-0.02em] italic">
              {t("titleTail")}
            </em>
            .
          </h2>

          <p className="mt-4 max-w-130 text-[15px] leading-[1.7] text-fg-dim">{t("note")}</p>
        </Reveal>

        <div className="mt-12 max-w-220">
          {sent ? (
            <p className="rounded-[10px] border border-dashed border-line-strong px-6 py-5 font-mono text-[13px] text-ok">
              {t("success")}
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label htmlFor="booking-name" className={LABEL}>
                  {t("firstName")} <span className="text-brand">*</span>
                </label>
                <input
                  id="booking-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="given-name"
                  className={FIELD}
                />
              </div>

              <div>
                <label htmlFor="booking-email" className={LABEL}>
                  {t("email")} <span className="text-brand">*</span>
                </label>
                <input
                  id="booking-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  dir="ltr"
                  className={`${FIELD} text-start`}
                />
              </div>

              <div>
                <label htmlFor="booking-phone" className={LABEL}>
                  {t("phone")}
                </label>
                <input
                  id="booking-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  dir="ltr"
                  className={`${FIELD} text-start`}
                />
              </div>

              <div>
                <label htmlFor="booking-message" className={LABEL}>
                  {t("message")}
                </label>
                <span className="mt-1 block font-mono text-[11px] text-fg-mute">
                  {message.length} / {MESSAGE_LIMIT}
                </span>
                <textarea
                  id="booking-message"
                  name="message"
                  maxLength={MESSAGE_LIMIT}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className={`${FIELD} min-h-35 resize-y`}
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-fit cursor-pointer items-center gap-2.5 rounded-full bg-foreground px-6.5 py-3.5 text-sm font-medium text-background transition-transform duration-250 ease-smooth hover:-translate-y-px"
              >
                {t("submit")}
              </button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
