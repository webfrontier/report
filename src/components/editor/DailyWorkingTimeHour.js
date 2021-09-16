import React from 'react'
import CreatableSelect from 'react-select/creatable';

const DailyWorkingTimeH = () => {
  const optionsDH = [
    {value: 1, label: '00H'},
    {value: 2, label: '01H'},
    {value: 3, label: '02H'},
    {value: 4, label: '03H'},
    {value: 5, label: '04H'},
    {value: 6, label: '05H'},
    {value: 7, label: '06H'},
    {value: 8, label: '07H'},
    {value: 9, label: '08H'},
    {value: 10, label: '09H'},
    {value: 11, label: '10H'},
    {value: 12, label: '11H'},
    {value: 13, label: '12H'}
  ];
  return (
    <CreatableSelect
      isClearable
//      onChange={this.handleChange}
//      onInputChange={this.handleInputChange}
      options={optionsDH}
    />
  );
};

export default DailyWorkingTimeH;