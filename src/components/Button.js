import { React, Component } from 'react';
import LanguageContexts from '../contexts/LanguageContexts';
import ColorContext from '../contexts/ColorContext';



class Button extends Component {
    // static contextType = LanguageContexts;
    renderSubmit = (language) => {
        return language === 'english' ? 'Submit' : 'Voorleggen'
    }

    renderButtonColor = (color) => {
    }

    render() {
        // const text = this.context === 'english' ? 'Submit' : 'Voorleggen'  
        return (
            <ColorContext.Consumer>
                {(color) =>
                    <button className={`ui button ${color}`}>
                        {/* {text} */}
                        <LanguageContexts.Consumer>
                            {({ language }) => this.renderSubmit(language)}
                        </LanguageContexts.Consumer>
                    </button>
                }
            </ColorContext.Consumer>
        )
    }
}

export default Button;