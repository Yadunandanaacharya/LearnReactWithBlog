import { useState,useEffect } from "react";
 
const useFetch = (url) =>{
    const [data, setData ] = useState(null);
    const [isLoading, setIsPending] = useState(true); 
    const [error, setError] = useState(null); 

    useEffect(()=>{
      const abortCont = new AbortController();

        setTimeout(()=>{
        fetch(url, {signal:abortCont.signal})
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
            if(error.name === "AbortError"){
              console.log('fetch aborted');
            }
            else{
              setIsPending(false);
              setError(error); 
            }
            
          });
        },500);

      // return ()=>console.log('cleanup'); //replace console.log('cleanup'); wit h
      return ()=> abortCont.abort();
      },[url]);
    return {data, isLoading, error};
}

export default useFetch;