// Define array of symbol objects
// Function to generate symbols grid
function generateSymbols() {
    const symbolGrid = document.getElementById("symbolGrid");
    symbolGrid.innerHTML = "";

    // To access each symbol, I am using a stripe technique. The magic numbers
    // mean: there are 16 images per column and each image is 64x64px
    var column = 0;
    var row = 0;
    var maxColumn = (15 * -64);

    symbols.forEach(symbol => {
        // Create a div for the symbol
        const symbolDiv = document.createElement("div");
        symbolDiv.classList.add("symbol");
        symbolDiv.id = "symbol-" + symbol.tocall;
        symbolDiv.style.backgroundPosition = column + "px " + row + "px";
        symbolGrid.appendChild(symbolDiv);

        // Create a tooltip div
        const symbolTooltip = document.createElement("div");
        symbolTooltip.classList.add("tooltip");
        symbolDiv.appendChild(symbolTooltip);

        // Create the tooltip text
        var tooltipText = "<p><b>Code: </b>"
            + "<code>" + symbol.code + "</code></p>\n"
            + "<p><b>Description: </b>"
            + symbol.description + "</p>";
        symbolTooltip.innerHTML = tooltipText;

        // Go to next image in the same row or go down a row
        column = column - 64;
        if (column < maxColumn) {
            column = 0;
            row = row - 64;
        }
    });
}

// Function to toggle showing unused symbols
function hideUnused() {
    symbols.forEach(symbol => {
        const symbolDiv = document.getElementById("symbol-" + symbol.tocall);
        if (symbol.unused === 1) {
            symbolDiv.style.display = "none";
        }
    });
}

// Function to filter symbols based on code, description, and tocall fields
function filterSymbols() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();

    symbols.forEach(symbol => {
        const symbolDiv = document.getElementById("symbol-" + symbol.tocall);
        const symbolCode = symbol.code.toLowerCase();
        const symbolDescription = symbol.description.toLowerCase();
        const symbolTocall = symbol.tocall.toLowerCase();

        if (symbolCode.includes(searchInput) ||
            symbolDescription.includes(searchInput) ||
            symbolTocall.includes(searchInput)) {
            symbolDiv.style.display = "block";
        } else {
            symbolDiv.style.display = "none";
        }
    });

    hideUnused();
}

// Generate symbols grid on page load
generateSymbols();

// Hide unused symbols
hideUnused();

// Attach event listener to search input
document.getElementById("searchInput").addEventListener("input", filterSymbols);
