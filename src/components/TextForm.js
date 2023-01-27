import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let result = text.toUpperCase();
        setText(result);
        props.showAlert("Text Converted to UpperCase.","success")
    }
    const handleLoClick = () => {
        let result = text.toLowerCase();
        setText(result);
        props.showAlert("Text Converted to LowerCase.","success")
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const changeColor = () => {
        document.getElementById("color").style.color = "magenta";
        props.showAlert("Text Colour Changed to Magenta.","success")
    }
    const handleCopy = () => {
        var text = document.getElementById("myText");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied To Clipboard.","success")
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed.","success")
    }
    const [text, setText] = useState("");
    return (
        <>
            <div className="container" style={{color:props.mode === 'dark' ? 'white' : '#373F4D'}}>
                <div>
                    <h1> {props.heading} </h1>
                    <div className="mb-3">
                        <textarea className="form-control" style={{backgroundColor:props.mode === 'dark' ? 'grey' : 'white', color:props.mode === 'dark' ? 'white' : '#373F4D'}} onChange={handleOnChange} value={text} id="myText" rows="8"></textarea>
                    </div>
                    <button className='btn btn-primary mx-2 my-2' onClick={handleUpClick} >Convert to Uppercase</button>
                    <button className='btn btn-primary mx-2 my-2' onClick={handleLoClick} >Convert to Lowercase</button>
                    <button className='btn btn-primary mx-2 my-2' onClick={changeColor} >Change Text Colour</button>
                    <button className='btn btn-primary mx-2 my-2' onClick={handleCopy} >Copy Text</button>
                    <button className='btn btn-primary mx-2 my-2' onClick={handleExtraSpaces} >Remove Extra Spaces</button>
                </div>
                <div className='container my-2'>
                    <h2>Your Text Summary.</h2>
                    <p> {text.split(" ").filter((element) => {return element.length!==0}).length} words, {text.length} characters</p>
                    <p> {0.008 * text.split(" ").length} Minutes Read</p>
                </div>
                <h2>Preview</h2>
                <p id='color'> {text.length?text:"Enter Any Text To Get Preview"} </p>
            </div>
        </>
    )
}
