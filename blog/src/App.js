/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = 'toronto udon place';
  
  /**
   * Destructuring
   * title = data stored in state, b = function to change state
  **/
  let [title, changeTitle] = useState(['men coat suggestion', 'python study', 'toronto udon place']);
  
  let [like, changeLike] = useState(0);

  /**
   * In React, to change array/object state, we need to make an independent copy = shallow copy or deep copy
   * array/object variable/state save the pointer to data in RAM
   * spread operator = ... = take brackets off = [1,2,3] -> 1,2,3
   * [...original] or {...original} make independent copy with different reference or pointer
   * take off brackets and make it into array again
  **/

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4> 
      </div>

      <button onClick={ ()=>{
        let copy = [...title];
        copy[0] = 'women coat suggestion'
        changeTitle(copy); 
      } }> changeTitle </button>

      <button onClick={ ()=>{
        let copy = [...title];
        copy.sort();
        changeTitle(copy); 
      } }> sortTitle </button>

      <div className="list">
        <h4>{ title[0] } <span onClick={ ()=>{ changeLike(like+1) } }>👍</span> {like} </h4>
        <p>published 02.14</p>
      </div>
      <div className="list">
        <h4>{ title[1] }</h4>
        <p>published 02.14</p>
      </div>
      <div className="list">
        <h4>{ title[2] }</h4>
        <p>published 02.14</p>
      </div>
    </div>
  );
}

// use {} for data binding

export default App;
