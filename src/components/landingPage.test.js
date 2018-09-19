import React from 'react';
import ReactDOM from 'react-dom';
import {LandingPage} from './landingPage';
import {shallow, mount} from 'enzyme';


describe('<LandingPage />', () => {
    it('Renders without crashing', () => {
        shallow(<LandingPage />);
    });

it('Renders the get started button', () => {
        const wrapper = shallow(<LandingPage />);
        expect(wrapper.hasClass('get-started-button')).toEqual(true);
    });
});