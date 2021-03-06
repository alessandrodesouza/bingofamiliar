import React from 'react';
import { mount } from 'enzyme';
import Bingo from "../../Components/Bingo";

describe('Controle do Bingo', () => {

  it('Deve ler o status do Sorteio a cada rodada', () => {

    const c = mount(<Bingo/>);

    c.find('#sortear').simulate('click');
    
    expect(c.instance().state.statusSorteio).toHaveProperty('totalSorteados', 1);

  });
  
  it('Após ler o status do Sorteio deve renderizar os Sorteados', () => {

    const c = mount(<Bingo/>);
    const numeroSorteados = c.find('.text-success').length;
    const numerosNaoSorteados = c.find('.texto-branco').length;

    c.find('#sortear').simulate('click');

    expect(c.find('.text-success').length).toBe(numeroSorteados + 1);
    expect(c.find('.texto-branco').length).toBe(numerosNaoSorteados - 1);

  });

  it('Quando reiniciado os sorteios deve-se renderizar a tela para novo início', () => {

    const c = mount(<Bingo/>);
    const numeroSorteados = c.find('.text-success').length;
    const numerosNaoSorteados = c.find('.texto-branco').length;

    c.find('#sortear').simulate('click');
    expect(c.find('.text-success').length).toBe(numeroSorteados + 1);
    expect(c.find('.texto-branco').length).toBe(numerosNaoSorteados - 1);

    c.find('#reiniciar').simulate('click')
    expect(c.find('.text-success').length).toBe(numeroSorteados);
    expect(c.find('.texto-branco').length).toBe(numerosNaoSorteados);

  });
 
});