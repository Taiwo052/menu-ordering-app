import { menuArray } from './data.js'
// import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
//   console.log(uuidv4());
let hasOrdered = false

document.addEventListener( 'click', function(e){
    if(e.target.dataset.btn){
        addItem(e.target.dataset.btn)
    }
})  

function addItem(item){
    let orderObj = {}
    let itemArray = []

     orderObj = menuArray.filter(function(menu){
    return menu.id == item || menu.name == item
})[0]
    itemArray.push(orderObj)
    getOrder(item)
}

function getOrder(){
    document.getElementById(`order-container`).classList.toggle('hidden')
    getItem()
}

function getItem(){
    let yourOrder = ''
    for(let menu of menuArray){
    yourOrder += `  
                <div class="order-item-name">
                    <h3>${menu.name}</h3>
                    <button id="remove-btn-${menu.id}" class="remove">remove</button>
                </div>
                <h4 class="menu-count">${menu.quantity}x</h4>
                <h4 class="menu-price">${menu.price*menu.quantity}$</h4>`

    }
    document.getElementById('order-item').innerHTML = yourOrder
    
}
     
            
function renderMenu(){
    let container = ''
    
    menuArray.forEach(function(menu){
        
        container += `
        <div class="item">
            <div class="item-add">
                <div class="item-image">
                <img src="${menu.emoji}" alt="${menu.name}">
                </div>
                <div class="item-details">
                    <h3>${menu.name}</h3>
                    <p><span class="ingredients">${menu.ingredients}<span></p>
                    <h4>$${menu.price}</h4>
                </div>
            </div>
            <div class="item-icon">
                <button id="icon-btn" class="icon-btn" data-btn="${menu.id}">
                    <i class="fa-thin fa-plus"></i>
                </button>
            </div>
        </div>
        `
    })
    return container
}  

function render(){
    document.getElementById('menu-container').innerHTML = renderMenu()
}
render()