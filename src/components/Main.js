import React from "react";
import { useState } from "react";

export default function Main(props){
    
    const [text,setText]=useState("Paste Your code")
    
    const [text1,setText1]=useState("React usable code will be here")

    const [style,setStyle]=useState(props.style || {})

    const changeStyle=({style})=>{
        if(style.color==='black')
            {
                setStyle({color:'white',background:'#191a29'})
            }
            else{
                setStyle({color:'black',background:'#f2f2f2'})
            }
    }


    const copyToClipboard = () => {
        navigator.clipboard.writeText(text1).then(
          () => {
            alert('Text copied to clipboard');
          },
          (err) => {
            console.error('Could not copy text: ', err);
          }
        );
      };

    function myfunc(jsFriendlyString)
    {
        
            // Replace 'class' with 'className'
            jsFriendlyString = jsFriendlyString.replace(/\bclass\b/g, 'className');
        
            // Ensure all tags are properly closed
            jsFriendlyString = jsFriendlyString.replace(/<(\w+)([^>]*)>/g, (match, p1, p2) => {
                if (p1 === 'input' || p1 === 'img' || p1 === 'br' || p1 === 'hr' || p1 === 'meta' || p1 === 'link') {
                    return `<${p1}${p2} />`;
                }
                return match;
            });
        
        
            return jsFriendlyString;
    }
        

    
    const transformcode=()=>{
        console.log(1)
        let text2=myfunc(text)
        setText1(text2)
    }

    const handleOnChange= (event)=>
    { 
        setText(event.target.value)
    }


    return(
        <div className="my-5" style={style}> 
            <label forHtml="textarea1 ">Submit HTML Code and convert it into ReactJS usable</label>
            <div className="container mt-4">
            <div className="row">
                <div className="col-md-6">
                <textarea className="form-control border border-primary " rows="22" value={text} onChange={handleOnChange}>
                
                </textarea>
                </div>
                <div className="col-md-6">
                <textarea className="form-control border border-success " rows="22" value={text1}></textarea>
                </div>
            </div>
            </div>
            <div className="px-3">
            
            <button type="button" className="btn btn-outline-primary my-3 "  onClick={transformcode}>Submit</button>
            <button type="button"className="btn btn-outline-secondary my-3"onClick={copyToClipboard}>
                    Copy to Clipboard
                </button>
            </div>
        </div>
    )
}