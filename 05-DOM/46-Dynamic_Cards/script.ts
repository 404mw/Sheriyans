type Product = {
  image: string;
  title: string;
  price: number;
};

const products: Product[] = [
  {
    image: "https://plus.unsplash.com/premium_photo-1679513691641-9aedddc94f96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhlYWRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Wireless Headphones",
    price: 79.99
  },
  {
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796",
    title: "Mechanical Keyboard",
    price: 129.50
  },
  {
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    title: "Smartwatch",
    price: 199.00
  },
  {
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    title: "Classic Sneakers",
    price: 89.99
  },
  {
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    title: "Digital Camera",
    price: 349.99
  }
];

const main: HTMLDivElement = document.querySelector(`main`) as HTMLDivElement
let cards: string = ``

products.forEach((val)=>{
    cards += `<div class="card">
            <img src="${val.image}" alt="">
            <div id="text">
                <h2>${val.title}</h2>
                <h3>$${val.price}</h3>
            </div>
            <button id="btn">Add to Cart</button>
        </div>`
})

main.innerHTML = cards