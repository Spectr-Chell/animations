import DivBlockOptionBasic from "../DivBlock/DivBlockOptionBasic";
import DivBlockInfo from "../DivBlock/DivBlockInfo";
import TurnDiv from "../DivBlock/TurnDiv";
import Button from "../Button/Button";
import React, { useState } from 'react';

export default function ChoiseSection6() {

    const [turnMove, setTurnMove] = useState(0)
    const [circleMargin, setCircleMargin] = useState(0)

    let h1Style = {textAlign: "center", fontFamily: "sans-serif"}
    let h3Style  = {textAlign: "center", fontFamily: "sans-serif", color: "gray"}
    let TurnDivtop = "300px";

    let text = [["About me", "I am a web developer specializing in React."],
                ["About this site", "This site created from show my abilities"],
                ["About this animation", "Simply takes blocks to the right and left sides of the site :)"]];

    return (
        <DivBlockOptionBasic className="Basic" style={ { height: "320px" } }>

            <DivBlockInfo 
                className="ElementTable"
                style={{ 
                    top: "80px", 
                    left: "255px", 
                    height: "150px",
                    width: "1000px",
                    transition: 'transform 1s, opacity 0.6s', 
                }}>
                <h1 style={ h1Style }>{text[turnMove][0]}</h1>
                <h3 style={ h3Style }>{text[turnMove][1]}</h3>
            </DivBlockInfo>

            <TurnDiv style={{ 
                top: TurnDivtop, 
                transition: 'transform 1s, opacity 0.6s', 
                transform: `translateX(${730 + circleMargin}px)`,
                opacity: turnMove === 0 ? "100%" : "20%",
                backgroundColor: turnMove === 0 ? "rgb(100, 50, 150)" : "rgb(180, 180, 180)" 
            }}></TurnDiv>
            <TurnDiv style={{ 
                top: TurnDivtop, 
                transition: 'transform 1s, opacity 0.6s', 
                transform: `translateX(${745 + circleMargin}px)`,
                opacity: turnMove === 1 ? "100%" : "20%",
                backgroundColor: turnMove === 1 ? "rgb(100, 50, 150)" : "rgb(180, 180, 180)" 
            }}></TurnDiv>
            <TurnDiv style={{ 
                top: TurnDivtop, 
                transition: 'transform 1s, opacity 0.6s', 
                transform: `translateX(${760 + circleMargin}px)`,
                opacity: turnMove === 2 ? "100%" : "20%",
                backgroundColor: turnMove === 2 ? "rgb(100, 50, 150)" : "rgb(180, 180, 180)"
            }}></TurnDiv>

            <Button 
                className="buttonCircleStyle" 
                onClick={ 
                    () => {
                        turnMove !== 0 && setTurnMove(turnMove - 1)
                        turnMove !== 0 && setCircleMargin(circleMargin + 15)
                    }}
                style={ { 
                    height: "80px", 
                    width: "80px",  
                    top: "120px", 
                    left: "100px" 
                }}>
                    {'<'}
            </Button>
            <Button 
                className="buttonCircleStyle" 
                onClick={ () => {
                    turnMove !== 2 && setTurnMove(turnMove + 1)
                    turnMove !== 2 && setCircleMargin(circleMargin - 15)
                }} 
                style={{ 
                    height: "80px", 
                    width: "80px", 
                    top: "120px", 
                    left: "1340px" 
                }}>
                    {'>'}
            </Button>
        </DivBlockOptionBasic>
    )
}