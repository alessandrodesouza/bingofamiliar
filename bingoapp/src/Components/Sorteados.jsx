import React, { Component } from "react";
import PropTypes from 'prop-types';

class Sorteados extends Component {

  constructor(props) {
    super(props);

    this.min = 1;
    this.max = 90;

  }

  renderizarNumeros = () => {
    let numeros = [];

    for (let n = this.min; n <= this.max; n++) {
      if (this.props.numerosSorteados)
        numeros.push(
          <span key={n.toString()} className={(this.props.numerosSorteados.indexOf(n) >= 0 ? "text-success" : "text-muted")}>
          {(n.toString().length === 1 ? "0" : "") + n.toString()} &nbsp;
          </span>
        );
      else
        numeros.push(
        <span key={n.toString()} className="text-muted"> {(n.toString().length === 1 ? "0" : "") + n.toString()} &nbsp;</span>
        );

    }

    return numeros;
  }

  render = () => {
    return (
      <div>
        <h1>
          {this.renderizarNumeros()}
        </h1>
      </div>
    );
  }
}

Sorteados.propTypes = {
  numerosSorteados: PropTypes.array
}

export default Sorteados;