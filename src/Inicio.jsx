import React, { useEffect, useState } from 'react';
import './App.css';
import { Link, useParams } from 'react-router-dom';

const Inicio = () => {
  const [cargado, setCargado] = useState(false);

  const [span1, setSpan1] = useState('');
  const [linkPC, setLinkPC] = useState('');
  const [linkAndroid, setLinkAndroid] = useState('');
  const [h2Hinata, setH2Hinata] = useState('');
  const [parrafo1, setParrafo1] = useState('');
  const [parrafo2, setParrafo2] = useState('');
  const [parrafo3, setParrafo3] = useState('');
  const [parrafo4, setParrafo4] = useState('');
  const [parrafo5, setParrafo5] = useState('');
  const [parrafo6, setParrafo6] = useState('');
  const [parrafo7, setParrafo7] = useState('');
  const [finalText, setFinalText] = useState('');
  const [h1a, setH1a] = useState('');
  const [h1b, setH1b] = useState('');
  const [h1c, setH1c] = useState('');
  const [h1d, setH1d] = useState('');
  const [h1e, setH1e] = useState('');
  const [h1f, setH1f] = useState('');
  const [altImg1, setAltImg1] = useState('');
  const [altImg2, setAltImg2] = useState('');
  const [altImg3, setAltImg3] = useState('');

  const [imgFondo, setImgFondo] = useState('');
  const [imgLeSecret, setImgLeSecret] = useState('');
  const [imgHinata, setImgHinata] = useState('');
  const [img1, setImg1] = useState('');
  const [img2, setImg2] = useState('');
  const [img3, setImg3] = useState('');

  const { segmento1, segmento2, segmento3 } = useParams();
  const slug = segmento3 || segmento2 || segmento1;

  useEffect(() => {
    if (slug) {
      setSpan1(document.getElementById('span1')?.innerHTML || '');
      setLinkPC(document.getElementById('linkPC')?.innerHTML || '');
      setLinkAndroid(document.getElementById('linkAndroid')?.innerHTML || '');
      setH2Hinata(document.getElementById('h2Hinata')?.innerHTML || '');
      setParrafo1(document.getElementById('parrafo1')?.innerHTML || '');
      setParrafo2(document.getElementById('parrafo2')?.innerHTML || '');
      setParrafo3(document.getElementById('parrafo3')?.innerHTML || '');
      setParrafo4(document.getElementById('parrafo4')?.innerHTML || '');
      setParrafo5(document.getElementById('parrafo5')?.innerHTML || '');
      setParrafo6(document.getElementById('parrafo6')?.innerHTML || '');
      setParrafo7(document.getElementById('parrafo7')?.innerHTML || '');
      setFinalText(document.getElementById('finalText')?.innerHTML || '');
      setH1a(document.getElementById('h1a')?.innerHTML || '');
      setH1b(document.getElementById('h1b')?.innerHTML || '');
      setH1c(document.getElementById('h1c')?.innerHTML || '');
      setH1d(document.getElementById('h1d')?.innerHTML || '');
      setH1e(document.getElementById('h1e')?.innerHTML || '');
      setH1f(document.getElementById('h1f')?.innerHTML || '');
      setAltImg1(document.getElementById('altImg1')?.innerHTML || '');
      setAltImg2(document.getElementById('altImg2')?.innerHTML || '');
      setAltImg3(document.getElementById('altImg3')?.innerHTML || '');

      setImgFondo(document.getElementById('imgFondo')?.innerHTML || '');
      setImgLeSecret(document.getElementById('imgLeSecret')?.innerHTML || '');
      setImgHinata(document.getElementById('imgHinata')?.innerHTML || '');
      setImg1(document.getElementById('img1')?.innerHTML || '');
      setImg2(document.getElementById('img2')?.innerHTML || '');
      setImg3(document.getElementById('img3')?.innerHTML || '');
      setCargado(true);
    }
  }, [slug]);
  if (slug && !cargado) {
    return <p style={{ color: 'white' }}>Cargando contenido...</p>;
  }
  if (slug) {



    return (
      <>
        <div className='inicio'>
          <span>{span1}</span>
          <Link to='https://cuty.io/C4i9b7LS'>{linkPC}</Link>
          <Link to='https://cuty.io/G7TRT5eFfiCS'>{linkAndroid}</Link>
        </div>

        <img className='ElJardinDelH' src={imgFondo} alt="El Jardín del H" />

        <div className='titulos'>
          <img className='le-secret' src={imgLeSecret} alt="Juego Hentai Naruto" />
          <Link to='https://www.youtube.com/watch?v=Sy3bmLipP30'>
            <img className='androide-señalando' src={imgHinata} alt="Hinata Hentai" />
            <h2 className='titulo2'>{h2Hinata}</h2>
          </Link>
        </div>

        <div className='contenedorDeParrafos'>
          <div className='contenedorDeParrafo2'>
            <p className='parrafo'>{parrafo1}</p>
            <p className='parrafo'>{parrafo2}</p>
            <p className='parrafo'>{parrafo3}</p>
            <p className='parrafo'>{parrafo4}</p>
            <img className='pruebade' src={img1} alt={altImg1} />
            <p className='parrafo'>{parrafo5}</p>
            <img className='pruebade2' src={img2} alt={altImg2} />
            <p className='parrafo'>{parrafo6}</p>
            <img className='hinata2' src={img3} alt={altImg3} />
            <p className='parrafo'>{parrafo7}</p>
          </div>

          <div className='contenedorDeParrafo3'>
            <div className='contenedorDeParrafo4'>
              <p>{finalText}</p>
              <h1>{h1a}</h1>
              <h1>{h1b}</h1>
              <h1>{h1c}</h1>
              <h1>{h1d}</h1>
              <h1>{h1e}</h1>
              <h1>{h1f}</h1>
            </div>
          </div>
        </div>
      </>
    );
  }


  else {
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
