const inp = document.getElementById('todo')
const btn = document.getElementById('sub')
const message = document.getElementById('message')

const getData = async () =>{
    const response = await fetch('http://localhost:3005/listall')
    const data = await response.json()
    console.log(data);
}

getData()

btn.addEventListener('click', async ()=>{
    event.preventDefault()
    // console.log(inp.value);
    const response = await fetch('http://localhost:3005/add', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({reminder: inp.value})
    })

    const data = await response.json()
    message.textContent = data.message
})