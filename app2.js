// Prototype,Ajax,Callback

const word=document.getElementById("word");

const form=document.getElementById("translate-form");

const cevirilenKelime=document.getElementById("outputWord");

let ceviri="";

form.addEventListener("keydown",changingValue);

function changingValue(){
    console.log(word.value);
}

// form.addEventListener("submit",function(e){

//     fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190206T062711Z.d8a70fce03da101c.7527c499c670a18077255cd20f4e1ebdf810a34b&text=${word.value}&lang=tr-en`)
//     .then(sonuc=>sonuc.json())
//     .then(sonuc=>{
//         ceviri=sonuc.text;
//         console.log(ceviri);
//         cevirilenKelime.innerHTML=ceviri;
//     });
//     e.preventDefault();
// })
form.onmouseup = function(){
    let s = document.getSelection();
    let r = s.getRangeAt(0);
    let x = s.toString()
    fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190206T062711Z.d8a70fce03da101c.7527c499c670a18077255cd20f4e1ebdf810a34b&text=${x}&lang=en-tr`)
    .then(sonuc=>sonuc.json())
    .then(sonuc=>{
        ceviri=sonuc.text;
        console.log(ceviri);
        cevirilenKelime.innerHTML=ceviri;
    });
    
}
