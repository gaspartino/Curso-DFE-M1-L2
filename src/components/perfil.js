import React from "react";
import autorLogo from "../images/autor.png";
import bookLogo from "../images/book.png";
import urlLogo from "../images/url.png";

export default class Perfil extends React.Component {
    render () {

        const {autor, tittle, url}= this.props

        return (
            <>
                <span><img src= {autorLogo} className= "Logo" alt= "Logo"/>{autor}<br/></span>
                <span><img src= {bookLogo} className= "Logo" alt= "Logo"/>{tittle}<br/></span>
                <span><img src= {urlLogo} className= "Logo" alt= "Logo"/>{url}</span>
            </>
        )
    }
}