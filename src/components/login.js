import React, {Component} from 'react';
import { connect} from 'react-redux';
import { atualizaNome, chamaCep } from '../actions/AppActions';

class Login extends Component {
    render() {
        console.log(this)
        return (
            <div>
                <input type={"text"} value={this.props.nome} onChange={item => this.props.atualizaNome(item.currentTarget.value)}  />
                <input type={"text"} value={this.props.cep} placeholder={"Digite o Cep"} onChange={item => this.props.chamaCep(item.currentTarget.value)}  />
                <input type={"text"} value={this.props.logradouro} placeholder={"Digite o Endereço"} />
                <input type={"text"} value={this.props.cidade} placeholder={"Digite a Cidade"} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        nome: state.AppReducer.nome,
        idadeClauds: state.AppReducer.idade,
        cep: state.AppReducer.cep,
        logradouro: state.AppReducer.logradouro,
        cidade: state.AppReducer.cidade

    }
};




export default connect(mapStateToProps, {atualizaNome, chamaCep})(Login);
