const products = [
    {
        name: "MINI CONSOLE",
        price: "$99",
        status: "SOLD OUT",
        image: "./Everyday-Bundle-Mocks-final_750x500_crop_center.jpg.webp"
    },

     {
        name: "AUDIO CONSOLE",
        price: "$67",
        status: "SOLD OUT",
        image: "./22222.webp"
    },

     {
        name: "PHOTO CONSOLE",
        price: "$56",
        status: "SOLD OUT",
        image: "./55.webp"
    },
     {
        name: "VIDEO CONSOLE",
        price: "$78",
        status: "SOLD OUT",
        image:"./77.webp"
    },
     {
        name: "Monogram Keyboard + Multipad",
        price: "$89",
        status: "SOLD OUT",
        image: "./Monogram_Keyboardv2_750x748_crop_center.png.webp"
    },

     {
        name: "Monogram Keyboard",
        price: "$67",
        status: "Available",
        image: "./d1564dbc344144d594c1e602d3ab46d7.thumbnail.0000000000_750x422_crop_center.jpg.webp"
    },

     {
        name: "Monogram Multipad",
        price: "$89",
        status: "Sold Out",
        image: "./MonogramMultipad_750x545_crop_center.png.webp"
    },

     {
        name: "Monogram Core",
        price: "$89",
        status: "Sold OUT",
        image: "./Packaging_CoreBracket1_Monogram_May20204545_ccb8b10a-0772-448b-9857-a14fa83bd5b7_750x500_crop_center.jpg.webp"
    },

     {
        name: "Orbiter Module",
        price: "$78",
        status: "Available",
        image: "./Consoles_OrbiterHero_Monogram_May2020_4568_3d64e8b3-71ce-441a-9fcd-2b054c423310_1080x720_crop_center.jpg.webp"
    },

     {
        name: "Monogram Carrying Case",
        price: "$80",
        status: "SOLD OUT",
        image: "./20221018_MonogramCC_Case_06_1080x720_crop_center.jpg.webp"
    }
]

const tableBody = document.querySelector("#productTable tbody")
products.forEach(product => {
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