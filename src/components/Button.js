import {React, Component} from 'react';
import LanguageContexts from '../contexts/LanguageContexts';
import ColorContext from '../contexts/ColorContext';

 

class Button extends Component{
    // static contextType = LanguageContexts;
    renderSubmit = (value)=>{
        return value === 'english' ? 'Submit' : 'Voorleggen'
    }

    renderButtonColor = (color) => {
    }

    render(){
        // const text = this.context === 'english' ? 'Submit' : 'Voorleggen'  
        return(
            <ColorContext.Consumer>
                {(color)=>
                <button className={`ui button ${color}`}>
                {/* {text} */}
                <LanguageContexts.Consumer>
                    {(value)=> this.renderSubmit(value)}
                </LanguageContexts.Consumer>
            </button>
                }
            </ColorContext.Consumer>
        )
    }
}

export default Button;