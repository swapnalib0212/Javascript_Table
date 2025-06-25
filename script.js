const itemsPerPage = 5;
let currentPage = 1;


const products = [
    {
        name: "Mini Console",
        price: "$99",
        status: "Sold Out",
        image: "./assets/images/Everyday-Bundle-Mocks-final_750x500_crop_center.jpg.webp"
    },

     {
        name: "Audio Console",
        price: "$67",
        status: "Sold Out",
        image: "./assets/images/22222.webp"
    },

     {
        name: "Photo Console",
        price: "$56",
        status: "Sold Out",
        image: "./assets/images/55.webp"
    },
     {
        name: "Video Console",
        price: "$78",
        status: "Sold Out",
        image:"./assets/images/77.webp"
    },
     {
        name: "Monogram Keyboard + Multipad",
        price: "$89",
        status: "Sold Out",
        image: "./assets/images/Monogram_Keyboardv2_750x748_crop_center.png.webp"
    },

     {
        name: "Monogram Keyboard",
        price: "$67",
        status: "Available",
        image: "./assets/images/d1564dbc344144d594c1e602d3ab46d7.thumbnail.0000000000_750x422_crop_center.jpg.webp"
    },

     {
        name: "Monogram Multipad",
        price: "$89",
        status: "Sold Out",
        image: "./assets/images/MonogramMultipad_750x545_crop_center.png.webp"
    },

     {
        name: "Monogram Core",
        price: "$89",
        status: "Sold Out",
        image: "./assets/images/Packaging_CoreBracket1_Monogram_May20204545_ccb8b10a-0772-448b-9857-a14fa83bd5b7_750x500_crop_center.jpg.webp"
    },

     {
        name: "Orbiter Module",
        price: "$78",
        status: "Available",
        image: "./assets/images/Consoles_OrbiterHero_Monogram_May2020_4568_3d64e8b3-71ce-441a-9fcd-2b054c423310_1080x720_crop_center.jpg.webp"
    },

     {
        name: "Monogram Carrying Case",
        price: "$80",
        status: "Sold Out",
        image: "./assets/images/20221018_MonogramCC_Case_06_1080x720_crop_center.jpg.webp"
    }
]


function displayProducts (products, page) {
const tableBody = document.querySelector("#productTable tbody")
tableBody.innerHTML = "";

const startIndex = (page - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const pageItems = products.slice(startIndex, endIndex);

pageItems.forEach(product => {
    const row = document.createElement("tr");

    const imgCell = document.createElement("td");
    const img = document.createElement("img");
    img.src = product.image;
    img.width = 100;
    imgCell.appendChild(img);

    const nameCell = document.createElement("td");
    nameCell.textContent = product.name;

    const priceCell = document.createElement("td");
    priceCell.textContent = product.price;

    const statusCell = document.createElement("td");
    statusCell.textContent = product.status;
    
    row.appendChild(imgCell);
    row.appendChild(nameCell);
    row.appendChild(priceCell);
    row.appendChild(statusCell);

    tableBody.appendChild(row);
});
}

function setupPagination(products) {
 const paginationDiv = document.getElementById("pagination");
 paginationDiv.innerHTML = "";

 const pageCount = Math.ceil(products.length/ itemsPerPage);

 for(let i = 1; i <= pageCount; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.addEventListener("click", () => {
        currentPage = i;
        displayProducts(products, currentPage);
    });
    paginationDiv.appendChild(btn);
 }
}

displayProducts(products, currentPage);
setupPagination(products);



document.getElementById("searchInput").addEventListener("input", () => {
    const searchValue = document.getElementById("searchInput").value.toLowerCase();

    const searchedProducts = products.filter( product => 
        product.name.toLowerCase().includes(searchValue)
    );
    currentPage = 1;
    displayProducts(searchedProducts, currentPage);
    setupPagination(searchedProducts);
})