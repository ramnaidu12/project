import React from "react"


import { useFormik } from "formik";
import { useCheckUserQuery, userapi } from "../services/userapi";

function Formy() {
  let [checkuser] = useCheckUserQuery()

 var userform= useFormik({
    initialValues:{
      username:'',
      password:'',
    },
   onSubmit:(values)=>{
    // checkuser(values).then((res)=>{
    //   console.log(res);
    // })
   }
  })
 


  return (<div className="border w-50 ab">
    <form onSubmit={userform.handleSubmit}>
      <input className="m-2 " name="username"  onChange={userform.handleChange} />Username<br></br>
      <input className="m-2 " name="password"  onChange={userform.handleChange} />password<br></br>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default Formy;