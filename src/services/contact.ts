import emailjs from "@emailjs/browser";
import { profile } from "@/data/profile";
import type { ContactFormValues } from "@/utils/contactSchema";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as
  | string
  | undefined;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as
  | string
  | undefined;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as
  | string
  | undefined;

const isConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

export type ContactSubmitResult =
  | { status: "sent" }
  | { status: "mailto-fallback" };

export async function submitContactForm(
  values: ContactFormValues,
): Promise<ContactSubmitResult> {
  if (!isConfigured) {
    const body = encodeURIComponent(
      `${values.message}\n\n— ${values.name} (${values.email})`,
    );
    const subject = encodeURIComponent(values.subject);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    return { status: "mailto-fallback" };
  }

  await emailjs.send(
    SERVICE_ID!,
    TEMPLATE_ID!,
    {
      from_name: values.name,
      from_email: values.email,
      subject: values.subject,
      message: values.message,
    },
    { publicKey: PUBLIC_KEY! },
  );

  return { status: "sent" };
}
