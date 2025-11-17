import React from 'react';
import "./App.css"
import { useForm  } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

type Credential = {
  email: string;
  password: string;
}
const schema = yup.object({
  email: yup.string().required().trim(),
  password: yup.string().required().trim(),
}).required();


function Home() {
  const { register,clearErrors, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = () => alert("working");
  return (
    <>
	    <h1>Cube Sign In Form</h1>
      <div className="app-block">
        <div className="cube"><img src={require("./cube.png")} className="img-responsive" alt="cube icon" /></div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("email")} type="text" className="text" //onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email address';}" 
            onChange={()=>{clearErrors('email')}} placeholder="Your Email "           />
          {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}

          <input {...register("password")}type="password"  //onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Password';}"
            onChange={()=>{clearErrors('password')}} placeholder="**********"   
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}

          <div className="submit"><input type="submit" //onclick="myFunction()" 
          value="Sign in" /></div>
          <div className="clear"></div>
        </form>
       
      </div>
	    {/* <!--start-copyright--> */}
   		<div className="copy-right">
				<p>Copyright &copy; 2015  All rights  Reserved | Template by &nbsp;<a href="http://w3layouts.com">W3layouts</a></p>
		</div>
  	{/* <!--//end-copyright-->     */}

    </>
  );
}

export default Home;
