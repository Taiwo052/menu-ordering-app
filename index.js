import { menuArray } from './data.js'

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
    // console.log(orderObj)
    itemArray.push(orderObj)
    // console.log(itemArray)
    getOrder(itemArray)
    render()


}

function getOrder(){
    renderOrder()
    document.getElementById(`order-container`).style.display = 'flex'
}

function getItem(){
    let yourOrder = ''
    menuArray.forEach(function(menu){
            console.log(menu.price)
    yourOrder += `  
                <div class="order-item-name">
                    <h3>${menu.name}</h3>
                    <button id="remove-btn-${menu.id}" class="remove">remove</button>
                </div>
                <h4 class="menu-count">${menu.quantity}x</h4>
                <h4 class="menu-price">${menu.price*menu.quantity}$</h4>`

    })
        return yourOrder    
}


function renderOrder(){
    document.getElementById('order-item').innerHTML = getItem()

 }
 renderOrder()

     
            
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
