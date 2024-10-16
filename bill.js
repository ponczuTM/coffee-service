const PDFDocument = require('pdfkit');
const fs = require('fs');
const { exec } = require('child_process');

const doc = new PDFDocument();
const filename = 'output.pdf';
doc.pipe(fs.createWriteStream(filename));

doc.fontSize(25).text('CZEŚĆ', 100, 100);
doc.end();

doc.on('finish', () => {

    exec(`start acrord32.exe /p /h ${filename}`, (err) => {
        if (err) {
            console.error(`Błąd podczas próby drukowania: ${err}`);
        } else {
            console.log('Dokument PDF został wydrukowany.');
        }
    });
});