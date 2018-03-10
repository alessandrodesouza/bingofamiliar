import React from 'react';
import { shallow } from 'enzyme';
import Sorteio from "../../Components/Sorteio";

describe('Testes no componente de Sorteio', () => {

  it('Formatar os números para mostrar', () => {

    const c = shallow(<Sorteio/>);

    for (let n = 1; n <= 90 ; n++) {
      c.instance().sortearProximo();
      let bola = c.instance().state.ultimoSorteado;
      let bolaFormatada = c.instance().formatarNumeroParaMostrar(bola);

      expect(bolaFormatada.length).toBe(2);
    }

  });
  
  
});