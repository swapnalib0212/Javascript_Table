

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
    Headers: [
        {label: "Image", key: "image"},
        {label: "Product Name", key: "name"},
        {label: "Description", key: "description"},
        {label: "Price", key: "price"},
        {label: "Status", key:"status"},
        {label: "Rating", key:"rating"}
    ],
    ProductValue: products,
    SearchByText: ["name", "description", "price", "status"],
    Selection: {
        "status": ["All", "Available", "Sold Out"]
    }
    
}



let currentPage = 1;
let itemsPerPage = parseInt(document.getElementById("itemsPerPageSelect").value);

///Title//
    const TitleHeading = document.querySelector("#heading");
    TitleHeading.textContent = TableData.TableTitle;

  
  //tableheader
const Tablehead = document.querySelector("#productTable thead");
Tablehead.innerHTML = "";

const rowH = document.createElement("tr");

TableData.Headers.forEach(header => {
    const th = document.createElement("th");
    th.textContent = header.label;
    rowH.appendChild(th);
});
Tablehead.appendChild(rowH);


//tablebody
function displayProducts (products, page, itemsPerPage) {
const Tablebody = document.querySelector("#productTable tbody");
Tablebody.innerHTML = "";

const startIndex = (page - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const pageItems = products.slice(startIndex, endIndex);

pageItems.forEach(product => {
    const row = document.createElement("tr");

    TableData.Headers.forEach(header => {
        const td = document.createElement("td");
        const value = product[header.key];

        if(header.key === "image") {
            const img = document.createElement("img");
            img.src = value;
            img.width = 100;
            td.appendChild(img);
        } else if (header.key === "rating") {
            td.textContent = "⭐".repeat(parseInt(value));
        } else {
            td.textContent = value;
        }
        row.appendChild(td);
    });
    
    Tablebody.appendChild(row);
    });
    
};
displayProducts(TableData.ProductValue, 1, TableData.ItemsPerPage);




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




//itemsperpageselect
document.getElementById("itemsPerPageSelect").addEventListener("change", () => {
     itemsPerPage = document.getElementById("itemsPerPageSelect").value;
    currentPage = 1;
    
    displayProducts(products, currentPage, itemsPerPage);
    setupPagination(products, itemsPerPage);
});

//////


////status

const StatusSelect = document.getElementById("statusFilter");
TableData.Selection.status.forEach(status => {
    const optionB = document.createElement("option");
    optionB.value = status.toLowerCase() === "all" ? "all" : status;
    optionB.textContent = status === "All" ? "Status: All" : status;
    StatusSelect.appendChild(optionB);
});


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
    let fieldmatched = null;
    TableData.SearchByText.forEach(field => {
        const prefix = `search by ${field.toLowerCase()}:`;
        if(rawValue.startsWith(prefix)) {
            rawValue = rawValue.slice(prefix.length).trim();
            fieldmatched  = field;
        }
    })

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
    
   
});
    searchInput.addEventListener("keydown",(event) => {
    if(event.key === "Enter"){
        applyFilters();
    }
    });
     searchInput.addEventListener("change", applyFilters);


////////////////////////

function applyFilters() {
    const selectedStatus = document.getElementById("statusFilter").value;
    const inputValue = document.getElementById("searchInput").value.trim().toLowerCase();

    let keyword = inputValue;
    let specificField = null;


    for(const header of TableData.Headers) {
        const prefix = `search by ${header.key.toLowerCase()}:`;
        if(inputValue.startsWith(prefix)) {
            specificField = header.key;
            keyword = inputValue.slice(prefix.length).trim();
        }
    }
    
    let resultSets = [];

    if(keyword !== "") {
           const inputMatches = products.filter(product => { 
            if (specificField) {
                return product[specificField].toLowerCase().includes(keyword)
            } else {
                return TableData.SearchByText.some(field =>
                    product[field].toLowerCase().includes(keyword)
                );
            }
            
        });
        resultSets.push(inputMatches);
    }
    


    activeFilters.forEach(filter => {
    const filterMatches = products.filter(product => {
      if (filter.type === "general") {
        return TableData.SearchByText.some(field =>
          product[field].toLowerCase().includes(filter.keyword)
        );
      } else {
        return product[filter.type].toLowerCase().includes(filter.keyword);
      }
    });
     resultSets.push(filterMatches);
    });
    

    let mergedResults;
    if(resultSets.length === 0) {
        mergedResults = [...products];
    } else {
        const productMap = new Map();
        resultSets.flat().forEach(product => {
            productMap.set(product.name, product);
        });
        mergedResults = Array.from(productMap.values());
    }

    if (selectedStatus !== "all") {
        mergedResults = mergedResults.filter(product =>
            product.status.toLowerCase() === selectedStatus
        );
    }


    currentPage = 1;
    displayProducts(mergedResults, currentPage, TableData.ItemsPerPage);
    setupPagination(mergedResults, TableData.ItemsPerPage);
}

searchInput.addEventListener("keydown", (event) => {
    if(event.key === "Enter") {
        addActiveFilters();
    }
});
searchInput.addEventListener("change", addActiveFilters);

//////////////////////////

const activeFilters = [];

function addActiveFilters () {
    const inputValue = document.getElementById("searchInput").value.trim().toLowerCase();
    if (inputValue === "")return;

    let keyword = inputValue;
    let specificField = null;
     
    for(const header of TableData.Headers) {
        const prefix = `search by ${header.key.toLowerCase()}:`; 
        if(inputValue.startsWith(prefix)){
            specificField = header.key;
            keyword = inputValue.slice(prefix.length).trim();
        }
    }
    
    if (keyword === "") return;

    activeFilters.push({
        type: specificField || "general",
        keyword: keyword
    });

    document.getElementById("searchInput").value = "";
    renderActiveFilters();
    applyFilters();
}

function renderActiveFilters() {
    const container = document.getElementById("activeFiltersContainer");
    container.innerHTML = "";

    activeFilters.forEach((filter, index) => {
        const div = document.createElement("div");
        div.className = "filter-chip";
        div.textContent = `${filter.type === "general" ? "Any Field" : filter.type}: ${filter.keyword}`;

        const btn = document.createElement("button");
        btn.textContent = "x";
        btn.addEventListener("click", () => {
            removeFilter(index);
        });
        div.appendChild(btn);
        container.appendChild(div);
    })
}

  function removeFilter(index) {
    activeFilters.splice(index, 1);
    renderActiveFilters();
    applyFilters();
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
});



window.onload = function () {
  itemsPerPage = parseInt(document.getElementById("itemsPerPageSelect").value);
  displayProducts(products, currentPage, itemsPerPage);
  setupPagination(products, itemsPerPage);
};
