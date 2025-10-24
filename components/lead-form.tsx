"use client"

import type React from "react"

import { useId, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function LeadForm() {
  const id = useId()
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 600))
    setLoading(false)
    alert("Thanks! We’ll call you back shortly.")
  }

  return (
    <Card id="consult" aria-labelledby={`${id}-title`} className="h-full rounded-none border-0 shadow-none bg-[#005e7e] min-h-96 md:min-h-[500px] flex justify-center text-white">
      <CardHeader>
        <CardTitle id={`${id}-title`} className="text-xl font-bold text-center">
          Book Free Fertility Consultation Today
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="grid gap-3">
          <label className="sr-only" htmlFor={`${id}-name`}>
            Full Name
          </label>
          <Input id={`${id}-name`} name="name" placeholder="Full Name" autoComplete="name" required />
          <label className="sr-only" htmlFor={`${id}-phone`}>
            Phone
          </label>
          <Input id={`${id}-phone`} name="phone" placeholder="Phone" inputMode="tel" autoComplete="tel" required />
          <label className="sr-only" htmlFor={`${id}-email`}>
            Email
          </label>
          <Input id={`${id}-email`} name="email" placeholder="Email" type="email" autoComplete="email" />
          <Button type="submit" className="mt-2 rounded-full" disabled={loading}>
            {loading ? "Submitting…" : "Get a Call Back"}
          </Button>
          <p className="text-xs ">We respect your privacy. No spam.</p>
        </form>
      </CardContent>
    </Card>
  )
}
