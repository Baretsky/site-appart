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
        <div className="App" >
            <div style={{ textAlign: "center" }}>
                <Navigation />
                <div style={{
                    padding: "0 20px"
                }}>
                    <Carousel
                        data={data}
                        time={2000}
                        width="850px"
                        height="500px"
                        captionStyle={captionStyle}
                        radius="10px"
                        slideNumber={true}
                        slideNumberStyle={slideNumberStyle}
                        captionPosition="bottom"
                        automatic={true}
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

export default Appart1;