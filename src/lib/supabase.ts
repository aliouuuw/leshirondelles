import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)

// Types for your content
export interface HeroContent {
  badge?: string
  title: string
  subtitle?: string
  description: string
  primaryButton: { text: string; url: string }
  secondaryButton: { text: string; url: string }
}

export interface StatItem {
  number: string
  suffix?: string
  label: string
}

export interface MissionContent {
  title: string
  description: string
  content: string
}

export interface SchoolLevel {
  id: number
  name: string
  age_range: string
  description: string
  curriculum_overview?: string
  image_url?: string
  display_order: number
  active: boolean
}

export interface ContactInfo {
  email: string
  phone: string
  whatsapp?: string
  address: string
}

export interface SocialMedia {
  platform: string
  url: string
  handle?: string
}

// API Functions
export async function getHomepageHero(): Promise<HeroContent | null> {
  try {
    const { data, error } = await supabase
      .from('homepage_sections')
      .select('content')
      .eq('section_name', 'hero')
      .single()

    if (error) throw error
    return data?.content as HeroContent
  } catch (error) {
    console.error('Error fetching hero content:', error)
    return null
  }
}

export async function updateHomepageHero(content: HeroContent): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('homepage_sections')
      .upsert({
        section_name: 'hero',
        content: content,
        updated_at: new Date().toISOString()
      })

    if (error) throw error
    return true
  } catch (error) {
    console.error('Error updating hero content:', error)
    return false
  }
}

export async function getHomepageStats(): Promise<StatItem[]> {
  try {
    const { data, error } = await supabase
      .from('homepage_sections')
      .select('content')
      .eq('section_name', 'stats')
      .single()

    if (error) throw error
    return data?.content as StatItem[] || []
  } catch (error) {
    console.error('Error fetching stats:', error)
    return []
  }
}

export async function updateHomepageStats(stats: StatItem[]): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('homepage_sections')
      .upsert({
        section_name: 'stats',
        content: stats,
        updated_at: new Date().toISOString()
      })

    if (error) throw error
    return true
  } catch (error) {
    console.error('Error updating stats:', error)
    return false
  }
}

export async function getHomepageMission(): Promise<MissionContent | null> {
  try {
    const { data, error } = await supabase
      .from('homepage_sections')
      .select('content')
      .eq('section_name', 'mission')
      .single()

    if (error) throw error
    return data?.content as MissionContent
  } catch (error) {
    console.error('Error fetching mission content:', error)
    return null
  }
}

export async function updateHomepageMission(content: MissionContent): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('homepage_sections')
      .upsert({
        section_name: 'mission',
        content: content,
        updated_at: new Date().toISOString()
      })

    if (error) throw error
    return true
  } catch (error) {
    console.error('Error updating mission content:', error)
    return false
  }
}

export async function getSchoolLevels(): Promise<SchoolLevel[]> {
  try {
    const { data, error } = await supabase
      .from('school_levels')
      .select('*')
      .eq('active', true)
      .order('display_order')

    if (error) throw error
    return data || []
  } catch (error) {
    console.error('Error fetching school levels:', error)
    return []
  }
}

export async function getContactInfo(): Promise<ContactInfo | null> {
  try {
    const { data, error } = await supabase
      .from('site_settings')
      .select('setting_value')
      .eq('setting_key', 'contact')
      .single()

    if (error) throw error
    return data?.setting_value as ContactInfo
  } catch (error) {
    console.error('Error fetching contact info:', error)
    return null
  }
}

export async function getSocialMedia(): Promise<SocialMedia[]> {
  try {
    const { data, error } = await supabase
      .from('site_settings')
      .select('setting_value')
      .eq('setting_key', 'social_media')
      .single()

    if (error) throw error
    return data?.setting_value as SocialMedia[] || []
  } catch (error) {
    console.error('Error fetching social media:', error)
    return []
  }
}
