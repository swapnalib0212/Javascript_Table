const itemsPerPage = 5;
let currentPage = 1;


const products = [
    {
        name: "Mini Console",
        description: "Ideal for everyday shortcuts. Adaptable to any workflow.",
        price: "$99",
        status: "Sold Out",
        image: "./assets/images/Everyday-Bundle-Mocks-final_750x500_crop_center.jpg.webp",
        rating: "4",
        bestSeller: false,
        dateAdded: "2025-01-07"
    },

     {
        name: "Audio Console",
        description: "Ideal for Music and Audio. Adaptable to any workflow.",
        price: "$67",
        status: "Sold Out",
        image: "./assets/images/22222.webp",
        rating: "3",
        bestSeller: true,
        dateAdded: "2025-05-07"
    },

     {
        name: "Photo Console",
        description: "Ideal for Photo & Video. Adaptable to any workflow.",
        price: "$56",
        status: "Sold Out",
        image: "./assets/images/55.webp",
        rating: "5",
        bestSeller: false,
        dateAdded: "2023-12-01"
    },
     {
        name: "Video Console",
        description: "Ideal for Video and Film. Adaptable to any workflow.",
        price: "$78",
        status: "Sold Out",
        image:"./assets/images/77.webp",
        rating: "4",
        bestSeller: false,
        dateAdded: "2025-03-03"
    },
     {
        name: "Monogram Keyboard + Multipad",
        description: "Ideal for everyday shortcuts. Adaptable to any workflow.",
        price: "$89",
        status: "Sold Out",
        image: "./assets/images/Monogram_Keyboardv2_750x748_crop_center.png.webp",
        rating: "2",
        bestSeller: true,
        dateAdded: "2025-04-04"
    },

     {
        name: "Monogram Keyboard",
        description: "Ideal for everyday shortcuts. Adaptable to any workflow.",
        price: "$67",
        status: "Available",
        image: "./assets/images/d1564dbc344144d594c1e602d3ab46d7.thumbnail.0000000000_750x422_crop_center.jpg.webp",
        rating: "4",
        bestSeller: true,
        dateAdded: "2025-10-07"
    },

     {
        name: "Monogram Multipad",
        description: "Ideal for everyday shortcuts. Adaptable to any workflow.",
        price: "$89",
        status: "Sold Out",
        image: "./assets/images/MonogramMultipad_750x545_crop_center.png.webp",
        rating: "5",
        bestSeller: false,
        dateAdded: "2024-10-08"
    },

     {
        name: "Monogram Core",
        description: "Ideal for everyday shortcuts. Adaptable to any workflow.",
        price: "$89",
        status: "Sold Out",
        image: "./assets/images/Packaging_CoreBracket1_Monogram_May20204545_ccb8b10a-0772-448b-9857-a14fa83bd5b7_750x500_crop_center.jpg.webp",
        rating: "4",
        bestSeller: true,
        dateAdded: "2025-06-09"
    },

     {
        name: "Orbiter Module",
        description: "Ideal for everyday shortcuts. Adaptable to any workflow.",
        price: "$78",
        status: "Available",
        image: "./assets/images/Consoles_OrbiterHero_Monogram_May2020_4568_3d64e8b3-71ce-441a-9fcd-2b054c423310_1080x720_crop_center.jpg.webp",
        rating: "3",
        bestSeller: true,
        dateAdded: "2022-10-01"
    },

     {
        name: "Monogram Carrying Case",
        description: "Ideal for carrying. Adaptable to any workflow.",
        price: "$80",
        status: "Sold Out",
        image: "./assets/images/20221018_MonogramCC_Case_06_1080x720_crop_center.jpg.webp",
        rating: "4",
        bestSeller: true,
        dateAdded: "2025-01-08"
    },
    {
        name: "Console Pack: Video",
        description: "Ideal for video. Adaptable to any workflow.",
        price: "$89",
        status: "Available",
        image: "./assets/images/SW-box-render-mini-video-final-august_1080x778_crop_center.jpg.webp",
        rating: "2",
        bestSeller: true,
        dateAdded: "2025-02-04"
    },
    {
        name: "Slider Module",
        description: "Ideal for everyday shortcuts. Adaptable to any workflow.",
        price: "$67",
        status: "Available",
        image: "./assets/images/Consoles_SliderBracket1_Monogram_May2020_4565_f941e8d9-d194-47ee-a54a-79132f105e34_750x500_crop_center.jpg.webp",
        rating: "4",
        bestSeller: true,
        dateAdded: "2024-10-05"

    },
     {
        name: "Console Pack: Photo",
        description: "Ideal for music & audio. Adaptable to any workflow.",
        price: "$78",
        status: "Available",
        image: "./assets/images/SW-box-render-mini-photo-final-august_1080x778_crop_center.jpg.webp",
        rating: "3",
        bestSeller: true,
        dateAdded: "2024-11-06"

    },
     {
        name: "Console Pack: Audio",
        description: "Ideal for everyday shortcuts. Adaptable to any workflow.",
        price: "$56",
        status: "Available",
        image: "./assets/images/SW-box-render-mini-midi-final-august_1080x778_crop_center.jpg.webp",
        rating: "4",
        bestSeller: false,
        dateAdded: "2025-02-09"

    },
     {
        name: "Monogram Care",
        description: "Ideal for music & audio. Adaptable to any workflow.",
        price: "$129",
        status: "Available",
        image: "./assets/images/MONO_CONSOLE_CARE_STU_453eaa1a-02d9-4ba7-9d9a-8d05e2915f8f_1080x714_crop_center.jpg.webp",
        rating: "2",
        bestSeller: true,
        dateAdded: "2025-01-01"

    },
     {
        name: "Dial Module",
        description: "Ideal for music & audio. Adaptable to any workflow.",
        price: "$39",
        status: "Sold Out",
        image: "./assets/images/Packaging_DialHeroBracket1_Monogram_May20204539_375e79fb-32f0-447b-b606-3dd0ac8318f6_1080x720_crop_center.jpg.webp",
        rating: "4",
        bestSeller: true,
        dateAdded: "2025-05-01"

    },
     {
        name: "Essential Keys Module",
        description: "Ideal for music & audio. Adaptable to any workflow.",
        price: "$78",
        status: "Available",
        image: "./assets/images/Consoles_KeysBracket1_Monogram_May2020_4571_43b65ca9-4fde-4f55-9f0e-32374554ce76_1920x1280_crop_center.jpg.webp",
        rating: "5",
        bestSeller: true,
        dateAdded: "2024-12-01"

    }
]

