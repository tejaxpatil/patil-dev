// import { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useForm } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit, reset] = useForm('xjybwrbl');

  // function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  //   event.preventDefault();

  //   setSubmitted(true);
  // }

  if (state.succeeded) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex min-h-[420px] flex-col items-center justify-center rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-8 text-center"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--accent)]/40">
          <CheckCircle2
            size={24}
            className="text-[var(--accent)]"
          />
        </div>

        <h3 className="mt-6 font-heading text-2xl font-bold text-[var(--text-primary)]">
          Thanks for reaching out.
        </h3>

        <p className="mt-3 max-w-md text-sm leading-7 text-[var(--text-secondary)]">
          Your message has been sent successfully. I’ll get back to you as soon as
          possible.
        </p>

        <button
          type="button"
          onClick={reset}
          className="mt-7 text-sm font-semibold text-[var(--accent)] hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--text-secondary)]"
          >
            Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="mt-3 w-full border-b border-[var(--border)] bg-transparent px-0 py-3 text-sm text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-secondary)] focus:border-[var(--accent)]"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--text-secondary)]"
          >
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="mt-3 w-full border-b border-[var(--border)] bg-transparent px-0 py-3 text-sm text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-secondary)] focus:border-[var(--accent)]"
          />
        </div>
      </div>

      {/* Subject */}
      <div className="mt-7">
        <label
          htmlFor="subject"
          className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--text-secondary)]"
        >
          Subject
        </label>

        <input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder="What would you like to talk about?"
          className="mt-3 w-full border-b border-[var(--border)] bg-transparent px-0 py-3 text-sm text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-secondary)] focus:border-[var(--accent)]"
        />
      </div>

      {/* Message */}
      <div className="mt-7">
        <label
          htmlFor="message"
          className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--text-secondary)]"
        >
          Message
        </label>

        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell me a little about the opportunity..."
          className="mt-3 w-full resize-none border-b border-[var(--border)] bg-transparent px-0 py-3 text-sm leading-7 text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-secondary)] focus:border-[var(--accent)]"
        />
      </div>

    {state.errors && (
      <p
      role="alert"
      className="mt-5 text-sm text-red-400"
      >
      {state.errors.getFormErrors().map((error) => error.message).join(', ')}
      </p>
    )}

      {/* Submit */}
      <button
        type="submit"
        disabled={state.submitting}
        className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_40px_rgba(59,130,246,0.25)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state.submitting ? 'Sending...' : 'Send Message'}

        <ArrowUpRight
          size={17}
          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </button>
    </form>
  );
}

export default ContactForm;