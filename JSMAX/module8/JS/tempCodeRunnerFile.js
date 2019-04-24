const inputs = document.querySelectorAll("input");

form.addEventListener('click', write);

function write(ev){
    ev.preventDefault();
    let arr = [...inputs];
     console.log(arr);
    
}