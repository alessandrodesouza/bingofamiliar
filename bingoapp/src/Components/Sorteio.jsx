import React, { Component } from "react";
import PropTypes from 'prop-types';

class Sorteio extends Component {

  constructor(props) {
    super(props);

    this.min = 1;
    this.max = 90;

    this.state = {
      ultimoSorteado: 0,
      totalSorteados: 0,
      bolasNoGlobo: [0],
      bolasNaOrdemDeSorteio: [0],
      bolasNaOrdemCrescente: [0]
    };
  }

  carregarBolasNoGlobo = () => {
    let bolasNoGlobo = [0];
    let bolasNaOrdemDeSorteio = [0];
    let bolasNaOrdemCrescente = [0];

    for (let b = this.min; b <= this.max; b++) {
      bolasNoGlobo.push(b);
      bolasNaOrdemCrescente.push(0);
    }

    this.setState({
      ultimoSorteado: 0,
      totalSorteados: 0,
      bolasNoGlobo: bolasNoGlobo,
      bolasNaOrderDeSorteio: bolasNaOrdemDeSorteio,
      bolasNaOrdemCrescente: bolasNaOrdemCrescente
    });
  }

  sortearProximo = () => {

    const min = Math.ceil(this.min);
    const max = Math.floor(this.max - this.state.totalSorteados);
    const n = Math.floor(Math.random() * (max - min + 1)) + min;

    const bolaSorteada = this.state.bolasNoGlobo[n];
    const totalSorteados = this.state.totalSorteados + 1;
    this.setState({ultimoSorteado: bolaSorteada, totalSorteados: totalSorteados});

    this.retirarBolaSorteadaDoGlobo(bolaSorteada);
    this.guardarNaOrdemDeSorteio(bolaSorteada);
    this.guardarNaOrdemCrescente(bolaSorteada);

    this.informarStatusAtual();
  }

  retirarBolaSorteadaDoGlobo = (bola) => {
    let na = this.state.bolasNoGlobo.filter((value) => value !== bola);
    this.setState({bolasNoGlobo: na});
  }

  guardarNaOrdemDeSorteio = (bola) => {
    let na = this.state.bolasNaOrdemDeSorteio;
    na.push(bola);
    this.setState({bolasNaOrdemDeSorteio: na});  
  }

  guardarNaOrdemCrescente = (bola) => {
    let na = this.state.bolasNaOrdemCrescente;
    na[bola] = bola;
    this.setState({bolasNaOrdemCrescente: na});  
  }
  
  formatarNumeroParaMostrar = (numero) => {
    let r = ""
    if (numero > 0) {
      r = (numero.toString().length === 1 ? "0" : "") + numero.toString();
    }
    return r;
  }

  informarStatusAtual = () => {
    let informarStatus = this.props.status || null;
    if (informarStatus) {

      informarStatus({
        ultimoSorteado: this.formatarNumeroParaMostrar(this.state.ultimoSorteado),
        totalSorteados: this.state.totalSorteados,
        bolasNoGlobo: this.state.bolasNoGlobo,
        bolasNaOrdemDeSorteio: this.state.bolasNaOrdemDeSorteio,
        bolasNaOrdemCrescente: this.state.bolasNaOrdemCrescente
      });

    }

  }

  componentDidMount = () => {
    this.carregarBolasNoGlobo();
  }
  
  render = () => {
    return (
      <div className="col-3 zIndex-2">

        <button id="sortear" className="btn btn-success">Sortear Próximo &raquo;</button>&nbsp;
        <button id="reiniciar" className="btn btn-outline-success">Reiniciar</button>
        <hr/>

        <div className="card text-white text-center bg-warning mb-3" style={{maxWidth: "18rem"}}>
          <div className="card-header">SORTEIO</div>
          <div className="card-body">
            <h5 className="card-title">Último sorteado</h5>
            <p className="card-text text-success"><h1 class="animated infinite flash">{this.formatarNumeroParaMostrar(this.state.ultimoSorteado)}</h1></p>
          </div>
        </div>

      </div>
    );
  }

}

Sorteio.propTypes = {
  status: PropTypes.func
}

export default Sorteio;