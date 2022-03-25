//Meniul de informatii despre caracter
var mancare = 100;
var bautura = 100;
var lux = 1;
var sanatate = 100;
var timp = 24;
var experienta = 1;
var cunoastere = 1;
var bani = 3000;
var banicastig = 0;
var experienta_oferita = 0.1; //general, la munca

var timer = 1; //timpul necesar pt munca in secunde
var timp_alerta = 5000; //timp pt alerta care dispare automat in milisecunde
var zile = 0; //nr de zile in joc, deocamdata e folosit doar informativ (sterge-l si din functia dorm daca stergi asta)

//consum general la munca
var timp_consumat = 1; //pe orice actiune
var mancare_consumat = 7;
var bautura_conusmat = 10;
var sanatate_consumat = 1;
var lux_consumat = 1;
// LUX - trebuie facut 1 lux care creste pana la 30% la consum care dispare cand dormi
// LUX - lux2 care creste doar de la 30% la 100% care nu dispare cand dormi, dar pt unele platesti taxe

// Pentru functia munca
var procent_salar = 70/100;
var procent_experienta = 30/100; 
var muncax = [{ids:0, salar:1, expneed:1, expmax:100, knowneed:1, luxneed:1, exp_oferita:1, exp_munca:1, exp_munca_max:100},
			{ids:1, salar:2, expneed:1, expmax:200, knowneed:3, luxneed:3, exp_oferita:1, exp_munca:1, exp_munca_max:100},
			{ids:2, salar:4, expneed:1, expmax:300, knowneed:6, luxneed:5, exp_oferita:1, exp_munca:1, exp_munca_max:100},
			{ids:3, salar:7, expneed:1, expmax:400, knowneed:9, luxneed:9, exp_oferita:1, exp_munca:1, exp_munca_max:100},
			{ids:4, salar:11, expneed:1, expmax:500, knowneed:12, luxneed:15, exp_oferita:1, exp_munca:1, exp_munca_max:100},
			{ids:5, salar:16, expneed:1, expmax:600, knowneed:12, luxneed:25, exp_oferita:1, exp_munca:1, exp_munca_max:100},
			{ids:6, salar:22, expneed:1, expmax:700, knowneed:12, luxneed:40, exp_oferita:1, exp_munca:1, exp_munca_max:100},
			{ids:7, salar:30, expneed:1, expmax:800, knowneed:12, luxneed:65, exp_oferita:1, exp_munca:1, exp_munca_max:100},
			{ids:8, salar:38, expneed:1, expmax:900, knowneed:12, luxneed:80, exp_oferita:1, exp_munca:1, exp_munca_max:100},
			{ids:9, salar:50, expneed:1, expmax:1000, knowneed:12, luxneed:100, exp_oferita:1, exp_munca:1, exp_munca_max:100}
			];

// Pentru functia mancare_bautura ,luxgive se reseteaza la 0 dupa ce consumi hrana(ca sa nu iti ofere lux de fiecare data cand consumi)
var maxim_consum_pe_zi = []
var mancare_bautura = [{ids:"#idmax0", mancare:0, bautura:30, lux:0, luxgive:0, luxused:0, pret:0.5, max_pe_zi:999, refa_limita:999},
						{ids:"#idmax1", mancare:20, bautura:0, lux:0, luxgive:0, luxused:0, pret:1, max_pe_zi:999, refa_limita:999},
						{ids:"#idmax2", mancare:15, bautura:40, lux:1, luxgive:1, luxused:0, pret:2, max_pe_zi:1, refa_limita:1},
						{ids:"#idmax3", mancare:40, bautura:0, lux:1, luxgive:1, luxused:0, pret:5, max_pe_zi:1, refa_limita:1},
						{ids:"#idmax4", mancare:5, bautura:0, lux:3, luxgive:3, luxused:0, pret:9, max_pe_zi:1, refa_limita:1},
						{ids:"#idmax5", mancare:0, bautura:10, lux:3, luxgive:3, luxused:0, pret:9, max_pe_zi:1, refa_limita:1},
						{ids:"#idmax6", mancare:30, bautura:30, lux:7, luxgive:7, luxused:0, pret:25, max_pe_zi:1, refa_limita:1},
						{ids:"#idmax7", mancare:0, bautura:0, lux:0, luxgive:0, luxused:0, pret:1, max_pe_zi:1, refa_limita:1},
						{ids:"#idmax8", mancare:0, bautura:0, lux:0, luxgive:0, luxused:0, pret:1, max_pe_zi:1, refa_limita:1},
						{ids:"#idmax9", mancare:0, bautura:0, lux:0, luxgive:0, luxused:0, pret:1, max_pe_zi:1, refa_limita:1},
						{ids:"#idmax10", mancare:0, bautura:0, lux:0, luxgive:0, luxused:0, pret:1, max_pe_zi:1, refa_limita:1},
						{ids:"#idmax11", mancare:0, bautura:0, lux:0, luxgive:0, luxused:0, pret:1, max_pe_zi:1, refa_limita:1},
						{ids:"#idmax12", mancare:0, bautura:0, lux:0, luxgive:0, luxused:0, pret:1, max_pe_zi:1, refa_limita:1}
						];

