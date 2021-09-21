import React, { Component } from 'react'
import Computer from './computer'
import Ketquatrochoi from './ketquatrochoi'
import Player from './player'
import "./style.css"
import { connect } from 'react-redux'

class OanTuXi extends Component {
    render() {

        
        return (
         
            <div className="oanTuXi">
             
                <div className="row text-center mt-5">
                <div className="col-4">
                <Player/>
                </div>
                <div className="col-4">
                <Ketquatrochoi/>
                <button onClick={()=>{this.props.playgame()}}className="btn btn-success mt-3">Play Game</button>
                </div>
                <div className="col-4">
                    <Computer/>
                </div>

                </div>
                
            </div>
        )
    }
}

const mapDispatchToProp=(dispatch)=>{

    return{
        playgame:(result)=>{
            let count=0;

            let randomComputer = setInterval(()=>{
                dispatch({
                    type:"RAN_DOM",
                    result,
    
                })
                count ++;
                if(count>10){
                clearInterval(randomComputer)
                    dispatch({
                        type:"END_GAME"
                    })
                }
            },100)
            
        }
    }
}

export default connect(null,mapDispatchToProp)(OanTuXi)