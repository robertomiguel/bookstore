import GithubLink from 'components/common/GithubLink'
import React from 'react'

const About = () => {
    return (
        <div className="about">
            <h1>Muestra de desarrollo Frontend con:</h1>
            <div>
                <b>NEXT.JS</b>
                <div>
                    Entorno de desarrollo con capacidad para realizar SSR
                    (Renderizado del lado del servidor), da mayor rendimiento a
                    la carga de páginas, también aumenta la seguridad al
                    consultar a APIs, ya que los datos de conexión quedan del
                    lado del servidor y no se envían al cliente.
                </div>

                <b>REACT.JS</b>
                <div>
                    Librería desarrollada por Facebook, orientada a la
                    programación con elementos reutilizable, también da un mayor
                    rendimiento con la utilización de un Virtual DOM, que es
                    comparado con el DOM normal del HTML y puede hacer
                    renderizado al cambiar estados
                </div>

                <b>TYPESCRIPT</b>
                <div>
                    Entorno de programación muy similar al javascript, pero
                    agregando fuerte modelado de tipado y extendiendo algunas
                    funciones de javascript
                </div>

                <b>ANT DESIGN (UI)</b>
                <div>
                    Librería de interfaz de usuario (UI), agrega rapidez al
                    desarrollo utilizando componentes prediseñados
                </div>

                <b>Estilos CSS</b>
                <div>
                    Solo se implemento una pequeña muestra de utilización de
                    Styled JSX, que garantiza que cada etiquete sea única en
                    cada lugar donde se use. (en esta demo, no se hizo
                    maquetación)
                </div>

                <b>API</b>
                <div>
                    La APP cuando con una API propia que se ejecuta con NODE.JS
                    para hacer render de servidor y consultas a API externas, se
                    implementó una simple consulta a un Api Rest de google que
                    devuelve un listado de libros.
                </div>

                <b>IMÁGENES</b>
                <div>
                    Las imágenes son redimensionadas en el servidor, para
                    entregar al cliente una imagen del tamaño de visualización,
                    tambien hacen una carga progresiva para no demorar la
                    entrega, hace uso del método LazyLoad que se encarga de
                    cargar las imágenes cuando van apareciendo en pantalla
                </div>

                <b>STORES / Estado de la APP</b>
                <div>
                    La aplicación está orientada al uso de Stores, cada store
                    representa una entidad de la lógica de negocios, cada una
                    con sus métodos correspondientes, Los componentes conectados
                    a un mismo store, comparten los datos en tiempo real.
                </div>

                <b>BUENAS PRÁCTICAS</b>
                <div>
                    Código organizado en componentes, vistas, stores…etc Formato
                    de código con PRETTIER Nombre de variables descriptivas
                    (ingles) Comentarios en código Nombre de componentes e
                    Interfaces en mayúsculas
                </div>

                <b>GIT</b>
                <div>
                    Toda la muestra en una sola rama Master. Para desarrollos
                    profesionales utilizo distintas ramas para desarrollar y
                    probar la app
                </div>

                <GithubLink />
                <div>
                    <b>Programador:</b>
                    <h3>Roberto Miguel Costi</h3>
                </div>
                <p>2021 - Rosario - Argentina</p>
            </div>
            <style jsx>
                {`
                    .about {
                        text-align: center;
                        margin-left: auto;
                        margin-right: auto;
                        background: white;
                        max-width: 550px;
                        border-radius: 10px;
                        margin-top: 10px;
                        box-shadow: 5px 5px #666;
                    }
                    .about div {
                        max-width: 500px;
                        margin-left: auto;
                        margin-right: auto;
                        font-size: 1.1em;
                        margin-bottom: 1.1em;
                    }
                `}
            </style>
        </div>
    )
}

export default About
