const Home = () => {

    const handleClick = () => {
        console.log("Hi, Yadu!");
    }

    const handleNameArgument = (name) => {
        console.log('Hai' + name  );
    }

    const usingEvent = (e) => {
        console.log('Using event here ' , e);
    }

    const displayButtonEvent = (name,e) => {
        console.log("We used "+name, e.target);
    }

    return ( 
        <div className="home">
            <h2>Home page </h2>
            <button onClick={handleClick}>Click me </button>
            <br></br>
            <br></br>

            <button onClick={()=>{
                console.log('Hi! this is calling anonymous when cliked')
            }}>Click me for anonymous call </button>

            <br></br>
            <br></br>

            <button onClick={()=>{
                handleNameArgument("Yadu ")
            }}>Hi! Click to know my name</button>

            <br></br> <br></br>
            <button onClick={usingEvent}> Here click to display event</button>

            <br></br> <br></br>
            <button onClick={(e)=>{displayButtonEvent('Yadu ',e)}}>Click to display Button event</button>
            <h2>This is about React </h2>
        </div>
     );
}
 
export default Home;