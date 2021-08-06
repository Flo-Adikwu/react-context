import React from 'react';
import LanguageContexts from '../contexts/LanguageContexts';


class LanguageSelector extends React.Component {
    static contextType = LanguageContexts;

    render() {
        console.log(this.context)
        return (
            <div>Select a language:
                <i className="flag us" onClick={() => this.context.onLanguageChange('english')} />
                <i className="flag nl" onClick={() => this.context.onLanguageChange('dutch')} />
                {/* <i className="flag us" onClick={() => this.props.onLanguageChange('english')} />
                <i className="flag nl" onClick={() => this.props.onLanguageChange('dutch')} /> */}
            </div>
        )
    }
}

export default LanguageSelector;