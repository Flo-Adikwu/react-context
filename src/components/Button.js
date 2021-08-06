import {React, Component} from 'react';
import LanguageContexts from '../contexts/LanguageContexts';
 

class Button extends Component{
    // static contextType = LanguageContexts;
    renderSubmit = (value)=>{
        return value === 'english' ? 'Submit' : 'Voorleggen'
    }

    render(){
        // const text = this.context === 'english' ? 'Submit' : 'Voorleggen'  
        return(
            <button className="ui button primary">
                {/* {text} */}
                <LanguageContexts.Consumer>
                    {(value)=> this.renderSubmit(value)}
                </LanguageContexts.Consumer>
            </button>
        )
    }
}

export default Button;