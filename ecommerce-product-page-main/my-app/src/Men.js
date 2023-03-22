import React from 'react';
import Navbar from './Navbar';
import ShoesOne from './ShoesOne';
import Vans from './Vans';

function Men({counter, setCounter, dataZero, dataAdd, setDataAdd, setDataZero, counterVans,setCounterVans, dataAddVans, setDataAddVans,
                         dataAddByFar,setDataAddByFar,setCounterByFar, counterByFar, dataAddNike, setDataAddNike, counterNike, setCounterNike, handleClick, handleClickVans}) {
  return (
    <>
    <Navbar counter={counter} setCounter={setCounter} dataZero={dataZero} dataAdd={dataAdd} setDataAdd={setDataAdd} setDataZero={setDataZero} counterVans={counterVans} setCounterVans={setCounterVans} dataAddVans={dataAddVans} setDataAddVans={setDataAddVans} dataAddByFar={dataAddByFar} setDataAddByFar={setDataAddByFar} setCounterByFar={setCounterByFar} counterByFar={counterByFar} dataAddNike={dataAddNike} setDataAddNike={setDataAddNike} counterNike={counterNike} setCounterNike={setCounterNike}></Navbar>

    <ShoesOne counter={counter} setCounter={setCounter}  handleClick={handleClick}></ShoesOne>
    <Vans  counterVans={counterVans} setCounterVans={setCounterVans}  handleClickVans={handleClickVans}></Vans>
    </>
  )
}

export default Men