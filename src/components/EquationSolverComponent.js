import React from 'react';
import axios from 'axios';

class EquationSolverComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            coefA: '',
            coefB: '',
            coefC: '',
            complexSolution: false
        };
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    isChecked(event) {
        this.setState({[event.target.name]: event.target.checked});
        return event.target.checked;
    }

    onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        const { coefA, coefB, coefC, complexSolution } = this.state;

        const config = {
            "a": coefA,
            "b": coefB,
            "c": coefC,
            "complexSolution": complexSolution
        }

        axios.post('http://localhost:8090/equationsolver/calculateEquation', config)
            .then((response) => {

                let discriminant = JSON.stringify(response['data']['equation']['discriminant']);
                let firstroot = JSON.stringify(response['data']['equation']['firstroot']);
                let secondroot = JSON.stringify(response['data']['equation']['secondroot']);
                let validequation = JSON.stringify(response['data']['equation']['validequation']);
                alert("Result: " +
                    "\nDiscriminant: " + discriminant +
                    "\nFirst root: " + firstroot +
                    "\nSecond root: " + secondroot +
                    "\nValid equation: " + validequation);
            });
    }

    render() {
        return (

            <div>
                <form className="form-inline" onSubmit={this.onSubmit}>
                    <div className="row align-items-center justify-content-center">
                        <div className="col-auto">
                            <label className="sr-only" htmlFor="inlineFormInput">Coefficient A</label>
                            <input
                                type="number"
                                className="form-control mb-2"
                                id="inlineFormInput"
                                placeholder="A"
                                name="coefA"
                                value={this.state.name}
                                onChange={this.handleChange.bind(this)}
                                required
                            />
                        </div>

                        <div className="col-auto">
                            <label className="sr-only" htmlFor="inlineFormInput">Coefficient B</label>
                            <input
                                type="number"
                                className="form-control mb-2"
                                id="inlineFormInput"
                                placeholder="B"
                                name="coefB"
                                value={this.state.name}
                                onChange={this.handleChange.bind(this)}
                                required
                            />
                        </div>

                        <div className="col-auto">
                            <label className="sr-only" htmlFor="inlineFormInput">Coefficient C</label>
                            <input
                                type="number"
                                className="form-control mb-2"
                                id="inlineFormInput"
                                placeholder="C"
                                name="coefC"
                                value={this.state.name}
                                onChange={this.handleChange.bind(this)}
                                required
                            />
                        </div>

                        <div className="col-auto">
                            <div className="form-check mt-3">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="autoSizingCheck"
                                    name="complexSolution"
                                    value={this.state.name}
                                    onChange={this.isChecked.bind(this)}
                                />
                                <label className="form-check-label" htmlFor="autoSizingCheck">
                                    Complex Solution
                                </label>
                            </div>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary mt-2">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default EquationSolverComponent