import supabase from "./supabase";

const form = document.getElementById('create-form');

form.addEventListener('submit', async (event) => {
    event.preventDefault()

    const title = document.getElementById('title').value
    const description = document.getElementById('description').value
    const { data, error } = await supabase
        .from('journeys')
        .insert({ title, description })
        .select()
        .single()

    if (error) {
        console.error(error)
    } else {
        window.location.href = `/journeys/journey.html?id=${data.id}`
    }
})
