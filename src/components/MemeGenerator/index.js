import React from 'react';
import './styles.css';

export default class MemeGenerator extends React.Component{
   constructor(){
       super()
       this.state= {
           topText: '',
           bottomText: '',
           randomImg: 'http://i.imgflip.com/1bij.jpg',
           allMemeImgs: []
       }
       this.HandleChange = this.HandleChange.bind(this);
       this.HandleSubmit = this.HandleSubmit.bind(this);
   }

   componentDidMount(){
       fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(response =>{
            const {memes} = response.data;
            // console.log(memes)
            this.setState({ allMemeImgs: memes});
        });
   };
   
   HandleChange(event){
       const {name,value} = event.target;
       this.setState({ [name]: value });
   };

   HandleSubmit(event){
        event.preventDefault();
        const randomNumber = Math.floor(Math.random() * this.state.allMemeImgs.length);
        const randomMemeImg = this.state.allMemeImgs[randomNumber].url;
        this.setState({ randomImg: randomMemeImg});
   };

    render(){
        return(
            <>
                <form className="meme-form">
                    <input 
                        type="text" 
                        name="topText" 
                        placeholder="Top Text"
                        value={this.state.topText}
                        onChange={this.HandleChange}
                        autoComplete="off"
                    />
                    <input 
                        type="text" 
                        name="bottomText" 
                        placeholder="bottom Text"
                        value={this.state.bottonText}
                        onChange={this.HandleChange}
                        autoComplete="off"
                    />
                    
                    <button 
                        className="button-change-image"
                        type="submit"
                        onClick={this.HandleSubmit}
                    >
                            Change Image        
                    </button>
                </form>
                
                <div className="meme">
                    <img className="meme-pic" src={this.state.randomImg} alt="meme" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </>
        );
    };
};