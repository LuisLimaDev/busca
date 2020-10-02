//elemental.js

let ancora, paragrafo, imagem, novoFrame;

let getById = ( idDoElemento => document.getElementById( idDoElemento ) );
let getByClass = ( nomeDaClasse => document.getElementsByClassName( nomeDaClasse ) );
let novoElm = ( nomeDoElemento => document.createElement( nomeDoElemento ) );

class Elementos {

	acrescentar( idDoElementoPai, elementoFilho ){
		getById( idDoElementoPai ).appendChild( elementoFilho );
	}

	novoLink( textoInterno, destinoDoLink, targetLink ){
		ancora = novoElm("a");
		ancora.innerHTML = textoInterno;
		ancora.href = destinoDoLink;
		if( targetLink == "" || targetLink == null ){ ancora.target = "_blank" } else { ancora.target = targetLink }
		return ancora;
	}
	
	novoParagrafo( linhaDoParagrafo ){
		paragrafo = novoElm("p");
		paragrafo.innerHTML = linhaDoParagrafo;
		return paragrafo;
	}
	
	novaImagem( localDaimagem, descreverImagem ){
		imagem = novoElm("img");
		imagem.src = localDaimagem;
		if ( descreverImagem == "" || descreverImagem == null ){ imagem.alt = "imagem" } else { imagem.alt = descreverImagem }
		return imagem;
	}

	novoIframe( nomeDoIframe, paginaDoFrame ){
		novoFrame = novoElm("iframe");
		novoFrame.name = nomeDoIframe;
		novoFrame.src = paginaDoFrame;
		novoFrame.setAttribute( "sandbox", "allow-scripts allow-same-origin" );
		if( nomeDoIframe == "youtube" ){ novoFrame.setAttribute("X-Frame-Options", "SAMEORIGIN") }
		return novoFrame;
	}
}