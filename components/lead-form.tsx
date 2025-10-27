'use client'

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

type LeadFormData = {
  Last_Name: string
  Phone: string
  Email: string
  Lead_Source: string
  Lead_Sub_Source: string
  Campaign: { id: string }
  UTM_Campaign: string
  Page_Visited: string
}

export function LeadForm() {
  const router = useRouter() 
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const utmCampaign = searchParams.get('utm_campaign') || ''
  const pageVisit =
    typeof window !== 'undefined'
      ? `${window.location.origin}${pathname}`
      : pathname

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<LeadFormData>({
    defaultValues: {
      Last_Name: '',
      Phone: '',
      Email: '',
      Lead_Source: 'Online',
      Lead_Sub_Source: 'GarbhaGudi-IVF',
      Campaign: { id: '3505252000019573428' },
      UTM_Campaign: utmCampaign,
      Page_Visited: pageVisit,
    },
  })

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setValue('UTM_Campaign', utmCampaign)
    setValue('Page_Visited', pageVisit)
  }, [utmCampaign, pageVisit, setValue])

  const onSubmit = async (data: LeadFormData) => {
    setLoading(true)
    try {
      const response = await fetch('/api/createLeads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data }),
      })

      const res = await response.json()
      if (response.ok && res?.data?.[0]?.code === 'SUCCESS') {
        router.push('/thank-you.html')
      } else {
        console.error('Error submitting form:', res)
      }
    } catch (error) {
      console.error('Network Error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card
      id="consult"
      className="h-full rounded-none border-0 shadow-none bg-[#005e7e] min-h-96 md:min-h-[500px] flex justify-center text-white"
    >
      <CardHeader>
        <CardTitle className="text-xl font-bold text-center">
          Book Free Fertility Consultation Today
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-3 max-w-md mx-auto w-full"
          aria-label="Lead capture form for free consultation"
        >
          <div>
            <Input
              id="Last_Name"
              placeholder="Full Name"
              autoComplete="name"
              {...register('Last_Name', { required: 'Full Name is required' })}
            />
            {errors.Last_Name && (
              <p className="text-sm text-red-400 mt-1">
                {errors.Last_Name.message}
              </p>
            )}
          </div>
          <div>
            <Input
              id="Phone"
              placeholder="Phone"
              inputMode="tel"
              autoComplete="tel"
              {...register('Phone', {
                required: 'Phone number is required',
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: 'Enter a valid 10-digit number',
                },
              })}
            />
            {errors.Phone && (
              <p className="text-sm text-red-400 mt-1">
                {errors.Phone.message}
              </p>
            )}
          </div>
          <div>
            <Input
              id="Email"
              placeholder="Email"
              type="email"
              autoComplete="email"
              {...register('Email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Invalid email format',
                },
              })}
            />
            {errors.Email && (
              <p className="text-sm text-red-400 mt-1">
                {errors.Email.message}
              </p>
            )}
          </div>
          <Button
            type="submit"
            className="mt-2 rounded-full bg-[#ea4b6a] hover:bg-[#ee6f88]"
            disabled={loading}
          >
            {loading ? (
              <>
                Submitting…
                <svg
                  className="ml-2 animate-spin"
                  width="20"
                  height="20"
                  viewBox="0 0 38 38"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="white"
                >
                  <g fill="none" fillRule="evenodd">
                    <g transform="translate(1 1)" strokeWidth="2">
                      <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
                      <path d="M36 18c0-9.94-8.06-18-18-18">
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          from="0 18 18"
                          to="360 18 18"
                          dur="1s"
                          repeatCount="indefinite"
                        />
                      </path>
                    </g>
                  </g>
                </svg>
              </>
            ) : (
              'Get a Call Back'
            )}
          </Button>

          <p className="text-xs text-center opacity-80 mt-2">
            We respect your privacy. No spam.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
