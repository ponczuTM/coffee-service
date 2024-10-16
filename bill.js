const printer = require('printer');

// Funkcja do drukowania tekstu
function printText(text) {
    // Sprawdź dostępne drukarki
    const printers = printer.getPrinters();
    
    // Wybierz drukarkę, która odpowiada Twoim potrzebom
    const selectedPrinter = printers.find(printer => printer.name.includes('PrinterPort (LPT1)'));
    
    if (!selectedPrinter) {
        console.error('Drukarka nie została znaleziona.');
        return;
    }

    // Wydrukuj tekst
    printer.printDirect({
        data: text,
        printer: selectedPrinter.name, // Użyj nazwy drukarki
        type: 'RAW', // Typ danych (RAW)
        success: function (jobID) {
            console.log(`Zadanie wydruku o ID: ${jobID} zostało dodane.`);
        },
        error: function (err) {
            console.error(`Błąd podczas drukowania: ${err}`);
        }
    });
}

// Wywołaj funkcję z tekstem do wydruku
printText('CZEŚĆ');
