
export const atualizaNome = texto => {
    return {
        type: "Milena",
        texto
    }
};

export const chamaCep = texto => {

    if(texto.length == 8){
        return dispatch => {
            fetch('https://viacep.com.br/ws/'+texto+'/json/').then(response =>{
                return response.json();
            }).then(data => {

                dispatch({
                    type: "CEPConsulta",
                    data,
                    texto
                });
            })
        };



    }else{
        return {
            type: "CEP",
            texto
        }
    }

}
