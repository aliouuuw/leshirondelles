import { NextRequest, NextResponse } from 'next/server'
import { getHomepageHero, updateHomepageHero } from '@/lib/supabase'

export async function GET() {
  const content = await getHomepageHero()
  return NextResponse.json(content)
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const success = await updateHomepageHero(data)
    
    if (success) {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json({ error: 'Failed to update content' }, { status: 500 })
    }
  } catch (error) {
    return NextResponse.json({ error: 'Invalid data' }, { status: 400 })
  }
}
