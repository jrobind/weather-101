import React from 'react';
import { shallow, mount } from 'enzyme';
import Forecast from '../app/components/Forecast';
import ForecastSelect from '../app/components/ForecastSelect';
import { apiFakeData } from '../testHelpers/fakeData';

// mocks

// mock for DOM Element.closest() and Element.getAttribute()
const closest = () => ({ getAttribute() {return '2018-06-29 15:00:00'} });

// tests

describe('<Forecast />', () => {

    it('should render a .container class', () => {
        const wrapper = shallow(<Forecast forecast={apiFakeData.list} />);
        
        expect(wrapper.find('.container')).toHaveLength(1);
    });

    it('should render a .forecastWrapper class', () => {
        const wrapper = shallow(<Forecast forecast={apiFakeData.list} />);
        
        expect(wrapper.find('.forecastWrapper')).toHaveLength(2);
    });

    it('should render current weather conditions', () => {
        const wrapper = shallow(<Forecast forecast={apiFakeData.list} />);
        const forecastOne = wrapper.find('.description').at(0);
        const forecastTwo = wrapper.find('.description').at(1);

        expect(forecastOne.text()).toEqual('clear sky');
        expect(forecastTwo.text()).toEqual('scattered clouds');
    });

    it('should render correct temperature', () => {
        const wrapper = shallow(<Forecast forecast={apiFakeData.list} />);
        const forecastOne = wrapper.find('.temperature').at(0);
        const forecastTwo = wrapper.find('.temperature').at(1);

        expect(forecastOne.text()).toEqual('27℃');
        expect(forecastTwo.text()).toEqual('37℃');
    });

    it('should render <ForecastSelect /> component for days other than today', () => {
        const wrapper = shallow(<Forecast forecast={apiFakeData.list} />);

        expect(wrapper.find(ForecastSelect)).toHaveLength(1);
    });

    it('should render a new forecast when time of day is changed', () => {
        const wrapper = mount(<Forecast forecast={apiFakeData.list} />);
        wrapper.find('select').simulate('change', {target: { value: 'Morning', closest}});
        const forecastTwo = wrapper.find('.description').at(1);

        expect(wrapper.state('defaultForecast')[1].weather[0].id).toBe(800);
        expect(forecastTwo.text()).toEqual('scattered clouds');
    });
    
});