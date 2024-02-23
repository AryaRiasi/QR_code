
const btn = document.querySelector( 'form button')
const input = document.querySelector( '.input')
const imgbox=document.querySelector('.img')
const qr = document.querySelector('.qr-pic')
btn.addEventListener('click', ()=>{
let inputval = input.value;
if (!inputval) {
    return alert("please check your input")
}
imgbox.classList.remove('hidden')
qr.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputval}`
})