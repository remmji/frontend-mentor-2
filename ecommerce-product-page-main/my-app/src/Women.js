import React from 'react';
import ByFar from './ByFar';
import Nike from './Nike';
import Navbar from './Navbar';

function Women({counter, setCounter, dataZero, dataAdd, setDataAdd, setDataZero, counterVans,setCounterVans, dataAddVans, setDataAddVans,
                         dataAddByFar,setDataAddByFar,setCounterByFar, counterByFar, dataAddNike, setDataAddNike, counterNike, setCounterNike,handleClickByFar, handleClickNike}) {
  return (
    <>
    <Navbar counter={counter} setCounter={setCounter} dataZero={dataZero} dataAdd={dataAdd} setDataAdd={setDataAdd} setDataZero={setDataZero} counterVans={counterVans} setCounterVans={setCounterVans} dataAddVans={dataAddVans} setDataAddVans={setDataAddVans} dataAddByFar={dataAddByFar} setDataAddByFar={setDataAddByFar} setCounterByFar={setCounterByFar} counterByFar={counterByFar} dataAddNike={dataAddNike} setDataAddNike={setDataAddNike} counterNike={counterNike} setCounterNike={setCounterNike}></Navbar>

    <ByFar handleClickByFar={handleClickByFar} counterByFar={counterByFar} setCounterByFar={setCounterByFar}></ByFar>
    <Nike handleClickNike={handleClickNike} counterNike={counterNike} setCounterNike={setCounterNike}></Nike>
    </>
  )
}

export default Women;