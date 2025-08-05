document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];


const productSelect = document.getElementById("productName");
if (productSelect) {
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.name; 
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}


if (window.location.href.includes("review.html")) {
    let count = Number(localStorage.getItem("reviewCount")) || 0;
    count++;
    localStorage.setItem("reviewCount", count);


    const countElement = document.getElementById("reviewCount");
    if (countElement) {
        countElement.textContent = `You have submitted ${count} review(s).`;
    } else {
        const fallback = document.createElement("p");
        fallback.textContent = `You have submitted ${count} review(s).`;
        document.body.appendChild(fallback);
    }
}

