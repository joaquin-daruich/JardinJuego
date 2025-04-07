import React, { useEffect, useState } from 'react';
import './App.css';
import { Link,  useParams } from 'react-router-dom';

const Inicio = () => {

  
   
   const [parrafoALeer , setParrafoALeer] = useState('')
   const { segmento1, segmento2, segmento3} = useParams();

   const slug = segmento3 || segmento2 || segmento1 ;
   
   useEffect(() => {
     if (slug) {
       const parrafo = document.getElementById('parrafo1');
       if (parrafo) {
         setParrafoALeer(parrafo.innerHTML);
       }
     }
   }, [slug]);
 
    if(slug){

    
    return (
      <>
        <div className='inicio'>
          <span>¡Descargá el juego más caliente de Naruto! Leé un poco antes de empezar 😏</span>
          <a href='https://cuty.io/C4i9b7LS'>👉 Click aquí para descargar el juego (PC)</a>
          <a href='https://cuty.io/G7TRT5eFfiCS'>👉 Click aquí para descargar el juego (Android)</a>
        </div>

        <img className='ElJardinDelH' src="https://juegohdenaruto.netlify.app/hinata.png" alt="El Jardin Del H" />

        <div className='titulos'>
          <img className='le-secret' src="https://juegohdenaruto.netlify.app/alucard.png" alt="Juego Hentai Naruto" />
          <a href='https://www.youtube.com/watch?v=Sy3bmLipP30'>
            <img className='androide-señalando' src="https://juegohdenaruto.netlify.app/hinata.png" alt="Hinata Hentai" />
            <h2 className='titulo2'>¡Hace Click en Hinata para ir a nuestro canal de YouTube!</h2>
          </a>
        </div>

        <div className='contenedorDeParrafos'>
          <div className='contenedorDeParrafo2'>
            {parrafoALeer}
            <p className='parrafo'>Disfrutá de una historia alternativa donde podés seducir a las kunoichis más deseadas de Konoha.</p>
            <img className='pruebade' src='https://juegohdenaruto.netlify.app/prueba.jpg' alt="Naruto Hentai" />
            <p className='parrafo'>Elegí tus caminos, desbloqueá escenas explícitas y viví tu fantasía shinobi.</p>
            <img className='pruebade2' src='https://juegohdenaruto.netlify.app/image.jpg' alt="Tsunade Hentai" />
            <img className='hinata2' src='https://juegohdenaruto.netlify.app/oh.jpg' alt="Hinata Ecchi" />
          </div>
          <div className='contenedorDeParrafo3'>
            <div className='contenedorDeParrafo4'>
              <p>¡No lo dudes más! El link está arriba. ¡Nos vemos adentro del juego! 🔥</p>
              <h1>Naruto Hentai</h1>
              <h1>Juegos Porno Gratis</h1>
              <h1>Hentai Sakura Ino Hinata Tsunade</h1>
              <h1>Sexy Comic +18</h1>
            </div>
          </div>
        </div>
      </>
    );
  }
  
else{
  return (
    <>
      <div className='inicio'>
        <span>Te dejo un link para que descargues el juego!, leyendo un poco la pagina te cuento un poco de que trata el juego :) </span>
        <Link to={'https://cuty.io/C4i9b7LS'}>👉 Click aquí para descargar el juego(PC)</Link>
        <Link to={'https://cuty.io/G7TRT5eFfiCS'}>👉 Click aquí para descargar el juego(Android)</Link>
      </div>
      <img className='ElJardinDelH' src="https://juegohdenaruto.netlify.app/devuelta.png" alt="El Jardin Del H" />

      <div className='titulos'>
        <img className='le-secret' src="https://juegohdenaruto.netlify.app/alucard.png" alt="Juego Hentai Naruto" />
        <Link to={'https://www.youtube.com/watch?v=Sy3bmLipP30'}>
          <img className='androide-señalando' src="https://juegohdenaruto.netlify.app/hinata.png" alt="Hinata Hentai" />
          <h2 className='titulo2'>Hace Click en Hinata para ir a nuestro canal de Youtube!!</h2>
        </Link>
      </div>
     

      <div className='contenedorDeParrafos'>
        <div className='contenedorDeParrafo2'>
          <p className='parrafo'>Bueno primero si te preguntas acerca del juego, primero podes elegir que este tanto en español, ingles o portugues"</p>
          <p className='parrafo'>Obviamente es un juego muy rico de hentai, con buena historia incluida de los mejores personajes como puede ser verle las tetas gigantes a Tsunade, o a Hinata, o podes verle el culo a Sakura, o follarte a Ino y hasta hacer que Tenten te haga una mamada.</p>
          <p className='parrafo'>En un principio comenzas el juego eligiendo tu propio nombre, y en Konoha sos "solo otro shinobi", que no destacas mucho, sos un shinobi "decente", todavia sos Chunin...</p>
          <p className='parrafo'>Peroo en lo que se trata de mujeres, estas desesperado, nunca tocaste una chica ni menos tuviste novia, y encima estas lleno de mujeres hermosas, pero ni saben que existis, estan todas fuera de tu alcance, pero bueno ya pensar en chicas te pone cachondo porque sos un maldito depravado con mucha imaginacion y haciendose muchas pajas al dia</p>
          <img className='pruebade' src='https://juegohdenaruto.netlify.app/prueba.jpg' alt="Naruto Hentai" />
          <p className='parrafo'>Bueno como se puede ver hasta en cosas como esas se puede ver la mecanica del juego, donde podes elegir varias opciones (que suelen ser cachondas) y tener distintos resultados...</p>
          <img className='pruebade2' src='https://juegohdenaruto.netlify.app/image.jpg' alt="Tsunade Hentai" />
          <p className='parrafo'> Bueno.. Tenes que hacer misiones como todo Chunin</p>
          <img className='hinata2' src='https://juegohdenaruto.netlify.app/oh.jpg' alt="Hinata Ecchi" />
          <p className='parrafo'>Pero bueno... podrian pasar cosas en las misiones. </p>
        </div>
        <div className='contenedorDeParrafo3'>
          <div className='contenedorDeParrafo4'>
            <p>Bueno hasta aqui llegamos, espero disfruten mucho el juego!! El Link esta arriba!!!!!</p>
            <h1>Naruto Hentai</h1>
            <h1>Hentai Naruto</h1>
            <h1>Hentai Sakura Hentai Ino Hentai Hinata Hentai Tsunade</h1>
            <h1>Naruto Porno</h1>
            <h1>Sexy Naked Comic Porno</h1>
            <h1>Juegos Porno</h1>
            <h1>Juegos Hentai</h1>
          </div>
        </div>
      </div>
    </>
     );
}

 
}

export default Inicio;
