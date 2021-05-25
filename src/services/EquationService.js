import axios from 'axios';

const EQUATIONS_REST_API_URL = 'http://localhost:8090/equationsolver/allEquations';

class EquationService {

    getEquations() {
        return axios.get(EQUATIONS_REST_API_URL);
    }
}

export default new EquationService();