const carrito= document.getElementById("carrito")
const template=document.getElementById("template")
const fragment=document.createDocumentFragment();
const btnesBotones= document.querySelectorAll(".content button")

const carritoObjeto={};
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
    console.log(carritoObjeto)
    pintarCarrito(producto)
};

const pintarCarrito=(producto)=>{

    carrito.textContent="";
    console.log("pintar carrito", producto)

    Object.values(carritoObjeto).forEach((item)=>{

        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector(".lead").textContent = item.titulo;
        clone.querySelector(".cuantify").textContent=item.cantidad;
        fragment.appendChild(clone)

    })

    carrito.appendChild(fragment)

}

btnesBotones.forEach((btn) => btn.addEventListener("click",agregarAlCarrito));

/* …or create a new repository on the command line
echo "# carrito-de-compras-" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/ElianeRiveraCastillo22/carrito-de-compras-.git
git push -u origin main */