//table
function displayProducts (products, page) {
    const tableBody = document.querySelector("#productTable tbody")
    tableBody.innerHTML = "";

    const startIndex = page > 1 ? (page - 1) * itemsPerPage : 0;
    const endIndex = startIndex + itemsPerPage;
    const pageItems = products.slice(startIndex, endIndex);
     
    pageItems.forEach(function (product) {
    const row = document.createElement("tr");

    const imgCell = document.createElement("td");
    const img = document.createElement("img");
    img.src = product.image;
    img.width = 100;
    imgCell.appendChild(img);

    const nameCell = document.createElement("td");
    nameCell.textContent = product.name;

    const descriptionCell = document.createElement("td");
    descriptionCell.textContent = product.description;

    const priceCell = document.createElement("td");
    priceCell.textContent = product.price;

    const statusCell = document.createElement("td");
    statusCell.textContent = product.status;

    const ratingCell = document.createElement("td");
    ratingCell.textContent = "⭐".repeat(product.rating);

    row.appendChild(imgCell);
    row.appendChild(nameCell);
    row.appendChild(descriptionCell);
    row.appendChild(priceCell);
    row.appendChild(statusCell);
    row.appendChild(ratingCell);
    tableBody.appendChild(row);
    });
};



//pagination

function setupPagination(products) {
    const paginationDiv = document.getElementById("pagination");
    paginationDiv.innerHTML = "";

    const pageCount = Math.ceil(products.length / itemsPerPage);

    for(let i = 1; i <= pageCount; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;

     btn.onclick = function myButton () {
        currentPage = i;
        displayProducts(products, currentPage);
     };
     paginationDiv.appendChild(btn);

    };
};
displayProducts(products, currentPage);
setupPagination(products);




// search

function mySearch () {
    const searchValue = document.getElementById("searchInput").value.toLowerCase();
    const searchedProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchValue)
    );
    currentPage = 1;
    displayProducts(searchedProducts, currentPage);
    setupPagination(searchedProducts);
};


//filter
   function myFilter() {
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

   }

   //filter
   function PFilter() { 
    const selectedPrice = document.getElementById("rateFilter").value;

    let sortedProducts = products;

    if(selectedPrice === "Price:Low to High") {
        sortedProducts.sort((a, b) => parseFloat(a.price.replace("$", "")) - parseFloat(b.price.replace("$", "")));
    } else if (selectedPrice === "Price:High to Low") {
        sortedProducts.sort((a, b) => parseFloat(b.price.replace("$","")) - parseFloat(a.price.replace("$","")));
    } else if (selectedPrice === "Newest Arrival") {
        sortedProducts.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
    } else if (selectedPrice === "Best Seller") {
        sortedProducts = sortedProducts.filter(product => product.bestSeller);
    }
       
    currentPage = 1;
    displayProducts(sortedProducts, currentPage);
    setupPagination(sortedProducts);
   }



document.getElementById("btn").addEventListener("dblclick", () => {
    const changeBackground = document.getElementById("Division").style.backgroundColor = "yellow";
});