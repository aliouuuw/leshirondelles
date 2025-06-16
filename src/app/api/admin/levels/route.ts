import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('school_levels')
      .select('*')
      .order('display_order')

    if (error) throw error
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch levels' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const levels = await request.json()
    
    // Update each level
    for (const level of levels) {
      const { error } = await supabase
        .from('school_levels')
        .upsert(level)
      
      if (error) throw error
    }
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update levels' }, { status: 500 })
  }
}
