var content = document.querySelector('#Content').innerText;
var minus = document.querySelector('#minusContent');
minus.addEventListener('click',()=>{
    var num = parseInt(content);
    num = num-1;
    content = num;
    document.querySelector('#Content').innerText = num;
    console.log(num);
})

var plus = document.querySelector('#plusContent');
plus.addEventListener('click',()=>{
    var num2 = parseInt(content);
    num2 = num2+1;
    content = num2;
    document.querySelector('#Content').innerText = num2;
    console.log(num2);
})