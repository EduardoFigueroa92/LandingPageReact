import React from "react";

import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";


const Home = () => {
    return (
        <div className="container">
            <Navbar />
            <div className="container">
                <div className="container mr-5 justify-content-center align-items-center">
                    <div className="d-inline-block justify-content-center align-items-center">
                        <Jumbotron />

                        <div className="row mt-3 mb-4" >
                            <Card
                                img={"https://pbs.twimg.com/media/GGSX2GYXEAEQAxQ.jpg"}
                                title={"Tour de France"}
                                text={"El Tour de France está considerada como la carrera ciclista más importante del mundo. Es una vuelta por etapas de ciclismo en ruta disputada a lo largo de la geografía francesa."}
                            />
                            <Card
                                img={"https://www.valsuganacamping.it/wp-content/uploads/2021/05/logo-giro-2022.png"}
                                title={"Giro de Italia"}
                                text={"Es una competición ciclista por etapas de tres semanas de duración disputada en Italia. Es una de las tres Grandes Vueltas, la segunda en aparecer históricamente tras el Tour de France."}
                            />
                            <Card
                                img={"https://pbs.twimg.com/profile_images/1253295313617649666/v_crpD1N_400x400.jpg"}
                                title={"Vuelta España"}
                                text={"Es una carrera por etapas de ciclismo ptofesional en ruta disputada a lo largo de la geografía española. Es la última de las tres grandes en disputarse, entre agosto y septiembre, y cierra el calendario UCI."}
                            />
                            <Card
                                img={"https://i.eurosport.com/2023/01/11/3523792-71823008-2560-1440.jpg"}
                                title={"Clásicas"}
                                text={
                                    <>
                                        Previas a las tres grandes vueltas:
                                        <ol>
                                            <li>Milán-San Remo</li>
                                            <li>Tour de Flandes</li>
                                            <li>París-Roubaix</li>
                                            <li>Lieja-Bastoña-Lieja</li>
                                            <li>Giro de Lombardía</li>
                                        </ol>
                                    </>
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;