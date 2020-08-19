import React from 'react';

const style1 = {
    background: 'lightblue',
    color: 'darkblue',
    fontSize: '30px',
    fontWeight: '800',
    textDecoration: 'underline',
    textAlign: 'center',
    marginTop: '85px'
}
const style2 = {
    background: 'lightblue',
    color: 'darkblue',
    fontSize: '15px',
    fontWeight: '400',
    margin: '50px',
    border: '1px solid darkblue'
}

function ScoreTable({scores}) {
    return (
        <div ><h2 style={style1}>History Scores:</h2>
            {/* <div > */}
                { scores.map(score => <div className="History">
                    <div>Game Number: {score.id}</div>
                    <div>Name: {score.name}</div>
                    <div>Date: {score.date}</div>
                </div>) }
            {/* </div> */}
        </div>
    )
}

export default ScoreTable
