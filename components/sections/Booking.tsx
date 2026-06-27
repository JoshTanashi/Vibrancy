"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { NumberedSection } from "@/components/ui/NumberedSection";
import { FormField } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/icons";
import { isNonEmpty, isValidEmail } from "@/lib/validation";

const STEPS = [
  "We review your enquiry",
  "We schedule a call",
  "We confirm scope",
  "We begin",
];

const SERVICE_OPTIONS = ["Women's Health", "Occupational Health", "Accreditation", "Not sure yet"];

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  message: string;
}

const INITIAL_STATE: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  date: "",
  message: "",
};

export function Booking() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): Partial<FormState> {
    const nextErrors: Partial<FormState> = {};
    if (!isNonEmpty(form.name)) nextErrors.name = "Name is required.";
    if (!isValidEmail(form.email)) nextErrors.email = "Enter a valid email address.";
    if (!isNonEmpty(form.service)) nextErrors.service = "Select the service you need.";
    return nextErrors;
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    setTimeout(() => setStatus("success"), 600);
  }

  return (
    <NumberedSection id="booking" index={9} label="Booking" title="What happens next, in order.">
      <div className="grid gap-12 md:grid-cols-2">
        <div className="rounded-2xl bg-accent-ink p-8 text-paper">
          <ol className="space-y-6">
            {STEPS.map((step, i) => (
              <li key={step} className="flex gap-4">
                <span className="font-mono text-label text-paper/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                role="status"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-line bg-paper-raised p-10 text-center"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-paper">
                  <CheckIcon />
                </span>
                <p className="font-serif text-h3 text-ink">Enquiry received.</p>
                <p className="max-w-sm text-sm text-ink-muted">
                  We&apos;ll review your details and follow up within one business day.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <FormField
                  label="Name"
                  name="name"
                  required
                  value={form.name}
                  onChange={(v) => updateField("name", v)}
                  error={errors.name}
                />
                <FormField
                  label="Company"
                  name="company"
                  value={form.company}
                  onChange={(v) => updateField("company", v)}
                />
                <FormField
                  label="Email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(v) => updateField("email", v)}
                  error={errors.email}
                />
                <FormField
                  label="Phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(v) => updateField("phone", v)}
                />
                <FormField
                  label="Service Required"
                  name="service"
                  required
                  value={form.service}
                  onChange={(v) => updateField("service", v)}
                  error={errors.service}
                  selectOptions={SERVICE_OPTIONS}
                />
                <FormField
                  label="Preferred Date"
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={(v) => updateField("date", v)}
                />
                <FormField
                  label="Message"
                  name="message"
                  value={form.message}
                  onChange={(v) => updateField("message", v)}
                  textarea
                />
                <Button type="submit" disabled={status === "submitting"}>
                  {status === "submitting" ? "Sending…" : "Send Enquiry"}
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </NumberedSection>
  );
}
