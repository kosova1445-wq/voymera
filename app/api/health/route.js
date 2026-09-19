import { createClient } from '@/lib/supabase/server'

export async function GET() {
  const supabase = await createClient()

  const { error } = await supabase
    .from('destinations')
    .select('id', { head: true, count: 'exact' })
    .limit(1)

  return Response.json(
    error
      ? { ok: false, service: 'supabase', error: error.message }
      : { ok: true, service: 'supabase' },
    { status: error ? 500 : 200 }
  )
}
