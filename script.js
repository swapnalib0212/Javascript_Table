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
    },
    {
        name: "Console Pack: Video",
        price: "$89",
        status: "Available",
        image: "./assets/images/SW-box-render-mini-video-final-august_1080x778_crop_center.jpg.webp"
    },
    {
        name: "Slider Module",
        price: "$67",
        status: "Available",
        image: "./assets/images/Consoles_SliderBracket1_Monogram_May2020_4565_f941e8d9-d194-47ee-a54a-79132f105e34_750x500_crop_center.jpg.webp"

    },
     {
        name: "Console Pack: Photo",
        price: "$78",
        status: "Available",
        image: "./assets/images/SW-box-render-mini-photo-final-august_1080x778_crop_center.jpg.webp"

    },
     {
        name: "Console Pack: Audio",
        price: "$56",
        status: "Available",
        image: "./assets/images/SW-box-render-mini-midi-final-august_1080x778_crop_center.jpg.webp"

    },
     {
        name: "Monogram Care",
        price: "$129",
        status: "Available",
        image: "./assets/images/MONO_CONSOLE_CARE_STU_453eaa1a-02d9-4ba7-9d9a-8d05e2915f8f_1080x714_crop_center.jpg.webp"

    },
     {
        name: "Dial Module",
        price: "$39",
        status: "Sold Out",
        image: "./assets/images/Packaging_DialHeroBracket1_Monogram_May20204539_375e79fb-32f0-447b-b606-3dd0ac8318f6_1080x720_crop_center.jpg.webp"

    },
     {
        name: "Essential Keys Module",
        price: "$78",
        status: "Available",
        image: "./assets/images/Consoles_KeysBracket1_Monogram_May2020_4571_43b65ca9-4fde-4f55-9f0e-32374554ce76_1920x1280_crop_center.jpg.webp"

    },
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
});


document.getElementById("statusFilter").addEventListener("change", () => {
    const selectedStatus = document.getElementById("statusFilter").value;
    const searchValue = document.getElementById("searchInput").value.toLowerCase();

    let filteredProducts = products;

    filteredProducts = filteredProducts.filter(product => 
        product.status.toLowerCase().includes(searchValue)
    );

    if(selectedStatus !== "all") {
        filteredProducts = filteredProducts.filter(product =>
            product.status.toLowerCase() === selectedStatus.toLowerCase()

        );
    }
    currentPage = 1;
    displayProducts(filteredProducts, currentPage);
    setupPagination(filteredProducts);
});