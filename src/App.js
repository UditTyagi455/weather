import React,{useState,useEffect, createContext} from 'react'
import Axios from 'axios';
import Mydata from "./component/Mydata";
import './App.css';

const myApiData = createContext();

const App = () => {

    const [value,setValue]= useState('');
    const [query,setQuery] =useState('muzaffarnagar')
    const [datahook,setDatahook] =useState(null)

    const fetchData = async () =>{
        try{
        const {data} =await Axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=3aaa8d49118b513773199d96afa397f1&units=metric`)
        setDatahook(data)
        }catch(err){
            console.log(err)
        }
    }

    useEffect( ()=>{
        fetchData();
  },[query]);
  
  const handleChange = (e) =>{
          setValue(e.target.value)
  }
  const handleSubmit = (e) =>{
        e.preventDefault();
        if(value=== ''){
           return console.log("please enter a value!..")
        }
        setQuery(value);
        setValue('');
  }
    return (
        <div>
            <div className="mx-auto form_class">
               <form onSubmit={handleSubmit}>
                  <input type="text" placeholder="Enter city" value={value} onChange={handleChange}/>
                  <button className="btn btn-primary px-2 fs-5">Search</button>
                </form>
            </div>
            <div>
                {datahook ? <myApiData.Provider value={{datahook}}> <Mydata /></myApiData.Provider> : ""}
            </div>
        </div>
    )
}

export default App;
export {myApiData}
