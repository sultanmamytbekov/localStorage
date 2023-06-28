// CRUD

// Create - POST
// Read - GET
// Update - PUT , PATCH
// Delete - DELETE

// HTTP
//
// const btn = document.querySelector('.add-btn')
// const input = document.querySelector('.text-input')
// const ul = document.querySelector('ul')
// const btn1 = document.querySelector('.remove-btn')

// input.addEventListener('keydown',(e) => {
//     if (e.key === 'Enter' && input.value.length !== 0){
//         ul.innerHTML += `<li class="list-group-item">${input.value}</li>`
//     }
// })
//
// btn.addEventListener('click', () => {
//     if (input.value.length !== 0){
//         ul.innerHTML += `<li class="list-group-item">${input.value}</li>`
//
//     }
//     input.value = ''
// })
//
// btn1.addEventListener('click' , () => {
//     ul.innerHTML = ''
//     localStorage.removeItem('test')
// })

 // localStorage.setItem('test', JSON.stringify([{title: 'Hello, world',id:54}]))

const AddBtn = document.querySelector('.add-btn')
const input = document.querySelector('.text-input')
const ul = document.querySelector('ul')
const removeBtn = document.querySelector('.remove-btn')


function name(){
    let task = JSON.parse(localStorage.getItem('test')) || []
    let allList = ''
        task.map(el => {
            allList +=  `<li class="list-group-item">${el.title}</li>`
        })

    ul.innerHTML = allList

}
AddBtn.addEventListener('click' , () => {
   if (input.value.length !== 0){
       let task = JSON.parse(localStorage.getItem('test')) || []
       let newList = {
           title: input.value
       }
       task = [...task,newList]
       localStorage.setItem('test',JSON.stringify(task))
       name()
   }
})
name()


removeBtn.addEventListener('click' , () => {
    ul.innerHTML = ''
    localStorage.removeItem('test')
})




input.addEventListener('keydown',(a) => {
    if (a.key === 'Enter' && input.value.length !== 0){
        let task = JSON.parse(localStorage.getItem('test')) || []
        let newList = {
            title: input.value
        }
        task = [...task,newList]
        localStorage.setItem('test',JSON.stringify(task))
        name()
    }
})