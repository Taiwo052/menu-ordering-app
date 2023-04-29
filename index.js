import { menuArray } from './data.js'


const itemArray = []
// const totalPrice = 0

document.addEventListener( 'click', function(e){
    if(e.target.dataset.addBtn){
        addItem(e.target.dataset.addBtn)
        render()
    }else if(e.target.dataset.removeBtn){
        removeItem(e.target.dataset.removeBtn)
        render()
    }
})  

function addItem(item){
    let orderObj = {}

    orderObj = menuArray.filter(function(menu){
    return menu.id == item || menu.name == item
})[0]
        if(itemArray.includes(orderObj) ){
        orderObj.quantity++   
    }else{
        itemArray.push(orderObj)
        orderObj.quantity++
    }
    orderObj.quantity += !orderObj.quantity
    theTotalPrice()
    getOrder(itemArray)

    render()
    //  console.log(orderObj.price)
}

function removeItem(item) {
    console.log(itemArray.indexOf(item))
    
    let i = itemArray.indexOf(item);
    itemArray.splice(i);
    console.log(itemArray)
     itemTotalPrice()
     getOrder()
     render()
};


function itemTotalPrice(){
    let itemPrice = theTotalPrice()--
    console.log(itemPrice)
}

function getTotalPrice(){
     let totalPrice = 0
    // I loop through the itemArray to get the total price
    itemArray.forEach(function(menu){
            totalPrice += menu.price*menu.quantity
    })
    return totalPrice
}

function theTotalPrice(){
    document.getElementById('total-price').innerHTML = `$${getTotalPrice()}`
}

function getOrder(){
    renderOrder()
    document.getElementById(`order-container`).style.display = 'flex'

}

function getItem(){
    let yourOrder = ''
        
    itemArray.forEach(function(menu){
    yourOrder += `<div class="order-items" id="order-items">
                <div class="items">
                    <div class="order-item-name">
                        <h3>${menu.name}</h3>
                        <button id="remove-btn-${menu.id}" class="remove" data-remove-btn="${menu.id}">remove</button>
                    </div>
                    <div class="item-price">
                        <h4 class="menu-count">x ${menu.quantity}</h4>
                        <h4 class="menu-price">$${menu.price*menu.quantity}</h4>
                    </div>
                </div>
                </div>
                `

    })
        return yourOrder    
}

// function getTotalPrice(item){
//     itemArray.filter(function(menu){
//         totalPrice -= itemArray.price*itemArray.quantity;
//     })
// }



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
                <button id="icon-btn" class="icon-btn" data-add-btn="${menu.id}">
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
