import React from 'react'

function ScoreTable({scores}) {
    return (
        <div>
            { scores.map(score => <div>
                <div>{score.id}</div>
                <div>{score.name}</div>
                <div>{score.date}</div>
            </div>) }
        </div>
    )
}

export default ScoreTable
