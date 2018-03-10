import React from "react";

export default (props) =>
  <div className="col-3 zIndex-2">
    <button id="sortear" className="btn btn-success">Sortear Próximo &raquo;</button>&nbsp;
    <button id="reiniciar" className="btn btn-outline-success">Reiniciar</button>
    <hr/>
    <div className="card text-white text-center bg-warning mb-3" style={{maxWidth: "18rem"}}>
      <div className="card-header">SORTEIO</div>
      <div className="card-body">
        <h5 className="card-title">Último sorteado</h5>
        <p className="card-text text-success"><h1 class="animated infinite flash">99</h1></p>
      </div>
    </div>
  </div>