const printer = require("printer");

function printMessage(message) {
  const printers = printer.getPrinters();

  const selectedPrinter = printers.find((printer) => printer.name === "LPT1");

  if (selectedPrinter) {
    printer.printDirect({
      data: message,
      printer: selectedPrinter.name,
      type: "RAW",
      success: function (jobID) {
        console.log(`Wysłano wydruk z ID: ${jobID}`);
      },
      error: function (err) {
        console.error(`Błąd podczas drukowania: ${err}`);
      },
    });
  } else {
    console.error("Drukarka nie została znaleziona.");
  }
}

printMessage("CZEŚĆ");
