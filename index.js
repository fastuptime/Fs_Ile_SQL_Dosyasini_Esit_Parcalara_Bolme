const fs = require('fs');

const readStream = fs.createReadStream('data.sql'); // 3.5 GB MAIN FILE


const writeStream1 = fs.createWriteStream('data1.sql'); // 1.2 GB
const writeStream2 = fs.createWriteStream('data2.sql'); // 1.2 GB
const writeStream3 = fs.createWriteStream('data3.sql'); // 1.2 GB

let i = 1;

readStream.on('data', (chunk) => {
    switch (i) {
        case 1:
        writeStream1.write(chunk);
        break;
        case 2:
        writeStream2.write(chunk);
        break;
        case 3:
        writeStream3.write(chunk);
        break;
    }
    
    i++;
    
    if (i > 3) {
        i = 1;
    }
});
