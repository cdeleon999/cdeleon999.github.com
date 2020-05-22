//El document es representación del Dom
/*let links = document.querySelectorAll("a");

links.forEach(function(link){
	console.log(link);
});*/

/*let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
	td.addEventListener('click',function(){
		console.log(this);
	})
});*/


//Obtener los elementos de la clase closet
let links = document.querySelectorAll(".close");
	//Recorrer
	links.forEach(function(link){
		//Agregar un evento click a cada uno de ellos
		link.addEventListener("click",function(ev){
			ev.preventDefault();
			let content =  document.querySelector('.content');
			//Quitar la clase de animación
				content.classList.remove("animate__fadeInDown");
				content.classList.remove("animate__animated");
			//Agregar clase de salida fadeOutUp
				content.classList.add("animate__fadeOutUp");
				content.classList.add("animate__animated");

				setTimeout(function(){
				location.href = "file:///C:/Users/Christian/Desktop/github/cdeleon999.github.com/proyecto2/index.html";			
				},800);

			return false;
	});
});
