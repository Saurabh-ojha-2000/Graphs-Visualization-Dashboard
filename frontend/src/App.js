import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

import Header from './components/Header';
import Chartboard from './components/Chartboard';


function App() {
    const [mainData, setMainData] = useState([]);    
    const getDataFromDB = async() => {
        try{
            const response = await axios.get("http://localhost:8000/api/data/all");
            setMainData(response.data.data)
        }
        catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        getDataFromDB();
    },[])

    useEffect(()=>{
  
    },[mainData])

  return (
    <section style={{backgroundColor:"darksalmon"}}>

    <div>
      <Header/>
      <Chartboard data={mainData} setMainData={setMainData} />
    </div>
    </section>
  );
}

export default App;
