import React from 'react';
import Navbar from './Navbar';
import NikeView from './NikeView';
import ByFarView from './ByFarView';
import AnimatedPage from './AnimatedPage';

function Women({counter, setCounter, dataZero, dataAdd, setDataAdd, setDataZero, counterVans,setCounterVans, dataAddVans, setDataAddVans,
                         dataAddByFar,setDataAddByFar,setCounterByFar, counterByFar, dataAddNike, setDataAddNike, counterNike, setCounterNike,handleClickByFar, handleClickNike}) {
  return (
   
  <AnimatedPage>
    <Navbar counter={counter} setCounter={setCounter} dataZero={dataZero} dataAdd={dataAdd} setDataAdd={setDataAdd} setDataZero={setDataZero} counterVans={counterVans} setCounterVans={setCounterVans} dataAddVans={dataAddVans} setDataAddVans={setDataAddVans} dataAddByFar={dataAddByFar} setDataAddByFar={setDataAddByFar} setCounterByFar={setCounterByFar} counterByFar={counterByFar} dataAddNike={dataAddNike} setDataAddNike={setDataAddNike} counterNike={counterNike} setCounterNike={setCounterNike}></Navbar>

    <ByFarView handleClickByFar={handleClickByFar} counterByFar={counterByFar} setCounterByFar={setCounterByFar}></ByFarView>
    <NikeView handleClickNike={handleClickNike} counterNike={counterNike} setCounterNike={setCounterNike}></NikeView>
  </AnimatedPage>
   
  )
}

export default Women;