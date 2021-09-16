import React from 'react'
import CreatableSelect from 'react-select/creatable';

const WorkingTimeStM = () => {
  const optionsSM = [
    {value: 1, label: '00M'},
    {value: 2, label: '01M'},
    {value: 3, label: '02M'},
    {value: 4, label: '03M'},
    {value: 5, label: '04M'},
    {value: 6, label: '05M'},
    {value: 7, label: '06M'},
    {value: 8, label: '07M'},
    {value: 9, label: '08M'},
    {value: 10, label: '09M'},
    {value: 11, label: '10M'},
    {value: 12, label: '11M'},
    {value: 13, label: '12M'},
    {value: 14, label: '13M'},
    {value: 15, label: '14M'},
    {value: 16, label: '15M'},
    {value: 17, label: '16M'},
    {value: 18, label: '17M'},
    {value: 19, label: '18M'},
    {value: 20, label: '19M'},
    {value: 21, label: '20M'},
    {value: 22, label: '21M'},
    {value: 23, label: '22M'},
    {value: 24, label: '23M'},
    {value: 25, label: '24M'},
    {value: 26, label: '25M'},
    {value: 27, label: '26M'},
    {value: 28, label: '27M'},
    {value: 29, label: '28M'},
    {value: 30, label: '29M'},
    {value: 31, label: '30M'},
    {value: 32, label: '31M'},
    {value: 33, label: '32M'},
    {value: 34, label: '33M'},
    {value: 35, label: '34M'},
    {value: 36, label: '35M'},
    {value: 37, label: '36M'},
    {value: 38, label: '37M'},
    {value: 39, label: '38M'},
    {value: 40, label: '39M'},
    {value: 41, label: '40M'},
    {value: 42, label: '41M'},
    {value: 43, label: '42M'},
    {value: 44, label: '43M'},
    {value: 45, label: '44M'},
    {value: 46, label: '45M'},
    {value: 47, label: '46M'},
    {value: 48, label: '47M'},
    {value: 49, label: '48M'},
    {value: 50, label: '49M'},
    {value: 51, label: '50M'},
    {value: 52, label: '51M'},
    {value: 53, label: '52M'},
    {value: 54, label: '53M'},
    {value: 55, label: '54M'},
    {value: 56, label: '55M'},
    {value: 57, label: '56M'},
    {value: 58, label: '57M'},
    {value: 59, label: '58M'},
    {value: 60, label: '59M'}
  ];
  return (
    <CreatableSelect
      isClearable
//      onChange={this.handleChange}
//      onInputChange={this.handleInputChange}
      options={optionsSM}
    />
  );
};

export default WorkingTimeStM;