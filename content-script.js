
function autoRedem() {
	//autoredem
	setInterval(()=>{
		document.querySelector('[aria-label*="bonificación"]').click();
		console.log("clicking");
	},1000*30);
}
function togleMojon(){
	//mojon
	mojon = document.createElement('img');
	mojon.setAttribute("id","mojon");
	document.body.appendChild(mojon);
	mojon.src="https://i.ibb.co/SrCb5Lx/Captura-de-pantalla-de-2023-11-24-14-24-46-removebg-preview-1.png";
	mojon.setAttribute("style",`
		position: absolute;
		z-index: 9999;
		right: 1%;
		top: 6%;
	`);
}

function alexNarcicismo(){
	s = document.createElement("style");	
	s.innerHTML = `
		.chat-line__message[data-a-user="yarockblancomakussj19"] {
			text-transform: uppercase;
		}
	`;
	document.body.appendChild(s);
}
function chatListener(){
	try {
		chatLine = document.querySelector(".chat-line__message:last-child");
		if(chatLine.dataset.aUser != "gierem_17") return false;
		text =  chatLine.querySelector('.text-fragment').innerHTML;
		comands = text.match(/!\w+/g);
		comands.forEach(c => {
			runComand(c);
		});
	} catch (error) {}

}
function runComand(c) {
	switch (c) {
		case '!mojon':
			m = document.querySelector('#mojon');
			if(!m){togleMojon();}
			break;
		case '!mojoff':
			m = document.querySelector('#mojon');
			if(m){m.remove();}
			break;
		default:
			break;
	}
}

setInterval(chatListener,100);
autoRedem();
togleMojon();
alexNarcicismo();
