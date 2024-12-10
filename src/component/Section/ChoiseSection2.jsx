import DivBlockOptionBasic from "../DivBlock/DivBlockOptionBasic";
import DivBlockInfo from "../DivBlock/DivBlockInfo";
import Button from "../Button/Button";
import TurnDiv from "../DivBlock/TurnDiv";
import React, { useState } from 'react';

export default function ChoiseSection() {

    let h1Style = { textAlign: "center", fontFamily: "sans-serif" }
    let h3Style = { textAlign: "center", fontFamily: "sans-serif", color: "gray" }

    const [turnMove, setTurnMove] = useState(0)
    const [circleMargin, setCircleMargin] = useState(0)

    return (
        <DivBlockOptionBasic className="Basic" style={{ height: "300px" }}>
            <DivBlockInfo className="ElementTableScrollRelative"
                style={{
                    top: "50px",
                    height: "200px",
                    width: "250px",
                    transition: 'transform 1s, opacity 1s',
                    transform: turnMove === 0 ? `translateX(${625}px)` : `translateX(${turnMove === 1 ? 1005 : 255}px)`,
                    opacity: turnMove === 0 ? `100%` : `5%`
                }}>
                <h1 style={h1Style}>About me</h1>
                <h3 style={h3Style}>I am a web developer specializing in React.</h3>
            </DivBlockInfo>
            <DivBlockInfo className="ElementTableScrollRelative"
                style={{
                    top: "50px",
                    height: "200px",
                    width: "250px",
                    transition: 'transform 1s, opacity 1s',
                    transform: turnMove === 1 ? `translateX(${625}px)` : `translateX(${turnMove === 2 ? 1005 : 255}px)`,
                    opacity: turnMove === 1 ? `100%` : `5%` 
                }}>
                <h1 style={ h1Style }>About this site</h1>
                <h3 style={ h3Style }>This site created from show my abilities</h3>
            </DivBlockInfo>
            <DivBlockInfo className="ElementTableScrollRelative"
                style={{
                    top: "50px",
                    height: "200px",
                    width: "250px",
                    transition: 'transform 1s, opacity 1s',
                    transform: turnMove === 2 ? `translateX(${625}px)` : `translateX(${turnMove === 0 ? 1005 : 255}px)`,
                    opacity: turnMove === 2 ? `100%` : `5%` 
                }}>
                <h1 style={ h1Style }>About this animation</h1>
                <h3 style={ h3Style }>Simply takes blocks to the right and left sides of the site :)</h3>
            </DivBlockInfo>

            <TurnDiv style={{ 
                top: "280px", 
                transition: 'transform 1s, opacity 0.6s', 
                transform: `translateX(${730 + circleMargin}px)`,
                opacity: turnMove === 0 ? "100%" : "20%",
                backgroundColor: turnMove === 0 ? "rgb(100, 50, 150)" : "rgb(180, 180, 180)" 
            }}></TurnDiv>
            <TurnDiv style={{ 
                top: "280px", 
                transition: 'transform 1s, opacity 0.6s', 
                transform: `translateX(${745 + circleMargin}px)`,
                opacity: turnMove === 1 ? "100%" : "20%",
                backgroundColor: turnMove === 1 ? "rgb(100, 50, 150)" : "rgb(180, 180, 180)" 
            }}></TurnDiv>
            <TurnDiv style={{ 
                top: "280px", 
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
                    top: "110px", 
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
                    top: "110px", 
                    left: "1340px" 
                }}>
                    {'>'}
            </Button>
        </DivBlockOptionBasic>
    )
}
