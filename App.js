import React, {Component} from 'react'
import './App.css';
import Sample from './Sample.json';

class App extends Component {
  render(){
    return (
      <div>
        {Sample.map((data,level,down)=>{
          return <div>
            <h1>ID</h1>
            <h3>{data.id}</h3>
            <h1>Created_by</h1>
            <h3>{data.created_by.id}</h3>
            <h3>{data.created_by.email}</h3>
          </div>
        })}
      </div>
      );
  }
}

export default App;
