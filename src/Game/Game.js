import React from 'react';
import Square from './Square';
import './board.css';
import PieceSelection from "./PieceSelection";

let defaultState = {
    game: [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
    ],
    columnHeights: [0, 0, 0, 0, 0, 0, 0],
    turn: 0,
    gameOver: false
};

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = defaultState;

        this.toggleTurn = this.toggleTurn.bind(this);
        this.playPiece = this.playPiece.bind(this);
        this.resetGame = this.resetGame.bind(this);
        this.downloadFile = this.downloadFile.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onReaderLoad = this.onReaderLoad.bind(this);
    }

    toggleTurn() {
        let nextTurn = this.state.turn + 1;
        this.setState({
            turn: nextTurn
        })
    }

    resetGame() {
        this.setState({
            game: [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0]
            ],
            columnHeights: [0, 0, 0, 0, 0, 0, 0],
            turn: 0,
            gameOver: false
        });
    }

    endGame() {
        this.setState({gameOver: true});
    }

    downloadFile = async () => {
        const myData = this.state;
        let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = date+' '+time;
        const fileName = "connect4_" + dateTime;
        const json = JSON.stringify(myData, null, 2);
        const blob = new Blob([json],{type:'application/json'});
        const href = await URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = href;
        link.download = fileName + ".json";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    onChangeHandler = event => {
        let reader = new FileReader();
        reader.onload = this.onReaderLoad;
        reader.readAsText(event.target.files[0]);
    }

    onReaderLoad = event => {
        let data = JSON.parse(event.target.result);
        console.log(data);
        this.setState(data);
    }

    playPiece(column) {
        if (this.state.columnHeights[column] == 6) {
            return;
        }
        let newColumnHeights = this.state.columnHeights.slice();
        let newGame = this.state.game.slice();
        let nextTurn = this.state.turn + 1;
        newColumnHeights[column]++;

        // Identity of player derived from parity of turn.
        let player = this.state.turn % 2 + 1;

        let color = player == 1 ? "Red" : "Yellow";

        // Place player piece in array.
        newGame[5 - this.state.columnHeights[column]][column] = player;

        let winner = false;
        // Check if player won.
        let row = 5 - this.state.columnHeights[column];
        let col = column;

        // Check horizontal.
        let count = 1;
        let r = row;
        let c = column - 1;
        while (c >= 0 && newGame[row][c] == player) {
            count++;
            c--;
        }
        c = column + 1;
        while (c <= 6 && newGame[row][c] == player) {
            count++;
            c++;
        }
        if (count >= 4) winner = true;

        // Check vertical.
        count = 1;
        r = row - 1;
        c = column;
        while (r >= 0 && newGame[r][column] == player) {
            count++;
            r--;
        }
        r = row + 1;
        while (r <= 5 && newGame[r][column] == player) {
            count++;
            r++;
        }
        if (count >= 4) winner = true;

        // Check diagonal NW SE.
        count = 1;
        r = row - 1;
        c = column  - 1;
        while (r >= 0 && c >= 0 && newGame[r][c] == player) {
            count++;
            r--;
            c--;
        }
        r = row + 1;
        c = column + 1;
        while (r <= 5 && c <= 6 && newGame[r][c] == player) {
            count++;
            r++;
            c++;
        }
        if (count >= 4) winner = true;

        // Check diagonal SW NE.
        count = 1;
        r = row - 1;
        c = col + 1;
        while (r >= 0 && c <= 6 && newGame[r][c] == player) {
            count++;
            r--;
            c++;
        }
        r = row + 1;
        c = col - 1;
        while (r <= 5 && c >= 0 && newGame[r][c] == player) {
            count++;
            r++;
            c--;
        }
        if (count >= 4) winner = true;

        if (winner) {
            this.setState({
                columnHeights: newColumnHeights,
                game: newGame,
                turn: nextTurn,
                gameOver: true
            }, () => {
                setTimeout(() => {
                    alert(color + " is the winner!");
                    this.resetGame();
                }, 100)
            })
        } else {
            this.setState({
                columnHeights: newColumnHeights,
                game: newGame,
                turn: nextTurn
            })
        }
    }

    render() {
        let piece = this.state.turn % 2 == 0 ? "RedPiece card-5" : "YellowPiece card-5";

        let selectArray = [0, 1, 2, 3, 4, 5, 6];

        let select = <div>{selectArray.map(value => <PieceSelection key={"select" + value} playPiece={this.playPiece} turn={this.state.turn} value={value}/>)}</div>

        let board = this.state.game.map(
            row => <div>{row.map(value => <Square row={row} value={value}/>)}</div>
        )
        return(
            <div>
            <div style={{marginLeft: "15vw", float: "left"}}>
                <div>{select}</div>
                <div className={"animate__animated animate__jackInTheBox"}>
                    {board}
                </div>
            </div>
            <div className="ButtonContainer" style={{float: "left"}}>
                <div className={"TurnDisplay card-5 animate__animated animate__bounceInRight"}>
                    <div style={{marginRight: "1vw"}} className={piece}/>
                    Player Turn
                </div>
                <div onClick={this.downloadFile} className={"card-5 SaveButton animate__animated animate__bounceInRight"}>Save Game</div>
                <input type={"file"} name={"file"} id="file" onChange={this.onChangeHandler} />
                <label className={"card-5 SaveButton animate__animated animate__bounceInRight"} for={"file"}>Load Game</label>
            </div>
            </div>
        )
    }
}