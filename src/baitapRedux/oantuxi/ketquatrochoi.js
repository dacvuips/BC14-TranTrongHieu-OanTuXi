import React, { Component } from 'react'
import { connect } from 'react-redux'
import "./buble.css"
class Ketquatrochoi extends Component {
    render() {
        return (
            <div>
                <div className="font" style={{fontSize:"50px"}}>{this.props.ketQua}</div>
                <div className="font text-success" style={{fontSize:"50px"}}>Số bàn thắng: <span className="font text-warning">{this.props.banThang}</span></div>
                <div className="font text-danger" style={{fontSize:"50px"}}>Số bàn chơi:<span className="font text-warning">{this.props.banchoi}</span></div>

                 

            </div>
        )
    }
}


const mapStateToProps = (state)=>{
    return {
    
        ketQua:state.userReducer.ketQua,
        banThang:state.userReducer.banThang,
        banchoi:state.userReducer.banchoi,
    
    
    
    };
    
    
    
    };
    
    export default connect(mapStateToProps)(Ketquatrochoi)
    