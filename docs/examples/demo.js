// ==========================================================================
// STARTUP: Koppla lyssnare till huvudknapparna när sidan laddas
// ==========================================================================
document.querySelector('#btn-demo1').addEventListener('click', runDemo1);
document.querySelector('#btn-demo2').addEventListener('click', runDemo2);
document.querySelector('#btn-demo3').addEventListener('click', runDemo3);
document.querySelector('#btn-demo4').addEventListener('click', runDemo4);

// Vi förbereder också lyssnaren för testknappen i Demo 4 direkt från start
const testKnapp = document.querySelector('#btn-target-demo');
testKnapp.addEventListener('click', (e) => {
    console.log("Händelse-objektet (e) fångat! e.target är:", e.target);
    
    // Ändra stilen och texten på knappen som klickades
    e.target.style.backgroundColor = '#4CAF50'; // Grön
    e.target.style.color = 'white';
    e.target.textContent = 'DOM Modifierad via e.target!';
});


// ==========================================================================
// DEMO 1: Modern Datalagring & Block-Scope
// ==========================================================================
function runDemo1() {
    console.clear();
    console.log("--- DEMO 1: Scope ---");

    const maxPoang = 100;
    let nuvarandePoang = 0;

    if (true) {
        let temporarBonus = 50;
        nuvarandePoang += temporarBonus;
        console.log(`Inuti blocket: Poäng är ${nuvarandePoang}`);
    }
    
    // Dölj testknappen från demo 4 om man växlar tillbaka hit
    testKnapp.style.display = 'none';
}


// ==========================================================================
// DEMO 2: Funktioner - Från 4 rader till 1 (Implicit Return)
// ==========================================================================
function runDemo2() {
    console.clear();
    console.log("--- DEMO 2: Funktioner ---");

    // Traditionell
    function kvadratTraditionell(nummer) {
        const resultat = nummer * nummer;
        return resultat;
    }

    // Modern Arrow Function
    const kvadratModern = nummer => nummer * nummer;

    console.log(`Traditionell (4 rader): ${kvadratTraditionell(5)}`);
    console.log(`Modern (1 rad): ${kvadratModern(5)}`);
    
    testKnapp.style.display = 'none';
}


// ==========================================================================
// DEMO 3: Funktionell programmering med Array-metoder
// ==========================================================================
function runDemo3() {
    console.clear();
    console.log("--- DEMO 3: Array-metoder ---");

    const studenter = [
        { namn: "Anna", poang: 45 },
        { namn: "Björn", poang: 85 },
        { namn: "Cecilia", poang: 92 },
        { namn: "David", poang: 60 }
    ];

    const vgStudenter = studenter.filter(s => s.poang >= 80);
    console.log("Studenter med VG (poäng >= 80):", vgStudenter);

    const skrikandeNamn = studenter.map(s => s.namn.toUpperCase());
    console.log("Alla namn i versaler:", skrikandeNamn);
    
    testKnapp.style.display = 'none';
}


// ==========================================================================
// DEMO 4: DOM-manipulation & Event Handling
// ==========================================================================
function runDemo4() {
    console.clear();
    console.log("--- DEMO 4: DOM-manipulation ---");
    console.log("En ny testknapp har dykt upp på sidan. Testa att klicka på den!");

    // Gör testknappen synlig
    testKnapp.style.display = 'block';
    
    // Återställ knappens utseende till originalet om man kör om demot
    testKnapp.style.backgroundColor = '';
    testKnapp.style.color = '';
    testKnapp.textContent = 'Klicka på mig för att testa DOM-ändring!';
}