/* Cumpara cartea */
var know = [{timp:4, cunoastere:3, pret:100},
			{timp:4, cunoastere:3, pret:100},
			{timp:4, cunoastere:3, pret:100},
			{timp:4, cunoastere:3, pret:100}, 
			{timp:4, cunoastere:3, pret:500},
			{timp:4, cunoastere:3, pret:500}];	

//buy:o - no, 1-yes
var shop = [{ids:"#itm0", lux:5, pret:1, buton:"#bitm0", valabilitate_maxim:2, valabilitate_actuala:2, buy:"no"},
			{ids:"#itm1", lux:5, pret:1, buton:"#bitm1", valabilitate_maxim:5, valabilitate_actuala:5, buy:"no"},
			{ids:"#itm2", lux:10, pret:1, buton:"#bitm2", valabilitate_maxim:10, valabilitate_actuala:10, buy:"no"},
			{ids:"#itm3", lux:15, pret:1, buton:"#bitm3", valabilitate_maxim:10, valabilitate_actuala:10, buy:"no"},
			{ids:"#itm4", lux:20, pret:1, buton:"#bitm4", valabilitate_maxim:10, valabilitate_actuala:10, buy:"no"},
			{ids:"#itm5", lux:29, pret:1, buton:"#bitm5", valabilitate_maxim:15, valabilitate_actuala:15, buy:"no"}
			];


