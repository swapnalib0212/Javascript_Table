

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

const TableData = {
    TableTitle: "Product List",
    SearchPlaceholder: "Search Products",
    ItemsPerPage: 5,
    Headers: ["Image", "Product Name","Description", "Price", "Status", "Rating" ],
    ProductValue: products,
    SearchByText: ["name", "description"],
    Selection: {
        "status": ["Available", "Sold Out", "All"]
    }
    
}


let currentPage = 1;
let itemsPerPage = parseInt(document.getElementById("itemsPerPageSelect").value);

///Title//
    const TitleHeading = document.querySelector("#heading");
    TitleHeading.textContent = TableData.TableTitle;


    //search
    const SearchIcon = document.createElement("input");
    SearchIcon.type = "text";
    SearchIcon.id = "searchInput";
    SearchIcon.placeholder = "Search Products";
    SearchIcon.list = "searchSuggestions"
    document.body.appendChild(SearchIcon);
   

//table
function displayProducts (products, page, itemsPerPage) {
const Tablebody = document.querySelector("#productTable tbody");
Tablebody.innerHTML = "";

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

    const descriptionCell = document.createElement("td");
    descriptionCell.textContent = product.description;

    const ratingCell = document.createElement("td");
    ratingCell.textContent = "⭐".repeat(product.rating);

    row.appendChild(imgCell);
    row.appendChild(nameCell);
    row.appendChild(descriptionCell);
    row.appendChild(priceCell);
    row.appendChild(statusCell);
    row.appendChild(ratingCell);

    Tablebody.appendChild(row);
    
});

//tableheader
const Tablehead = document.querySelector("#productTable thead");
Tablehead.innerHTML = "";

const rowH = document.createElement("tr");

const imageHeader = document.createElement("th");
imageHeader.textContent = TableData.Headers[0];

const nameHeader = document.createElement("th");
nameHeader.textContent = TableData.Headers[1];

const descriptionHeader = document.createElement("th");
descriptionHeader.textContent = TableData.Headers[2];

const priceHeader = document.createElement("th");
priceHeader.textContent = TableData.Headers[3];

const statusHeader = document.createElement("th");
statusHeader.textContent = TableData.Headers[4];

const ratingHeader = document.createElement("th");
ratingHeader.textContent = TableData.Headers[5];



rowH.appendChild(imageHeader);
rowH.appendChild(nameHeader);
rowH.appendChild(descriptionHeader);
rowH.appendChild(priceHeader);
rowH.appendChild(statusHeader);
rowH.appendChild(ratingHeader);

Tablehead.appendChild(rowH);
}




///pagination
function setupPagination(products, itemsPerPage) {
    const paginationblock = document.getElementById("pagination");
    paginationblock.innerHTML = "";

    const pageCount = Math.ceil(products.length / itemsPerPage);

    for(let i = 1; i <= pageCount; i++) {
        const btn = document.createElement("button");
       btn.textContent = i;
       
       btn.onclick = function () {
        currentPage = i;
        displayProducts(products, currentPage, itemsPerPage);
       }
       paginationblock.appendChild(btn);
    }
    
    
}

///itemsdropdown
const perPageOption = [3, 5, 10, 15];
const itemsPerPageSelect = document.getElementById("itemsPerPageSelect");
perPageOption.forEach(num => {
    const option = document.createElement("option");
    option.value = num;
    option.textContent = num;
    itemsPerPageSelect.appendChild(option);
    
})


////status
const pageStatus  = [
    {value: "all", text: "Status: All"},
    {value: "Available", text: "Available"},
    {value: "Sold Out", text: "Sold Out"}
];
const StatusSelect = document.getElementById("statusFilter");
pageStatus.forEach(item => {
    const optionB = document.createElement("option");
    optionB.value = item.value;
    optionB.textContent = item.text;
    StatusSelect.appendChild(optionB);
})



