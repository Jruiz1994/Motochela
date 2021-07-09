import React from 'react';
import {  Link} from 'react-router-dom'

function Nosotros() {
	return (
		<div style={{ padding: 40 }}>
			<h1>Nosotros</h1>
			<p>
				Somos miles que creemos en lo mismo: los mejores momentos están tocando tu puerta.
        </p>
        <p>
        Queremos que en este momento te dediques a disfrutar y te olvides de toda complicación. Una gran variedad de bebidas de todo el mundo a tu  alcance y en la comodidad de tu casa. 
        </p>
        <p>
        Lo hicimos: ¡te sorprendimos! Ya no tenés que recorrer distintos lugares en busca de lo que necesitás para tu reunión o para el surtido de tu hogar, encontralo todo acá. Un servicio único que merece ser contado de forma única. Nuestro camino recién empieza y queremos que seas parte. ¿Te unís?
        </p>
        <p>
        ¿Tenés dudas? ¿Comentarios? Envianos tus consultas y sugerencias haciendo click <Link to='/contacto'>acá</Link>
        </p>
        <p>
        ¿Te gustaría encontrar otras cervezas o bebidas en nuestro sitio? Escribinos a contacto@motochela.com.uy y haremos todo lo posible por incluirla en nuestro portafolio.
        </p>
        <p> Unite a nosotros en este viaje, <strong>¡salud!</strong> El equipo de Motochela
			</p>
		</div>
	);
}

export default Nosotros;