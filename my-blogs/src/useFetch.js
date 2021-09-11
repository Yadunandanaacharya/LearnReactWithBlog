import { useState,useEffect } from "react";
 
const useFetch = (url) =>{
    const [data, setData ] = useState(null);
    const [isLoading, setIsPending] = useState(true); 
    const [error, setError] = useState(null); 
   

    useEffect(()=>{
        setTimeout(()=>{
        fetch(url)
          .then(res =>{
            // console.log(res);
            if(!res.ok){
             throw Error('Could not fetch data for that resource'); 
            }
            return res.json();
          })
          .then(data =>{
            setData(data);
            setIsPending(false);
            setError(null);
          })
          .catch(error => {
            setIsPending(false);
            setError(error); 
          });
      
        },1000);
      
      },[]);
    return {data, isLoading, error};
}

export default useFetch;