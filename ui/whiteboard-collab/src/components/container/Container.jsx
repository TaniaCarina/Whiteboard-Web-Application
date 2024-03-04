import React from 'react';
import Board from '../board/Board';

import './style.css';

class Container extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            color: "#000000",
            color2: "#FFFFFF",
            size: "5"
        }
    }

    changeColor(params) {
        this.setState({
            color: params.target.value
        })
    }

    selectWhiteColor() {
        this.setState({
          color: '#FFFFFF',
        });
      }

    changeSize(params) {
        this.setState({
            size: params.target.value
        })
    }

    render() {

        return (
            <div className="container">
                <div class="tools-section">
                    <div className="color-picker-container">
                        Select Brush Color : &nbsp; 
                        <input 
                            type="color" 
                            value={this.state.color} 
                            onChange={this.changeColor.bind(this)}/>
                    </div>

                    <button
                        className="eraser-container"
                        onClick={this.selectWhiteColor.bind(this)}
                    >
                        Eraser
                    </button>

                    <div className="brushsize-container">
                        Select Brush Size : &nbsp; 
                        <select value={this.state.size} onChange={this.changeSize.bind(this)}>
                            <option> 5 </option>
                            <option> 10 </option>
                            <option> 15 </option>
                            <option> 20 </option>
                            <option> 25 </option>
                            <option> 30 </option>
                            <option> 35 </option>
                            <option> 45 </option>
                            <option> 50 </option>
                            <option> 55 </option>
                            <option> 60 </option>
                            <option> 65 </option>
                            <option> 70 </option>
                        </select>
                    </div>

                    

                </div>

                <div class="board-container">
                    <Board color={this.state.color} size={this.state.size}></Board>
                </div>
            </div>
        )
    }
}

export default Container