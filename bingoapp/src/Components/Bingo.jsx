import React, { Component } from "react";
import ImagemFundo from "./ImagemFundo";
import Sorteio from "./Sorteio";
import Sorteados from "./Sorteados";

class Bingo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      statusSorteio: {
        ultimoSorteado: 0,
        totalSorteados: 0,
        bolasNoGlobo: [0],
        bolasNaOrdemDeSorteio: [0],
        bolasNaOrdemCrescente: [0]
      },
    };
  }

  lerStatusSorteio = (st) => {
    this.setState(
      {statusSorteio: {
        ultimoSorteado: st.ultimoSorteado,
        totalSorteados: st.totalSorteados,
        bolasNoGlobo: st.bolasNoGlobo,
        bolasNaOrdemDeSorteio: st.bolasNaOrdemDeSorteio,
        bolasNaOrdemCrescente: st.bolasNaOrdemCrescente
      }
    });
  }

  render = () => {
    return (
      <div>
        <ImagemFundo imagem="fundo.jpg" opacidade="0.3"/>

        <div className="jumbotron">
          <div className="container lead text-muted zIndex-2">

            <div className="row">
              <div className="col-9">
                <h2>
                  <img src="../images/bingoFamiliar.jpg" className="rounded" alt="bingo" height="220" width="250"/>&nbsp;
                  B.I.N.G.O  F.A.M.I.L.I.A.R - <strong>SouZagato!!!</strong>
                </h2>
              </div>

              <Sorteio statusSorteio={this.lerStatusSorteio}/>

            </div>     
          </div>
        </div>

        <Sorteados numerosSorteados={this.state.statusSorteio.bolasNaOrdemDeSorteio} />
      </div>
    );
  }
}

export default Bingo;