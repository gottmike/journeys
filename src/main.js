import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://nertgvyciocfxaxvtwgp.supabase.co',
  'sb_publishable_omYx2K_mIDsjew7oV1HBNA_5PbwV9qa'
)

const { data, error } = await supabase.from('journeys').select('*')

if (error) {
  console.error(error)
} else {
  const list = document.getElementById('journey-list')

  data.forEach(journey => {
    const item = document.createElement('li')
    item.innerHTML = `
      <h2>${journey.title}</h2>
      <p>${journey.description}</p>
    `
    list.appendChild(item)
  })
}