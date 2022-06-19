const carrito= document.getElementById("carrito")
const template=document.getElementById("template")
const fragment=document.createDocumentFragment();
const btnesBotones= document.querySelectorAll(".content button")

const carritoObjeto={ };

const agregarAlCarrito=(e)=>{
    const producto={
        titulo:e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad:1,
    }
    if(carritoObjeto.hasOwnProperty(producto.id)){
        producto.cantidad=carritoObjeto[producto.id].cantidad + 1
    }
    carritoObjeto[producto.id]=producto;
    pintarCarrito(producto)
};

const pintarCarrito=(producto)=>{
    carrito.textContent="";
    console.log("pintar carrito", producto)
  console.log(typeof Object.values(carritoObjeto))
  console.log( Object.values(carritoObjeto))
    Object.values(carritoObjeto).forEach((item)=>{
        console.log(item)
        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector(".lead").textContent = item.titulo;
        clone.querySelector(".cuantify").textContent=item.cantidad;
        fragment.appendChild(clone)
    })
    carrito.appendChild(fragment)
}

btnesBotones.forEach((btn) => btn.addEventListener("click",agregarAlCarrito)); 



/* let fruta=['🍏','🍌','🍓','🍈'];
let users=[
    {uid:1,name:"John", age:34},
    {uid:2,name:"Amy", age:20},
    {uid:3,name:"CamperCat", age:10},
]


let numeros=[1,2,3,4,5,6,7,8,9,10]
 let numeroPorDos=numeros.map(num=>num*2)
console.log(numeroPorDos)
let mayoresDeTrenta=users.filter((x)=>{
 return x.age>19
})
console.log(mayoresDeTrenta) */



