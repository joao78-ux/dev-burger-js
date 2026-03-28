const foreach = document.querySelector('#foreach')
const map = document.querySelector('#map')
const reduce = document.querySelector('#reduce')
const filter = document.querySelector('#filter')
const productsList = document.querySelector('#products-list')



function  renderProducts (productsArray){
  let myli=''
  productsArray.forEach( product =>{
       myli+=`
       <li class="card-buger">
       <img class="product-img" src="${product.src}">
       <p class="product-name">${product.name}</p>
       <p class="product-price">R$ ${product.price.toFixed(2)}</p>
       </li>   
        `   
    })
    productsList.innerHTML = myli
}
function showall (){
      renderProducts(menuOptions)
}

function discount(){

    const discount = menuOptions.map(product => {
        const price= (product.price * 10)/100
        return {
            ...product,
            price: product.price - price
        }     
    })

    renderProducts(discount)
}

function sumtotal (){
    
    const sum = menuOptions.reduce((acc, product) => {
        const price= (product.price * 10)/100
        return acc + product.price - price

    } , 0)
  productsList.innerHTML = `<li class="card-buger">
  <p class="product-name"> O Valor Total é de</p>
  <p class="product-price">R$ ${sum.toFixed(2)}</p>
  </li>`   
}
 
function filterVegan(){
    const vegan = menuOptions.filter(product => product.vegan ).map(product => {
        const price= (product.price * 10)/100
        return{
            ...product,
            price:product.price - price
        }
    })
    renderProducts(vegan)
}
    
 

reduce.addEventListener('click', sumtotal)
map.addEventListener('click', discount)
foreach.addEventListener('click', showall )
filter.addEventListener('click',filterVegan )




