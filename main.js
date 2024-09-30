var FireChars = "                ''..,,`^^:;!!llii~~*+-_?ttffjjrtrnnxxuyvrczwqpdkbhao=*#&8%@$$$$";

const height = 40;
const width = 300;

var matrix = new Array();

for(let i=1;i<width*height;i++){ matrix[i] = 0;}

const fire = document.getElementById("fire");

CreateFire();

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function updateString(){

	var FireString = '';

	for(let i=1;i<width*height;i++){
		FireString += FireChars[matrix[i]];
		if(i % width === 0){
		FireString+='\n';
		}
	}
	fire.innerHTML = FireString;
}
function CreateFire(){

	for(let i=width*(height-2)+1;i<width*height+1;i++){
	 matrix[i] = getRandomInt(FireChars.length);
	}
	
	for(let i=1;i<width*(height-2)+1;i++){

		let avg;

		if (i % width !== 0) {
            	avg = Math.max(Math.floor(
                (matrix[i + width] + matrix[i + width + 1] + matrix[i + 1] + matrix[i]) / 4), 0);
        	} else {
            		avg = Math.max(Math.floor((matrix[i + width] + matrix[i]) / 4), 0);
        	}
	
		matrix[i] = avg;
	}
	
	updateString();
	setTimeout(CreateFire,1);
}
