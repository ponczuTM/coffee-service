const { exec } = require("child_process");

function printText(text) {
  const command = `echo ${text} > LPT1`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Błąd podczas drukowania: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Błąd: ${stderr}`);
      return;
    }
    console.log(`Wydrukowano: ${stdout}`);
  });
}

printText("CZEŚĆ");
