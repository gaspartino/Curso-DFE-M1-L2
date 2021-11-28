import React from "react";
import Perfil from "../../components/perfil";
import ico from "../../images/search.png";
import api from "../../service/api";

export default class ListAut extends React.Component {
    constructor(props) {
        super(props)

        this.searchAutor = this.searchAutor.bind(this);
        this.state= {
            pesquisa: '',
            filmes: []
        }
    }

    async componentDidMount(){
        const response = await api.get('');

        this.setState({ filmes: response.data.hits});
    }

    async searchAutor(){
        console.log(this.pesquisa)
        const response = await api.get('');
        this.setState({
            filmes: response.data.hits.filter(b=> b.author.toLowerCase().includes(this.state.pesquisa.toLowerCase()))  
        })
    }

    render () {

        const { filmes } = this.state;

        const verCampo = (campo) => {
            if(campo === null) {
                return "Não encontrado";
            } else {
                return campo;
            }
        }
        
        return (
            <>
                <div>
                    <input id= "searchBar" type= "text" placeholder= "Autor" onChange= {(e)=> this.setState({pesquisa: e.target.value})}></input> 
                    <img src= {ico} className= "searchButton" alt= "logo" onClick= {this.searchAutor}/>
                </div>
                {filmes.map(filmes=> (
                    <li className= "Perfil" key={filmes.objectID}>
                        <Perfil autor= {filmes.author} tittle= {verCampo(filmes.title)} url= {verCampo(filmes.url)}/>
                    </li>
                ))}
            </>
        )
    }
}