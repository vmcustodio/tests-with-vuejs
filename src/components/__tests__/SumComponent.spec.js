import { mount } from '@vue/test-utils';
import SumComponent from '../../components/SumComponent.vue';

describe('SumComponent', () => {
  const wrapper = mount(SumComponent);
  it('Should render component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should return a number when call function sum', async () => {
    const number1 = wrapper.find('[data-testid="number1__input"]');
    const number2 = wrapper.find('[data-testid="number2__input"]');

    number1.setValue(2);
    number2.setValue(2);

    const button = wrapper.find('button');

    await button.trigger('click');

    const value = wrapper.find('p');
    const resultado = Number(value.text());
    expect(resultado).toEqual(4);
  });

  it('should return "não foi" when a number is undefined call function sum', async () => {
    const number1 = wrapper.find('[data-testid="number1__input"]');
    const number2 = wrapper.find('[data-testid="number2__input"]');

    number1.setValue(2);
    number2.setValue(null);

    const button = wrapper.find('button');

    await button.trigger('click');

    const message = wrapper.find('span').text();
    expect(message).toEqual(
      'não foi possível mostrar o resultado, por favor insira os dois números para realizar a soma.'
    );
  });
});
