import React, { Component } from 'react'
 
const greeting = { 
    de: "Hallo",                        
    en: "Hello",
    es: "Hola",
    fr: "Bonjour"
};


class Greetings extends Component {
    render() {
        return (
            <div>
                {greeting[this.props.lang]} {this.props.children}<br></br>
            </div>
        )
    }
}


export default Greetings;