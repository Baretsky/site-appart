import React from 'react';
import Navigation from './Navigation';
import { Carousel } from 'react-carousel-minimal';
import jacobin_1 from './../assets/img/jacobin/jacobin_1.jpg';
import jacobin_2 from './../assets/img/jacobin/jacobin_2.jpg';
import jacobin_3 from './../assets/img/jacobin/jacobin_3.jpg';
import jacobin_4 from './../assets/img/jacobin/jacobin_4.jpg';
import jacobin_5 from './../assets/img/jacobin/jacobin_5.jpg';
import jacobin_6 from './../assets/img/jacobin/jacobin_6.jpg';

const Appart2 = () => {

    const data = [
        {
            image: jacobin_1,
            caption: 'Pièce de vie'
        },
        {
            image: jacobin_2,
            caption: 'Pièce de vie'
        },
        {
            image: jacobin_3,
            caption: 'Chambre'
        },
        {
            image: jacobin_4,
            caption: 'Chambre'
        },
        {
            image: jacobin_5,
            caption: 'Chambre'
        },
        {
            image: jacobin_6,
            caption: 'Salle de bain'
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
                        <h2>HYPER CENTRE DELILLE -  T2 REFAIT A NEUF BEAUCOUP DE CHARME</h2>
                        <br />
                        <p>
                            Magnifique T2, entièrement refait à neuf,<br /><br />
                            Emplacement idéal en plein cœur de ville, à 100 M de la Place Delille, commerces transports et pôle universitaire à pieds, Tram à 1 minutes.<br /><br />
                            L'appartement se situe au  4ème (et dernier) étage d'un très bel immeuble ancien sécurisé.<br /><br />
                            Intérieur très lumineux, entièrement refait (deux très grandes fenêtres PVC), avec beaucoup de cachet (bois au mur et parquet ancien ).<br />
                            Entièrement équipé : deux cabriolets, table et chaise grand meuble de rangement, cuisine avec plaque de cuisson , vaisselle intégralement fournie, réfrigérateur, micro-ondes, chauffage électrique haute performance, tout est neuf !....La lave linge est intégré et neuf.<br />
                            Literie neuve avec couette fournie et grande armoire de rangement.<br />
                            SDB indépendante avec douche neuve et WC.<br />
                            Stationnement aisé<br /><br />
                            Loyer 430€ + charges 40€ (comprenant l'eau, seule l'électricité reste à charge-20€ par mois).<br /><br />
                            Caution : 2 mois de loyer hors charges(meublé). Caution parentale exigée pour les étudiants.<br /><br />
                            Dossier par mail. Visite avec Video possible.<br /></p>
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

export default Appart2;