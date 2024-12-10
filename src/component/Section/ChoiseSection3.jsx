import DivBlockOptionBasic from "../DivBlock/DivBlockOptionBasic";
import DivBlockInfo from "../DivBlock/DivBlockInfo";
import Button from "../Button/Button";
import TurnDiv from "../DivBlock/TurnDiv";
import React, { useState } from 'react';

export default function ChoiseSection3() {
    const [turnMove, setTurnMove] = useState(0)
    const [circleMargin, setCircleMargin] = useState(0)

    let h1Style = {textAlign: "center", fontFamily: "sans-serif"}
    let h3Style  = {textAlign: "center", fontFamily: "sans-serif", color: "gray"}

    return (
        <DivBlockOptionBasic className="Basic" style={ { height: "220px" } }>
            <TurnDiv style={{ 
                top: "200px", 
                transition: 'transform 1s, opacity 0.6s', 
                transform: `translateX(${730 + circleMargin}px)`,
                opacity: turnMove === 0 ? "100%" : "20%",
                backgroundColor: turnMove === 0 ? "rgb(100, 50, 150)" : "rgb(180, 180, 180)" 
            }}></TurnDiv>
            <TurnDiv style={{ 
                top: "200px", 
                transition: 'transform 1s, opacity 0.6s', 
                transform: `translateX(${745 + circleMargin}px)`,
                opacity: turnMove === 1 ? "100%" : "20%",
                backgroundColor: turnMove === 1 ? "rgb(100, 50, 150)" : "rgb(180, 180, 180)" 
            }}></TurnDiv>
            <TurnDiv style={{ 
                top: "200px", 
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
                    top: "60px", 
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
                    top: "60px", 
                    left: "1340px" 
                }}>
                    {'>'}
            </Button>
        </DivBlockOptionBasic>
    )
}