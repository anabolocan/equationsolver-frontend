import React from 'react';
import EquationService from '../services/EquationService';

class EquationsComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            equations:[]
        }
    }

    componentDidMount() {
        EquationService.getEquations().then((response) => {
            this.setState({equations: response.data})
        });
    }

    render() {
        return(
            <div className="container text-center">
                <h1 className = "text-center">Equations List</h1>
                <table className ="table table-striped table-bordered table-hover">
                    <thead>
                    <tr>
                        <td>Coefficient A</td>
                        <td>Coefficient B</td>
                        <td>Coefficient C</td>
                        <td>Discriminant</td>
                        <td>First root</td>
                        <td>Second root</td>
                        <td>Valid equation</td>
                        <td>Log time</td>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        this.state.equations.map(
                            equation =>
                                <tr key = {equation.id}>
                                    <td>{equation.coefficienta}</td>
                                    <td>{equation.coefficientb}</td>
                                    <td>{equation.coefficientc}</td>
                                    <td>{equation.discriminant}</td>
                                    <td>{equation.firstroot}</td>
                                    <td>{equation.secondroot}</td>
                                    <td>{equation.validequation ? "True" : "False"} </td>
                                    <td>{equation.logtime}</td>
                                </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default EquationsComponent