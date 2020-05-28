import React from 'react';
import Slider from './Slider';
import History from './History';
import Hobbies from './Hobbies';
import Life from './Life';

function Home(){
    return(
        <div>
            <Slider />
            <History />
            <Hobbies />
            <Life />
        </div>
    )
}

export default Home;