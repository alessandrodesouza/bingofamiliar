import React from 'react';
import { shallow } from 'enzyme';
import Sorteados from "../../Components/Sorteados";

describe('Testes no componente de Sorteados', () => {

  it('Mostrar apenas números sorteados com cor de destaque', () => {

    const numerosSorteados = [10,35,87];

    const c = shallow(<Sorteados numerosSorteados={numerosSorteados} />);

    expect(c.find('.text-success').length).toBe(3);
    expect(c.find('.texto-branco').length).toBe(87);
    

  });
  
});