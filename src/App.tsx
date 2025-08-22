import React from 'react';
import logo from './logo.svg';
//import './App.css';

function App() {
  return (
    <>
	    <h1>Cube Sign In Form</h1>
      <div className="app-block">
        <div className="cube"><img src="images/cube.png" className="img-responsive" alt="" /></div>
        <form>
          <input type="text" className="text" value="Email address" //onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email address';}" 
          />
          <input type="password" value="Password" //onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Password';}"
          />
          <div className="submit"><input type="submit" //onclick="myFunction()" 
          value="Sign in" /></div>
          <div className="clear"></div>
          <p><a href="#">Forgot Password ?</a></p>
        </form>
        <p className="sign">New here ? <a href="#"> Sign Up</a></p>
        
      </div>
	    {/* <!--start-copyright--> */}
   		<div className="copy-right">
				<p>Copyright &copy; 2015  All rights  Reserved | Template by &nbsp;<a href="http://w3layouts.com">W3layouts</a></p>
		</div>
  	{/* <!--//end-copyright-->     */}

    </>
  );
}

export default App;
