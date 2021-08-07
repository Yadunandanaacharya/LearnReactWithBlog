const NavBar = () => {
    return ( 
        <nav className="navbar">
            <h1>The React blogs</h1>
            <div className="links">
                <a href="/">Home </a>
                <a href="/create" style={{
                    color:"white",
                    backgroundColor:"#f1356d",
                    borderRadius:'7px'
                }}>New Blog </a>
            </div>
        </nav>
     );
}
 
export default NavBar;