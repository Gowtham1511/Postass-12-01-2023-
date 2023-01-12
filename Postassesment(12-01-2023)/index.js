
const csv = require('csv-parser')
const fs = require('fs')
const Studentarr = [];

fs.createReadStream('./data.csv')
    .pipe(csv())
    .on('data', (data) => Studentarr.push(data))
    .on('end', () => {

        Studentarr.sort(function (a, b) { return a.Age - b.Age });
        console.log("The Sorted student array :");
        console.log( Studentarr)
        const total = Studentarr.reduce((acc, curr) => acc + Number(curr.Grade), 0);
        const avg = total / Studentarr.length;
        console.log(avg);

    });


