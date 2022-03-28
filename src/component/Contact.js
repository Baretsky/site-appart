import React from 'react';
import Navigation from './Navigation';

const Contact = () => {
    return (
        <div style={{
            textAlign: "center"
        }}>
            <Navigation />
            <h2>Mail de contact :</h2>
            <br />
            <a href="mailto:eric.dulon@orange.fr">eric.dulon@orange.fr</a>
        </div>
    );
};

export default Contact;