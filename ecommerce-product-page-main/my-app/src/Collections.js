import React from 'react'
import Navbar from "./Navbar";
import ShoesOne from "./ShoesOne";
import Vans from "./Vans";
import ByFar from "./ByFar";
import Nike from "./Nike";

function Collections({counter, setCounter, dataZero, dataAdd, setDataAdd, setDataZero, counterVans,setCounterVans, dataAddVans, setDataAddVans,
                         dataAddByFar,setDataAddByFar,setCounterByFar, counterByFar, dataAddNike, setDataAddNike, counterNike, setCounterNike, handleClick, handleClickVans,handleClickByFar, handleClickNike}) {

  return (
  <>

    <Navbar counter={counter} setCounter={setCounter} dataZero={dataZero} dataAdd={dataAdd} setDataAdd={setDataAdd} setDataZero={setDataZero} counterVans={counterVans} setCounterVans={setCounterVans} dataAddVans={dataAddVans} setDataAddVans={setDataAddVans} dataAddByFar={dataAddByFar} setDataAddByFar={setDataAddByFar} setCounterByFar={setCounterByFar} counterByFar={counterByFar} dataAddNike={dataAddNike} setDataAddNike={setDataAddNike} counterNike={counterNike} setCounterNike={setCounterNike}>
    </Navbar>
  
    <ShoesOne counter={counter} setCounter={setCounter}  handleClick={handleClick}></ShoesOne>

    <Vans counterVans={counterVans} setCounterVans={setCounterVans}  handleClickVans={handleClickVans}></Vans>

    <ByFar handleClickByFar={handleClickByFar} counterByFar={counterByFar} setCounterByFar={setCounterByFar}></ByFar>

    <Nike handleClickNike={handleClickNike} counterNike={counterNike} setCounterNike={setCounterNike}></Nike>
  </>
  )
}

export default Collections