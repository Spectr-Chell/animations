import DivBlockOptionBasic from "../DivBlock/DivBlockOptionBasic"
import DivBlockInfo from "../DivBlock/DivBlockInfo"
import TurnDiv from "../DivBlock/TurnDiv"
import Button from "../Button/Button"
import React, { useState } from 'react'

export default function ChoiseSection1() {

    const [turnMove, setTurnMove] = useState(0)
    const [circleMargin, setCircleMargin] = useState(0)

    let h1Style = {textAlign: "center", fontFamily: "sans-serif"}
    let h3Style  = {textAlign: "center", fontFamily: "sans-serif", color: "gray"}



    return (
        <DivBlockOptionBasic className="Basic" style={ { height: "220px" } }>
            <DivBlockInfo 
                className="ElementTable"
                style={{ 
                    top: "30px", 
                    left: "255px", 
                    height: "150px",
                    width: "1000px",
                    transition: 'transform 1s, opacity 0.6s', 
                    opacity: turnMove === 0 ? "100%" : "0%",
                    transform: turnMove === 0 ? "translateX(5px)" : "translateX(-2000px)"
                }}>
                <h1 style={ h1Style }>About me</h1>
                <h3 style={ h3Style }>I am a web developer specializing in React.</h3>
            </DivBlockInfo>
            <DivBlockInfo 
                className="ElementTable" 
                style={{ 
                    top: "30px", 
                    height: "150px",
                    width: "1000px",
                    left: "255px", 
                    transition: 'transform 1s, opacity 0.6s', 
                    opacity: turnMove === 1 ? "100%" : "0%",
                    transform: turnMove === 1 ? 'translateX(5px)' : 'translateX(2000px)' 
            }}>
                <h1 style={ h1Style }>About this site</h1>
                <h3 style={ h3Style }>This site created from show my abilities</h3>
            </DivBlockInfo>
            <DivBlockInfo 
                className="ElementTable"
                style={{ 
                    top: "30px", 
                    left: "255px", 
                    height: "150px",
                    width: "1000px",
                    transition: 'transform 1s, opacity 0.6s', 
                    opacity: turnMove === 2 ? "100%" : "0%",
                    transform: turnMove === 2 ? 'translateX(5px)' : 'translateX(-2000px)' 
                }}>
                <h1 style={ h1Style }>About this animation</h1>
                <h3 style={ h3Style }>Simply takes blocks to the right and left sides of the site :)</h3>
            </DivBlockInfo>

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
            <TurnDiv
                style={{ 
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