// TREBUIE RECALCULAT FORMULA DE BANI/SALAR IN FUNCTIE DE EXPERIENTA MUNCI, NU DE EXPERIENTA GENERALA 
function munca(i){
	var afisarexp = "#exp" + i;
	/* Verifica daca ai experienta si cunoasterea necesara pentru a putea lucra*/
	if (muncax[i].expneed <= experienta && muncax[i].knowneed <= cunoastere && muncax[i].luxneed <= lux) {

		/* Nu mai ai suficient timp ca sa poti munci*/
		if (timp < 5 || bautura <= 20 || mancare <= 10){ 
			//mesaj de alerta care dispare
			$('#mesajafisat').html("Nu mai ai suficienta energie, bautra sau mancare ca sa muncesti aici!"); 
			$('.alerta').css("display","inline-block");
			setTimeout(function() { 
				$('.alerta').css("display","none");
			}, timp_alerta);
			
		} 

		/*Muncesti cu timpul mare*/
		else { 
			timp = timp - timp_consumat;
			$('#timp').html(timp.toPrecision(4));
			$('#bartimp').css("width",timp/24*100+"%");

			bautura = bautura - bautura_conusmat;
			$('#bautura').html(bautura.toPrecision(4));
			$('#barbautura').css("width",bautura+"%");

			mancare = mancare - mancare_consumat;
			$('#mancare').html(mancare.toPrecision(4));
			$('#barmancare').css("width",mancare+"%");

			//butonul de informatii devine disponibil (contine bara de progres si timer-ul)
			$('#topinfounu').css("display","block");

			//Contorul afisat/timpul ramas pana la urmatoarea munca
			var timeleft = timer; 
			var downloadTimer = setInterval(function(){
			  	$('#workinfo').html("You work now, " + timeleft.toPrecision(3) + " seconds remaining");

			  	timeleft -= 1;
			  	if(timeleft < 0){
			   		clearInterval(downloadTimer);
			//    	$('#workinfo').html("Ai muncit " + timp_consumat + " ore si ai castigat: " + banicastig.toPrecision(4) + " $, " + experienta_oferita +
			//	" experienta generala");
			  	}
			}, 1000);

			//Butonoanele deveni nefunctionale apoi iar functionale si se executa comezi
			$('button.work').prop( "disabled", true );
			setTimeout(function() { 
				$('button.work').prop( "disabled", false );

				bani = bani + (procent_salar*muncax[i].salar + procent_experienta*(muncax[i].exp_munca/100)*muncax[i].salar);
				banicastig = (procent_salar*muncax[i].salar + procent_experienta*(muncax[i].exp_munca/100)*muncax[i].salar);
				$('#bani').html(bani.toPrecision(4));

				//experienta generala
				if (experienta < muncax[i].expmax){
					experienta = experienta + experienta_oferita;
					$('#experienta').html(experienta.toPrecision(4));
					$('#barexperienta').css("width",experienta+"%");
				}
			
				//experienta muncii la care lucrezi
				if(muncax[i].exp_munca < muncax[i].exp_munca_max) {
					muncax[i].exp_munca += muncax[i].exp_oferita;
					$(afisarexp).html(muncax[i].exp_munca.toPrecision(4));
				}

				$('#workinfo').html("Ai muncit " + timp_consumat + " ore si ai castigat: " + banicastig.toPrecision(4) + " $, " + experienta_oferita +
				" experienta generala");
			}, timer*1000+1000);


			//Bara de progres	
			var width = 1; 
			var identity = setInterval(scene, timer*10+10); 
			function scene() { 
			    if (width >= 100) { 
			    	clearInterval(identity); 
			    } 
			    else { 
			    	width++;  
			      	$('#workbar').width(width + '%');
			      	$('#workbar').html(width * 1  + '%');
			    } 
			} 

		} 

	}

	/*Raspuns daca nu ai suficienta energie si cunoastere pentru a putea munci la acest job*/
	else {
		$('#mesajafisat').html("Ai nevoie de " + muncax[i].expneed +  " experianta globala, " +
		muncax[i].knowneed + " cunoastere si " + muncax[i].luxneed+ " lux ca sa muncesti aici!");
		$('.alerta').css("display","inline-block");
		setTimeout(function() { 
			$('.alerta').css("display","none");
		}, timp_alerta);
	}
	

}



function refamaxim(){
	sanatate = 100;
	$('#sanatate').html(sanatate.toPrecision(4));
	mancare = 100;
	$('#mancare').html(mancare.toPrecision(4));
	bautura = 100;
	$('#bautura').html(bautura.toPrecision(4));
}

/* Cumpara cartea/cursul, dispare butonul de buy si apare butonul de read */
function buyknow(i){
	var buton1 = "#bknow" + i;
	var buton2 = "#rknow" + i;

	if (bani >= know[i].pret){
		bani = bani - know[i].pret
		$(buton1).hide();
		$(buton2).show();	
		$("#bani").html(bani);
	}
	else {
		$('#mesajafisat').html("Nu ai suficienti bani pentru a cumpara acest curs!");
		$('.alerta').css("display","inline-block");
		setTimeout(function() { 
			$('.alerta').css("display","none");
		}, timp_alerta);
	}
}


