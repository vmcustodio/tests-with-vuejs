import { shallowMount } from '@vue/test-utils';
import SumComponent from '../../components/SumComponent.vue';

describe('SumComponent', () => {
  const wrapper = shallowMount(SumComponent);
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

    const result = Number(wrapper.find('p').text());
    expect(result).toEqual(4);
  });

  it('should return "não foi" when a number is undefined call function sum', async () => {
    const number1 = wrapper.find('[data-testid="number1__input"]');
    const number2 = wrapper.find('[data-testid="number2__input"]');

    number1.setValue(2);
    number2.setValue(undefined);

    const button = wrapper.find('button');

    await button.trigger('click');

    const message = wrapper.find('span').text();
    console.log(message);
    expect(message).toBe('não foi possível');
  });
});
