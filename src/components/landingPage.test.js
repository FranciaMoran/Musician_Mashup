import React from 'react';
import ReactDOM from 'react-dom';
import {LandingPage} from './LandingPage';
import {shallow, mount} from 'enzyme';



describe('<LandingPage />', () => {
    it('Renders without crashing', () => {
        shallow(<LandingPage />);
    });
});