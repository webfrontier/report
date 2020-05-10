import React from 'react'
import CreatableSelect from 'react-select/creatable';

const WorkLocation = () => {
  const options = [
    {value: 1, label: '東京'},
    {value: 2, label: '大阪'},
    {value: 3, label: '福岡'},
    {value: 4, label: '北海道'},
    {value: 5, label: '愛知'}
  ];
  return (
    <CreatableSelect
      isClearable
//      onChange={this.handleChange}
//      onInputChange={this.handleInputChange}
      options={options}
    />
  );
};

export default WorkLocation;