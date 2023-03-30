import './App.css';
import { useState} from 'react';
import {useForm} from 'react-hook-form';

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [subscription,setSubscription] = useState("Try it free 7 days then ₹180/mo. thereafter");
  const [disabled,setDisabled] = useState(true);
  const [skills,setSkills]  = useState([]);
  const data = ["Choose Your Skills","HTML","CSS","JavaScript","ReactJS","NextJS",]
  var onfocus = (e)=>{
    if(e.username==='' || e.email==='' || e.password==='' || e.skills ==='Choose Your Skills' )
      setDisabled(true);
    else
      setDisabled(false);
  }
  var add = (e)=>{
      setSkills([...skills,e.target.value])     
  }
  console.log(skills.length)
  return (
    <div className='box'>
      <div className="learn-code">
        <h2>Learn to code by watching others</h2>
        <p>See how experienced developers solve problems in real-time.Watching scripted tutorials is great, but understanding howdevelopers think is invaluable.</p>
      </div>
      <div className="form">
          <div className='subscription'>
            {subscription}
          </div><br></br> 
          <div className='main-form'>
            <form onFocus={handleSubmit(onfocus)}>
                <input type="text" placeholder='Username' className='input' {...register("username",{minLength:5})} />
                <input type="email" placeholder='Email' className='input' {...register("email", {minLength:7})} />
                <input type="password" placeholder='Password' className='input' {...register("password", {minLength:5})} />
                <select className='input' {...register("skills")} onChange={add}>
                  {
                     data.map((item,index)=>{
                      return(
                        <option value={item} key={index} >{item}</option>
                      )})
                  }
                </select><br></br><br></br>
                {skills.map((item,index)=>{return(
                  <span key={index} className="span">
                    {item}
                    <button className='close'>x</button>
                  </span>
                )})}
                <br></br><br></br>
                {disabled?<button className='button' disabled={true}>CLAIM YOUR FREE TRAIL</button>:<button className='button' disabled={false} onClick={()=>setSubscription("you have successfully subscribed to our plan")}>CLAIM YOUR FREE TRAIL</button>}
                <p style={{fontSize:"12px",textAlign:"center"}}>By clicking the button you are agreeing to our <span style={{color:"red"}}>Terms and Services</span> </p>
            </form>    
          </div>
      </div>
    </div>
  );
}

export default App;
