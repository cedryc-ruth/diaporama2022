/* Functions JS */
const liste = [
	{
		url: 'images/landscape1.jpg',
		description: 'Paysage suisse'
	},
	{
		url: 'images/landscape2.jpg',
		description: 'Montagne du nord'
	},
	{
		url: 'images/landscape3.jpg',
		description: 'Pic neigeux'
	},
	{
		url: 'images/landscape4.jpg',
		description: 'Prairie du printemps'
	},
];

let position = 0;

const cadre = document.getElementById('cadre');

const img = cadre.getElementsByTagName('img')[0];
const figcaption = cadre.getElementsByTagName('figcaption')[0];

const btPrev = document.getElementById('btPrev');
const btNext = document.getElementById('btNext');

btNext.onclick = function() {
	if(position==liste.length-1) {
		position = -1;
	}
	
	position++;
	
	let url = liste[position].url;
	let description = liste[position].description;
	let debut = url.lastIndexOf('/')+1;
	let fin = url.lastIndexOf('.');
	let nom = url.substring(debut,fin);
	
	img.src = url;
	img.alt = nom;							//Nom du fichier
	figcaption.innerText = description;		//Description
};

btPrev.onclick = function() {
	if(position==0) {
		position = liste.length;
	}
	
	position--;
	
	img.src = liste[position][0];
	img.alt = 'Autre chose';
	figcaption.innerText = 'Autre chose';
};

setInterval(function() { btNext.click(); }, 3000);

/* TODO: 
	1. add navigation's buttons functionality
		first: stops the automatic mode and goes to the first picture,
		last: stops the automatic mode and goes to the last picture,
		stop: stops the automatic mode,
		pause: pauses the automatic mode and restarts it when pressed again,
	2. add mode's buttons functionality (gallery, diaporama)
	3. add some data for each picture (date, author, country)
	4. display all the data of a picture when you click on it
	5. add a sort functionality 
		to sort the pictures by description, date, author or country
		with the use of a form (select & button)
*/












