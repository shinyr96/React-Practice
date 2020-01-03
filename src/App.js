import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customer =[
{
  'id':1,
  'image' : 'https://placeimg.com/64/64/any/1',
  'name' : '홍길동'
  ,'birthday' : '941231'
  ,'gender' : '남자'
  ,'jobs' : '학생'
},
{
  'id':2,
  'image' : 'https://placeimg.com/64/64/any/2',
  'name' : '김철수'
  ,'birthday' : '941231'
  ,'gender' : '남자'
  ,'jobs' : '경찰'
},
{
  'id':3,
  'image' : 'https://placeimg.com/64/64/any/3',
  'name' : '최영희'
  ,'birthday' : '941231'
  ,'gender' : '여자'
  ,'jobs' : '디자이너'
}
]

class App extends Component{
  render(){
    return (
      <div>
        {
          customer.map(c => {
            return (
              <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              jobs={c.jobs}
              />
            );
          })
        }
      </div>
    );
  }
}

export default App;