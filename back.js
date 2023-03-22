 //Definir el arreglo de objetos para los productos
 let libros = [
];
 
//botones
let btnadd    = document.getElementById('btnadd');     
let btnsearch = document.getElementById('btnsearch');
let btnupdate = document.getElementById('btnupdate');
let btndelete = document.getElementById('btndelete');
let btnlist   = document.getElementById('btnlist');


//definir las variables que van a apuntar a los elementos en html
let reference= document.getElementById('reference').value;
let description=document.getElementById('description').value;
let genero= document.getElementById('genero').value;
let disponible=document.getElementById('disponible').value;
let nodisponible       =document.getElementById('nodisponible').value;

//Mensajes span
let mreference = document.getElementById('mreference');
let mdescription = document.getElementById('mdescription');



//Evento click del boton agregar 
btnadd.addEventListener('click', ()=>{


        
        alert (reference);
        
       
            
      })



  





     let capturaref= reference;

   