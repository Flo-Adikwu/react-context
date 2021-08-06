import { React, Component } from 'react';
import LanguageContexts from '../contexts/LanguageContexts';


class Field extends Component {
    static contextType = LanguageContexts;

    render() {
        const name = this.context.language === 'english' ? 'Name' : 'Naam';
        return (
            <div className="ui field">
                <label>{name}</label>
                <input />
            </div>
        )
    }
}

export default Field;
