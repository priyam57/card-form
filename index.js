// document.querySelector('.card-number-input').oninput = () =>{
//     document.querySelector('.card-number-box').innerText = document.querySelector('.card-number-input').value;
// }
document.querySelector('#cardholder').oninput = () =>{
    document.querySelector(".card-holder-name").innerText=document.querySelector("#cardholder").value;
} 

document.querySelector('#card-number').oninput = () =>{
    document.querySelector(".card-number-box").innerText=document.querySelector("#card-number").value;
} 
// month
document.querySelector('#month').oninput = () =>{
    document.querySelector(".exp-month").innerText=document.querySelector("#month").value;
} 
// year
document.querySelector('#year').oninput = () =>{
    document.querySelector(".exp-year").innerText=document.querySelector("#year").value;
} 
// new function
document.querySelector('.cvv').onmouseenter = () =>{
    this.innerText="klsnlknlds";
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}

document.querySelector('.cvv').onmouseleave = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}

document.querySelector('.cvv').oninput = () =>{
    
    document.querySelector('.cvv-box').innerText = document.querySelector('.cvv').value;
}
