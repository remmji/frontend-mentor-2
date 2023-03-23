import React from "react";
import { useState} from "react";
import Men from "./Men";
import Women from "./Women";
import { Routes, Route } from "react-router-dom";
import Collections from "./Collections";
import CheckoutForm from "./CheckoutForm";
import Congratulations from './Congratulations';
import ByFar from "./ByFar";
import Vans from "./Vans";
import ShoesOne from "./ShoesOne";
import Nike from "./Nike";

function App() {

  const [counter,setCounter] = useState(0);
  const [counterVans,setCounterVans] = useState(0);
  const [counterByFar,setCounterByFar] = useState(0);
  const [counterNike,setCounterNike]= useState(0);

  const [dataZero,setDataZero] = useState(true);

  const [dataAdd,setDataAdd] = useState(false);
  const [dataAddVans,setDataAddVans] = useState(false);
  const [dataAddByFar,setDataAddByFar] = useState(false);
  const [dataAddNike,setDataAddNike] = useState(false);

   function handleClick  () {
    if (counter!==0){
    setDataZero(false);
    setDataAdd(true);
  }
  };
   function handleClickVans () {
    if (counterVans!==0){
    setDataZero(false);
    setDataAddVans(true);
  }
  };

   function handleClickByFar () {
    if (counterByFar!==0){
    setDataZero(false);
    setDataAddByFar(true);
  }
  };
   function handleClickNike () {
    if (counterNike!==0){
    setDataZero(false);
    setDataAddNike(true);
  }
  };

  return (
  <>
     <Routes>
        <Route path="/" element={ <Collections counter={counter} setCounter={setCounter} dataZero={dataZero} dataAdd={dataAdd} setDataAdd={setDataAdd} setDataZero={setDataZero} counterVans={counterVans} setCounterVans={setCounterVans} dataAddVans={dataAddVans} setDataAddVans={setDataAddVans} dataAddByFar={dataAddByFar} setDataAddByFar={setDataAddByFar} setCounterByFar={setCounterByFar} counterByFar={counterByFar} dataAddNike={dataAddNike} setDataAddNike={setDataAddNike} counterNike={counterNike} setCounterNike={setCounterNike} handleClick={handleClick} handleClickVans={handleClickVans}
        handleClickByFar={handleClickByFar} handleClickNike={handleClickNike}/> } />

        <Route path="men" element={ <Men counter={counter} setCounter={setCounter} dataZero={dataZero} dataAdd={dataAdd} setDataAdd={setDataAdd} setDataZero={setDataZero} counterVans={counterVans} setCounterVans={setCounterVans} dataAddVans={dataAddVans} setDataAddVans={setDataAddVans} dataAddByFar={dataAddByFar} setDataAddByFar={setDataAddByFar} setCounterByFar={setCounterByFar} counterByFar={counterByFar} dataAddNike={dataAddNike} setDataAddNike={setDataAddNike} counterNike={counterNike} setCounterNike={setCounterNike} handleClick={handleClick} handleClickVans={handleClickVans}
        handleClickByFar={handleClickByFar} handleClickNike={handleClickNike}/> } />

        <Route path="women" element={ <Women counter={counter} setCounter={setCounter} dataZero={dataZero} dataAdd={dataAdd} setDataAdd={setDataAdd} setDataZero={setDataZero} counterVans={counterVans} setCounterVans={setCounterVans} dataAddVans={dataAddVans} setDataAddVans={setDataAddVans} dataAddByFar={dataAddByFar} setDataAddByFar={setDataAddByFar} setCounterByFar={setCounterByFar} counterByFar={counterByFar} dataAddNike={dataAddNike} setDataAddNike={setDataAddNike} counterNike={counterNike} setCounterNike={setCounterNike} handleClick={handleClick} handleClickVans={handleClickVans}
        handleClickByFar={handleClickByFar} handleClickNike={handleClickNike}/> } />

        <Route path="checkout" element={<CheckoutForm counter={counter} setCounter={setCounter}  dataAdd={dataAdd}   counterVans={counterVans} dataAddVans={dataAddVans}  dataAddByFar={dataAddByFar}  counterByFar={counterByFar} dataAddNike={dataAddNike}  counterNike={counterNike} setCounterNike={setCounterNike}  
        />}></Route>

        <Route path="/byfar" element={ <ByFar  counter={counter} setCounter={setCounter} dataZero={dataZero} dataAdd={dataAdd} setDataAdd={setDataAdd} setDataZero={setDataZero} counterVans={counterVans} setCounterVans={setCounterVans} dataAddVans={dataAddVans} setDataAddVans={setDataAddVans} dataAddByFar={dataAddByFar} setDataAddByFar={setDataAddByFar} setCounterByFar={setCounterByFar} counterByFar={counterByFar} dataAddNike={dataAddNike} setDataAddNike={setDataAddNike} counterNike={counterNike} setCounterNike={setCounterNike} handleClick={handleClick} handleClickVans={handleClickVans}
        handleClickByFar={handleClickByFar} handleClickNike={handleClickNike}/>}/>

        <Route path="/vans" element={ <Vans  counter={counter} setCounter={setCounter} dataZero={dataZero} dataAdd={dataAdd} setDataAdd={setDataAdd} setDataZero={setDataZero} counterVans={counterVans} setCounterVans={setCounterVans} dataAddVans={dataAddVans} setDataAddVans={setDataAddVans} dataAddByFar={dataAddByFar} setDataAddByFar={setDataAddByFar} setCounterByFar={setCounterByFar} counterByFar={counterByFar} dataAddNike={dataAddNike} setDataAddNike={setDataAddNike} counterNike={counterNike} setCounterNike={setCounterNike} handleClick={handleClick} handleClickVans={handleClickVans}
        handleClickByFar={handleClickByFar} handleClickNike={handleClickNike}/>}/>

        <Route path="/shoesone" element={ <ShoesOne  counter={counter} setCounter={setCounter} dataZero={dataZero} dataAdd={dataAdd} setDataAdd={setDataAdd} setDataZero={setDataZero} counterVans={counterVans} setCounterVans={setCounterVans} dataAddVans={dataAddVans} setDataAddVans={setDataAddVans} dataAddByFar={dataAddByFar} setDataAddByFar={setDataAddByFar} setCounterByFar={setCounterByFar} counterByFar={counterByFar} dataAddNike={dataAddNike} setDataAddNike={setDataAddNike} counterNike={counterNike} setCounterNike={setCounterNike} handleClick={handleClick} handleClickVans={handleClickVans}
        handleClickByFar={handleClickByFar} handleClickNike={handleClickNike}/>}/>

        <Route path="/nike" element={ <Nike  counter={counter} setCounter={setCounter} dataZero={dataZero} dataAdd={dataAdd} setDataAdd={setDataAdd} setDataZero={setDataZero} counterVans={counterVans} setCounterVans={setCounterVans} dataAddVans={dataAddVans} setDataAddVans={setDataAddVans} dataAddByFar={dataAddByFar} setDataAddByFar={setDataAddByFar} setCounterByFar={setCounterByFar} counterByFar={counterByFar} dataAddNike={dataAddNike} setDataAddNike={setDataAddNike} counterNike={counterNike} setCounterNike={setCounterNike} handleClick={handleClick} handleClickVans={handleClickVans}
        handleClickByFar={handleClickByFar} handleClickNike={handleClickNike}/>}/>

        <Route path="/congratulations" element={ <Congratulations/>}/>
      </Routes>
  </>
  )
}

export default App;
