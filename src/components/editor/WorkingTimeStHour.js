import React from 'react'
import CreatableSelect from 'react-select/creatable';

const WorkingTimeStH = () => {
  const optionsSH = [
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
    {value: 13, label: '12H'},
    {value: 14, label: '13H'},
    {value: 15, label: '14H'},
    {value: 16, label: '15H'},
    {value: 17, label: '16H'},
    {value: 18, label: '17H'},
    {value: 19, label: '18H'},
    {value: 20, label: '19H'},
    {value: 21, label: '20H'},
    {value: 22, label: '21H'},
    {value: 23, label: '22H'},
    {value: 24, label: '23H'}
  ];
  return (
    <CreatableSelect
      isClearable
//      onChange={this.handleChange}
//      onInputChange={this.handleInputChange}
      options={optionsSH}
    />
  );
};
export default WorkingTimeStH;