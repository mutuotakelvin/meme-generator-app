import React, { useState } from 'react';
import './Meme.scss'
import memesData from './../../MemeData/MemesData'

const Meme = () => {
    const [memeImage, setMemeImage] = useState("")

    const getMeme = () => {
        const randomMem = memesData.data.memes[Math.floor(Math.random()*memesData.data.memes.length)]
        const memeUrl = randomMem.url
        setMemeImage(memeUrl)
    }
    return (
        <main>
            <div className='form'>
                <input 
                placeholder='top text' 
                className='form--input' 
                type="text"/>
                <input 
                placeholder='bottom text' 
                className='form--input' 
                type="text"/>
                <button 
                onClick={getMeme}
                className='form--btn'
                >Get a new meme image 🖼</button>
            </div>
            <img src={memeImage} alt=''/>
        </main>
    );
};

export default Meme;