const opsi = document.querySelectorAll('.options .opsi');
const hide = document.querySelector('.kotak-dm #hidden');
const opsi1 = document.getElementById('opsi1');
const opsi2 = document.getElementById('opsi2');
const opsi3 = document.getElementById('opsi3');
const opsi4 = document.getElementById('opsi4');
const opsi5 = document.getElementById('opsi5');
const opsi6 = document.getElementById('opsi6');
const box = document.querySelector('.box');
const idpemain = document.querySelector('.box .idpemain');
const jumlahdm = document.querySelector('.box .jumlahdm');
const beli = document.querySelector('.box .tblconfirm #beli');

for (var i = 0; i < opsi.length; i++) {
  opsi[i].setAttribute('onclick', 'clickfungsi(this)');
}

function clickfungsi(pilihan){
  let pil = pilihan.textContent;
  hide.value = pil;
  if (pilihan.textContent == hide.value) {
    opsi1.classList.remove('active');
    opsi2.classList.remove('active');
    opsi3.classList.remove('active');
    opsi4.classList.remove('active');
    opsi5.classList.remove('active');
    opsi6.classList.remove('active');
    pilihan.classList.add('active');
  }
}



document.querySelector('.btnbeli a').onclick = ()=>{
  if (document.querySelector('.kotak-input .input      form input').value == ""){
    alert('please your id')
  }else{
  
    if (hide.value == "") {
      alert('please choose your diamond');
    }else{
      idpemain.textContent = "id pemain:" + document.querySelector('.kotak-input .input form input').value;
      jumlahdm.textContent = "Jumlah diamond:" + hide.value;
      box.style.display = "block";
      beli.setAttribute("href", "https://wa.me/628989181940?text=Saya%20tertarik%20membeli%20diamond%20sebesar%20"+hide.value+"%20dengan%20id%20"+document.querySelector('.kotak-input .input form input').value);
    }
  
  }
  
}