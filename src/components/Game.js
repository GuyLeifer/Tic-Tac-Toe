import React, { useState } from 'react';
import { calculateWinner } from '../helpers';
import Board from './Board';
import Modal from '@material-ui/core/Modal';
import ScoreTable from './ScoreTable';
const axios = require ('axios');


const styles = {
    width: '200px',
    margin: '20px auto',
    textAlign: 'center'
};

let startTime = 0;

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    let winner = calculateWinner(board);
    const [scores, setScores] = useState([]);

    const handleClick = i => {
        const boardCopy = [...board];
        // If user click an occupied square or if game is won, return
        if (winner || boardCopy[i]) return;
        // Put an X or an O in the clicked square
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        startTime = startTime === 0 ? new Date() : 0;
        setXisNext(!xIsNext);
    }

    const jumpTo = () => {

    }

    const renderMoves = () => (
        <button onClick={() => setBoard(Array(9).fill(null))}>
            Start Game
        </button>
    )

    const setName = (e) => {
        let name = e.target.previousElementSibling.value;
        let date = new Date();
        let duration = (date - startTime)/1000+" s";
        if (name != "") {
        axios.post('/api/v1/records', { name, date, duration })
        .then(res => setScores(res.data))
        console.log(startTime);
        setBoard(Array(9).fill(null));
        startTime = 0;
        }
    }

    const style = {
        background: 'lightblue',
        border: '2px solid darkblue',
        fontSize: '30px',
        fontWeight: '800',
        cursor: 'pointer',
        outline: 'none',  
    }

    // useEffect(() => 
    //     return (
           
    //     )
    // }, [])

    return (
        <>
            <Board squares={board} onClick={handleClick} />
            <div style={styles}>
                <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
                {renderMoves()}
                
            </div>
            <Modal
                    open = {winner ? true : false}
                    date = {new Date()}
                    >
                <div style ={style}>
                     <p>Insert Your Name</p>
                     <input></input>
                     <button onClick={setName}>Enter Name</button>
                </div>
            </Modal>
            <ScoreTable scores={scores} />
        </>
    )
}

export default Game;