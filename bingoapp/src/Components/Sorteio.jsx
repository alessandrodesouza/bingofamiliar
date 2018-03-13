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

  reiniciarJogo = () => {
    this.carregarBolasNoGlobo();
  }

  carregarBolasNoGlobo = () => {
    var bolasNoGlobo = [0];
    var bolasNaOrdemDeSorteio = [0];
    var bolasNaOrdemCrescente = [0];

    for (let b = this.min; b <= this.max; b++) {
      bolasNoGlobo.push(b);
      bolasNaOrdemCrescente.push(0);
    }

    this.setState({
      ultimoSorteado: 0,
      totalSorteados: 0,
      bolasNoGlobo: bolasNoGlobo,
      bolasNaOrdemDeSorteio: bolasNaOrdemDeSorteio,
      bolasNaOrdemCrescente: bolasNaOrdemCrescente},
      this.informarStatusAtual
    );
  }
  
  sortearProximo = () => {

    if (this.state.totalSorteados >= 90)
      return;

    const min = Math.ceil(this.min);
    const max = Math.floor(this.max - this.state.totalSorteados);
    const n = Math.floor(Math.random() * (max - min + 1)) + min;

    const bolaSorteada = this.state.bolasNoGlobo[n];

    this.atualizarState(bolaSorteada);

  }

  atualizarState = (bolaSorteada) => {
    const bolasNoGlobo = this.retirarBolaSorteadaDoGlobo(bolaSorteada);
    const bolasNaOrdemDeSorteio = this.guardarNaOrdemDeSorteio(bolaSorteada);
    const bolasNaOrdemCrescente = this.guardarNaOrdemCrescente(bolaSorteada);
    this.setState({
      ultimoSorteado: bolaSorteada,
      totalSorteados: this.state.totalSorteados + 1,
      bolasNoGlobo: bolasNoGlobo,
      bolasNaOrdemDeSorteio: bolasNaOrdemDeSorteio,
      bolasNaOrdemCrescente: bolasNaOrdemCrescente},
      this.informarStatusAtual
    );
  }

  retirarBolaSorteadaDoGlobo = (bola) => {
    let na = this.state.bolasNoGlobo.filter((value) => value !== bola);
    return na;
  }

  guardarNaOrdemDeSorteio = (bola) => {
    let na = this.state.bolasNaOrdemDeSorteio;
    na.push(bola);
    return na;  
  }

  guardarNaOrdemCrescente = (bola) => {
    let na = this.state.bolasNaOrdemCrescente;
    na[bola] = bola;
    return na;  
  }
  
  formatarNumeroParaMostrar = (numero) => {
    let r = ""
    if (numero > 0) {
      r = (numero.toString().length === 1 ? "0" : "") + numero.toString();
    }
    return r;
  }

  informarStatusAtual = () => {
    let informarStatus = this.props.statusSorteio || null;
    if (informarStatus !== null)
      informarStatus({
        ultimoSorteado: this.state.ultimoSorteado,
        totalSorteados: this.state.totalSorteados,
        bolasNoGlobo: this.state.bolasNoGlobo,
        bolasNaOrdemDeSorteio: this.state.bolasNaOrdemDeSorteio,
        bolasNaOrdemCrescente: this.state.bolasNaOrdemCrescente
      });
  }

  componentDidMount = () => {
    this.carregarBolasNoGlobo();
  }
  
  render = () => {
    return (
      <div>

        {
          this.state.totalSorteados < this.max ?
          <button id="sortear" className="btn btn-success" onClick={this.sortearProximo}>Sortear Próximo &raquo;</button>
          :null
        }
        &nbsp;
        <button id="reiniciar" className="btn btn-outline-success" onClick={this.reiniciarJogo}>Reiniciar</button>
        <hr/>

        <div className="card text-white text-center bg-warning mb-3" style={{maxWidth: "18rem"}}>
          <div className="card-header text-success">SORTEIO</div>
          <div className="card-body">
            <h5 className="card-title text-success">Último sorteado</h5>
            <h1 className="card-text text-success animated infinite flash">{this.formatarNumeroParaMostrar(this.state.ultimoSorteado)}</h1>
          </div>
        </div>

      </div>
    );
  }

}

Sorteio.propTypes = {
  statusSorteio: PropTypes.func
}

export default Sorteio;