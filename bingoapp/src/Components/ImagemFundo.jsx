import React, { Component } from "react";
import PropTypes from 'prop-types';

class ImagemFundo extends Component {

  constructor(props) {
    super(props);

    this.nomeImagem = props.imagem || "";

    this.styleImagemFundo = {
      marginBottom: "0px",
      opacity: props.opacidade || "0.3",
      color: "#fff",
      background: "#000 url('../images/" + this.nomeImagem + "') top center no-repeat",
      backgroundAttachment: "fixed",
      width: props.largura || "100%",
      height: props.altura || "100%",
      backgroundSize: "cover",
      overflow: "hidden",
      //position: "absolute",
      position: "fixed",
      top:0,
      left:0,
      zIndex:1
    };
  }

  render = () => {

    return (
      <div>
        {this.nomeImagem.length > 0 ? <div style={this.styleImagemFundo}></div> : null}
      </div>
    );
  }
}

ImagemFundo.propTypes = {
  imagem: PropTypes.string,
  largura: PropTypes.string,
  altura: PropTypes.string,
  opacidade: PropTypes.string
}

export default ImagemFundo