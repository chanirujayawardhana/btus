import React, { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Mail, Phone, MessageSquare, Send, CheckCircle2, XCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

/**
 * BetweenUs – Coming Soon Landing Page
 * --------------------------------------------------------------
 * • Stack: React + Tailwind + shadcn/ui + Framer Motion
 * • Drop into a Next.js "app/page.tsx" or any React project.
 * • Tailwind required; shadcn/ui optional (can swap Card/Button for div/button).
 * • Replace BRAND + CONTACT placeholders below.
 */

const BRAND = {
  name: "BetweenUs",
  tagline: "Official Website Coming Soon",
  blurb:
    "Contact us today for a personalized consultation and discover how we can help you succeed.",
  instagram: "https://instagram.com/betweenus.official",
  email: "info@betweenuslk.com",
  phone: "+94 76 107 1584",
  whatsapp: "https://wa.me/94761071584",
  address: "Colombo, Sri Lanka",
};

export default function BetweenUsComingSoon() {
  const [status, setStatus] = useState<"idle" | "ok" | "error" | "sending">("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      setStatus("sending");
      // Demo only: replace with your backend or Formspree/Resend/etc.
      await new Promise((r) => setTimeout(r, 900));
      console.log("Form submitted", form);
      setStatus("ok");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-800 text-white">
      {/* Glow backdrop */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_30%,#000_30%,transparent_70%)]">
        <div className="absolute left-1/2 top-24 -translate-x-1/2 h-72 w-72 rounded-full blur-3xl bg-fuchsia-600/20" />
        <div className="absolute right-24 bottom-24 h-72 w-72 rounded-full blur-3xl bg-indigo-500/20" />
      </div>

      <header className="mx-auto max-w-6xl px-6 pt-8">
        <div className="flex items-center justify-between">
          <motion.h1
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold tracking-tight"
          >
            {BRAND.name}
          </motion.h1>
          <div className="flex items-center gap-3">
            <a href={BRAND.instagram} target="_blank" rel="noreferrer">
              <Button variant="secondary" className="rounded-2xl">
                <Instagram className="h-4 w-4 mr-2" /> Follow
              </Button>
            </a>
            <a href={`mailto:${BRAND.email}`}>
              <Button className="rounded-2xl">
                <Mail className="h-4 w-4 mr-2" /> Contact Now
              </Button>
            </a>
          </div>
        </div>
      </header>

      <main className="relative mx-auto grid max-w-6xl grid-cols-1 items-start gap-8 px-6 pb-20 pt-16 md:grid-cols-2">
        {/* Hero copy */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="space-y-6"
        >
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            {BRAND.tagline}
          </h2>
          <p className="max-w-prose text-neutral-300">
            {BRAND.blurb}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a href={`mailto:${BRAND.email}`}>
              <Button className="rounded-2xl">
                <Send className="h-4 w-4 mr-2" /> Get in Touch
              </Button>
            </a>
            <a href={BRAND.whatsapp} target="_blank" rel="noreferrer">
              <Button variant="secondary" className="rounded-2xl">
                <MessageSquare className="h-4 w-4 mr-2" /> WhatsApp
              </Button>
            </a>
          </div>

          {/* Quick contacts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-white/80" />
                  <a href={`mailto:${BRAND.email}`} className="hover:underline">
                    {BRAND.email}
                  </a>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-white/80" />
                  <a href={`tel:${BRAND.phone}`} className="hover:underline">
                    {BRAND.phone}
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Contact form */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <Card className="bg-white/5 backdrop-blur border-white/10">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold">Get in Touch</h3>
              <p className="text-sm text-neutral-300 mb-4">We'd love to hear from you!</p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm">Name</label>
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl bg-white/10 px-3 py-2 outline-none ring-1 ring-white/10 focus:ring-white/30"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-xl bg-white/10 px-3 py-2 outline-none ring-1 ring-white/10 focus:ring-white/30"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1 block text-sm">Contact Number</label>
                    <input
                      id="phone"
                      name="phone"
                      inputMode="tel"
                      placeholder="e.g. +94 77 123 4567"
                      className="w-full rounded-xl bg-white/10 px-3 py-2 outline-none ring-1 ring-white/10 focus:ring-white/30"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block text-sm">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us about your project..."
                    className="w-full rounded-xl bg-white/10 px-3 py-2 outline-none ring-1 ring-white/10 focus:ring-white/30"
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <Button type="submit" disabled={status === "sending"} className="rounded-2xl">
                    {status === "sending" ? (
                      <span className="inline-flex items-center"><Send className="h-4 w-4 mr-2 animate-pulse"/> Sending…</span>
                    ) : (
                      <span className="inline-flex items-center"><Send className="h-4 w-4 mr-2"/> Send Message</span>
                    )}
                  </Button>
                  {status === "ok" && (
                    <span className="inline-flex items-center text-emerald-400 text-sm">
                      <CheckCircle2 className="h-5 w-5 mr-1"/> Thank you! Your submission has been received!
                    </span>
                  )}
                  {status === "error" && (
                    <span className="inline-flex items-center text-rose-400 text-sm">
                      <XCircle className="h-5 w-5 mr-1"/> Oops! Something went wrong while submitting the form.
                    </span>
                  )}
                </div>
              </form>

              {/* Helper note */}
              <p className="mt-4 text-xs text-neutral-400">
                Tip: Connect this form to Formspree/Resend/Supabase or your own API. This demo simply logs to the
                console and shows a success message.
              </p>
            </CardContent>
          </Card>
        </motion.section>
      </main>

      <footer className="mx-auto max-w-6xl px-6 pb-10 text-sm text-neutral-400">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6">
          <span>
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </span>
          <span className="inline-flex items-center gap-3">
            <a className="hover:underline" href={BRAND.instagram} target="_blank" rel="noreferrer">
              <Instagram className="h-4 w-4 inline mr-1"/> Instagram
            </a>
            <a className="hover:underline" href={`mailto:${BRAND.email}`}>
              <Mail className="h-4 w-4 inline mr-1"/> {BRAND.email}
            </a>
            <a className="hover:underline" href={BRAND.whatsapp} target="_blank" rel="noreferrer">
              <MessageSquare className="h-4 w-4 inline mr-1"/> WhatsApp
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
