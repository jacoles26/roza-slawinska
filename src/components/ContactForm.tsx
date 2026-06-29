import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { useContent } from "../i18n/useContent";
import { easeEditorial } from "../lib/motion";

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");

export default function ContactForm() {
  const { content } = useContent();
  const t = content.contact.form;
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload: Record<string, string> = { "form-name": "contact" };
    data.forEach((v, k) => (payload[k] = String(v)));

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(payload),
      });
      setStatus("done");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeEditorial }}
        className="flex flex-col items-start gap-4 rounded-squircle border border-ink/10 bg-cream p-10"
      >
        <span className="font-display text-3xl italic text-ink">{t.successTitle}</span>
        <p className="max-w-sm text-ink-soft">{t.successBody}</p>
      </motion.div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="flex flex-col gap-5"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don't fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={t.name} name="name" type="text" required />
        <Field label={t.email} name="email" type="email" required />
      </div>
      <Field label={t.subject} name="subject" type="text" placeholder={t.subjectPlaceholder} />
      <label className="flex flex-col gap-2">
        <span className="eyebrow">{t.message}</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder={t.messagePlaceholder}
          className="resize-none rounded-2xl border border-ink/15 bg-cream px-5 py-4 text-ink outline-none transition-all duration-300 placeholder:text-taupe-light focus:border-ink/40 focus:shadow-soft"
        />
      </label>

      <div className="flex items-center gap-4">
        <button type="submit" disabled={status === "sending"} className="btn-island disabled:opacity-60">
          {status === "sending" ? t.sending : t.send}
          <span className="btn-island-icon">
            <svg width="14" height="14" viewBox="0 0 14 14" className="stroke-current">
              <path d="M3 11L11 3M11 3H5M11 3V9" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>
        {status === "error" && <span className="text-sm text-clay">{t.error}</span>}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="eyebrow">{label}</span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="rounded-2xl border border-ink/15 bg-cream px-5 py-4 text-ink outline-none transition-all duration-300 placeholder:text-taupe-light focus:border-ink/40 focus:shadow-soft"
      />
    </label>
  );
}
