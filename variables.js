const socialNetworks = [
	{ name: "Linkedin", url: "https://www.linkedin.com/in/jose-colindres-55850b258" },
	{ name: "Github", url: "https://github.com/ColiJD" },
	{ name: "Instagram", url: "https://www.instagram.com/jose_colindres89/" },
];

const azul = "#102e4a";
const blanco = "#f2f2f2";


const galeria = [
	{
		indice: 1,
		imagen: "https://images.pexels.com/photos/1183021/pexels-photo-1183021.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
		altImg: "",
		colorText: `color: ${blanco}`,
		colorTitulo: `color: ${blanco}`,
		autor: "Immanuel Kant",
		pensamiento:
			"Dos cosas llenan la mente de admiración y respeto, siempre nuevos y crecientes: el cielo estrellado sobre mí y la ley moral dentro de mí.",
	},
	{
		indice: 2,
		imagen: "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
		altImg: "",
		colorText: `color: ${blanco}`,
		colorTitulo: `color: ${blanco}`,
		autor: "Sócrates",
		pensamiento: "Una vida sin examen no merece la pena ser vivida.",
	},
	{
		indice: 3,
		imagen: "https://images.pexels.com/photos/2832061/pexels-photo-2832061.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
		altImg: "",
		colorText: `color: ${blanco}`,
		colorTitulo: `color: ${azul}`,
		autor: "Friedrich Nietzsche",
		pensamiento:
			"Aquel que lucha con monstruos debe tener cuidado de no convertirse en uno. Cuando miras largo tiempo a un abismo, el abismo también mira dentro de ti.",
	},
	{
		indice: 4,
		imagen: "https://images.pexels.com/photos/2356059/pexels-photo-2356059.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
		altImg: "",
		colorText: `color: ${blanco}`,
		colorTitulo: `color: ${azul}`,
		autor: "Platón",
		pensamiento: "La sabiduría comienza en la admiración.",
	},
	{
		indice: 5,
		imagen: "https://images.pexels.com/photos/4275885/pexels-photo-4275885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
		altImg: "",
		colorText: `color: ${blanco}`,
		colorTitulo: `color: ${azul}`,
		autor: "Epicuro",
		pensamiento:
			"No es el hombre quien tiene poco, sino aquel que desea más, el que es pobre.",
	},
	{
		indice: 6,
		imagen: "https://images.pexels.com/photos/1424246/pexels-photo-1424246.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
		altImg: "",
		colorText: `color: ${blanco}`,
		colorTitulo: `color: ${blanco}`,
		autor: "Jean-Jacques Rousseau",
		pensamiento: "El hombre es libre, pero en todas partes está encadenado.",
	},
	{
		indice: 7,
		imagen: "https://images.pexels.com/photos/1428787/pexels-photo-1428787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
		altImg: "",
		colorText: `color: ${blanco}`,
		colorTitulo: `color: ${azul}`,
		autor: "Voltaire",
		pensamiento:
			"El arte de la medicina consiste en entretener al paciente mientras la naturaleza cura la enfermedad.",
	},
	{
		indice: 8,
		imagen: "https://images.pexels.com/photos/2693529/pexels-photo-2693529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
		altImg: "",
		colorText: `color: ${blanco}`,
		colorTitulo: `color: ${blanco}`,
		autor: "René Descartes",
		pensamiento: "Pienso, luego existo.",
	},
	{
		indice: 9,
		imagen: "https://images.pexels.com/photos/3022417/pexels-photo-3022417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
		altImg: "",
		colorText: `color: ${blanco}`,
		colorTitulo: `color: ${azul}`,
		autor: "Albert Einstein",
		pensamiento:
			"La imaginación es más importante que el conocimiento. El conocimiento se limita, mientras que la imaginación abarca el mundo.",
	},
	{
		indice: 10,
		imagen: "https://images.pexels.com/photos/1183022/pexels-photo-1183022.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
		altImg: "Imagen sobre una montaña",
		colorText: `color: ${blanco}`,
		colorTitulo: `color: ${azul}`,
		autor: "Platón",
		pensamiento: "La educación es la mejor arma para cambiar el mundo.",
	},
	{
		indice: 11,
		imagen: "https://images.pexels.com/photos/1183030/pexels-photo-1183030.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
		altImg: "Imagen sobre una montaña",
		colorText: `color: ${blanco}`,
		colorTitulo: `color: ${blanco}`,
		autor: "Séneca",
		pensamiento: "No es que tengamos poco, sino que desperdiciamos mucho.",
	},
	{
		indice: 12,
		imagen: "https://images.pexels.com/photos/1183024/pexels-photo-1183024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
		altImg: "Imagen sobre una montaña",
		colorText: `color: ${blanco}`,
		colorTitulo: `color: ${blanco}`,
		autor: "Buda",
		pensamiento: "El odio no disminuye con el odio. El odio disminuye con el amor.",
	},
	{
		indice: 13,
		imagen: "https://images.pexels.com/photos/1183000/pexels-photo-1183000.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
		altImg: "Imagen sobre una montaña",
		colorText: `color: ${blanco}`,
		colorTitulo: `color: ${azul}`,
		autor: "Mahatma Gandhi",
		pensamiento: "Sé el cambio que quieres ver en el mundo.",
	},
	{
		indice: 14,
		imagen: "https://images.pexels.com/photos/1183026/pexels-photo-1183026.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
		altImg: "Imagen sobre una montaña",
		colorText: `color: ${blanco}`,
		colorTitulo: `color: ${azul}`,
		autor: "Albert Einstein",
		pensamiento:
			"Locura es hacer lo mismo una y otra vez esperando obtener diferentes resultados.",
	},
	{
		indice: 15,
		imagen: "https://images.pexels.com/photos/1183019/pexels-photo-1183019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
		altImg: "Imagen sobre una montaña",
		autor: "Aristóteles",
		pensamiento: "La naturaleza no hace nada en vano.",
		colorText: `color: ${blanco}`,
		colorTitulo: `color: ${blanco}`,
	},
];

const handlerBarsContext = {
	"/index.html": {
		title: "Galeria de Imagenes",
		socialNetworks: socialNetworks,
		galeria: galeria,
	},
	"/about.html": {
		title: "About",
	},
	"/contacts/contact.html": {
		title: "Contact",
	},
	"/servicios.html": {
		title: "Servicios",
	},
};

const pageContext = (page) => {
	const context = { ...handlerBarsContext[page], socialNetworks };
	return context;
};
export default pageContext;
