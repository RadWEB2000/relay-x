'use client'
import Highlight from "react-highlight";
import "highlight.js/styles/github-dark.css";

export default function Code({ code, language }: CodeBlock) {
    return (
        <div>
            <Highlight className={`${language} rounded-xl`} >
                {code}
            </Highlight>
        </div>
    )
}