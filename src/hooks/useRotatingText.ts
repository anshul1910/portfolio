import { useEffect, useState } from "react";

export function useRotatingText(
  phrases: string[],
  typingSpeed = 55,
  holdMs = 1400,
  deleteSpeed = 28,
) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting">(
    "typing",
  );

  useEffect(() => {
    const current = phrases[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (text.length < current.length) {
        timeout = setTimeout(
          () => setText(current.slice(0, text.length + 1)),
          typingSpeed,
        );
      } else {
        timeout = setTimeout(() => setPhase("holding"), holdMs);
      }
    } else if (phase === "holding") {
      timeout = setTimeout(() => setPhase("deleting"), holdMs);
    } else {
      if (text.length > 0) {
        timeout = setTimeout(
          () => setText(current.slice(0, text.length - 1)),
          deleteSpeed,
        );
      } else {
        setPhase("typing");
        setPhraseIndex((i) => (i + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, phraseIndex, phrases, typingSpeed, holdMs, deleteSpeed]);

  return text;
}
