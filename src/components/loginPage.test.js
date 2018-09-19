import React from 'react';
import ReactDOM from 'react-dom';
import {LoginPage} from './loginPage';
import {shallow, mount} from 'enzyme';


describe('<LoginPage />', () => {
    it('Renders without crashing', () => {
        shallow(<LoginPage />);
    });
});