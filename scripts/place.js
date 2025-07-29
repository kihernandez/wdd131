document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

function calculateWindChill(tempC, speedKmh) {
    return 13.12 + 0.6215 * tempC - 11.37 * Math.pow(speedKmh, 0.16) + 0.3965 * tempC * Math.pow(speedKmh, 0.16);
}

document.addEventListener("DOMContentLoaded", () => {
    const temp = parseFloat(document.getElementById("conditions").textContent); // 18
    const speed = parseFloat(document.getElementById("wind").textContent); // 7

    let windchillText = "N/A";

    if (temp <= 10 && speed > 4.8) {
        const windChill = calculateWindChill(temp, speed);
        windchillText = `${windChill.toFixed(1)} °C`;
    }

    document.getElementById("windchill").textContent = windchillText;
});
