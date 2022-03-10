// file system

const fs = require('fs');
// console.log(fs);

// // fs.mkdir('Dogs', {recursive: true}, (err)=>{
// //     if(err) throw err; 
// //     console.log('in the callback'); 
// // });

// fs.mkdirSync  ('Cats'); //this is synchronous operation which means all the code will be stoped until this code is completed
// console.log('i come after mkdir in the file');

const folderName = process.argv[2] || 'project';

fs.mkdirSync(folderName);
fs.writeFileSync(`${folderName}/index.html`);
fs.writeFileSync(`${folderName}/app.js`);
fs.writeFileSync(`${folderName}/style.css`);



