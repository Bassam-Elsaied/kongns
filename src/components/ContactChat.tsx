"use client";

import { useTranslations } from "next-intl";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { ARROW_NUDGE_SM, ArrowRight } from "@/components/icons";

const FIELDS = ["name", "email", "phone", "message"] as const;

type Field = (typeof FIELDS)[number];
type Step = Field | "done";
type Message = { id: number; from: "bot" | "user"; text: string };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MESSAGE_LIMIT = 400;

const EMPTY_ANSWERS: Record<Field, string> = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

/** Reading time for a bot line, so replies land at a human pace. */
function typingDelay(text: string) {
  return 420 + Math.min(text.length * 11, 900);
}

const BUBBLE =
  "w-fit max-w-[85%] rounded-2xl px-4 py-3 text-[15px] leading-[1.65] chat-in";

export default function ContactChat() {
  const t = useTranslations("Chat");
  const tCta = useTranslations("Cta");

  const [messages, setMessages] = useState<Message[]>([]);
  const [typing, setTyping] = useState(true);
  const [step, setStep] = useState<Step>("name");
  const [answers, setAnswers] = useState(EMPTY_ANSWERS);
  const [draft, setDraft] = useState("");
  const [error, setError] = useState("");

  const timers = useRef<number[]>([]);
  const nextId = useRef(0);
  const started = useRef(false);
  const scroller = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLTextAreaElement>(null);

  const say = useCallback((lines: string[]) => {
    setTyping(true);
    let delay = 0;

    lines.forEach((text, index) => {
      delay += typingDelay(text);
      const timer = window.setTimeout(() => {
        const id = (nextId.current += 1);
        setMessages((current) => [...current, { id, from: "bot", text }]);
        if (index === lines.length - 1) setTyping(false);
      }, delay);
      timers.current.push(timer);
    });
  }, []);

  useEffect(() => {
    // Guarded so the opening lines are not queued twice in Strict Mode.
    if (started.current) return;
    started.current = true;
    say([t("greeting"), t("askName")]);
  }, [say, t]);

  useEffect(() => {
    scroller.current?.scrollTo({
      top: scroller.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, typing, step]);

  useEffect(() => {
    if (!typing && step !== "done") {
      input.current?.focus({ preventScroll: true });
    }
  }, [typing, step]);

  function grow(element: HTMLTextAreaElement) {
    element.style.height = "auto";
    element.style.height = `${Math.min(element.scrollHeight, 128)}px`;
  }

  function submit(rawValue: string, skipped = false) {
    if (typing || step === "done") return;

    const field = step;
    const value = rawValue.trim();

    if (!skipped) {
      if (field === "name" && value.length < 2) {
        setError(t("invalidName"));
        return;
      }
      if (field === "email" && !EMAIL_PATTERN.test(value)) {
        setError(t("invalidEmail"));
        return;
      }
      if (!value) return;
    }

    setError("");
    setDraft("");
    if (input.current) input.current.style.height = "auto";

    const id = (nextId.current += 1);
    const text = skipped ? t("skipped") : value;
    setMessages((current) => [...current, { id, from: "user", text }]);

    const filled = { ...answers, [field]: skipped ? "" : value };
    setAnswers(filled);

    const next = FIELDS[FIELDS.indexOf(field) + 1];
    setStep(next ?? "done");

    if (field === "name") say([t("askEmail", { name: value })]);
    else if (field === "email") say([t("askPhone")]);
    else if (field === "phone") say([t("askMessage")]);
    else say([t("wrap"), t("success", { name: filled.name })]);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    submit(draft);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      submit(draft);
    }
  }

  function restart() {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setMessages([]);
    setAnswers(EMPTY_ANSWERS);
    setStep("name");
    setDraft("");
    setError("");
    say([t("greeting"), t("askName")]);
  }

  const placeholder = {
    name: t("placeholderName"),
    email: t("placeholderEmail"),
    phone: t("placeholderPhone"),
    message: t("placeholderMessage"),
    done: "",
  }[step];

  const latinField = step === "email" || step === "phone";
  const answered = step === "done" ? FIELDS.length : FIELDS.indexOf(step);

  return (
    <section className="pt-35 pb-24 max-[980px]:pt-36 max-[720px]:pb-14">
      <Container>
        <div className="grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] items-start gap-16 max-[980px]:grid-cols-1 max-[980px]:gap-10">
          <Reveal>
            <div className="max-[980px]:max-w-160">
              <div className="font-mono text-[11px] font-medium tracking-[0.16em] text-fg-mute uppercase">
                <span className="me-2 inline-block size-1.5 rounded-full bg-brand align-middle shadow-[0_0_12px_var(--brand)]" />
                {t("eyebrow")}
              </div>

              <h1 className="mt-4 text-[clamp(28px,4.5vw,44px)] leading-[1.2] font-medium tracking-[-0.03em]">
                {t("titleLead")}{" "}
                <em className="font-serif font-normal tracking-[-0.02em] italic">
                  {t("titleTail")}
                </em>
                .
              </h1>

              <p className="mt-5 max-w-110 text-[15px] leading-[1.7] text-fg-dim">
                {t("note")}
              </p>

              <div className="mt-10 border-t border-line pt-6">
                <div className="font-mono text-[11px] tracking-[0.14em] text-fg-mute uppercase">
                  {t("directLabel")}
                </div>
                <a
                  href={`mailto:${tCta("email")}`}
                  className="group latin mt-2 inline-flex items-center gap-2 text-[15px] text-foreground transition-colors duration-250 ease-smooth hover:text-brand"
                >
                  {tCta("email")}
                  <ArrowRight size={14} className={ARROW_NUDGE_SM} />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex h-[min(660px,74vh)] flex-col overflow-hidden rounded-3xl border border-line bg-surface shadow-[0_40px_90px_-50px_rgba(0,0,0,0.55)] max-[980px]:h-[min(600px,80vh)]">
              <header className="flex items-center gap-3 border-b border-line bg-background-2/70 px-5 py-4 backdrop-blur-xl">
                <span
                  aria-hidden="true"
                  className="latin grid size-9 shrink-0 place-items-center rounded-full bg-foreground font-mono text-[13px] font-medium text-background"
                >
                  K
                </span>

                <div className="min-w-0">
                  <div className="truncate text-[14px] font-medium text-foreground">
                    {t("agent")}
                  </div>
                  <div className="mt-0.5 flex items-center gap-1.5 font-mono text-[10px] tracking-[0.12em] text-fg-mute uppercase">
                    <span className="size-1.5 rounded-full bg-ok shadow-[0_0_10px_var(--ok)]" />
                    <span className="truncate">
                      {t("status")} · {t("replyTime")}
                    </span>
                  </div>
                </div>

                <div
                  aria-hidden="true"
                  className="ms-auto flex shrink-0 items-center gap-1.5"
                >
                  {FIELDS.map((field, index) => (
                    <span
                      key={field}
                      className={`h-1 rounded-full transition-all duration-500 ease-smooth ${
                        index < answered
                          ? "w-5 bg-brand"
                          : "w-2.5 bg-line-strong"
                      }`}
                    />
                  ))}
                </div>
              </header>

              <div
                ref={scroller}
                aria-live="polite"
                className="flex flex-1 flex-col gap-3.5 overflow-y-auto px-5 py-6 max-[720px]:px-4"
              >
                {messages.map((message) =>
                  message.from === "bot" ? (
                    <p
                      key={message.id}
                      className={`${BUBBLE} me-auto rounded-es-sm border border-line bg-background-2 text-foreground`}
                    >
                      {message.text}
                    </p>
                  ) : (
                    <p
                      key={message.id}
                      className={`${BUBBLE} ms-auto rounded-ee-sm bg-foreground text-background`}
                    >
                      {message.text}
                    </p>
                  ),
                )}

                {typing && (
                  <div
                    aria-label={t("typing")}
                    className="me-auto flex w-fit items-center gap-1.5 rounded-2xl rounded-es-sm border border-line bg-background-2 px-4 py-4"
                  >
                    {[0, 1, 2].map((dot) => (
                      <span
                        key={dot}
                        className="chat-dot size-1.5 rounded-full bg-fg-mute"
                        style={{ animationDelay: `${dot * 0.16}s` }}
                      />
                    ))}
                  </div>
                )}

                {step === "done" && !typing && (
                  <dl className="chat-in mt-2 grid list-none gap-px overflow-hidden rounded-2xl border border-line bg-line">
                    {FIELDS.map((field) => (
                      <div
                        key={field}
                        className="grid grid-cols-[110px_1fr] gap-4 bg-background-2 px-4 py-3 max-[560px]:grid-cols-1 max-[560px]:gap-1"
                      >
                        <dt className="font-mono text-[10px] tracking-[0.14em] text-fg-mute uppercase">
                          {t(`label_${field}`)}
                        </dt>
                        <dd
                          dir={
                            field === "email" || field === "phone"
                              ? "ltr"
                              : undefined
                          }
                          className={`text-[14px] leading-[1.6] wrap-break-word text-fg-dim ${
                            field === "email" || field === "phone"
                              ? "latin text-start"
                              : ""
                          }`}
                        >
                          {answers[field] || "—"}
                        </dd>
                      </div>
                    ))}
                  </dl>
                )}
              </div>

              <footer className="border-t border-line bg-background-2/60 px-4 py-3.5 backdrop-blur-xl">
                {step === "done" ? (
                  <div className="flex items-center justify-between gap-4 px-1 py-1">
                    <p className="font-mono text-[12px] text-ok">
                      {t("delivered")}
                    </p>
                    <button
                      type="button"
                      onClick={restart}
                      className="shrink-0 cursor-pointer rounded-full border border-line px-4 py-2 text-[13px] text-fg-dim transition-colors duration-250 ease-smooth hover:border-line-strong hover:text-foreground"
                    >
                      {t("restart")}
                    </button>
                  </div>
                ) : (
                  <>
                    {error && (
                      <p className="mb-2.5 px-1 text-[12px] text-brand-2">
                        {error}
                      </p>
                    )}

                    {step === "phone" && !typing && (
                      <div className="mb-2.5 flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={() => submit("", true)}
                          className="cursor-pointer rounded-full border border-line bg-background px-3.5 py-1.5 text-[13px] text-fg-dim transition-colors duration-250 ease-smooth hover:border-brand hover:text-foreground"
                        >
                          {t("skip")}
                        </button>
                      </div>
                    )}

                    {step === "message" && !typing && !draft && (
                      <div className="mb-2.5 flex flex-wrap gap-2">
                        {(t.raw("topics") as string[]).map((topic) => (
                          <button
                            key={topic}
                            type="button"
                            onClick={() => {
                              setDraft(topic);
                              input.current?.focus({ preventScroll: true });
                            }}
                            className="cursor-pointer rounded-full border border-line bg-background px-3.5 py-1.5 text-[13px] text-fg-dim transition-colors duration-250 ease-smooth hover:border-brand hover:text-foreground"
                          >
                            {topic}
                          </button>
                        ))}
                      </div>
                    )}

                    <form
                      onSubmit={handleSubmit}
                      className="flex items-end gap-2 rounded-2xl border border-line bg-background px-3 py-2 transition-colors duration-250 ease-smooth focus-within:border-brand"
                    >
                      <textarea
                        ref={input}
                        rows={1}
                        value={draft}
                        disabled={typing}
                        maxLength={MESSAGE_LIMIT}
                        placeholder={placeholder}
                        aria-label={placeholder}
                        dir={latinField ? "ltr" : undefined}
                        inputMode={
                          step === "email"
                            ? "email"
                            : step === "phone"
                              ? "tel"
                              : "text"
                        }
                        autoComplete={
                          step === "email"
                            ? "email"
                            : step === "phone"
                              ? "tel"
                              : step === "name"
                                ? "given-name"
                                : "off"
                        }
                        onChange={(event) => {
                          setDraft(event.target.value);
                          setError("");
                          grow(event.target);
                        }}
                        onKeyDown={handleKeyDown}
                        className={`max-h-32 min-w-0 flex-1 resize-none bg-transparent py-1.5 text-[15px] leading-[1.6] text-foreground outline-none placeholder:text-fg-mute disabled:opacity-50 ${
                          latinField ? "latin text-start" : ""
                        }`}
                      />

                      <button
                        type="submit"
                        disabled={typing || !draft.trim()}
                        aria-label={t("send")}
                        className="grid size-9 shrink-0 cursor-pointer place-items-center rounded-full bg-foreground text-background transition-all duration-250 ease-smooth hover:-translate-y-px disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:translate-y-0"
                      >
                        <ArrowRight size={15} className="rtl:-scale-x-100" />
                      </button>
                    </form>

                    {step === "message" && (
                      <p className="mt-2 px-1 text-end font-mono text-[10px] text-fg-mute">
                        {draft.length} / {MESSAGE_LIMIT}
                      </p>
                    )}
                  </>
                )}
              </footer>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
