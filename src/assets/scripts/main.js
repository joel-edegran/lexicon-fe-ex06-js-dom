import '/assets/styles/main.styl'

// --- STARTDATA ---
const produkter = [
    { id: 1, namn: "Kodnings-kaffemugg", pris: 149, kategori: "Merch" },
    { id: 2, namn: "Mekaniskt Tangentbord", pris: 1299, kategori: "Hårdvara" },
    { id: 3, namn: "Ergonomisk Mus", pris: 799, kategori: "Hårdvara" },
    { id: 4, namn: "Klistermärke 'JS is King'", pris: 29, kategori: "Merch" },
    { id: 5, namn: "Skärmrengöring", pris: 89, kategori: "Tillbehör" },
    { id: 6, namn: "4K Webbkamera", pris: 1495, kategori: "Hårdvara" },
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
const produktnamnVersaler = produkter.map(produkt => ({
    "Produktnamn (Versaler)": produkt.namn?.toUpperCase() || "NAMN SAKNAS"
}));
console.table(produktnamnVersaler);

// 3. .reduce() för totalsumman:
const totalsumma = produkter.reduce(
    (summa, produkt) => summa + (produkt.pris || 0), 0
);
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

// Caching the DOM
const d = document;

// Using getElementById for optimal performance when selecting elements by ID
const knapp = d.getElementById('btn-visa');
const lista = d.getElementById('produkt-lista');

knapp.addEventListener('click', listaProdukter);

function listaProdukter() {
    lista.replaceChildren();
    produkter.forEach(produkt => {
        const produktnamn = typeof produkt.namn === 'string' && produkt.namn.trim() !== '' 
            ? produkt.namn.trim() 
            : 'Produktnamn saknas';
        const pris = Number.isFinite(produkt.pris) && produkt.pris >= 0 
            ? `${produkt.pris} kr` 
            : 'Pris saknas';
        const newListItem = d.createElement('li');
        newListItem.textContent = `${produktnamn} - ${pris}`;

        const taBortKnapp = d.createElement('button');
        taBortKnapp.textContent = 'Ta bort';
        taBortKnapp.classList.add('btn-ta-bort');

        taBortKnapp.addEventListener('click', (e) => {
            e.target.parentElement.remove();
        });

        newListItem.appendChild(taBortKnapp);
        lista.appendChild(newListItem);
    });
}