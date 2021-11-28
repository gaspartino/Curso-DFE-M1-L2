import React from "react";
import ico from "../images/search.png"

export default class Search extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            pesquisa: ''
        }
        this.handleClick= this.handleClick.bind(this);
    }
    
    handleClick() {
        const {callback} = this.props;
        callback(document.getElementById('searchBar').value);
    }
    
    render () {
        return (
            <div>
                <input id= "searchBar" type= "text" placeholder= "Autor"></input> 
                <img type= "submit" src= {ico} className= "searchButton" alt= "logo" onClick= {this.handleClick}/>
            </div>
        )
    }
}