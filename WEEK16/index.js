const mainContainer = document.getElementById('main-container');
fetch('http://localhost:3000/welcome')
.then(res => res.json())
.then((data)=>{
    console.log(data);
    mainContainer.textContent = `${data.message}`
});

const toggleDisplay = (element, newText) => {
    if (element.textContent === newText) {
        element.textContent = '';
    } else {
        element.textContent = newText;
    }
};

document.getElementById('userName').addEventListener("click",()=>{
    fetch('http://localhost:3000/user')
    .then(res=>res.json())
    .then((data)=>{
        const nameDiv = document.getElementById('name');
        toggleDisplay(nameDiv, data.name);
    });
});

document.getElementById('userEmail').addEventListener("click",()=>{
    fetch('http://localhost:3000/user')
    .then(res=>res.json())
    .then((data)=>{
        const emailDiv = document.getElementById('email');
        toggleDisplay(emailDiv, data.email);
    });
});

document.getElementById('product').addEventListener("click",()=>{
    fetch('http://localhost:3000/product')
    .then(res=>res.json())
    .then((data)=>{
        const productDiv = document.getElementById('productName');
        toggleDisplay(productDiv, data.name);
    });
});

document.getElementById('status').addEventListener("click",()=>{
    fetch('http://localhost:3000/product')
    .then(res=>res.json())
    .then((data)=>{
        const stockDiv = document.getElementById('StockStatus');
        const inStock = data.inStock === "true";
        const statusText = inStock ? "Product in Stock" : "Product not in Stock";
        toggleDisplay(stockDiv, statusText);
    });
});
