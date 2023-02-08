import React from 'react'

export default function About(props) {
    return (
        <>
            <div className={`heading text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <h1>About</h1>
                    <p>In this page we describe a bit of the history, motivations and features behind Text-Utils.com.</p>
            </div>
            <div className={`details container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h2> What does it do?</h2>
                <p>
                    Text-Utils.com is described as a central repository of tools for helping with developer activities. It includes tools such as for formatting JSON, XML, HTML, CSS, JavaScript, multiple text tools such as to convert case, remove accents, line breaks, extra space, also regular expressions tools for extracting elements from text such as IPs and e-mail addresses. And this is actually only a subset of what we have.
                </p>

                <h2>Why is it different?</h2>
                <p>
                    Fast, secure and easy.This is a summary of what Text - Utils.com is.All we design is intended to be fast, really fast.Other than that, all our utilities are client - side, meaning your data will not go through our servers to be processed.Your data is secure.Finally, Text - Utils.com is also quite easy.Everything can be found on the page very quickly, in just a few clicks.
                </p>
                Our features
                You can find below the features available in Text - Utils.com:
            </div >

        </>
    )
}
