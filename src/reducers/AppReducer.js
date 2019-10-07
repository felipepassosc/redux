const INITIAL_STATE = {
    nome: "",
    idade: 24,
    cep: "",
    logradouro: "",
    cidade: ""
};

export default ( state = INITIAL_STATE, action ) => {
    console.log(action)
    switch (action.type) {
        case "Milena":
            console.log("sss")
            return { ...state, nome: action.texto }

        case "CEP":

            return { ...state, cep: action.texto }
        case "CEPConsulta":

            return { ...state, cep: action.texto, logradouro: action.data.logradouro, cidade: action.data.localidade }
    }
    return state;
}
