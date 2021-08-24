import React,{useContext} from 'react';
import ShowNext from "./ShowNext"
import { myApiData } from '../App';

const Mydata = ({props}) => {
    const {datahook} =useContext(myApiData);
    // console.log(datahook);
    return (
        <>
            <div className="bg-div mt-5 main-div">
                <div className="container">
                    <div className="row">
                    <div class="card col-lg-6 col-12 bg-transparent text-white container">
                     <div className="anouther-div mx-auto">
                         <h1 className="text-dark display-2 fw-bolder">{datahook.list[0].weather[0].main}</h1>
                         <h6 className="text-dark fs-5 mt-3">{datahook.city.name},{datahook.city.country}</h6>
                         <h3 className="my-5 main-temp text-dark">{parseInt(datahook.list[0].main.temp)}°</h3>
                     </div>
                     <div className="div-3">
                  <ShowNext />
               </div>
                </div>
                    </div>
                </div>   
            </div>
            
        </>
    )
}

export default Mydata
