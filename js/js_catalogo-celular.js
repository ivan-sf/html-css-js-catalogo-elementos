class Celular{
    constructor(nombre,marca,modelo,precio,img){
        this.img=`<img src="images/${img}">`;
        this.nombre=`<h1>${nombre}</h1>`;
        this.marca=`<h2>${marca}</h2>`;
        this.modelo=`<h3>Model - ${modelo}</h3>`;
        this.precio=`<p>$${precio}</p>`;
        return [this.nombre,this.marca,this.modelo,this.precio,this.img];
    }
}
let cards = document.querySelector(".cards");
let fragmento = document.createDocumentFragment();
for(let i=0;i<20;i++){
    let modelo = Math.round(Math.random()*1000);
    let precio = Math.round(Math.random()*1000*1000);
    let celular = new Celular("Celular"+(i+1),"iPhone",modelo,precio,"celular.png");
    let div = document.createElement("DIV");
    div.tabIndex=i;
    div.addEventListener("click",()=>{
        document.querySelector(".key-data").value=modelo;
    });
    div.classList.add(`__container`,`card`,`card-item${(i+1)}`);
    div.innerHTML = celular[4]+celular[0]+celular[1]+celular[2]+celular[3];
    fragmento.appendChild(div);
}
cards.appendChild(fragmento);