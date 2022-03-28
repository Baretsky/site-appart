import React from 'react';
import Navigation from './Navigation';
import { Carousel } from 'react-carousel-minimal';
import poterne_1 from './../assets/img/poterne/poterne_1.jpg';
import poterne_2 from './../assets/img/poterne/poterne_2.jpg';
import poterne_3 from './../assets/img/poterne/poterne_3.jpg';
import poterne_4 from './../assets/img/poterne/poterne_4.jpg';
import poterne_5 from './../assets/img/poterne/poterne_5.jpg';
import poterne_6 from './../assets/img/poterne/poterne_6.jpg';
import poterne_7 from './../assets/img/poterne/poterne_7.jpg';
import poterne_8 from './../assets/img/poterne/poterne_8.jpg';
import poterne_9 from './../assets/img/poterne/poterne_9.jpg';

const Appart3 = () => {

    const data = [
        {
            image: poterne_1,
            caption: 'Pièce de vie'
        },
        {
            image: poterne_2,
            caption: 'Cuisine'
        },
        {
            image: poterne_3,
            caption: 'Pièce de vie'
        },
        {
            image: poterne_4,
            caption: 'Chambre'
        },
        {
            image: poterne_5,
            caption: 'Chambre'
        },
        {
            image: poterne_6,
            caption: 'Chambre'
        },
        {
            image: poterne_7,
            caption: 'Salle de bain'
        },
        {
            image: poterne_8,
            caption: 'Cave'
        },
        {
            image: poterne_9,
            caption: 'Terrasse'
        }
    ]

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }

    return (
        <div className="App" style={{
            height: "150vh",
        }}>
            <div style={{ textAlign: "center" }}>
                <Navigation />
                <div style={{
                    padding: "0 20px"
                }}>
                    <div style={{
                        textAlign: "center",
                        paddingTop: "20px"
                    }}>
                        <p>
                            Beau 2 pièces refait à neuf de 34m2 situé dans le cœur historique, à deux minutes à pieds de Gaillard, Jaude et du Tram.<br /><br />
                            Ecoles et Facs à proximité immédiate.<br /><br />
                            Appartement lumineux se composant d'une belle pièce de vie avec cuisine neuve ouverte et équipée.<br />
                            Belle chambre au calme avec SDB entièrement neuve.<br /><br />
                            Le ++ - Magnifique cave voutée aménagée (sol en lame de terrasse) et une cour extérieure non privative très agréable.<br /><br />
                            Loyer : 515  charges comprises<br /><br />
                            Dépôt de garantie : 480€<br /><br />
                            Pas de frais d'agence<br /><br />
                            Libre de suite.<br /><br />
                            Contact par mail uniquement dans un premier temps.<br /></p>
                    </div>
                    <Carousel
                        data={data}
                        time={2000}
                        width="100%"
                        height="100%"
                        captionStyle={captionStyle}
                        radius="10px"
                        slideNumber={true}
                        slideNumberStyle={slideNumberStyle}
                        captionPosition="bottom"
                        automatic={false}
                        dots={true}
                        pauseIconColor="white"
                        pauseIconSize="40px"
                        slideBackgroundColor="darkgrey"
                        slideImageFit="cover"
                        thumbnails={true}
                        thumbnailWidth="100px"
                        style={{
                            textAlign: "center",
                            maxWidth: "850px",
                            maxHeight: "500px",
                            margin: "40px auto",
                        }}
                    />
                </div>
            </div>
        </div >
    );
};

export default Appart3;