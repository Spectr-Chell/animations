import DivBlockOptionBasic from "../DivBlock/DivBlockOptionBasic";
import DivBlockInfo from "../DivBlock/DivBlockInfo";
import React from 'react';


export default function ChoiseSection8() {

    let text = [["About me", "I am a web developer specializing in React."],
                ["About this site", "This site created from show my abilities"],
                ["About this animation", "Simply takes blocks to the right and left sides of the site :)"]];


    return (
        <DivBlockOptionBasic className="Basic" style={ { height: "320px" } }>

            <DivBlockInfo className="ElementTableScroll"
                style={{
                    top: "50px",
                    left: "255px",
                    height: "200px",
                    width: "250px",
                    transition: 'transform 1s, opacity 1s',
                }}>
                <h1
                    style={{
                    transition: 'transform 1s, opacity 1s', 
                    textAlign: "center", 
                    fontFamily: "sans-serif"
                    }}>
                        {text[0][0]}
                </h1>
                <h3 style={{
                    transition: 'transform 1s, opacity 1s', 
                    textAlign: "center", 
                    fontFamily: "sans-serif", 
                    color: "gray" 
                }}>
                        {text[0][1]}
                </h3>
            </DivBlockInfo>
            <DivBlockInfo className="ElementTableScroll"
                style={{
                    top: "50px",
                    left: "625px",
                    height: "200px",
                    width: "250px",
                    transition: 'transform 1s, opacity 1s',
                }}>
                <h1 style={{
                    transition: 'transform 1s, opacity 1s', 
                    textAlign: "center", 
                    fontFamily: "sans-serif", 
                }}>
                        {text[1][0]}
                </h1>
                <h3 style={{
                    transition: 'transform 1s, opacity 1s', 
                    textAlign: "center", 
                    fontFamily: "sans-serif", 
                    color: "gray",
                }}>
                        {text[1][1]}
                </h3>
            </DivBlockInfo>
            <DivBlockInfo className="ElementTableScroll"
                style={{
                    top: "50px",
                    left: "1005px",
                    height: "200px",
                    width: "250px",
                    transition: 'transform 1s, opacity 1s',
                }}>
                <h1 style={{
                    transition: 'transform 1s, opacity 1s', 
                    textAlign: "center", 
                    fontFamily: "sans-serif", 
                }}>
                        {text[2][0]}
                </h1>
                <h3 style={{
                    transition: 'transform 1s, opacity 1s', 
                    textAlign: "center", 
                    fontFamily: "sans-serif", 
                    color: "gray",
                }}>
                        {text[2][1]}
                </h3>
            </DivBlockInfo>
        </DivBlockOptionBasic>
    )
}