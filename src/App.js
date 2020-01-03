import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customer ={
  'id':1,
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '홍길동'
  ,'birthday' : '941231'
  ,'gender' : 'male'
  ,'jobs' : 'policy'
}

class App extends Component{
  render(){
    return (
      <Customer 
        id={customer.id}
        image={customer.image}
        name={customer.name}
        birthday={customer.birthday}
        gender={customer.gender}
        jobs={customer.jobs}
      />
    );
  }
}

export default App;