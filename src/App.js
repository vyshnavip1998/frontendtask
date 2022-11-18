import { useEffect, useState } from "react";
import { fabric } from "fabric";
import "./App.css";
import  Header from "./Header";
import black from "./components/Black.svg";
import blue from "./components/Blue.svg";
import check from "./components/Check.svg";
import eraser from "./components/Eraser.svg";
import green from "./components/Green.svg";
import pen from "./components/Pen.svg";
import red from "./components/Red.svg";
import yellow from "./components/Yellow.svg";
import slider from "./components/slider.svg";
import Pages  from "./components/Pages/Pages";



function App() {
    const [canvas, setCanvas] = useState(null);
    const [color, setColor] = useState("black");
    const [isDomReady, setIsDomReady] = useState(false);
    const [penSize, setPenSize] = useState(3);
    const [eraserSize, setEraserSize] = useState(3);
    const [invert, setInvert] = useState(false);

    const initCanvas = () => {
        const can = new fabric.Canvas("canvas");
        const dom_canvas = document.querySelector(".canvas");
        // console.log(dom_canvas.offsetHeight);
        // console.log(dom_canvas.offsetWidth);
        // can.setHeight(dom_canvas.offsetHeight);
        // can.setWidth(dom_canvas.offsetWidth);
        can.setHeight(window.innerHeight);
        can.setWidth(window.innerWidth);

        can.isDrawingMode = true;
        return can;
    };

    useEffect(() => {
        setCanvas(initCanvas());
    }, []);

    useEffect(() => {
        if (canvas != null) {
            canvas.freeDrawingBrush.color = color;
        }
    }, [color]);

    useEffect(() => {
        if (canvas != null) {
            // canvas.freeDrawingBrush.color = color;
            canvas.freeDrawingBrush.invert = invert;
            console.log({ invert });
        }
    }, [invert]);

    useEffect(() => {
        if (canvas != null) {
            canvas.freeDrawingBrush.width = penSize;
            console.log(penSize);
        }
    }, [penSize]);

    return (
        <>
        <div className="App">
        <div id="top-page">
                    <span>🎨 untitled - Paint</span>
                    <span>🔴 🟠 🟢</span>    
            </div>
            <center><h1>Painting World</h1></center>
            <div className="tools">
                <div className="pen-tools">
                    <div className="pen">
                        <img alt="pen" src={pen} />
                    </div>

                    <input
                        type="range"
                        className="slider"
                        value={penSize}
                        onChange={(e) => setPenSize(e.target.value)}
                        min="1"
                        max="10"
                        id="myRange" />

                    <div
                        className="color black"
                        onClick={() => setColor("black")}
                    >
                        <img alt="" src={black} />
                        {color === "black" ? (
                            <img alt="check" className="check" src={check} />
                        ) : null}
                    </div>
                    <div
                        className="color green"
                        onClick={() => setColor("green")}
                    >
                        <img alt="green" src={green} />
                        {color === "green" ? (
                            <img alt="check" className="check" src={check} />
                        ) : null}
                    </div>
                    <div
                        className="color yellow"
                        onClick={() => setColor("yellow")}
                    >
                        <img alt="yellow" src={yellow} />

                        {color === "yellow" ? (
                            <img alt="check" className="check" src={check} />
                        ) : null}
                    </div>
                    <div
                        className="color blue"
                        onClick={() => setColor("blue")}
                    >
                        <img alt="blue" src={blue} />

                        {color === "blue" ? (
                            <img alt="check" className="check" src={check} />
                        ) : null}
                    </div>
                    <div className="color red" onClick={() => setColor("red")}>
                        <img alt="red" src={red} />

                        {color === "red" ? (
                            <img alt="check" className="check" src={check} />
                        ) : null}
                    </div>
                </div>
                <div className="pen-settings">
                    <div
                        className="eraser"
                        onClick={() =>  {
                            setInvert(!invert);
                        } }
                    >
                        <img alt="eraser" src={eraser} color ="white" />
                    </div>
                    
                    

                    <input
                        type="range"
                        min="1"
                        max="100"
                        id="myRange"
                        className="slider"
                        color="white" />
                </div>
            </div>

            <div>
            <h3>Let's Create Paint!</h3>
        </div>


            {/* <div className="canvas"> */}
            <canvas id="canvas"></canvas>
            {/* </div> */}
        </div></>
        
    );
}

export default App;
