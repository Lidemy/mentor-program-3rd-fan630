import React, {Component} from 'react'
import './style.css'

const boardSize = 19;

class Square extends React.Component{
    render(){
        return (
            <button className="square" onClick={this.props.onClick}>
                <div className={`circle ${this.props.value ? this.props.value : "" }`}></div>
            </button>
        )
    }
}

class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {

        let n = 0;
        let board = []

        for(let i=0; i<boardSize; i +=1 ){
            let row = []
            for(let j=0; j<boardSize; j += 1, n += 1){
                row.push(this.renderSquare(n))
            }
            board.push(<div className="borad-row">{row}</div>)
        }

       return(
           <div>
               <div className="board-wrapper">{board}</div>
            </div>
       )  
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [
                {
                    squares: Array(boardSize*boardSize).fill(null)
                }
            ],
            stepNumber: 0,
            xIsNext: true, 
            winner: false
        };
    }

    handleClick(i) {
        const{stepNumber, xIsNext, winner} = this.state
        const history = this.state.history.slice(0, stepNumber + 1);
        const current = history[history.length - 1];
        const currentSquares = current.squares.slice();


        if (winner || currentSquares[i]) {
            return;
        }
        currentSquares[i] = this.state.xIsNext ? "black" : "white";
        this.setState({
            history: history.concat([
                {
                    squares: currentSquares
                }
            ]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
            winner: this.checkWinner(currentSquares)
        });
    }

    checkWinner(currentSquares){
        const winPatterns = []
        for(let i = 0; i< boardSize*boardSize; i += 1){
            winPatterns.push([i, i + 1, i + 2, i + 3, i + 4])
            winPatterns.push([i, i + 19, i + 38, i + 57, i + 76])
            winPatterns.push([i, i + 20, i + 40, i + 60, i + 80])
            winPatterns.push([i, i + 18, i + 36, i + 54, i + 72])
        }
        for (let i = 0; i < winPatterns.length; i += 1) {
            const [a, b, c, d, e] = winPatterns[i];
            if (currentSquares[a] && 
                currentSquares[a] === currentSquares[b] && 
                currentSquares[a] === currentSquares[c] &&
                currentSquares[a] === currentSquares[d] &&
                currentSquares[a] === currentSquares[e] 
                ) {
                return currentSquares[a];
            }
        } return null
    }


    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0, 
            winner: false
        });
    }

    render() {
        const{history, stepNumber, xIsNext} = this.state
        const current = history[stepNumber]
        const winner = this.checkWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = "Winner: " + winner;
        } else {
            status = "Next player: " + (this.state.xIsNext ? "Black" : "White");
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={i => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div className="game-info__title">GOMOKU</div>
                    <div className={`player ${winner}? 'success': ''`}>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}


export default Game