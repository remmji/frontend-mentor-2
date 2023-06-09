import React from 'react';
import AnimatedPage from './AnimatedPage';
import Navbar from './Navbar';
import ShoesOneView from './ShoesOneView';
import VansView from './VansView';

function Men({counter, setCounter, dataZero, dataAdd, setDataAdd, setDataZero, counterVans,setCounterVans, dataAddVans, setDataAddVans,
                         dataAddByFar,setDataAddByFar,setCounterByFar, counterByFar, dataAddNike, setDataAddNike, counterNike, setCounterNike, handleClick, handleClickVans}) {
  return (
   
    <AnimatedPage>
      <Navbar counter={counter} setCounter={setCounter} dataZero={dataZero} dataAdd={dataAdd} setDataAdd={setDataAdd} setDataZero={setDataZero} counterVans={counterVans} setCounterVans={setCounterVans} dataAddVans={dataAddVans} setDataAddVans={setDataAddVans} dataAddByFar={dataAddByFar} setDataAddByFar={setDataAddByFar} setCounterByFar={setCounterByFar} counterByFar={counterByFar} dataAddNike={dataAddNike} setDataAddNike={setDataAddNike} counterNike={counterNike} setCounterNike={setCounterNike}></Navbar>

      <ShoesOneView counter={counter} setCounter={setCounter}  handleClick={handleClick}></ShoesOneView>
      <VansView  counterVans={counterVans} setCounterVans={setCounterVans}  handleClickVans={handleClickVans}></VansView>
    </AnimatedPage>
   
  )
}

export default Men