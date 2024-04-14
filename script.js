// Define array of symbol objects
const symbols = [{"code":"/!","description":"Police station","tocall":"BB","unused":0},{"code":"/\"","description":"","tocall":"BC","unused":1},{"code":"/#","description":"Digipeater","tocall":"BD","unused":0},{"code":"/$","description":"Telephone","tocall":"BE","unused":0},{"code":"/%","description":"DX cluster","tocall":"BF","unused":0},{"code":"/&","description":"HF gateway","tocall":"BG","unused":0},{"code":"/'","description":"Small aircraft","tocall":"BH","unused":0},{"code":"/(","description":"Mobile satellite station","tocall":"BI","unused":0},{"code":"/)","description":"Wheelchair, handicapped","tocall":"BJ","unused":0},{"code":"/*","description":"Snowmobile","tocall":"BK","unused":0},{"code":"/+","description":"Red Cross","tocall":"BL","unused":0},{"code":"/,","description":"Boy Scouts","tocall":"BM","unused":0},{"code":"/-","description":"House","tocall":"BN","unused":0},{"code":"/.","description":"Red X","tocall":"BO","unused":0},{"code":"//","description":"Red dot","tocall":"BP","unused":0},{"code":"/0","description":"Numbered circle: 0","tocall":"P0","unused":0},{"code":"/1","description":"Numbered circle: 1","tocall":"P1","unused":0},{"code":"/2","description":"Numbered circle: 2","tocall":"P2","unused":0},{"code":"/3","description":"Numbered circle: 3","tocall":"P3","unused":0},{"code":"/4","description":"Numbered circle: 4","tocall":"P4","unused":0},{"code":"/5","description":"Numbered circle: 5","tocall":"P5","unused":0},{"code":"/6","description":"Numbered circle: 6","tocall":"P6","unused":0},{"code":"/7","description":"Numbered circle: 7","tocall":"P7","unused":0},{"code":"/8","description":"Numbered circle: 8","tocall":"P8","unused":0},{"code":"/9","description":"Numbered circle: 9","tocall":"P9","unused":0},{"code":"/:","description":"Fire","tocall":"MR","unused":0},{"code":"/;","description":"Campground, tent","tocall":"MS","unused":0},{"code":"/<","description":"Motorcycle","tocall":"MT","unused":0},{"code":"/=","description":"Railroad engine","tocall":"MU","unused":0},{"code":"/>","description":"Car","tocall":"MV","unused":0},{"code":"/?","description":"File server","tocall":"MW","unused":0},{"code":"/@","description":"Hurricane predicted path","tocall":"MX","unused":0},{"code":"/A","description":"Aid station","tocall":"PA","unused":0},{"code":"/B","description":"BBS","tocall":"PB","unused":0},{"code":"/C","description":"Canoe","tocall":"PC","unused":0},{"code":"/D","description":"","tocall":"PD","unused":1},{"code":"/E","description":"Eyeball","tocall":"PE","unused":0},{"code":"/F","description":"Farm vehicle, tractor","tocall":"PF","unused":0},{"code":"/G","description":"Grid square, 3 by 3","tocall":"PG","unused":0},{"code":"/H","description":"Hotel","tocall":"PH","unused":0},{"code":"/I","description":"TCP/IP network station","tocall":"PI","unused":0},{"code":"/J","description":"","tocall":"PJ","unused":1},{"code":"/K","description":"School","tocall":"PK","unused":0},{"code":"/L","description":"PC user","tocall":"PL","unused":0},{"code":"/M","description":"Mac apple","tocall":"PM","unused":0},{"code":"/N","description":"NTS station","tocall":"PN","unused":0},{"code":"/O","description":"Balloon","tocall":"PO","unused":0},{"code":"/P","description":"Police car","tocall":"PP","unused":0},{"code":"/Q","description":"","tocall":"PQ","unused":1},{"code":"/R","description":"Recreational vehicle, RV","tocall":"PR","unused":0},{"code":"/S","description":"Space Shuttle","tocall":"PS","unused":0},{"code":"/T","description":"SSTV","tocall":"PT","unused":0},{"code":"/U","description":"Bus","tocall":"PU","unused":0},{"code":"/V","description":"ATV, Amateur Television","tocall":"PV","unused":0},{"code":"/W","description":"Weather service site","tocall":"PW","unused":0},{"code":"/X","description":"Helicopter","tocall":"PX","unused":0},{"code":"/Y","description":"Sailboat","tocall":"PY","unused":0},{"code":"/Z","description":"Windows flag","tocall":"PZ","unused":0},{"code":"/[","description":"Human","tocall":"HS","unused":0},{"code":"/\\","description":"DF triangle","tocall":"HT","unused":0},{"code":"/]","description":"Mailbox, post office","tocall":"HU","unused":0},{"code":"/^","description":"Large aircraft","tocall":"HV","unused":0},{"code":"/_","description":"Weather station","tocall":"HW","unused":0},{"code":"/`","description":"Satellite dish antenna","tocall":"HX","unused":0},{"code":"/a","description":"Ambulance","tocall":"LA","unused":0},{"code":"/b","description":"Bicycle","tocall":"LB","unused":0},{"code":"/c","description":"Incident command post","tocall":"LC","unused":0},{"code":"/d","description":"Fire station","tocall":"LD","unused":0},{"code":"/e","description":"Horse, equestrian","tocall":"LE","unused":0},{"code":"/f","description":"Fire truck","tocall":"LF","unused":0},{"code":"/g","description":"Glider","tocall":"LG","unused":0},{"code":"/h","description":"Hospital","tocall":"LH","unused":0},{"code":"/i","description":"IOTA, islands on the air","tocall":"LI","unused":0},{"code":"/j","description":"Jeep","tocall":"LJ","unused":0},{"code":"/k","description":"Truck","tocall":"LK","unused":0},{"code":"/l","description":"Laptop","tocall":"LL","unused":0},{"code":"/m","description":"Mic-E repeater","tocall":"LM","unused":0},{"code":"/n","description":"Node, black bulls-eye","tocall":"LN","unused":0},{"code":"/o","description":"Emergency operations center","tocall":"LO","unused":0},{"code":"/p","description":"Dog","tocall":"LP","unused":0},{"code":"/q","description":"Grid square, 2 by 2","tocall":"LQ","unused":0},{"code":"/r","description":"Repeater tower","tocall":"LR","unused":0},{"code":"/s","description":"Ship, power boat","tocall":"LS","unused":0},{"code":"/t","description":"Truck stop","tocall":"LT","unused":0},{"code":"/u","description":"Semi-trailer truck, 18-wheeler","tocall":"LU","unused":0},{"code":"/v","description":"Van","tocall":"LV","unused":0},{"code":"/w","description":"Water station","tocall":"LW","unused":0},{"code":"/x","description":"X / Unix","tocall":"LX","unused":0},{"code":"/y","description":"House, yagi antenna","tocall":"LY","unused":0},{"code":"/z","description":"Shelter","tocall":"LZ","unused":0},{"code":"/{","description":"","tocall":"J1","unused":1},{"code":"/|","description":"TNC Stream Switch","tocall":"J2","unused":1},{"code":"/}","description":"","tocall":"J3","unused":1},{"code":"/~","description":"TNC Stream Switch","tocall":"J4","unused":1},{"code":"","description":"","tocall":"Skip1","unused":1},{"code":"","description":"Version","tocall":"Skip2","unused":1},{"code":"\\!","description":"Emergency","tocall":"OB","unused":0},{"code":"\\\"","description":"","tocall":"OC","unused":1},{"code":"\\#","description":"Digipeater, green star","tocall":"OD","unused":0},{"code":"\\$","description":"Bank or ATM","tocall":"OE","unused":0},{"code":"\\%","description":"","tocall":"OF","unused":1},{"code":"\\&","description":"Gateway station","tocall":"OG","unused":0},{"code":"\\'","description":"Crash / incident site","tocall":"OH","unused":0},{"code":"\\(","description":"Cloudy","tocall":"OI","unused":0},{"code":"\\)","description":"Firenet MEO, MODIS Earth Observation","tocall":"OJ","unused":0},{"code":"\\*","description":"Snow","tocall":"OK","unused":0},{"code":"\\+","description":"Church","tocall":"OL","unused":0},{"code":"\\,","description":"Girl Scouts","tocall":"OM","unused":0},{"code":"\\-","description":"House, HF antenna","tocall":"ON","unused":0},{"code":"\\.","description":"Ambiguous, question mark inside circle","tocall":"OO","unused":0},{"code":"\\/","description":"Waypoint destination","tocall":"OP","unused":0},{"code":"\\0","description":"Circle, IRLP / Echolink/WIRES","tocall":"A0","unused":0},{"code":"\\1","description":"","tocall":"A1","unused":1},{"code":"\\2","description":"","tocall":"A2","unused":1},{"code":"\\3","description":"","tocall":"A3","unused":1},{"code":"\\4","description":"","tocall":"A4","unused":1},{"code":"\\5","description":"","tocall":"A5","unused":1},{"code":"\\6","description":"","tocall":"A6","unused":1},{"code":"\\7","description":"","tocall":"A7","unused":1},{"code":"\\8","description":"802.11 WiFi or other network node","tocall":"A8","unused":0},{"code":"\\9","description":"Gas station","tocall":"A9","unused":0},{"code":"\\:","description":"Hail","tocall":"NR","unused":0},{"code":"\\;","description":"Park, picnic area","tocall":"NS","unused":0},{"code":"\\<","description":"Advisory, single red flag","tocall":"NT","unused":0},{"code":"\\=","description":"","tocall":"NU","unused":1},{"code":"\\>","description":"Red car","tocall":"NV","unused":0},{"code":"\\?","description":"Info kiosk","tocall":"NW","unused":0},{"code":"\\@","description":"Hurricane, Tropical storm","tocall":"NX","unused":0},{"code":"\\A","description":"White box","tocall":"AA","unused":0},{"code":"\\B","description":"Blowing snow","tocall":"AB","unused":0},{"code":"\\C","description":"Coast Guard","tocall":"AC","unused":0},{"code":"\\D","description":"Drizzling rain","tocall":"AD","unused":0},{"code":"\\E","description":"Smoke, Chimney","tocall":"AE","unused":0},{"code":"\\F","description":"Freezing rain","tocall":"AF","unused":0},{"code":"\\G","description":"Snow shower","tocall":"AG","unused":0},{"code":"\\H","description":"Haze","tocall":"AH","unused":0},{"code":"\\I","description":"Rain shower","tocall":"AI","unused":0},{"code":"\\J","description":"Lightning","tocall":"AJ","unused":0},{"code":"\\K","description":"Kenwood HT","tocall":"AK","unused":0},{"code":"\\L","description":"Lighthouse","tocall":"AL","unused":0},{"code":"\\M","description":"","tocall":"AM","unused":1},{"code":"\\N","description":"Navigation buoy","tocall":"AN","unused":0},{"code":"\\O","description":"Rocket","tocall":"AO","unused":0},{"code":"\\P","description":"Parking","tocall":"AP","unused":0},{"code":"\\Q","description":"Earthquake","tocall":"AQ","unused":0},{"code":"\\R","description":"Restaurant","tocall":"AR","unused":0},{"code":"\\S","description":"Satellite","tocall":"AS","unused":0},{"code":"\\T","description":"Thunderstorm","tocall":"AT","unused":0},{"code":"\\U","description":"Sunny","tocall":"AU","unused":0},{"code":"\\V","description":"VORTAC, Navigational aid","tocall":"AV","unused":0},{"code":"\\W","description":"NWS site","tocall":"AW","unused":0},{"code":"\\X","description":"Pharmacy","tocall":"AX","unused":0},{"code":"\\Y","description":"","tocall":"AY","unused":1},{"code":"\\Z","description":"","tocall":"AZ","unused":1},{"code":"\\[","description":"Wall Cloud","tocall":"DS","unused":0},{"code":"\\\\","description":"","tocall":"DT","unused":1},{"code":"\\]","description":"","tocall":"DU","unused":1},{"code":"\\^","description":"Aircraft","tocall":"DV","unused":0},{"code":"\\_","description":"Weather site","tocall":"DW","unused":0},{"code":"\\`","description":"Rain","tocall":"DX","unused":0},{"code":"\\a","description":"Red diamond","tocall":"SA","unused":0},{"code":"\\b","description":"Blowing dust, sand","tocall":"SB","unused":0},{"code":"\\c","description":"CD triangle, RACES, CERTS, SATERN","tocall":"SC","unused":0},{"code":"\\d","description":"DX spot","tocall":"SD","unused":0},{"code":"\\e","description":"Sleet","tocall":"SE","unused":0},{"code":"\\f","description":"Funnel cloud","tocall":"SF","unused":0},{"code":"\\g","description":"Gale, two red flags","tocall":"SG","unused":0},{"code":"\\h","description":"Store","tocall":"SH","unused":0},{"code":"\\i","description":"Black box, point of interest","tocall":"SI","unused":0},{"code":"\\j","description":"Work zone, excavating machine","tocall":"SJ","unused":0},{"code":"\\k","description":"SUV, ATV","tocall":"SK","unused":0},{"code":"\\l","description":"","tocall":"SL","unused":1},{"code":"\\m","description":"Value sign, 3 digit display","tocall":"SM","unused":0},{"code":"\\n","description":"Red triangle","tocall":"SN","unused":0},{"code":"\\o","description":"Small circle","tocall":"SO","unused":0},{"code":"\\p","description":"Partly cloudy","tocall":"SP","unused":0},{"code":"\\q","description":"","tocall":"SQ","unused":1},{"code":"\\r","description":"Restrooms","tocall":"SR","unused":0},{"code":"\\s","description":"Ship, boat","tocall":"SS","unused":0},{"code":"\\t","description":"Tornado","tocall":"ST","unused":0},{"code":"\\u","description":"Truck","tocall":"SU","unused":0},{"code":"\\v","description":"Van","tocall":"SV","unused":0},{"code":"\\w","description":"Flooding","tocall":"SW","unused":0},{"code":"\\x","description":"","tocall":"SX","unused":1},{"code":"\\y","description":"Skywarn","tocall":"SY","unused":0},{"code":"\\z","description":"Shelter","tocall":"SZ","unused":0},{"code":"\\{","description":"Fog","tocall":"Q1","unused":0},{"code":"\\}","description":"","tocall":"Q3","unused":1}];

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
