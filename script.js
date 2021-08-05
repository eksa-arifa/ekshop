const bars = document.querySelector('.wrapper .bars');
const menu = document.querySelector('.wrapper ul');
const produk = document.querySelector('.wrapper .list .produk #tbl');
const hidden = document.querySelector('.wrapper .list .produk');

bars.onclick = ()=>{
  menu.classList.toggle('active');
}

produk.onclick = ()=>{
  hidden.classList.toggle('active');
}