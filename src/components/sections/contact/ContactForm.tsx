import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { contactSchema, type ContactFormValues } from "@/utils/contactSchema";
import { submitContactForm } from "@/services/contact";
import { cn } from "@/utils/cn";

const fields: {
  name: keyof ContactFormValues;
  label: string;
  placeholder: string;
  type: "text" | "email" | "textarea";
}[] = [
  { name: "name", label: "Name", placeholder: "Jane Doe", type: "text" },
  {
    name: "email",
    label: "Email",
    placeholder: "jane@company.com",
    type: "email",
  },
  {
    name: "subject",
    label: "Subject",
    placeholder: "Let's work together",
    type: "text",
  },
];

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitting(true);
    try {
      const result = await submitContactForm(values);
      if (result.status === "sent") {
        toast.success("Message sent — I'll get back to you soon.");
        reset();
      } else {
        toast.info("Opening your email client to send this message.");
        reset();
      }
    } catch (err) {
      console.error(err);
      toast.error(
        "Something went wrong sending that. Try emailing me directly instead.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {fields.slice(0, 2).map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name} className="text-sm font-medium">
              {field.label}
            </label>
            <input
              id={field.name}
              type={field.type}
              placeholder={field.placeholder}
              {...register(field.name)}
              className={cn(
                "mt-2 h-11 w-full rounded-xl border bg-[rgb(var(--bg-elevated))] px-4 text-sm outline-none transition-colors focus:border-accent-500",
                errors[field.name]
                  ? "border-red-500"
                  : "border-[rgb(var(--border))]",
              )}
            />
            {errors[field.name] && (
              <p className="mt-1.5 text-xs text-red-500">
                {errors[field.name]?.message}
              </p>
            )}
          </div>
        ))}
      </div>

      <div>
        <label htmlFor="subject" className="text-sm font-medium">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          placeholder="Let's work together"
          {...register("subject")}
          className={cn(
            "mt-2 h-11 w-full rounded-xl border bg-[rgb(var(--bg-elevated))] px-4 text-sm outline-none transition-colors focus:border-accent-500",
            errors.subject ? "border-red-500" : "border-[rgb(var(--border))]",
          )}
        />
        {errors.subject && (
          <p className="mt-1.5 text-xs text-red-500">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell me a bit about your project or idea..."
          {...register("message")}
          className={cn(
            "mt-2 w-full resize-none rounded-xl border bg-[rgb(var(--bg-elevated))] px-4 py-3 text-sm outline-none transition-colors focus:border-accent-500",
            errors.message ? "border-red-500" : "border-[rgb(var(--border))]",
          )}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-500">
            {errors.message.message}
          </p>
        )}
      </div>

      <motion.button
        type="submit"
        disabled={submitting}
        whileTap={{ scale: 0.97 }}
        className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-accent-500 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(99,102,241,0.25)] transition-all hover:shadow-[0_0_28px_-4px_rgba(99,102,241,0.65)] disabled:opacity-70"
      >
        {submitting ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send size={15} />
          </>
        )}
      </motion.button>
    </form>
  );
}
