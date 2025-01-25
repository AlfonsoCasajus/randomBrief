const marcas = [
	"Burger King", "Adidas", "Red Bull",
	"Milka", "Ikea", "Pepsi", "Coca-Cola",
	"Hoyts", "TyC Sports", "Netflix", "Grido",
	"Wendy's", "Volvo", "Volkswagen", "Samsung",
	"Brahma", "Canon", "Playstation", "Bose",
	"Garbarino", "Voligoma", "Cachafaz", "Felfort",
	"Johnnie Walker", "Carefree", "Nikon", "Paso de los Toros",
	"Terma", "Bic", "Carrefour", "Movistar",
	"Zara", "Sedal", "Dove", "Clarín",
	"Quilmes","Rolex", "Día", "Maybelline",
	"Spotify", "Tinder", "Ray-Ban", "Fender",
	"Arredo", "Michelín", "Easy", "Faber Castell",
	"Farmacity", "Tulipán", "Fundación Huesped", "Chupa-Chups",
	"National Geographic", "WWF", "Amnistía Internacional", "Mastercard",
	"Colgate", "Pisano", "Swarovski", "Elegí cualquiera"
];

const contexto = [
	"Día de los enamorados", "Día de la madre", "Pandemia",
	"Hay que reivindicar el tiempo libre", "Necesitamos levantar nuestra imagen",
	"Queremos empatizar con la gente", "Necesitamos incrementar las ventas",
	"Queremos estar en el Lollapalooza", "Llegó el verano", "Día del padre",
	"Armar una promoción que esté buena", "Hay que mostrar lo bueno que es nuestro producto",
	"Hacer algo que involucre niñes", "Navidad", "Día del niño", "Una acción inclusiva",
	"Mundial de fútbol", "La NASA manda la primera nave con gente a Marte", "Bien público",
	"Playas en verano", "Mes del orgullo", "Se incendian los bosques de Australia",
	"Algo en un estadio de fútbol", "Día de la familia", "Día de la mujer", "Año nuevo",
	"Perdimos la final del mundo contra Brasil", "Día de la tierra", "Se transmiten los Oscar",
	"Hay un eclipse solar que se da una vez cada 100 años", "Muerte de Trump",
	"Inglaterra queda afuera del mundial", "Las Malvinas vuelven a ser oficialmente argentinas",
	"Se descubre que La Pampa no exite", "Se fusionan Uruguay y Argentina", "Se retira Messi",
	"Se descubre un nuevo continente", "Es el invierno más frío de la historia", "Nieva en Buenos Aires",
	"Se descubre que el alunizaje fue falso", "Contexto libre"
];
const ejecucion = [
	"Gráfica/VP", "Activación", "Libre. Vale todo.", "Acción digital",
	"Comercial", "Comercial con material de archivo", "Posteo",
	"Hay que hacer una promoción. El resto es libre.", "Contenido",
	"Libro", "Comercial innecesariamente caro", "Comercial que genere polémica",
	"VP interactiva", "Campaña de titulares", "El peor comercial del mundo",
	"Lo que sea pero gracioso", "Lo que sea pero emocional", "Cápsula de contenido",
	"Serie de videos", "Acción con influencers", "Inventar un producto"
];

const getRandomNumber = (max) => Math.floor(Math.random() * max);

let randomizeWords = () => {

	const getRandomMarca = () => `${marcas[getRandomNumber(marcas.length)]}`;
	const setRandomMarca = () => document.getElementById('random-marca').innerText = getRandomMarca();  

	const getRandomContexto = () => `${contexto[getRandomNumber(contexto.length)]}`;
	const setRandomContexto = () => document.getElementById('random-contexto').innerText = getRandomContexto();

	const getRandomEjecucion = () => `${ejecucion[getRandomNumber(ejecucion.length)]}`;
	const setRandomEjecucion = () => document.getElementById('random-ejecucion').innerText = getRandomEjecucion();

	let intervalo = setInterval(() => {
		getRandomMarca();
		getRandomContexto();
		getRandomEjecucion();
		setRandomMarca();
		setRandomContexto();
		setRandomEjecucion();
	}, 100);
	
	setTimeout(() => {clearInterval(intervalo)}, 2000);	
}

document.getElementById('random-marca').innerText = 'RANDOM';
document.getElementById('random-contexto').innerText = 'BRIEF';
document.getElementById('random-ejecucion').innerText = 'GENERATOR';

document.getElementById('generate').addEventListener('click', randomizeWords);
