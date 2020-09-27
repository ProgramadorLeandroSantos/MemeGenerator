import React from 'react';
import './styles.css'

export default function Header(){
    return(
        <div>
            <header>
                <img 
                    className="img-logo"
                    src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
                    alt="Problem?"
                />
                <p>Meme Generator</p>
            </header>
        </div>
    );
};