const word = "coding_dtp;";
const p = document.getElementById('word');
const cursor =  document.getElementById('cursor');

let initialIndex = 0;


setInterval(() => {
    if(initialIndex < word.length){
        const span = document.createElement('span');
        span.innerText = word.charAt(initialIndex);
        p.appendChild(span);
        initialIndex++;
    }else{
        p.innerHTML = '';
        initialIndex = 0;
    }
}, 500);


setInterval(()=>{
    cursor.classList.add('active');
    setTimeout(()=>{
        cursor.classList.remove('active');
    },250)
},500)

