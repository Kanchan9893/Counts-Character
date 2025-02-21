let inputtext=document.getElementById('input');
let count=document.getElementById('count');

inputtext.addEventListener('input', () =>{
    count.textContent=inputtext.value.length;
})
