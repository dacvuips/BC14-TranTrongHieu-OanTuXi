import React, { Component } from 'react'
import { connect } from 'react-redux'
import "./buble.css"
class Computer extends Component {
    render() {
        let keyframe=`@keyframes randomItem${Date.now()}  {
            0% {top: -50px;}
            25% {top: 100px;}
            50% {top: -50px;}
            75% {top: 100px;}
            100% {top: 0px;}
          }`
        return (
            <div className="canh">
                <style>
                {keyframe}

                </style>
                <div className="mess"style={{position:"relative"}}>

                <img style={{left:"5%",position:"absolute", animation:`randomItem${Date.now()} 0.5s`, width:"90px",transform:"rotate(90deg)"}} src={this.props.computer.hinhAnh} alt={this.props.computer.hinhAnh}></img>
                </div>
                <div className="speech-bubble"></div>
                <img style={{width:"170px"}} src="./img/imgoantuxi/playerComputer.png" alt="./img/imgoantuxi/playerComputer.png"></img>
            
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
    
        computer:state.userReducer.computer,
        
    };
    
    };
    
    export default connect(mapStateToProps)(Computer)