function readknow(i, ktime, kpoint){
	/* aceste 3 sunt pt a afisa in html rezultatul*/
	var idtimp = "#tknow" + i;
	var idcunoastere = "#pknow" + i;
	var idknow = "#know" + i;
	/* valoarea cunoastere per ora, cunoastere impartit la nr de ore*/
	var punct = kpoint / ktime;

	if (know[i].timp > 0){
		if (timp < 5) { 
			//mesaj de alerta care dispare
			$('#mesajafisat').html("Nu mai ai suficienta energie ca sa inveti asta!"); 
			$('.alerta').css("display","inline-block");
			setTimeout(function() { 
				$('.alerta').css("display","none");
			}, timp_alerta);
		} 

		else{
			timp = timp - 1;
			$("#timp").html(timp.toPrecision(4));

			//butonul de informatii devine disponibil (contine bara de progres si timer-ul)
			$('#topinfounu').css("display","block");

			//Contorul afisat/timpul ramas pana la urmatoarea munca
			var timeleft = timer; 
			var downloadTimer = setInterval(function(){
			  	$('#workinfo').html("You learn now, " + timeleft.toPrecision(3) + " seconds remaining");

			  	timeleft -= 1;
			  	if(timeleft < 0){
			   		clearInterval(downloadTimer);
			//    	$('#workinfo').html("Ai muncit " + timp_consumat + " ore si ai castigat: " + banicastig.toPrecision(4) + " $, " + experienta_oferita +
			//	" experienta generala");
			  	}
			}, 1000);

			$('button.work').prop( "disabled", true );
			setTimeout(function() { 
				$('button.work').prop( "disabled", false );
				know[i].timp = know[i].timp - 1;
				$(idtimp).html(know[i].timp.toPrecision(4));
				
				know[i].cunoastere = know[i].cunoastere - punct;
				$(idcunoastere).html(know[i].cunoastere.toPrecision(4));

				cunoastere = cunoastere + punct;
				$("#cunoastere").html(cunoastere.toPrecision(4));
				$('#workinfo').html("Ai invatat " + timp_consumat + " ore si ai castigat: " + punct.toPrecision(4) + " cunoastere!");
			}, timer*1000+1000);

			//Bara de progres	
			var width = 1; 
			var identity = setInterval(scene, timer*10+10); 
			function scene() { 
			    if (width >= 100) { 
			    	clearInterval(identity); 
			    } 
			    else { 
			    	width++;  
			      	$('#workbar').width(width + '%');
			      	$('#workbar').html(width * 1  + '%');
			    } 
			} 
		}
	}

	else{
		$(idknow).hide();
	}
}

// Cumpara/Consuma mancare si bautura
function buyfood(i){
	if (bani < mancare_bautura[i].pret  || mancare_bautura[i].max_pe_zi < 1 ) { 
		//mesaj de alerta care dispare
		$('#mesajafisat').html("Nu ai suficienti bani pentru a cumpara asta, ai atins limita maxima de cumparare sau nu ai nevoie de asta");
		$('.alerta').css("display","inline-block");
		setTimeout(function() { 
			$('.alerta').css("display","none");
		}, timp_alerta);

	}
	else {
		bani = bani - mancare_bautura[i].pret;
		$("#bani").html(bani.toPrecision(4));

		//Verifica daca mancarea va fi mai mare de 100 daca se consuma
		if (mancare + mancare_bautura[i].mancare > 100){
			mancare = 100;
		}
		else {
			mancare += mancare_bautura[i].mancare; 
		}
		$("#mancare").html(mancare.toPrecision(4));
		$('#barmancare').css("width",mancare+"%");

		//Verifica daca bautura va fi mai mare de 100 daca se consuma
		if (bautura + mancare_bautura[i].bautura > 100){
			bautura = 100;
		}
		else {
			bautura += mancare_bautura[i].bautura; 
		}
		$("#bautura").html(bautura.toPrecision(4));
		$('#barbautura').css("width",bautura+"%");

		/*Verifica daca luxul va fi mai mare de 100 daca se consuma
		if (lux + mancare_bautura[i].lux > 100){
			lux = 100;
		}
		else {
			lux += mancare_bautura[i].lux; 
		}*/

		/*se calculeaza luxul*/
		mancare_bautura[i].luxused += mancare_bautura[i].luxgive; //folosit ca sa scada luxul consumat atunci cand dormi
		lux += mancare_bautura[i].luxgive; 
		$("#lux").html(lux.toPrecision(4));
		$('#barlux').css("width",lux+"%");	
		mancare_bautura[i].luxgive = 0; //nu ma primesti lux cand il consumi, se reseteaza la somn

		//Verifica nr maxim ce poate fi consumat
		if (mancare_bautura[i].max_pe_zi < 99){
			mancare_bautura[i].max_pe_zi -= 1;
			$(mancare_bautura[i].ids).html(mancare_bautura[i].max_pe_zi);
		}

	}
}


