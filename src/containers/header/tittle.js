import React from 'react'

export default class Header extends React.Component {
    constructor(props){
        super(props)
        this.state = {};
    }

    render () {
        const {tittle} = this.props;

        return (
            <div className= "header">
             <h1>{tittle}</h1>
            </div>
        );
    }
}