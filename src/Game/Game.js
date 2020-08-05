import React from 'react';
import Square from './Square';
import './board.css';
import PieceSelection from "./PieceSelection";
import fire from '../config/Fire';
import { Button, Modal } from 'react-bootstrap';

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
        this.state = {
            gameData: defaultState,
            showModal: false,
            savedInDB: []
        }


        this.toggleTurn = this.toggleTurn.bind(this);
        this.playPiece = this.playPiece.bind(this);
        this.resetGame = this.resetGame.bind(this);
        this.downloadFile = this.downloadFile.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onReaderLoad = this.onReaderLoad.bind(this);
        this.saveToDB = this.saveToDB.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.retrieveFromDB = this.retrieveFromDB.bind(this);
        this.loadGame = this.loadGame.bind(this);
    }

    componentDidMount() {
        const db = fire.firestore();
        if (this.props.user.email) {
            const data = db.collection(this.props.user.email).get()
            console.log("Hi")
            console.log(data)
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props == prevProps) return;
        const db = fire.firestore();
        if (this.props.user.email) {
            db.collection(this.props.user.email).get().then(data => {
                const games = []
                data.forEach(doc => {
                    const data = doc.data();
                    games.push(data)
                })
                this.setState({
                    savedInDB: games
                })
                console.log(games)
            })
        }
    }

    retrieveFromDB() {
        const db = fire.firestore();
        db.collection(this.props.user.email).get().then(data => {
            const games = []
            data.forEach(doc => {
                const data = doc.data();
                games.push(data)
            })
            games.sort((a, b) => {
                b.time.localeCompare(a.time)
            })
            this.setState({
                savedInDB: games
            })
        })
    }

    handleShow() {
        this.setState({
            showModal: true
        })
    }

    handleClose() {
        this.setState({
            showModal: false
        })
    }

    toggleTurn() {
        let nextTurn = this.state.gameData.turn + 1;
        this.setState({
            gameData: {
                turn: nextTurn
            }
        })
    }

    resetGame() {
        this.setState({
            gameData: {
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
            }
        });
    }

    endGame() {
        this.setState({
            gameData: {gameOver: true}
    });
    }

    downloadFile = async () => {
        const myData = this.state.gameData;
        let dateTime = new Date().toLocaleString();
        const fileName = dateTime;
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
        event.target.value = null;
    }

    onReaderLoad = event => {
        let data = JSON.parse(event.target.result);
        this.setState({gameData: data});
    }

    loadGame(data) {
        this.setState({gameData: data})
    }

    playPiece(column) {
        if (this.state.gameData.columnHeights[column] == 6) {
            return;
        }
        let newColumnHeights = this.state.gameData.columnHeights.slice();
        let newGame = this.state.gameData.game.slice();
        let nextTurn = this.state.gameData.turn + 1;
        newColumnHeights[column]++;

        // Identity of player derived from parity of turn.
        let player = this.state.gameData.turn % 2 + 1;

        let color = player == 1 ? "Red" : "Yellow";

        // Place player piece in array.
        newGame[5 - this.state.gameData.columnHeights[column]][column] = player;

        let winner = false;
        // Check if player won.
        let row = 5 - this.state.gameData.columnHeights[column];
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
            this.setState({gameData: {
                columnHeights: newColumnHeights,
                game: newGame,
                turn: nextTurn,
                gameOver: true
            }}, () => {
                setTimeout(() => {
                    alert(color + " is the winner!");
                    this.resetGame();
                }, 100)
            })
        } else {
            this.setState({gameData: {
                columnHeights: newColumnHeights,
                game: newGame,
                turn: nextTurn
            }})
        }
    }

    saveToDB = e => {
        e.preventDefault();
        const data = JSON.stringify(this.state.gameData);
        const db = fire.firestore();
        let today = new Date();
        let dateTime = today.toLocaleString();
        db.settings({
            timestampsInSnapshots: true
        });
        const userRef = db.collection(this.props.user.email).add({
            time: dateTime,
            game: data
        })
        alert("Game has been saved to database.")
        this.retrieveFromDB()
    }

    render() {
        let piece = this.state.gameData.turn % 2 == 0 ? "RedPiece card-5" : "YellowPiece card-5";

        let selectArray = [0, 1, 2, 3, 4, 5, 6];

        let select = <div>{selectArray.map(value => <PieceSelection key={"select" + value} playPiece={this.playPiece} turn={this.state.gameData.turn} value={value}/>)}</div>

        let board = this.state.gameData.game.map(
            row => <div>{row.map(value => <Square row={row} value={value}/>)}</div>
        )

        let gamesFromDb = this.state.savedInDB.map(
            game => <div onClick={() => this.loadGame(JSON.parse(game.game))} className={"card-1 DBSavedGame animate__animated animate__bounceInDown"}>{game.time}</div>
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
                <div onClick={this.downloadFile} className={"card-5 SaveButton animate__animated animate__bounceInRight"}>Save to File</div>
                <input style={{width: "0.1px", height: "0.1px", opacity: 0, overflow: "hidden", position: "absolute", zIndex: -1}} type={"file"} name={"file"} id="file" onChange={this.onChangeHandler} />
                <label className={"card-5 SaveButton animate__animated animate__bounceInRight"} htmlFor={"file"}>Load from File</label>
                <div onClick={this.saveToDB} className={"card-5 SaveButtonDB animate__animated animate__bounceInRight"}>Save to DB</div>
                <div onClick={this.handleShow} className={"card-5 SaveButtonDB animate__animated animate__bounceInRight"}>Load from DB</div>
                <Modal style={{display: "flex", alignItems: "center", justifyContent: "center"}} show={this.state.showModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <div>Games saved in Database</div>
                    </Modal.Header>
                    <Modal.Body>
                        {gamesFromDb}
                    </Modal.Body>
                </Modal>
            </div>
            </div>
        )
    }
}