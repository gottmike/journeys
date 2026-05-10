import supabase from './supabase.js'

const params = new URLSearchParams(window.location.search)
const id = params.get('id')

const { data, error } = await supabase
    .from('journeys')
    .select('*, journey_items(*, items(*))')
    .eq('id', id)
    .single()

if (error) {
    console.error(error)
} else {
    const detail = document.getElementById('journey-detail')

    detail.innerHTML = `
    <h1>${data.title}</h1>
    <p>${data.description}</p>
    <h2>Items</h2>
    <ul>
      ${data.journey_items.map(ji => `
        <li>
          <h3>${ji.items.title}</h3>
          <p>${ji.items.creator}</p>
        </li>
      `).join('')}
    </ul>
  `
}



console.log(data);