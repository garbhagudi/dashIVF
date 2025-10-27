import { NextResponse } from 'next/server'

let accessToken: string | null = null

const getAccessToken = async (): Promise<string | null> => {
  if (accessToken) return accessToken

  try {
    const tokenParams = new URLSearchParams({
      refresh_token: process.env.ZOHO_REFRESH_TOKEN ?? '',
      client_id: process.env.ZOHO_CLIENT_ID ?? '',
      client_secret: process.env.ZOHO_CLIENT_SECRET ?? '',
      grant_type: 'refresh_token',
    })
    
    const tokenResponse = await fetch(
      `${process.env.ZOHO_0AUTH_URL}?${tokenParams.toString()}`,
      { method: 'POST' }
    )    
    const tokenData = await tokenResponse.json()
    
    if (!tokenResponse.ok) {
      throw new Error(`Token Error: ${tokenData.error || 'Unknown error'}`)
    }

    accessToken = tokenData.access_token
    return accessToken
  } catch (error: any) {
    return null
  }
}

export async function POST(req: Request) {
  try {
    const token = await getAccessToken()
    if (!token) {
      return NextResponse.json(
        { error: 'Failed to retrieve access token' },
        { status: 500 }
      )
    }

    const body = await req.json()

    if (!body?.data) {
      return NextResponse.json(
        { error: 'Invalid request payload: missing "data"' },
        { status: 400 }
      )
    }

    const requestData = JSON.stringify({ data: [body.data] })

    const response = await fetch(process.env.ZOHO_API_URL ?? '', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Zoho-oauthtoken ${token}`,
      },
      body: requestData,
      cache: 'no-store',
    })

    const responseData = await response.json()

    if (!response.ok) {
      return NextResponse.json(
        { error: `Zoho API Error: ${response.statusText}` },
        { status: response.status }
      )
    }

    return NextResponse.json(responseData, { status: 200 })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
