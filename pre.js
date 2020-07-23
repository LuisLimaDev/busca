// pre.js window.location.href = "https://luislimadev.github.io/LLDev";

	localStorage = window.localStorage;
	
	let root = document.documentElement;

	root.addEventListener("mousemove", e => {
		root.style.setProperty('--mouse-x', e.clientX + "px");
		root.style.setProperty('--mouse-y', e.clientY + "px");

/**
	// pra usar isso, a classe e o CSS precisam estar aplicados
	.itemQueSeguirMouse{
		width: 50px;
		height: 50px;
		background: red;
		position: absolute;
		left: var(--mouse-x);
		top: var(--mouse-y);
	}

**/
	});

	function getById(id){
	return document.getElementById(id);
	}

	function getByClass(cl){
	return document.getElementsByClassName(cl);
	}

	function criarNovoEl(el){
	return document.createElement(el);
	}
	
	
	function updateHist(){

		if( !( localStorage.getItem( "urlSite" ) ) == false ){
			getById( "historico" ).innerHTML = "Histórico vazio!";
			//localStorage.setItem("urlSite","");
		} else {
			getById( "historico" ).innerHTML = localStorage.urlSite;
		}
		getById( "historico" ).innerHTML = localStorage.urlSite;
	}
	
	
	function verifEntradaTopo(){
		//destiono = getById("seleciona").options[getById("seleciona").selectedIndex].value;
		
		if ( getById("seleciona").selectedIndex == 0 ){
			getById("entrada").setAttribute("name", "");
			getById("formulario").setAttribute("action", getById("entrada").value );
		} else {
			origem = getById("seleciona").options[getById("seleciona").selectedIndex];
			getById("entrada").setAttribute("placeholder", origem.text);
			getById("entrada").setAttribute("name", origem.value.split("?")[1].slice(0, -1) );
			getById("formulario").setAttribute("action", origem.value.split("?")[0]);
		}
	}
	
	
	
	function topoToHist( urlSite ){
		//getById("frameRadio").setAttribute( "src", urlSite );
		paragrafo = "<p>Abriu o urlSite<br><a href='" + urlSite + "' target='_blank'>" + urlSite + "</a></p>";
		if ( !(!( localStorage.urlSite )) == false ){
			localStorage.setItem( "urlSite" , paragrafo );
		} else {
			tudo = paragrafo+ localStorage.urlSite;
			localStorage.setItem("urlSite", tudo );
		}
		updateHist();
	};
	
	function verVazio( texto ){
		if (texto == ""){
			texto = "vazio";
		}
		return texto;
	}
	
	function adicionar(){
		nomeSite = getById("nomeSite");
		linkSite = getById("linkSite");
		tipoDeLink = getById("tipoDeLink");
		targetLink = getById("targetLink");
		
		favorito = verVazio( nomeSite.value ) + " & " + verVazio( linkSite.value ) + " & " + targetLink.value + " ;; ";
		
		if ( tipoDeLink.selectedIndex == 0 ){

			if( localStorage.getItem("favorito") == null ){
				//favorito = "<a href='" + linkSite.value + "' onclick='topoToHist(this)' target='frameRadio'>" + nomeSite.value + "</a>";
				localStorage.setItem("favorito", favorito );
				
			} else {
				//favorito = "<a href='" + linkSite.value + "' onclick='topoToHist(this)' target='frameRadio'>" + nomeSite.value + "</a>";
				todosFavoritos = favorito + localStorage.getItem("favorito");
				localStorage.setItem("favorito", todosFavoritos );
			}
		
		} else {

			if( localStorage.getItem("busca") == null ){
				//favorito = "<option value='" + linkSite.value + "'>" + nomeSite.value + "</option>";
				localStorage.setItem("busca", favorito );
				
			} else {
				//favorito = "<option value='" + linkSite.value + "'>" + nomeSite.value + "</option>";
				todosFavoritos = favorito + localStorage.getItem("busca");
				localStorage.setItem("busca", todosFavoritos );
			}
		
		}
			
		carregarAdicionados()
		//getById("topo").innerHTML = favorito + getById("topo").innerHTML;
		getById("nomeSite").value = "";
		getById("linkSite").value = "";
	}

	function formPesqProHist(){
		verifEntradaTopo();
		seletorTipo = getById("seleciona");
		entrada = getById("entrada");
		formulario = getById("formulario");
		urlSite = "<p>Pesquisou: '" + entrada.value + "', em: <br/> <a href='" + seletorTipo.options[seletorTipo.selectedIndex].value + entrada.value + "' target='_blank'>" + formulario.action + "</a></p>";
		//getById("historico").innerHTML = urlSite + getById("historico").innerHTML;
		guardar = urlSite + localStorage.getItem("urlSite");
		window.localStorage.setItem("urlSite", guardar );


		if( !(!( localStorage.getItem( "urlSite" ) )) == false ){
			getById( "historico" ).innerHTML = "Histórico vazio!";
			localStorage.setItem("urlSite","");
		} else {
			window.localStorage.setItem("urlSite", guardar );
		}
		getById( "historico" ).innerHTML = localStorage.urlSite;

		updateHist();
	};
	
	
	
	function limpaFavs(){
		getById("historico").innerHTML = "Histórico vazio!";
		localStorage.setItem("favorito","");
	}
	
	function limpaFechar(){
		getById("historico").innerHTML = "Histórico vazio!";
		localStorage.setItem("urlSite","");
	}
	
	function fechar(){
		getById("historico").innerHTML = "";
	}



	function testeCores(){
		nada = 0; total = 255;
		while (nada <= total){
			codigoDaCor = "rgb(0,"+nada+",125)";
			mostragem = criarNovoEl("div");
			mostragem.style.background = codigoDaCor ;
			getById("radio").append(mostragem);
			mostragem.innerText = codigoDaCor;
			nada = nada + 01;
		}
	}
	
	function carregarAdicionados(){
		//conteudoExistenteNoTopo = getById("topo").innerHTML;
		//conteudoExistenteNoSelect = getById("seleciona").innerHTML;
		getById("topo").innerHTML = "";

		if ( localStorage.getItem("favorito") == null ){
			console.log("favorito vazio");
		} else {
			//getById("topo").innerHTML = localStorage.favorito;
			
			favsGuardados = localStorage.favorito;
			separados = favsGuardados.split(" ;; ");
			cntFavs = 0;
			
			while( cntFavs < separados.length ){
				
				if ( (separados[cntFavs] == "") != true ){
					//console.log( "feito "+separados[cntFavs] );
					
					nomeDoFavorito = separados[cntFavs].split(" & ")[0];
					urlSiteDoFavorito = separados[cntFavs].split(" & ")[1];
					targetDoFavorito = separados[cntFavs].split(" & ")[2];
					
					urlSiteFav = criarNovoEl("a");
					urlSiteFav.innerText = nomeDoFavorito;
					urlSiteFav.href = urlSiteDoFavorito;
					urlSiteFav.target = targetDoFavorito;
					urlSiteFav.id = "favorito" + cntFavs;
					//urlSiteFav.setAttribute("onclick", "topoToHist(this)");
					
				} else {
					console.log("sem mais favs");
			
					return cntFavs;
				}
				
				getById("topo").appendChild( urlSiteFav );
				cntFavs++;
			}
			
		};
		
		if ( localStorage.getItem("busca") == null ){
			console.log("busca vazio");
		} else {
			separados = localStorage.busca.split(" ;; ");
			//alert(separados.length);
			cntFavs = 0;
			
			while( cntFavs < separados.length ){
				
				if ( (separados[cntFavs] == "") != true ){
					//console.log( "feito "+separados[cntFavs] );
					
					/*nomeDoFavorito = separados[cntFavs].split(" & ")[0];
					urlSiteDoFavorito = separados[cntFavs].split(" & ")[1];
					targetDoForm = separados[cntFavs].split(" & ")[2];
					*/
					
					opicao = criarNovoEl("option");
					opicao.innerText = separados[cntFavs].split(" & ")[0];
					opicao.value = separados[cntFavs].split(" & ")[1];
					opicao.id = separados[cntFavs].split(" & ")[2];
					
				} else {
					console.log("sem mais options")
				}
				
				getById("seleciona").append( opicao );
				cntFavs++;
			}
			
			
		}
		
		
		
		
	}
	
	function seletorBarraSuperiorMuda(){
		//destiono = getById("seleciona").options[getById("seleciona").selectedIndex].value;
		
		if ( getById("seleciona").selectedIndex == 0 ){
			getById("entrada").setAttribute("name", "");
			getById("entrada").value = "http://";
			getById("formulario").setAttribute("action",  getById("entrada").value );
		} else {
			origem = getById("seleciona").options[getById("seleciona").selectedIndex];
			targetDaOrigem = ( origem.id ? origem.id : "frameRadio");
			getById("entrada").value = "";
			getById("entrada").setAttribute("placeholder", origem.text);
			getById("entrada").setAttribute("name", origem.value.split("?")[1].slice(0, -1) );
			getById("formulario").target = targetDaOrigem;
			getById("formulario").setAttribute("action", origem.value.split("?")[0]);
		}
	}

	
