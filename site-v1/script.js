/* Mesaj care apare pana cand pagina se incarca(fiserele externe, DOM este deja incarcat) */
document.addEventListener("DOMContentLoaded" , () => {
	let p = document.createElement("p");
	let div = document.createElement("div");
	div.classList.add("pre-incarcat");
	
	p.innerHTML = "Pagina este in curs de incarcare iar unele functii precum butoane s-ar putea sa nu functioneze inca!  <br>" +
	"Acest mesaj dispare automat cand pagina este complet incarcata!";
	div.append(p);
	document.body.prepend(div);	
});
/* Mesaj care apare pana cand pagina se incarca(fiserele externe, DOM este deja incarcat) */


window.onload=function(){

/* Nav bar for mobile */
const navbuton = document.querySelector(".navbar-toggler-icon");
const meniu = document.querySelector("#navbarSupportedContent")
const liste = document.querySelectorAll(".nav-item");

	for (let i = 0; i < liste.length; i++) {
		liste[i].addEventListener("click", function() {
		meniu.style.display = 'none';
		});
	}

navbuton.addEventListener("click", () => {
	if (meniu.style.display === "none") {
		meniu.style.display = 'block';
		}
		else {
		meniu.style.display = 'none';
		}
});
/* Nav bar for mobile */

/* Top Up Button */
let docHeight, scrollPosition, winHeight, scrollBottom, footerHeight, footerPossition, topUpHeight;
let topUp = document.querySelector("#top-up");
let footer = document.querySelector("footer");

topUp.addEventListener("click", () =>{
	window.scrollTo(0,0);
});


/* TopUP color change at scroll in footer */
window.addEventListener("scroll", () => {
	//inaltimea totata a documentului
	docHeight = document.documentElement.scrollHeight;
	//pozitia scrollbar
	scrollPosition = document.documentElement.scrollTop;
	//inaltimea  ferestrei
	winHeight = document.documentElement.clientHeight;
	//scrollbar bottom position
	scrollBottom = docHeight - winHeight;
	//inaltimea footerului
	footerHeight = footer.offsetHeight;
	//inaltimea top-up 
	topUpHeight = topUp.offsetHeight;	
	//positia footer fata de top document la scroll + inaltimea butonului
	footerPossition = scrollBottom - footerHeight + topUpHeight;	
/*
	topUp.innerHTML = "doc height " + docHeight + "<br>" 
			+	"scroll pos " +  scrollPosition + "<br>" 
			+	"win height " + winHeight + "<br>" 
			+	"scroll bottom " + scrollBottom + "<br>"
			+	"f height " + footerHeight + "<br>"
			+	"f pos " + footerPossition + "<br>"
			+	"tup height " + x + "<br>";
*/			

	if (scrollPosition > winHeight){
		topUp.removeAttribute("hidden");
		topUp.classList.add("negru");
		topUp.classList.remove("alb");
		if (scrollPosition > footerPossition) {
			topUp.classList.remove("negru");
			topUp.classList.add("alb");
		}
	}
	
	else {
		$("#top-up").attr("hidden", "");
	}
});
/* TopUP color change at scroll in footer */
/* Top Up Button */

document.querySelector(".pre-incarcat").remove(); //Pagina este complet incarcata iar mesajul ca acesata pagina este in curs de incarcare va disparea 
}