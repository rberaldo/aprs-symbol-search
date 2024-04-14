// Define array of symbol objects
const symbols = [{"code":"/!","description":"Delegacia, polícia","tocall":"BB","unused":0},{"code":"/\"","description":"","tocall":"BC","unused":1},{"code":"/#","description":"Digipeater","tocall":"BD","unused":0},{"code":"/$","description":"Telefone, celular","tocall":"BE","unused":0},{"code":"/%","description":"Cluster de DX","tocall":"BF","unused":0},{"code":"/&","description":"Gateway em HF","tocall":"BG","unused":0},{"code":"/'","description":"Avião pequeno, aeronave pequena","tocall":"BH","unused":0},{"code":"/(","description":"Estação terrena móvel","tocall":"BI","unused":0},{"code":"/)","description":"Cadeira de rodas, deficiente","tocall":"BJ","unused":0},{"code":"/*","description":"Moto de neve","tocall":"BK","unused":0},{"code":"/+","description":"Cruz Vermelha","tocall":"BL","unused":0},{"code":"/,","description":"Escoteiros (meninos)","tocall":"BM","unused":0},{"code":"/-","description":"Casa","tocall":"BN","unused":0},{"code":"/.","description":"X vermelho","tocall":"BO","unused":0},{"code":"//","description":"Ponto vermelho","tocall":"BP","unused":0},{"code":"/0","description":"Círculo numerado: 0","tocall":"P0","unused":0},{"code":"/1","description":"Círculo numerado: 1","tocall":"P1","unused":0},{"code":"/2","description":"Círculo numerado: 2","tocall":"P2","unused":0},{"code":"/3","description":"Círculo numerado: 3","tocall":"P3","unused":0},{"code":"/4","description":"Círculo numerado: 4","tocall":"P4","unused":0},{"code":"/5","description":"Círculo numerado: 5","tocall":"P5","unused":0},{"code":"/6","description":"Círculo numerado: 6","tocall":"P6","unused":0},{"code":"/7","description":"Círculo numerado: 7","tocall":"P7","unused":0},{"code":"/8","description":"Círculo numerado: 8","tocall":"P8","unused":0},{"code":"/9","description":"Círculo numerado: 9","tocall":"P9","unused":0},{"code":"/:","description":"Fogo","tocall":"MR","unused":0},{"code":"/;","description":"Acampamento, barraca","tocall":"MS","unused":0},{"code":"/<","description":"Motocicleta","tocall":"MT","unused":0},{"code":"/=","description":"Locomotiva, veículo ferroviário","tocall":"MU","unused":0},{"code":"/>","description":"Carro","tocall":"MV","unused":0},{"code":"/?","description":"Servidor de arquivos","tocall":"MW","unused":0},{"code":"/@","description":"Caminho previsto para furacão","tocall":"MX","unused":0},{"code":"/A","description":"Posto de socorro","tocall":"PA","unused":0},{"code":"/B","description":"BBS","tocall":"PB","unused":0},{"code":"/C","description":"Canoa","tocall":"PC","unused":0},{"code":"/D","description":"","tocall":"PD","unused":1},{"code":"/E","description":"Olho, globo ocular","tocall":"PE","unused":0},{"code":"/F","description":"Veículo agrícola, trator","tocall":"PF","unused":0},{"code":"/G","description":"Grid square 3 por 3","tocall":"PG","unused":0},{"code":"/H","description":"Hotel","tocall":"PH","unused":0},{"code":"/I","description":"Estação de rede TCP/IP","tocall":"PI","unused":0},{"code":"/J","description":"","tocall":"PJ","unused":1},{"code":"/K","description":"Escola","tocall":"PK","unused":0},{"code":"/L","description":"Usuário de PC","tocall":"PL","unused":0},{"code":"/M","description":"Apple Macintosh","tocall":"PM","unused":0},{"code":"/N","description":"Estação NTS","tocall":"PN","unused":0},{"code":"/O","description":"Balão","tocall":"PO","unused":0},{"code":"/P","description":"Viatura policial, carro de polícia","tocall":"PP","unused":0},{"code":"/Q","description":"","tocall":"PQ","unused":1},{"code":"/R","description":"Veículo recreativo, motorhome, trailer, RV","tocall":"PR","unused":0},{"code":"/S","description":"Ônibus Espacial","tocall":"PS","unused":0},{"code":"/T","description":"SSTV","tocall":"PT","unused":0},{"code":"/U","description":"Ônibus","tocall":"PU","unused":0},{"code":"/V","description":"ATV, Televisão Amadora","tocall":"PV","unused":0},{"code":"/W","description":"Local de serviço meteorológico","tocall":"PW","unused":0},{"code":"/X","description":"Helicóptero","tocall":"PX","unused":0},{"code":"/Y","description":"Veleiro, barco a vela","tocall":"PY","unused":0},{"code":"/Z","description":"Bandeira do Windows","tocall":"PZ","unused":0},{"code":"/[","description":"Humano","tocall":"HS","unused":0},{"code":"/\\","description":"Triângulo de DF (orientação)","tocall":"HT","unused":0},{"code":"/]","description":"Caixa de correio, Correios, carta","tocall":"HU","unused":0},{"code":"/^","description":"Avião grande, aeronave grande","tocall":"HV","unused":0},{"code":"/_","description":"Estação meteorológica","tocall":"HW","unused":0},{"code":"/`","description":"Antena parabólica satelital","tocall":"HX","unused":0},{"code":"/a","description":"Ambulância","tocall":"LA","unused":0},{"code":"/b","description":"Bicicleta","tocall":"LB","unused":0},{"code":"/c","description":"Posto de comando de incidentes","tocall":"LC","unused":0},{"code":"/d","description":"Posto de bombeiros, corpo de bombeiros","tocall":"LD","unused":0},{"code":"/e","description":"Cavalo, equestre","tocall":"LE","unused":0},{"code":"/f","description":"Carro de bombeiros, caminhão de bombeiros","tocall":"LF","unused":0},{"code":"/g","description":"Planador","tocall":"LG","unused":0},{"code":"/h","description":"Hospital","tocall":"LH","unused":0},{"code":"/i","description":"IOTA, Ilhas no Ar, Islands on the Air","tocall":"LI","unused":0},{"code":"/j","description":"Jeep","tocall":"LJ","unused":0},{"code":"/k","description":"Caminhonete","tocall":"LK","unused":0},{"code":"/l","description":"Notebook, laptop","tocall":"LL","unused":0},{"code":"/m","description":"Repetidora Mic-E","tocall":"LM","unused":0},{"code":"/n","description":"Nó, alvo","tocall":"LN","unused":0},{"code":"/o","description":"Centro de operações de emergência","tocall":"LO","unused":0},{"code":"/p","description":"Cachorro","tocall":"LP","unused":0},{"code":"/q","description":"Grid square 2 por 2","tocall":"LQ","unused":0},{"code":"/r","description":"Torre repetidora","tocall":"LR","unused":0},{"code":"/s","description":"Lancha, embarcação a motor, barco","tocall":"LS","unused":0},{"code":"/t","description":"Parada para caminhoneiros","tocall":"LT","unused":0},{"code":"/u","description":"Caminhão","tocall":"LU","unused":0},{"code":"/v","description":"Van","tocall":"LV","unused":0},{"code":"/w","description":"Estação de água","tocall":"LW","unused":0},{"code":"/x","description":"X / Unix","tocall":"LX","unused":0},{"code":"/y","description":"Casa, antena yagi","tocall":"LY","unused":0},{"code":"/z","description":"Abrigo","tocall":"LZ","unused":0},{"code":"/{","description":"","tocall":"J1","unused":1},{"code":"/|","description":"TNC Stream Switch","tocall":"J2","unused":1},{"code":"/}","description":"","tocall":"J3","unused":1},{"code":"/~","description":"TNC Stream Switch","tocall":"J4","unused":1},{"code":"","description":"","tocall":"Skip1","unused":1},{"code":"","description":"Version","tocall":"Skip2","unused":1},{"code":"\\!","description":"Emergência","tocall":"OB","unused":0},{"code":"\\\"","description":"","tocall":"OC","unused":1},{"code":"\\#","description":"Digipeater, estrela verde","tocall":"OD","unused":0},{"code":"\\$","description":"Banco ou caixa automático","tocall":"OE","unused":0},{"code":"\\%","description":"","tocall":"OF","unused":1},{"code":"\\&","description":"Estação gateway","tocall":"OG","unused":0},{"code":"\\'","description":"Batida / local de acidente","tocall":"OH","unused":0},{"code":"\\(","description":"Nublado","tocall":"OI","unused":0},{"code":"\\)","description":"Firenet MEO, Obsrevação da Terra MODIS","tocall":"OJ","unused":0},{"code":"\\*","description":"Neve","tocall":"OK","unused":0},{"code":"\\+","description":"Igreja","tocall":"OL","unused":0},{"code":"\\,","description":"Escoteiros (meninas), escoteiras","tocall":"OM","unused":0},{"code":"\\-","description":"Casa, antena para HF","tocall":"ON","unused":0},{"code":"\\.","description":"Ambíguo, interrogação dentro de círculo","tocall":"OO","unused":0},{"code":"\\/","description":"Ponto de destino","tocall":"OP","unused":0},{"code":"\\0","description":"Círculo, IRLP / Echolink/WIRES","tocall":"A0","unused":0},{"code":"\\1","description":"","tocall":"A1","unused":1},{"code":"\\2","description":"","tocall":"A2","unused":1},{"code":"\\3","description":"","tocall":"A3","unused":1},{"code":"\\4","description":"","tocall":"A4","unused":1},{"code":"\\5","description":"","tocall":"A5","unused":1},{"code":"\\6","description":"","tocall":"A6","unused":1},{"code":"\\7","description":"","tocall":"A7","unused":1},{"code":"\\8","description":"802.11 WiFi ou outro nó de rede","tocall":"A8","unused":0},{"code":"\\9","description":"Posto de combustível","tocall":"A9","unused":0},{"code":"\\:","description":"Granizo","tocall":"NR","unused":0},{"code":"\\;","description":"Parque, área de picnic, banco","tocall":"NS","unused":0},{"code":"\\<","description":"Uma bandeira vermelha, bandeira vermelha única","tocall":"NT","unused":0},{"code":"\\=","description":"","tocall":"NU","unused":1},{"code":"\\>","description":"Carro vermelho","tocall":"NV","unused":0},{"code":"\\?","description":"Quiosque de informações","tocall":"NW","unused":0},{"code":"\\@","description":"Fucarão, tempestade tropical","tocall":"NX","unused":0},{"code":"\\A","description":"Caixa branca","tocall":"AA","unused":0},{"code":"\\B","description":"Neve e vento","tocall":"AB","unused":0},{"code":"\\C","description":"Guarda Costeira","tocall":"AC","unused":0},{"code":"\\D","description":"Garoa","tocall":"AD","unused":0},{"code":"\\E","description":"Fumaça, chaminé","tocall":"AE","unused":0},{"code":"\\F","description":"Chuva congelante","tocall":"AF","unused":0},{"code":"\\G","description":"Aguaceiro de neve","tocall":"AG","unused":0},{"code":"\\H","description":"Névoa seca","tocall":"AH","used":0},{"code":"\\I","description":"Aguaceiro","tocall":"AI","unused":0},{"code":"\\J","description":"Raio","tocall":"AJ","unused":0},{"code":"\\K","description":"HT Kenwood","tocall":"AK","unused":0},{"code":"\\L","description":"Farol","tocall":"AL","unused":0},{"code":"\\M","description":"","tocall":"AM","unused":1},{"code":"\\N","description":"Bóia de navegação","tocall":"AN","unused":0},{"code":"\\O","description":"Foguete","tocall":"AO","unused":0},{"code":"\\P","description":"Estacionamento","tocall":"AP","unused":0},{"code":"\\Q","description":"Terremento","tocall":"AQ","unused":0},{"code":"\\R","description":"Restaurante","tocall":"AR","unused":0},{"code":"\\S","description":"Satélite","tocall":"AS","unused":0},{"code":"\\T","description":"Tempestade de raios","tocall":"AT","unused":0},{"code":"\\U","description":"Ensolarado","tocall":"AU","unused":0},{"code":"\\V","description":"VORTAC, Auxílio de navegaçã","tocall":"AV","unused":0},{"code":"\\W","description":"Local do NWS (National Weather Service)","tocall":"AW","unused":0},{"code":"\\X","description":"Farmácia","tocall":"AX","unused":0},{"code":"\\Y","description":"","tocall":"AY","unused":1},{"code":"\\Z","description":"","tocall":"AZ","unused":1},{"code":"\\[","description":"Nuvem muro, parece de nuvens, wall cloud","tocall":"DS","unused":0},{"code":"\\\\","description":"","tocall":"DT","unused":1},{"code":"\\]","description":"","tocall":"DU","unused":1},{"code":"\\^","description":"Avião, aeronave","tocall":"DV","unused":0},{"code":"\\_","description":"Estação meteorológica","tocall":"DW","unused":0},{"code":"\\`","description":"Chuva","tocall":"DX","unused":0},{"code":"\\a","description":"Diamante vermelho, losango vermelho","tocall":"SA","unused":0},{"code":"\b","description":"Tempestade de areia, nuvem de poeira","tocall":"SB","unused":0},{"code":"\\c","description":"Triângulo CD, RACES, CERTS, SATERN","tocall":"SC","unused":0},{"code":"\\d","description":"Local de DX","tocall":"SD","unused":0},{"code":"\\e","description":"Saraiva","tocall":"SE","unused":0},{"code":"\f","description":"Nuvem funil","tocall":"SF","unused":0},{"code":"\\g","description":"Duas bandeiras vermelhas, bandeira vermelha dupla","tocall":"SG","unused":0},{"code":"\\h","description":"Loja, mercado","tocall":"SH","unused":0},{"code":"\\i","description":"Caixa preta, ponto de interesse","tocall":"SI","unused":0},{"code":"\\j","description":"Área em obras, escavadora","tocall":"SJ","unused":0},{"code":"\\k","description":"SUV, ATV, veículo utilitário esportivo","tocall":"SK","unused":0},{"code":"\\l","description":"","tocall":"SL","unused":1},{"code":"\\m","description":"Placa, tela com três dígitos","tocall":"SM","unused":0},{"code":"\n","description":"Triângulo vermelho","tocall":"SN","unused":0},{"code":"\\o","description":"Círculo pequeno","tocall":"SO","unused":0},{"code":"\\p","description":"Parcialmente nublado","tocall":"SP","unused":0},{"code":"\\q","description":"","tocall":"SQ","unused":1},{"code":"\r","description":"Banheiros, WC, toalete","tocall":"SR","unused":0},{"code":"\\s","description":"Navio, embarcação, barco","tocall":"SS","unused":0},{"code":" ","description":"Tornado","tocall":"ST","unused":0},{"code":"\\u","description":"Caminhão","tocall":"SU","unused":0},{"code":"","description":"Van","tocall":"SV","unused":0},{"code":"\\w","description":"Enchente","tocall":"SW","unused":0},{"code":"\\x","description":"","tocall":"SX","unused":1},{"code":"\\y","description":"Skywarn","tocall":"SY","unused":0},{"code":"\\z","description":"Abrigo","tocall":"SZ","unused":0},{"code":"\\{","description":"Neblina","tocall":"Q1","unused":0},{"code":"\\}","description":"","tocall":"Q3","unused":1}];

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
        var tooltipText = "<p><b>Código: </b>"
            + "<code>" + symbol.code + "</code></p>\n"
            + "<p><b>Descrição: </b>"
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
