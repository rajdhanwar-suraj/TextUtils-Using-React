import React, { useState } from 'react'

export default function TextBox(props) {
    const [text, setText] = useState('');

    const upperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('UpperCase Enabled.', 'success');
    }
    const lowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('LowerCase Enabled.', 'success');
    }
    const copyToClipbord = () => {
        let text = document.getElementById('myText');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Copy text to clipbord', 'success');
    }
    const removeExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert('Extra space removed', 'success');
    }
    const clear = () => {
        let newText = '';
        setText(newText);
        props.showAlert('Clear Text', 'success');
    }
    return (
        <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
            <div className="mb-3">
                <h3>Enter The Text To Analize</h3>
                <textarea id='myText' className={`form-control bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`} value={text} onChange={(e) => { setText(e.target.value) }} rows="10"></textarea>
            </div>
            <button type="button" className={`btn btn-${props.mode} mx-1 my-1`} onClick={upperCase}>Convert UpperCase</button>
            <button type="button" className={`btn btn-${props.mode} mx-1 my-1`} onClick={lowerCase}>Convert LowerCase</button>
            <button type="button" className={`btn btn-${props.mode} mx-1 my-1`} onClick={copyToClipbord}>Copy to clipbord</button>
            <button type="button" className={`btn btn-${props.mode} mx-1 my-1`} onClick={removeExtraSpace}>Remove extra space</button>
            <button type="button" className={`btn btn-${props.mode} mx-1 my-1`} onClick={clear}>Clear</button>
            <p className='my-0'>{(text.split(' ').length) - 1} word and {text.length} charactors.</p>
            <h3 className='my-0'>Preview</h3>
            <p>{text}</p>
        </div>
    )
}
