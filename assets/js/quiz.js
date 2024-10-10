let question1 = prompt('HTML’in açılımı nedir? a) Hyper Text Markup Language   b) Home Tool Markup Language   c) Hyperlinks Text Markup Language    d) Hyper Tool Markup Language');
let question2 = prompt('Bir HTML belgesinde başlık etiketi (heading) nasıl yazılır?     a) <head>       b) <title>       c) <h1>      d) <header></header>');
let question3 = prompt('HTML’de bir bağlantı (link) oluşturmak için hangi etiket kullanılır?    a) <link>    b) <a>    c) <href>    d) <nav>');
let question4 = prompt('CSS\'te bir öğenin yazı tipi (font) rengini nasıl değiştirirsiniz?    a) font-color: blue;    b) color: blue;    c) text-color: blue;    d) font-style: blue;');
let question5 = prompt('Bir HTML belgesinde resim eklemek için hangi etiket kullanılır?    a) <img>    b) <src>    c) <image>    d) <picture>');
let question6 = prompt('CSS\'te kutu modeli (box model) nedir?    a) İçerik, padding, border ve margin’i kapsayan bir yapı    b) Sadece border ve margin’i kapsayan bir yapı    c) Padding ve içerikten oluşan bir yapı    d) Sadece içerik ve margin’i kapsayan bir yapı');
let question7 = prompt('HTML\'de bir form elemanı oluşturmak için hangi etiket kullanılır?    a) <form>    b) <input>    c) <field>    d) <textarea>');
let question8 = prompt('Bir öğeyi yatay olarak ortalamak için CSS\'te hangi özellik kullanılır?    a) align-content: center;    b) text-align: center;    c) justify-content: center;    d) margin: 0 auto;');
let question9 = prompt('Bir HTML belgesinde tablo oluşturmak için hangi etiket kullanılır?    a) <table>    b) <tr>    c) <td>    d) Hepsi');
let question10 = prompt('CSS’te "display: flex;" ne işe yarar?    a) Bir öğenin görünürlüğünü gizler    b) Öğeleri yan yana yerleştirir ve esnek bir düzen oluşturur    c) Sayfa yapısını sabitler    d) Bir öğenin konumunu değiştirir');

if(question1 === 'a'){
  console.log('Doğru');
} else {
  console.log('Yanlış. Doğru cevap a şıkkı. Hyper Text Markup Language');
}

if(question2 === 'c'){
  console.log('Doğru');
} else {
  console.log('Yanlış. Doğru cevap c şıkkı. <h1>');
}

if(question3 === 'b'){
  console.log('Doğru');
} else {
  console.log('Yanlış. Doğru cevap b şıkkı. <a>');
}

if(question4 === 'b'){
  console.log('Doğru');
} else {
  console.log('Yanlış. Doğru cevap b şıkkı. color: blue;');
}

if(question5 === 'a'){
  console.log('Doğru');
} else {
  console.log('Yanlış. Doğru cevap a şıkkı. <img>');
}

if(question6 === 'a'){
  console.log('Doğru');
} else {
  console.log('Yanlış. Doğru cevap a şıkkı. İçerik, padding, border ve margin’i kapsayan bir yapı');
}

if(question7 === 'a'){
  console.log('Doğru');
} else {
  console.log('Yanlış. Doğru cevap a şıkkı. <form>');
}

if(question8 === 'd'){
  console.log('Doğru');
} else {
  console.log('Yanlış. Doğru cevap d şıkkı. margin: 0 auto;');
}

if(question9 === 'd'){
  console.log('Doğru');
} else {
  console.log('Yanlış. Doğru cevap d şıkkı. Hepsi (Yani <table>, <tr>, <td>)');
}

if(question2 === 'b'){
  console.log('Doğru');
} else {
  console.log('Yanlış. Doğru cevap b şıkkı. Öğeleri yan yana yerleştirir ve esnek bir düzen oluşturur');
}