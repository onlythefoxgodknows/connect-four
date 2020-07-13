import React from 'react';
import './board.css';

export default class Square extends React.Component {
    render() {
        let circle;
        if (this.props.value == 0) circle = "BlankCircle";
        else if (this.props.value == 1) circle = "RedPiecePlayed";
        else circle = "YellowPiecePlayed";
        return (
            <span className={"Square card-5"}>
                <div className={circle + " Centered"}>

                </div>
            </span>
        )
    }
}