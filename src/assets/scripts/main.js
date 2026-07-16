import '/assets/styles/main.css'

// --- STARTDATA ---
const produkter = [
    { id: 1, namn: "", pris: true, kategori: "Merch" },
    { id: 2, namn: 1, pris: "hej", kategori: "Hårdvara" },
    { id: 3, namn: "Ergonomisk Mus", pris: null, kategori: "Hårdvara" },
    { id: 4, namn: "Klistermärke 'JS is King'", pris: 29, kategori: "Merch" },
    { id: 5, namn: "Skärmrengöring", pris: undefined, kategori: "Tillbehör" },
    { id: 6, namn: "4K Webbkamera", pris: false, kategori: "Hårdvara" },
    { id: 7, namn: "Stilren Musmatta (Stor)", pris: 249, kategori: "Tillbehör" },
    { id: 8, namn: "Programmerar-hoodie", pris: 599, kategori: "Merch" },
    { id: 9, namn: "USB-C Hub (6-i-1)", pris: 449, kategori: "Hårdvara" },
    { id: 10, namn: "Blåljusglasögon", pris: 349, kategori: "Tillbehör" }
];

// ==========================================================================
// KOD FÖR NIVÅ 1 (Skriv ut i konsolen)
// ==========================================================================

// 1. .filter() för Hårdvara:
const hardvaruprodukter = produkter.filter(
    produkt => produkt.kategori?.toLocaleLowerCase() === 'hårdvara'
);
console.table(hardvaruprodukter);

// 2. .map() för VERSALER:
const produktnamnVersaler = produkter.map(produkt => {
    const namn = produkt?.namn;
    const harGiltigtNamn = typeof namn === 'string' && namn.trim() !== '';
    return {
        "Produktnamn (Versaler)": harGiltigtNamn
        ? namn.trim().toUpperCase()
        : "NAMN SAKNAS"
    };
});
console.table(produktnamnVersaler);

// 3. .reduce() för totalsumman:
const totalsumma = produkter.reduce((summa, produkt) => {
    const giltigtPris = Number.isFinite(produkt?.pris) && produkt.pris >= 0
        ? produkt.pris
        : 0;
    return summa + giltigtPris;
}, 0);
console.log(`Totalsumma: ${totalsumma} kr`);




// ==========================================================================
// KOD FÖR NIVÅ 2 (DOM-manipulation via knappen #btn-visa)
// ==========================================================================
// Tips: Hämta knappen och listan med document.querySelector().
// Lägg till en addEventListener('click', () => { ... }) på knappen.
// Loopa arrayen och använd document.createElement('li') för att bygga listan.






// ==========================================================================
// KOD FÖR NIVÅ 3 (Ta bort element med e.target)
// ==========================================================================
// Tips: När du skapar ditt <li>-element i Nivå 2, skapa samtidigt en knapp:
// const taBortKnapp = document.createElement('button');
// Ge den klassen taBortKnapp.classList.add('btn-ta-bort') för stilens skull.
// Lägg till addEventListener('click', (e) => { ... }) på den och använd e.target.


// Variabler
const d = document; // Cachar DOM:en
const knapp = d.getElementById('btn-visa'); // Använder getElementById för optimal prestanda vid selektion av element baserat på ID
const lista = d.getElementById('produkt-lista');
const taBortKnappKlass = 'btn-ta-bort'; // Inga magiska strängar

// Event-lyssnare
knapp.addEventListener('click', listaProdukter);
lista.addEventListener('click', hanteraListklick);

// Funktioner
function listaProdukter() {
    lista.replaceChildren();
    produkter.forEach(produkt => {
        const listpunkt = skapaProduktRad(produkt);
        lista.appendChild(listpunkt);
    });
}

function formateraProdukt(produkt) {
    const namn = typeof produkt.namn === 'string' && produkt.namn.trim() !== '' 
            ? produkt.namn.trim() 
            : 'Produktnamn saknas';
        
    const pris = Number.isFinite(produkt.pris) && produkt.pris >= 0 
        ? `${produkt.pris} kr` 
        : 'Pris saknas';
    
    return { namn, pris };
}

function skapaProduktRad(produkt) {
    const { namn, pris } = formateraProdukt(produkt);

    const listpunkt = d.createElement('li');
    listpunkt.textContent = `${namn} - ${pris}`;

    const taBortKnapp = d.createElement('button');
    taBortKnapp.textContent = 'Ta bort';
    taBortKnapp.classList.add(taBortKnappKlass);

    listpunkt.appendChild(taBortKnapp);

    return listpunkt;
}

function hanteraListklick(e) {
    if (e.target.classList.contains(taBortKnappKlass)) {
        e.target.parentElement.remove();
    }
}