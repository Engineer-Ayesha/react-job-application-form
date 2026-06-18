import React from 'react'
import { useState } from 'react'
export default function Form() {
    const initialState={
        username:"",email:"",phone:"",city:"",position:"",techSkills:[],fresher:"",resume:null,textarea:"",terms:false
    }
    const[success,setSuccess]=useState(" ");
    const[errors,setErrors]=useState({});
    const[data,setData]=useState(initialState);
    const result=(e)=>{
        const{name,value,type,checked,files}=e.target;
        setData((prevState)=>({
            ...prevState,
            [name]
             :type==="checkbox"
             ? name==="terms"
               ?checked
               :checked
                  ? [...(prevState[name]||[]),value]
                  : (prevState[name]||[]).filter((item)=>item!==value)
              :type==="file"
              ? files[0]
            :value
        }))
    }

    const clicked=(e)=>{
        e.preventDefault();
        let errors={};
        if(data.username.trim()==="" || data.username.trim().length<3){
            errors.username="Please enter your complete name";
        }
        if(data.email.trim()===""){
            errors.email="Please enter email";
        }else if(!data.email.includes("@") || !data.email.includes(".")){
            errors.email="please enter a valid email"

        }
        if(data.phone===""){
            errors.phone="please enter phone number";
        }else if(data.phone.length<11 ){
            errors.phone="please enter valid phone number";
        }
        if(data.city===""){
            errors.city="Please select a city";
        }
        if(data.position===""){
            errors.position="Please select a position";
        }
        if(data.techSkills.length===0){
            errors.techSkills="Please select at least one skill";
        }
        if(data.fresher===""){
            errors.fresher="Please select experience";
        }
        if(data.resume===null){
            errors.resume="please upload resume file";
        }
        if(data.textarea===""){
            errors.textarea="Please write cover letter";
        }else if(data.textarea.length<10){
            errors.textarea="Write at least 10 characters";
        }
        if(data.terms===false){
            errors.terms="please check the terms and conditions";
        }
        setErrors(errors);
        if(Object.keys(errors).length===0){
            setSuccess("Form Submitted Successfully!");
            setData(initialState);
            setTimeout(()=>{
                setSuccess("")
            },3000);
        }
    }
  return (
    <div>
        <div className='main-container'>
            <div className='form-container'>
                <form onSubmit={clicked}>
                    <div className='head'>
                        <h2 className='heading'>Job Application Form</h2>
                    </div>
                    <div className='name-div'>
                        <label  htmlFor='Full Name' className='name-lable'><b>Enter Full Name:</b></label>
                        <input name='username' value={data.username} onChange={result} className='name-input' type="text" placeholder='Enter your full name' style={{border:errors.username? "1px solid red" : "1px solid gray"}}/>
                        {errors.username &&(<p style={{color:"red",fontSize:13,marginTop:3}}>{errors.username}</p>)}
                    </div>
                    <div className='email-div'>
                        <label  htmlFor='Email' className='email-lable'><b>Enter Email:</b></label>
                        <input name='email' value={data.email} onChange={result}  className='email-input' type="text" placeholder='example@gmail.com'style={{border: errors.email? "1px solid red" : "1px solid gray"}}/>
                        {errors.email && (<p style={{color:"red",fontSize:13,marginTop:3}}>{errors.email}</p>)}
                    </div>
                    <div className='contact-div'>
                        <label  htmlFor='enter phone' className='contact-lable'><b>Phone Number: </b></label>
                        <input name='phone' value={data.phone} onChange={result}  className='contact-input' type="number" placeholder='03XX-XXXXXXX' style={{border:errors.phone? "1px solid red" : "1px solid gray"}}/>
                        {errors.phone && (<p style={{color:"red",fontSize:13,marginTop:3}}>{errors.phone}</p>)}
                    </div>
                    <div className='city-div'>
                        <label id='city' className='city-label' htmlFor=' select city'><b> Select city: </b></label>
                        <select name='city' value={data.city} onChange={result} id='city' className='city-select' style={{border: errors.city?"1px solid red" : "1px solid gray"}}>
                            <option value="Select city">Select city</option>
                            <option value="Lahore">Lahore</option>
                            <option value="Karachi">Karachi</option>
                            <option value="Islamabad">Islamabad</option>
                            <option value="Multan">Multan</option>
                            <option value="Faisalabad">Faisalabad</option>
                        </select>
                        {errors.city &&(<p style={{color:"red",fontSize:13,marginTop:3}}>{errors.city}</p>)}
                    </div>
                    <div className='position-div'>
                        <label id='position' className='position-label' htmlFor=' select position'><b> Select position: </b></label>
                        <select name='position' value={data.position} onChange={result} id='position' className='position-select' style={{border: errors.position?"1px solid red" : "1px solid gray"}}  >
                            <option value="Select Position">Select position</option>
                            <option value="Frontend Developer">Frontend Developer</option>
                            <option value="Backend Developer">Backend Developer</option>
                            <option value="UI/UX Designer">UI/UX Designer</option>
                            <option value="Full Stack Developer">Full Stack Developer</option>
                        </select>
                        {errors.position &&(<p style={{color:"red",fontSize:13,marginTop:3}}>{errors.position}</p>)}
                    </div>
                    <div className='skills-div'>
                        <label id="skills" htmlFor='select skill' className='skill-label'><b>Your Skills:</b></label>
                        {errors.techSkills && (<p style={{color:"red",fontSize:13,marginTop:3}}>{errors.techSkills}</p>)}
                        <label  className='Skills' htmlFor='select HTML'>
                            <input name='techSkills' value="HTML"  onChange={result}  id='select HTML' type='checkbox' checked={data.techSkills.includes("HTML")} />          HTML
                        </label>
                        <label className='Skills' htmlFor='select CSS'>
                            <input name='techSkills' value="CSS" onChange={result}  id='select CSS' type='checkbox' checked={data.techSkills.includes("CSS")} />          CSS
                        </label>
                        <label className='Skills' htmlFor='select JS'>
                            <input name='techSkills' value="JavaScript"  onChange={result}  id='select JS' type='checkbox' checked={data.techSkills.includes("JavaScript")} />          JavaScript
                        </label>
                        <label className='Skills' htmlFor='select React'>
                            <input name='techSkills' value="React" onChange={result}  id='select React' type='checkbox' checked={data.techSkills.includes("React")} />          React
                        </label>
                    </div>
                    <div className='experience-div'>
                        <label htmlFor='experience' className='experience-label'><b>Experience</b></label>
                        {errors.fresher && (<p style={{color:"red",fontSize:13,marginTop:3}}>{errors.fresher}</p>)}
                        <label className='experience'>
                            <input name='fresher' value="Fresher" onChange={result} type='radio' checked={data.fresher==="fresher"} /> Fresher
                        </label>
                        <label className='experience'>
                            <input name='fresher' value="1-2 years"  onChange={result} type='radio' checked={data.fresher==="1-2 years"} /> 1-2 years
                        </label>
                        <label className='experience'>
                            <input name='fresher' value="3-5 years"  onChange={result} type='radio' checked={data.fresher==="3-5 years"} /> 3-5 years
                        </label>
                        <label className='experience'>
                            <input name='fresher' value="5+ years" onChange={result} type='radio' checked={data.fresher==="5+ years"} /> 5+ years
                        </label>
                    </div>
                    <div className='resume-div'>
                        <label className='resume-label'><b>Upload Resume:</b> </label>
                        <input key={data.resume} name='resume'  onChange={result} className='resume-input' type="file" style={{border:errors.resume?"1px solid red" : "1px solid gray" }}/>
                        {errors.resume && (<p style={{color:"red",fontSize:13,marginTop:3}}>{errors.resume}</p>)}
                    </div>
                    <div className='cover-div'>
                        <label className='cover-label'><b>Cover Letter:</b> </label>
                        <textarea name='textarea' value={data.textarea}  onChange={result}className='text' style={{border:errors.textarea?"1px solid red" : "1px solid gray"}}></textarea>
                        {errors.textarea &&(<p style={{color:"red",fontSize:13,marginTop:3}}>{errors.textarea}</p>)}

                    </div>
                    <div className='terms-div'>
                        <label htmlFor="term" className='terms-label'><b>Terms & Conditions:</b> </label>
                        <label className='condition'><input name="terms" value={data.terms} onChange={result} id="term" type="checkbox" checked={data.terms} style={{border:errors.terms? "1px solid red" : "1px solid gray"}} />       I agree to the Terms and Conditions.</label>
                        {errors.terms &&(<p style={{color:"red",fontSize:13,marginTop:3}}>{errors.terms}</p>)}
                    </div>
                    <div className='submit-div'>
                        {success && (<b style={{color:"green",fontSize:15,paddingRight:90}}>{success}</b>)}
                        <button type='submit' className='submit-button'>Submit</button>
                    </div>
                </form> 
            </div>
        </div>
    </div>
  )
}
