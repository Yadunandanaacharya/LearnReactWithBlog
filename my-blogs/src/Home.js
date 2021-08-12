import {useState} from 'react';


const Home = () => {
    // let name= 'mario';

    const [name, setName] =  useState('mario');
    const [age, setAge] =  useState(24);

    const handleClick = () => {
        // name = 'Hanuman';
        // console.log(name);
        setName('Hanuman');
        setAge(30);

    }

    return ( 
        <div className="home">
            <h2>Home page </h2>

            <p>{name} age is  {age}</p>
            <button onClick={handleClick}>Click me </button>
            
        </div>
     );
}
 
export default Home;