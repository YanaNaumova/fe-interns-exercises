import {mount, shallow} from "enzyme";
import {CurrencySelector} from "./CurrencySelector";

describe('CurrensySelector tests',  () =>{
      it('should display From by default',  ()=> {
        //When
        const wrapper = shallow(<CurrencySelector />);

        //Then
        const numberWrapper = wrapper.find('#form');

        expect(numberWrapper.text()).toEqual('From:');
      });

  it('should display To by default',  ()=> {
    //When
    const wrapper = shallow(<CurrencySelector />);

    //Then
    const numberWrapper = wrapper.find('#to');

    expect(numberWrapper.text()).toEqual('To:');
  });
  it('should display Amount by default',  ()=> {
    //When
    const wrapper = shallow(<CurrencySelector />);

    //Then
    const numberWrapper = wrapper.find('#amount');

    expect(numberWrapper.text()).toEqual('Amount ');
  });
  it('should display Result by default',  ()=> {
    //When
    const wrapper = shallow(<CurrencySelector />);

    //Then
    const numberWrapper = wrapper.find('#labelResult');

    expect(numberWrapper.text()).toEqual('Result: 0');
  });
  it('should display 0 by default',  ()=> {
    //When
    const wrapper = shallow(<CurrencySelector />);

    //Then
    const numberWrapper = wrapper.find('#result');

    expect(numberWrapper.text()).toEqual('0');
  });
  it('should display by default in input',  ()=> {
    //When
    const wrapper = shallow(<CurrencySelector />);

    //Then

    const numberWrapper = wrapper.find('input.inputAmount');

    expect(numberWrapper.get(0).props.value).toEqual('');

  });
  // it('should display by default in input',  ()=> {
  //   //When
  //   const wrapper = shallow(<CurrencySelector />);
  //
  //   //Then
  //
  //   const numberWrapper = wrapper.find('input.inputAmount');
  //
  //   expect(numberWrapper.get(0).props.value).toEqual('');
  //
  // });


// it('should display input',  ()=> {
//   //When
//   const wrapper = shallow(<Users />);
//
//   //Then
//   const numberWrapper = wrapper.find('input');
//
//   expect(numberWrapper.length).toEqual(2);
// });
//
// it('should display 1 in input',  ()=> {
//   //When
//   const wrapper = shallow(<Users />);
//
//
//   //Then
//
//   wrapper.find('input.inputAge').simulate('change',{ target: { value: 1 } });
//
//   const numberWrapper = wrapper.find('input.inputAge');
//   expect(numberWrapper.get(0).props.value).toEqual(1);
// });
//
// it('should display Masha in input',  ()=> {
//   //When
//   const wrapper = shallow(<Users />);
//
//
//   //Then
//
//   wrapper.find('input.inputName').simulate('change',{ target: { value: "Masha" } });
//
//   const numberWrapper = wrapper.find('input.inputName');
//   expect(numberWrapper.get(0).props.value).toEqual("Masha");
});