//itemsperpageselect
document.getElementById("itemsPerPageSelect").addEventListener("change", () => {
     itemsPerPage = document.getElementById("itemsPerPageSelect").value;
    currentPage = 1;
    
    displayProducts(products, currentPage, itemsPerPage);
    setupPagination(products, itemsPerPage);
});

//////

//search
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keydown", (event) => {
    if(event.key === "Enter") {
        const searchedValue = searchInput.value.toLowerCase();
        const searchedProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchedValue) || product.description.toLowerCase().includes(searchedValue)
        );
        currentPage = 1;
        displayProducts(searchedProducts, currentPage, itemsPerPage);
        setupPagination(searchedProducts, itemsPerPage);
      
    };
});

displayProducts(products, currentPage, itemsPerPage);
setupPagination(products, itemsPerPage);


///////////////////////////////////////////////searchsuggestions

const datalist = document.getElementById("searchSuggestions");
searchInput.value = "";
searchInput.addEventListener("input", () => {
    let rawValue = searchInput.value.trim();

    if(rawValue.toLowerCase().startsWith("search by name:")) {
        rawValue = rawValue.slice("search by name:".length).trim();
    }else if (rawValue.toLowerCase().startsWith("search by description:")) {
        rawValue = rawValue.slice("search by description:".length).trim()
    }
    datalist.innerHTML = "";
    if(rawValue === "")return;

    const suggestions = [
        `Search By Name: ${rawValue}`,
        `Search By Description: ${rawValue}`
    ];
    suggestions.forEach(text =>{
        const option = document.createElement("option");
        option.value = text;
        datalist.appendChild(option);
    })

})
////enter key ///

        function handleSearch () {
        const inputValue = searchInput.value.trim();

        let filterType = "name";
        let keyword = inputValue;

        if(inputValue.toLowerCase().startsWith("search by name:")) {
            filterType = "name";
            keyword = inputValue.slice("search by name:".length).trim();
        } else if (inputValue.toLowerCase().startsWith("search by description:")) {
            filterType = "description";
            keyword = inputValue.slice("search by description:".length).trim();
        }
        const searchedProducts = products.filter(product => {
        const field = product[filterType].toLowerCase();
        return field.includes(keyword.toLowerCase());
        });

        currentPage = 1;
        displayProducts(searchedProducts,currentPage, itemsPerPage);
        setupPagination(searchedProducts, itemsPerPage)
        
    }
        
    searchInput.addEventListener("keydown",(event) => {
    if(event.key === "Enter") handleSearch();
    });
   
    searchInput.addEventListener("change", handleSearch);






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
        currentPage = 1;
        displayProducts(filteredProducts, currentPage, itemsPerPage);
        setupPagination(filteredProducts, itemsPerPage);
    }
}


///ratefilter

document.getElementById("rateFilter").addEventListener("change", () => {
    const Selectedrate = document.getElementById("rateFilter").value;
    const searchedValue = document.getElementById("searchInput").value.toLowerCase();
     
    let sortproducts = products;
    sortproducts = sortproducts.filter(product => product.price.includes(searchedValue))

    if(Selectedrate === "Price: Low to High") {
        sortproducts.sort((a, b) => parseFloat(a.price.replace("$", "")) - parseFloat(b.price.replace("$", "")))
    } else if (Selectedrate === "Price: High to Low") {
        sortproducts.sort((a, b) => parseFloat(b.price.replace("$", "")) - parseFloat(a.price.replace("$", "")))
    } else if (Selectedrate === "Newest Arrival") {
        sortproducts.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)) 
    } else if (Selectedrate === "Best Seller") {
       sortproducts = sortproducts.filter(product => product.bestSeller);
    }

    currentPage = 1;
    displayProducts(sortproducts, currentPage, itemsPerPage);
    setupPagination(sortproducts, itemsPerPage);
})



window.onload = function () {
  itemsPerPage = parseInt(document.getElementById("itemsPerPageSelect").value);
  displayProducts(products, currentPage, itemsPerPage);
  setupPagination(products, itemsPerPage);
};



