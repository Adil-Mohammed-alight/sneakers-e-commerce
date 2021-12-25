const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const num = document.querySelector(".num");
const qt = document.querySelector(".qt")

let a=1; 
plus.addEventListener("click",function(){
	 a++;
	 a=(a<10)? "0"+a:a;
	 num.innerHTML=a;
	 qt.innerHTML=a;
	 
	 
 });

 minus.addEventListener("click",function(){
	if(a>1){
		a--;
		a=(a<10) ? "0" + a:a;
		num.innerHTML=a;
		qt.innerHTML=a;
	}
	
	
});
const cart = document.querySelector(".cart-nav");
const checkout = document.querySelector(".checkout");

cart.addEventListener("click",function(){
	if(checkout.style.display=="none"){
		checkout.style.display="block";
	}else{
		checkout.style.display="none";
	}
		
    
	
	
});
const navmenu = document.querySelector("#nav-menu");
const menumedia = document.querySelector(".menu-media");

navmenu.addEventListener("click",function() 
 {
	 if(menumedia.style.display=="none"){
		 menumedia.style.display="block";
	 }else{
		menumedia.style.display="none";
	 }
});

const close2 = document.querySelector("#close");
close2.addEventListener("click",function() {
	menumedia.style.display="none"
	
});
 


