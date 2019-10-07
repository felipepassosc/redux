import React, {Component} from 'react';



class ListNomes extends Component {

    render() {
        console.log(this.props);
        return (
            <p>
                {this.props.nome}
            </p>
        );
    }
}

export default ListNomes;
