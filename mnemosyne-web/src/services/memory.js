const API_UTL = "http://localhost:3000";

const getMemories = async () => {

    const response = await fetch(`${API_UTL}/memories`);'' //Busquei os dados.

    const memories = await response.json(); //converte a requisição para json.

    return memories;

}

export default { getMemories };