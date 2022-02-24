/* Functions JS */
const liste = [
	'images/landscape1.jpg',
	'images/landscape2.jpg',
	'images/landscape3.jpg',
	'images/landscape4.jpg',
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
	
	img.src = liste[++position];
	img.alt = 'Autre chose';
	figcaption.innerText = 'Autre chose';
};

btPrev.onclick = function() {
	if(position==0) {
		position = liste.length;
	}
	
	img.src = liste[--position];
	img.alt = 'Autre chose';
	figcaption.innerText = 'Autre chose';
};










