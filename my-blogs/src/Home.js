import {useState} from 'react';


const Home = () => {

    // let name= 'mario';
    const [name, setName] =  useState('mario');

    const handleClick = () => {
        // name = 'Hanuman';
        setName('Hanuman');
    }

    

    return ( 
        <div className="home">
            <h2>Home page </h2>

            <p>{name}</p>
            <button onClick={handleClick}>Click me </button>
            

           

            

            
            
        </div>
     );
}
 
export default Home;