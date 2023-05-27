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
  let [title, setTitle] = useState(['men coat suggestion', 'python study', 'toronto udon place']);
  
  let [like, setLike] = useState([0,0,0]);

  let [modal, setModal] = useState(false);

  let [current, setCurrent] = useState(0);

  /**
   * In React, to change a part of array/object state, we need to make an independent copy = shallow copy or deep copy
   * good to preserve the original
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
        setTitle(copy); 
      } }> changeTitle </button>

      <button onClick={ ()=>{
        let copy = [...title];
        copy.sort();
        setTitle(copy); 
      } }> sortTitle </button>

      {/* <div className="list">
        <h4>{ title[0] } <span onClick={ ()=>{ setLike(like+1) } }>👍</span> {like} </h4>
        <p>published 02.14</p>
      </div>
      <div className="list">
        <h4>{ title[1] }</h4>
        <p>published 02.14</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{ setModal(!modal) }}>{ title[2] }</h4>
        <p>published 02.14</p>
      </div> */}

      {
        title.map(function(a, i){
          return (
            <div className="list" key={i}>
              <h4 onClick={()=>{ setModal(!modal); setCurrent(i) }}>{ title[i] } <span onClick={ ()=>{
                let copy = [...like];
                copy[i] += 1;
                setLike(copy); 
              } }>👍</span> {like[i]}</h4>
              <p>published 02.14</p>
            </div>
          )
        })
      }

      {
       modal == true ? <Modal current={current} title={title}/> : null 
      }
      
    </div>
  );
}

/**
 * from parent component to child component
 * use props parameter to send state like title
 */

/**
 * Steps for dynamic UI
 * 1. design html css
 * 2. save UI's current form in state
 * 3. write how UI will be shown according to state
 */

// const Modal = () => {
//   return (
//     <div>
//     </div>
//   )
// }

/**
 * When is component good?
 * 1. repetitive html
 * 2. big pages
 * 3. things that change often
 * @returns 
 */
function Modal(props) {
  return (
    <div className="modal">
      <h4>{ props.title[props.current] }</h4>
      <p>Date</p>
      <p>Detail</p>
      <button>changeTitle</button>
    </div>
  )
}

// use {} for data binding

export default App;

/** For loop
 * 
 * we cannot use for loop in jsx so use it outside = above return
 * 
 * function App (){
  
    var arr = [];
    for (var i = 0; i < 3; i++) {
      arr.push(<div>Hi</div>)
    }
    return (
      <div>
        { arr }
      </div>
    )
  }
 */