function buyshop(i){
	if (bani >= shop[i].pret){
		bani = bani - shop[i].pret
		$("#bani").html(bani);

		$(shop[i].buton).prop( "disabled", true );
		shop[i].buy = "yes" //Indice care arata ca e cumparat, se foloseste la sleep

		lux = lux + shop[i].lux;
		$('#lux').html(lux.toPrecision(4));
		$('#barlux').css("width",lux+"%");
	}
	else {
		$('#mesajafisat').html("Nu ai suficienti bani pentru a cumpara acest produs!");
		$('.alerta').css("display","inline-block");
		setTimeout(function() { 
			$('.alerta').css("display","none");
		}, timp_alerta);
	}
}


//Dormi- reface timpul/energia si scade din durabilitatea produselor
function dormi(){
	
	





	zile += 1; //
	$('#zile').html(zile); // acese 2 trebuie sterse daca stergi var-ul de sus
	
	//butonul de informatii devine disponibil (contine bara de progres si timer-ul)
	$('#topinfounu').css("display","block");

	//Contorul afisat/timpul ramas pana la urmatoarea munca
	var timeleft = timer*timp; 
	var downloadTimer = setInterval(function(){
	  	$('#workinfo').html("You sleep now, " + timeleft.toPrecision(3) + " seconds remaining");

	  	timeleft -= 1;
	  	if(timeleft < 0){
	   		clearInterval(downloadTimer);
	   	$('#workinfo').html("Ai dormit " + timp*timp_consumat + " ore si te asteapta o noua zi minunata!");
	  	}
	}, 1000);

	$('button.work').prop( "disabled", true );
	setTimeout(function() { 
		$('button.work').prop( "disabled", false );
		timp=24;
		$('#timp').html(timp.toPrecision(4));
		$('#bartimp').css("width",timp/24*100+"%");


		
		var i ;
		for (i = 0; i < 99; i++) {
			mancare_bautura[i].max_pe_zi = mancare_bautura[i].refa_limita;
			
			// Scadea luxul mancarii din lux , si reseteaza luxul folosit la 0
			lux = lux - mancare_bautura[i].luxused;
			mancare_bautura[i].luxused = 0;
			mancare_bautura[i].luxgive = mancare_bautura[i].lux; //vei primi din nou lux cand mananci 
			$('#lux').html(lux.toPrecision(4));
			$('#barlux').css("width",lux+"%");

			if (shop[i].buy == "yes"){
				if (shop[i].valabilitate_actuala > 1){
					shop[i].valabilitate_actuala -= 1;
					$(shop[i].ids).html(shop[i].valabilitate_actuala); 
				}
				else {
					shop[i].buy  = "no";
					shop[i].valabilitate_actuala = shop[i].valabilitate_maxim;
					$(shop[i].ids).html(shop[i].valabilitate_actuala);
					$(shop[i].buton).prop( "disabled", false );
					lux = lux - shop[i].lux;
				}
			}
		} 
		//$('#workinfo').html("Ai dormit " + timp*timp_consumat + " ore si ai castigat: " + punct.toPrecision(4) + " cunoastere!");
	}, timer*timp*1000+1000);

	//Bara de progres	
	var width = 1; 
	var identity = setInterval(scene, timer*timp*10+10); 
	function scene() { 
	    if (width >= 100) { 
	    	clearInterval(identity); 
	    } 
	    else { 
	    	width++;  
	      	$('#workbar').width(width + '%');
	      	$('#workbar').html(width * 1  + '%');
	    } 
	} 


	
}


