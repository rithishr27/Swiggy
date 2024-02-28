
import { Link } from "react-router-dom";
import SignIn from "./SignIn";
import { useState } from "react";

const NavBar = () => {
  const [showSignin, setShowSignin] = useState(false)

    const ActiveSignIn = () => {
      return <SignIn/>
    }

    const click = () => {
      console.log("Click is working", showSignin);
      setShowSignin(showSignin => !showSignin);
      // showSignin ? ActiveSignIn() : null
      if(showSignin) {
        console.log("Active");
        ActiveSignIn()
      }
      else {
        console.log("Not-Working", showSignin);
      }
    }

    return (
      <>
        <div className="header">
          <h3>Logo</h3>
          <nav>
            <span><Link style={{textDecoration:"none"}} to="/">Home</Link></span>
            <span><Link style={{textDecoration:"none"}} to="/about">About</Link></span>
            <span><Link style={{textDecoration:"none"}} to="/contact">Contact</Link></span>
            <button style={{border:"none",backgroundColor:"white"}} onClick={click}>Sign In</button>
          </nav>
        </div>
      </>
    )
}

export default NavBar;