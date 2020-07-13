import React from 'react';
import './Elsewhere.css';

export default class About extends React.Component {
    render() {
        return(
            <div className="container">
                <div className={"row"}>
                    <div className={"col-sm"}>
                        <div className={"Centered box text-center"}>
                            <a target="_blank" href={"https://www.helpfulgames.com/subjects/brain-training/connect-four.html"}>
                                <img src={"https://www.helpfulgames.com/bilder/helpfulgames-185x45.png"} className={"link-image animate__animated animate__jackInTheBox"} />
                            </a>
                        </div>
                    </div>
                    <div className={"col-sm"}>
                        <div className={"Centered box text-center"}>
                            <a target="_blank" href={"https://www.mathsisfun.com/games/connect4.html"}>
                                <img src={"https://www.mathsisfun.com/images/style/logo.svg"} className={"link-image animate__animated animate__jackInTheBox"} />
                            </a>
                        </div>
                    </div>
                    <div className={"col-sm"}>
                        <div className={"Centered box text-center"}>
                            <a target="_blank" href={"http://www.connectfour.org/"}>
                                <img src={"http://www.connectfour.org/images/banner-connect-four.jpg"} className={"link-image animate__animated animate__jackInTheBox"} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}