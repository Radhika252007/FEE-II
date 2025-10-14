const addBtn = document.getElementById('add-btn');
const item = document.getElementById('task');
fetch()
    .then((res) => res.json())
    .then((tasks) => {
      const list = document.querySelector('todo-list');
      list.innerHTML = ''
      tasks.forEach((task) => {
        const li = document.createElement('li')
        li.innerHTML=`${task.des} <button>Update</button> <button>Delete</button>`
        list.appendChild(li)
      })
    })
    .catch(() => alert('Failed to get tasks'))
fetch(,{
    method: 'POST',
    
})


