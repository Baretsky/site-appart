import React from 'react';
import Navigation from './Navigation';
import { Carousel } from 'react-carousel-minimal';
import coifferie_1 from './../assets/img/coifferie/coifferie_1.jpg';
import coifferie_2 from './../assets/img/coifferie/coifferie_2.jpg';
import coifferie_3 from './../assets/img/coifferie/coifferie_3.jpg';
import coifferie_4 from './../assets/img/coifferie/coifferie_4.jpg';

const Appart1 = () => {

    const data = [
        {
            image: coifferie_1,
            caption: 'Pièce de vie'
        },
        {
            image: coifferie_2,
            caption: 'Pièce de vie'
        },
        {
            image: coifferie_3,
            caption: 'Pièce de vie'
        },
        {
            image: coifferie_4,
            caption: 'Salle de bain'
        },
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
            <div style={{
                textAlign: "center"
            }}>
                <Navigation />
                <div style={{
                    padding: "0 20px"
                }}>
                    <div style={{
                        textAlign: "center",
                        paddingTop: "20px"
                    }}>
                        <h2>HYPER CENTRE/JAUDE STUDIO REFAIT A NEUF BEAUCOUP DE CHARME</h2>
                        <br />
                        <p>
                            Magnifique studio d'une surface de 20 m² loi carrez, entièrement refait à neuf.<br /> <br />
                            Emplacement idéal en plein cœur de ville, entre la place de la Victoire et Place de Jaude , commerces transports et pôle universitaire à pieds, Tram à 1 minutes.<br /> <br />
                            Le studio se situe au 1er étage d'un très bel immeuble ancien sécurisé.<br />
                            Intérieur très lumineux, entièrement refait (deux très grandes fenêtres PVC), avec beaucoup de cachet (bois pierre et crépi) avec parquet.<br /><br />
                            Entièrement équipé : Joli lit banquette, table et chaise grand placard avec dressing, cuisine avec plaque de cuisson vitrocéramique, vaisselle, réfrigérateur, micro-ondes, lave- linge, chauffage électrique haute performance, tout est neuf !<br />
                            SDB indépendante avec douche neuve et WC.<br /> <br />
                            Loyer 395€ + charges 35€ (comprenant l'eau, seule l'électricité reste à charge-20€ par mois)<br /> <br />
                            Caution : 2 mois de loyer hors charges(meublé). Caution parentale exigée pour les étudiants<br /> <br />
                            Dossier par mail. Visite avec Whatsapp Video possible.<br /></p>
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
                            margin: "40px auto"
                        }}
                    />
                </div>
            </div>
        </div >
    );
};

export default Appart1;