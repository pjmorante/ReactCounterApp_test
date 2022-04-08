import { shallow } from 'enzyme';
import React from 'react';
import App from '../App';


describe('Tests on <App />', () => {

    let wrapper;

    beforeEach( () => {

        wrapper = shallow( <App numInicial={10}/> );

    })

    test('should show default value', () => { 

        const counterText = wrapper.find('h1').text().trim();

        expect( counterText ).toBe('10');
    })

     test('should add one with the plus button (+)', () => {

        wrapper.find('button').at(0).simulate('click');

        const counterText = wrapper.find('h1').text().trim();

        expect( counterText ).toBe('11');
    })

     test('should substrct one with the minus button (-)', () => {   

        wrapper.find('button').at(2).simulate('click');

        const counterText = wrapper.find('h1').text().trim();

        expect( counterText ).toBe('9');
    })

     test('should reset to zero with the reset button (Reset)', () => {        

        wrapper.find('button').at(1).simulate('click');

        const counterText = wrapper.find('h1').text().trim();

        expect( counterText ).toBe('0');
    })

     
})