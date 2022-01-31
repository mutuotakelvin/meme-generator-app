import React, { useState } from 'react';
import './Meme.scss'

const Meme = () => {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemes, setAllMemes] = React.useState([])
    

    function getMemeImage() {
        const memesArray = allMemes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }

    const handleChange = (e)=>{
        const {value,name} = e.target
        setMeme(prevMeme =>({
            ...prevMeme,
            [name]:value
        }))
    }

    React.useEffect( ()=>{
        const fetchData = async ()=>{
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)

        }
        fetchData()
    },[])

    return (
        <main>
            <div className='form'>
                <input 
                placeholder='top text' 
                className='form--input' 
                name="topText"
                value={meme.topText}
                onChange={handleChange}
                type="text"/>
                <input 
                placeholder='bottom text' 
                className='form--input' 
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
                type="text"/>
                <button 
                onClick={getMemeImage}
                className='form--btn'
                >Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt=''/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
};

export default Meme;