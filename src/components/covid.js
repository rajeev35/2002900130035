import React, { useEffect, useState } from 'react'
import './covid.css';


const Covid = () => {
    const[data, setData]=useState([]);
    const getCovidData =async () =>{
        try {
            const res = await fetch('http://20.244.56.144/train/trains');
             const actualData = await res.json();
             console.log(actualData.statewise[0]);
             setData(actualData.statewise[0]);
        } catch(err){
            console.log(err);

        }
     
    }
     useEffect(()=> {
       getCovidData();
     }, []);
     
  return (
    <>
    <section> 
      <center>
      <h1>Train Central</h1>
      <h2>Real Time Train Central</h2>
      
      <ul>
        <li className="card">
            <div className="card__main">
                <div className="card__inner">
                    <p classNmae="card__name"><span>Train</span> Schedule</p>
                    <p className="card__total card card__small">Search by Train Name</p>
                </div>
            </div>
        </li>

        <li className="card">
            <div className="card__main">
                <div className="card__inner">
                    <p classNmae="card__name"><span>Seat</span> Availabality</p>
                    <p className="card__total card card__small">{data.seatsAvaliable}</p>
                </div>
            </div>
        </li>

        <li className="card">
            <div className="card__main">
                <div className="card__inner">
                    <p classNmae="card__name"><span>Total</span> CONFIRMED</p>
                    <p className="card__total card card__small">{data.confirmed}</p>
                </div>
            </div>
        </li>

        <li className="card">
            <div className="card__main">
                <div className="card__inner">
                    <p classNmae="card__name"><span>Total</span> Price</p>
                    <p className="card__total card card__small">{data.price}</p>
                </div>
            </div>
        </li>

        <li className="card">
            <div className="card__main">
                <div className="card__inner">
                    <p classNmae="card__name"><span>Total</span> ACTIVE</p>
                    <p className="card__total card card__small">{data.active}</p>
                </div>
            </div>
        </li>

        <li className="card">
            <div className="card__main">
                <div className="card__inner">
                    <p classNmae="card__name"><span>Last</span> UPDATED</p>
                    <p className="card__total card card__small">{data.lastupdatedtime}</p>
                </div>
            </div>
        </li>

        
      </ul>
      </center>
      </section>
    </>
    
  )
}

export default Covid;