const printer = require('printer');

const printerName = 'PrinterPort (LPT1)'; 

const textToPrint = 'CZEŚĆ';

function printText(text) {
    printer.printDirect({
        data: text,
        printer: printerName, 
        type: 'RAW',
        success: function (jobID) {
            console.log(`Zadanie wydruku zostało wysłane. ID: ${jobID}`);
        },
        error: function (err) {
            console.error(`Błąd podczas wysyłania zadania wydruku: ${err}`);
        }
    });
}

printText(textToPrint);