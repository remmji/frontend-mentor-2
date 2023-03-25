import React from 'react'
import Navbar from "./Navbar";
import ByFarView from './ByFarView';
import ShoesOneView from './ShoesOneView';
import NikeView from './NikeView';
import VansView from './VansView';
import AnimatedPage from './AnimatedPage';

function Collections({counter, setCounter, dataZero, dataAdd, setDataAdd, setDataZero, counterVans,setCounterVans, dataAddVans, setDataAddVans,
                         dataAddByFar,setDataAddByFar,setCounterByFar, counterByFar, dataAddNike, setDataAddNike, counterNike, setCounterNike, handleClick, handleClickVans,handleClickByFar, handleClickNike}) {

  return (
  
  <AnimatedPage>
    <Navbar counter={counter} setCounter={setCounter} dataZero={dataZero} dataAdd={dataAdd} setDataAdd={setDataAdd} setDataZero={setDataZero} counterVans={counterVans} setCounterVans={setCounterVans} dataAddVans={dataAddVans} setDataAddVans={setDataAddVans} dataAddByFar={dataAddByFar} setDataAddByFar={setDataAddByFar} setCounterByFar={setCounterByFar} counterByFar={counterByFar} dataAddNike={dataAddNike} setDataAddNike={setDataAddNike} counterNike={counterNike} setCounterNike={setCounterNike}>
    </Navbar>
  
    <ShoesOneView counter={counter} setCounter={setCounter}  handleClick={handleClick}></ShoesOneView>

    <VansView counterVans={counterVans} setCounterVans={setCounterVans}  handleClickVans={handleClickVans}></VansView>

    <ByFarView handleClickByFar={handleClickByFar} counterByFar={counterByFar} setCounterByFar={setCounterByFar}></ByFarView>

    <NikeView handleClickNike={handleClickNike} counterNike={counterNike} setCounterNike={setCounterNike}></NikeView>

  </AnimatedPage>
  )
}

export default Collections