"use client";
import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("All fields are required.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error("Server error");
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center">
        <p className="text-lg font-medium text-emerald-400">Message sent!</p>
        <p className="mt-1 text-sm text-zinc-400">
          Thanks for reaching out. I&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm text-zinc-400 underline hover:text-foreground"
        >
          Send another
        </button>
      </div>
    );
  }

  const inputClasses =
    "w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder-zinc-600 outline-none transition-colors focus:border-violet-500 focus:ring-1 focus:ring-violet-500";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-zinc-400">
            Name
          </label>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClasses}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-zinc-400">
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClasses}
          />
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-zinc-400">
          Message
        </label>
        <textarea
          rows={5}
          placeholder="What's on your mind?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputClasses} resize-none`}
        />
      </div>

      {error && <p className="text-sm text-red-400">{error}</p>}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-lg bg-violet-600 py-3 text-sm font-medium text-white transition-colors hover:bg-violet-500 disabled:opacity-60 sm:w-auto sm:px-8"
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
