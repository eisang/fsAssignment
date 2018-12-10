var fs = require('fs');

// challenge 1

 let data = fs.readFileSync('./challenge1/info.txt', 'utf8');
 console.log(data);

 let asyncData = fs.readFile('./challenge1/info.txt', 'utf8',  (err, data) => {
   if (err) {
     throw err
   } else {
     console.log(data)
   }
});

 //challenge 2
 let names = ["messi", "ronaldo", "neymar"];
 fs.appendFileSync('./challenge2/info.txt', names);


fs.appendFile('./challenge2/info.txt', names, (err, data) => {
    if (err) {
       throw err;
    } else {
       console.log("it worked!")
      }
   });

   //challenge 3

 fs.renameSync('./challenge3/binfo.txt',  './challenge3/info.txt');

fs.rename('./challenge3/binfo.txt',  './challenge3/info.txt', (err, data) =>{
     if (err) {
         throw err;
      } else {
         console.log("file renamed")
      }
});


 //challenge 4
 //
 fs.mkdir('./challenge4/copyfolder', (err, data) => {
   if (err) {
       throw err;
    } else {
       fs.copyFileSync('./challenge4/info.txt', './challenge4/copyfolder/info.txt');
    }
 });

 //challenge 5
 let text = fs.readFileSync('./challenge5/info.txt','utf8');
 let newText =''
 console.log(text);
 for(let i =0; i < text.length; i++){
   if(text[i] ===  '-') {
     newText += ' ';
   } else {
     newText += text[i];
   }
 }

fs.writeFileSync('./challenge5/info.txt',newText);

    // challenge 6

let files = fs.readdirSync('./challenge6/');

let textFiles = files.filter(file => file.endsWith('.txt'));
console.log(textFiles);
