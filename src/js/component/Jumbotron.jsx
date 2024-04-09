import React from "react" ;
export const Jumbotron = () => {
    return (
        <>
        <div className="jumbotron">
            <h1 className="display-4">Hola cicloturista!</h1>
            <p className="lead">En esta web encontrarás todo lo referente al mundo del ciclismo de cara a la temporada 2024 ya empezada.
            Actualizaremos a diario las noticias que todo seguidor del ciclismo quiere conocer a diario, com ofichajes, preparaciones de cara a las grandes vueltas, preparación de los equipos en las diferentes vueltas autonómicas, etc... 
            Además, también mostraremos entrevistas a diferentes corredores de equipos tanto UCI como equipos más pequeños, para saber como afrontan la temporada, el tipo de alimentación que siguen durante la preparación previa a una grande, si el descanso es una parte fundamental de su entrenamiento... Y mucho más! </p>
            <p>Si quieres saber más, pincha aquí abajo!</p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">Pincha aquí</a>
            </p>
        </div>
        </>
    );
} 
    export default Jumbotron;