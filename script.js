document.getElementById("year").textContent=new Date().getFullYear();

const whatsappNumber="8801XXXXXXXXX";

function orderProduct(productName){
 const message=`আসসালামু আলাইকুম, আমি "${productName}" অর্ডার করতে চাই।`;
 window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,"_blank");
}

function sendMessage(){
 const message="আসসালামু আলাইকুম, MeSaMi সম্পর্কে জানতে চাই।";
 window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,"_blank");
}

function callUs(){window.location.href="tel:+8801XXXXXXXXX";}

document.addEventListener("click",function(event){
 const button=event.target.closest(".ripple");
 if(!button)return;
 const circle=document.createElement("span");
 const diameter=Math.max(button.clientWidth,button.clientHeight);
 const radius=diameter/2;
 circle.style.width=circle.style.height=`${diameter}px`;
 const rect=button.getBoundingClientRect();
 circle.style.left=`${event.clientX-rect.left-radius}px`;
 circle.style.top=`${event.clientY-rect.top-radius}px`;
 circle.classList.add("ripple-effect");
 const oldRipple=button.querySelector(".ripple-effect");
 if(oldRipple)oldRipple.remove();
 button.appendChild(circle);
});