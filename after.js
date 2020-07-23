// after.js

	document.body.style.setProperty("--corTema", "rgba(100,30,200,0.5)");

	getById("divHist").style.height = (window.innerHeight - 100) + "px";

	document.body.style.minWidth = (screen.availWidth / 2 ) + "px";
	document.body.style.height = (window.innerHeight) + "px";
	document.getElementById("tudo").style.height = (window.innerHeight) + "px";

	//getById("frameRadio").style.height = (screen.availHeight - 200) + "px";
	getById("topo").style.maxHeight = ((window.innerHeight - getById("barraTopo").offsetHeight) - 100) + "px";
	getById("btPesq").addEventListener("click", function(){ formPesqProHist() });
	getById("updateHist").addEventListener("click", function(){ updateHist() });
	//getById("entrada").addEventListener("click", function(){ select() });
	getById("btAdcLink").addEventListener("click", function(){ adicionar() });
	getById("btFecharAdd").addEventListener("click", function(){ fechar() });
	getById("btFecharHist").addEventListener("click", function(){ fechar() });
	//getById("urlSiteSite").addEventListener("onfocus", function(){ select() })
	getById("seleciona").addEventListener("change", function(){ seletorBarraSuperiorMuda() });
	document.addEventListener("ready", function(){
		alert("Oi!")
	});
	
	

	if( !(!( localStorage.getItem( "urlSite" ) )) == false ){
		getById( "historico" ).innerHTML = "Histórico vazio!";
		localStorage.setItem("urlSite","");
	} else {
		getById( "historico" ).innerHTML = localStorage.urlSite;
	}

	
	qtdLinks = carregarAdicionados() ;
	verifEntradaTopo();

	qtdLinksFavs = 0;
	getById("frameRadio").style.height = (window.innerHeight - getById("barraSuperior").offsetHeight - 31 ) + "px";
	
	while ( qtdLinks > qtdLinksFavs ){
		identsLinks = "favorito" + qtdLinksFavs;
		getById( identsLinks ).addEventListener("click", function(){ topoToHist(this.href) });
		
		qtdLinksFavs++;
	}