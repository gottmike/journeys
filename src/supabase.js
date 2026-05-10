import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://nertgvyciocfxaxvtwgp.supabase.co',
  'sb_publishable_omYx2K_mIDsjew7oV1HBNA_5PbwV9qa'
)

export default supabase