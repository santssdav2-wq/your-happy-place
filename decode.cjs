const fs = require('fs');
const s = fs.readFileSync('src/routes/__root.tsx','utf8');
const m = s.match(/var u_6=atob\("([^"]+)"\)/);
if (!m) { console.log('no match'); process.exit(0); }
const u = Buffer.from(m[1],'base64').toString('binary');
const arr = [];
for (let i=0;i<u.length;i++) arr.push(u.charCodeAt(i)&255);
const x = arr[0];
const key = arr.slice(1,1+x);
const q = arr.slice(1+x);
const dec = q.map((b,i)=>b^key[i%x]);
let str = '';
for (let i=0;i<dec.length;i++) str += String.fromCharCode(dec[i]&255);
console.log(decodeURIComponent(escape(str)));
