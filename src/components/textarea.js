import PropTypes from 'prop-types';
import  { useState } from 'react';
export default function Textarea (props) {
    const[text,setText]=useState("");
    const result=(e)=>{
      setText(e.target.value);
    }
    const clicked1=(e)=>{
      setText(text.toUpperCase());
    }
    const clicked2=(e)=>{
      setText(text.toLowerCase());
    }
    const clicked3=(e)=>{
      setText("");
    }
    const clicked4=(e)=>{
      navigator.clipboard.writeText(text);
    }
    
  return (
    <div>
        <div className="container" style={{backgroundColor:"pink",marginTop:50}}>
        <h3>{props.heading}</h3>
        <textarea className="postContent" value={text} onChange={result} rows={8} cols={40} />
        <h3>Text Summary</h3>
        <p>{text.split(" ").length} words {text.length} characters</p>
        <button className="btn btn-primary mx-2" onClick={clicked1}>To uppercase</button>
        <button className="btn btn-primary" onClick={clicked2}>To lowercase</button>
        <button className="btn btn-primary mx-2" onClick={clicked3}>Clear text </button>
        <button className="btn btn-primary mx-2" onClick={clicked4}>Copy Text </button>
        <h3 className="container my-3">Preview</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}
