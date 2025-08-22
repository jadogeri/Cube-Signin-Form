import React from 'react';
import "./App.css"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().required(),
  password: yup.number().positive().integer().required(),
}).required();


function App() {
  return (
    <>
	    <h1>Cube Sign In Form</h1>
      <div className="app-block">
        <div className="cube"><img src={require("./cube.png")} className="img-responsive" alt="cube icon" /></div>
        <form>
          <input type="text" className="text" value="Email address" //onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email address';}" 
          />
          <input type="password" value="Password" //onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Password';}"
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
