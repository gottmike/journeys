import supabase from './supabase.js'

const { data, error } = await supabase.from('journeys').select('*')

if (error) {
  console.error(error)
} else {
  const list = document.getElementById('journey-list')

  data.forEach(journey => {
    const item = document.createElement('li')
    item.innerHTML = `
      <a href="/journeys/journey.html?id=${journey.id}">
      ${journey.title} — ${journey.description}
      </a>
    `
    list.appendChild(item)
  })
}ß