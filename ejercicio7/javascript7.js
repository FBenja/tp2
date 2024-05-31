async function ExtraerDatos(){
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users")
    const personas =await respuesta.json()
    const caja = $('caja')
    personas.forEach(persona => {
        const item = document.createElement('div')
        item.id = persona.id
        item.classList.add('persona')
        const button = document.createElement('button')
        const button2 = document.createElement('button')
        button.innerText = "Ver tareas"
        button2.innerText = "Ocultar tareas"
        button2.disabled = true
        button.addEventListener("click", async () => {
            const respuesta = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${persona.id}`);
            const tareas =await respuesta.json()
            tareas.forEach(tareaElemento =>{
                const tarea = document.createElement('p')
                tarea.innerText = `Tarea ${tareaElemento.id} : ` + tareaElemento.title
                if(tareaElemento.completed){
                    tarea.style.color = "green"
                }
                else{
                    tarea.style.color = 'red'
                }
                item.appendChild(tarea)
                button.disabled = true
                button2.disabled = false
                button2.addEventListener("click", async () => {
                    tarea.innerText = ""
                button2.disabled = true
                button.disabled = false
                })
            })
        })
        item.innerHTML =    
        `<p class="id">Id :${persona.id}</p>
        <p class="nombre">Nombre: ${persona.name}</p>
        <p class="usuario">Usuario: ${persona.username}</p>
        <p class="email">Email: ${persona.email}</p>
        <p class="sitio">Sitio: ${persona.website}</p>
        `
        item.appendChild(button)
        item.appendChild(button2)
        caja.appendChild(item)
    });
    }
    ExtraerDatos()
    
    
    function $(elemento){
        return document.getElementById(elemento)
    }