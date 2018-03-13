import React from 'react';
import { shallow } from 'enzyme';
import Sorteio from "../../Components/Sorteio";

describe('Sortear números entre 1 e 90', () => {

  it('Sortear próximo número válido', () => {

    const c = shallow(<Sorteio/>);

    c.instance().sortearProximo();

    expect(c.instance().state.ultimoSorteado).toBeGreaterThanOrEqual(1);
    expect(c.instance().state.ultimoSorteado).toBeLessThanOrEqual(90);

  });

  it('Ao sortear próximo número ele deve ser retirado do Globo', () => {

    const c = shallow(<Sorteio/>);

    expect(c.instance().state.bolasNoGlobo).toHaveLength(91);
    c.instance().sortearProximo();
    expect(c.instance().state.bolasNoGlobo).toHaveLength(90);

  });

  it('Após 90 sorteios o globo deve estar vazio', () => {

    const c = shallow(<Sorteio/>);

    for (let n = 1; n <= 90 ; n++)
      c.instance().sortearProximo();

    expect(c.instance().state.bolasNoGlobo).toHaveLength(1);
    expect(c.instance().state.bolasNoGlobo[0]).toBe(0);

  });
  
  it('Os números sorteados devem ser guardados na ordem de sorteio', () => {

    var guardarNaOrdem = [0];
    const c = shallow(<Sorteio/>);

    for (let n = 1; n <= 90 ; n++) {
      c.instance().sortearProximo();
      guardarNaOrdem.push(c.instance().state.ultimoSorteado);
    }

    expect(guardarNaOrdem).toMatchObject(c.instance().state.bolasNaOrdemDeSorteio);

  });

  it('Os números sorteados devem ser guardados também em ordem crescente', () => {

    var guardarNaOrdemCrescente = [];
    for (let n = 0; n <= 90; n++) {
      guardarNaOrdemCrescente.push(0);
    }

    const c = shallow(<Sorteio/>);

    for (let n = 1; n <= 90 ; n++) {
      c.instance().sortearProximo();
      let bola = c.instance().state.ultimoSorteado;
      guardarNaOrdemCrescente[bola] = bola;
    }

    expect(guardarNaOrdemCrescente).toMatchObject(c.instance().state.bolasNaOrdemCrescente);

  });

  it('O componente Sorteio deve informar o status atual para componentes externos', () => {

    var guardarNaOrdemCrescente = [];
    for (let n = 0; n <= 90; n++) {
      guardarNaOrdemCrescente.push(0);
    }

    var cb = jest.fn();

    const c = shallow(<Sorteio statusSorteio={cb}/>);

    c.instance().sortearProximo();

    expect(cb).toBeCalled();

  });

  it('O componente Sorteio deve reiniciar o jogo quando solicitado', () => {

    const c = shallow(<Sorteio/>);

    c.instance().sortearProximo();
    expect(c.instance().state.totalSorteados).toBe(1);
    expect(c.instance().state.bolasNaOrdemDeSorteio).toHaveLength(2);

    c.instance().reiniciarJogo();
    expect(c.instance().state.totalSorteados).toBe(0);
    expect(c.instance().state.bolasNaOrdemDeSorteio).toHaveLength(1);

  });
  
  it('Após 90 rodadas não é permitido fazer mais sorteios', () => {

    const c = shallow(<Sorteio/>);

    for (let n = 1; n <= 90 ; n++) {
      c.instance().sortearProximo();
    }
    c.instance().sortearProximo();
    c.instance().sortearProximo();
    
    expect(c.instance().state.bolasNoGlobo).toHaveLength(1);
    expect(c.instance().state.totalSorteados).toBe(90);

  });
  
});