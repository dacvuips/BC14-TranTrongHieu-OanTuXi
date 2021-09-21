import React, { Component } from 'react'
import "./buble.css"
import { connect } from 'react-redux'
class Player extends Component {
    render() {
        const {player}=this.props;
        

        return (
            
            <div className="canh">
                <div className="mess">

                {
                  player.map((val,ind) => {
                    if(val.datCuoc){
                       return (<img key={ind} style={{width:"90px",transform:"rotate(90deg)"}} src={val.hinhAnh} alt={val.hinhAnh}></img>)
                    }else{}
                    
                })    
                }
                </div>
                <div className="speech-bubble"></div>
                <img style={{width:"170px"}} src="./img/imgoantuxi/player.png" alt="./img/imgoantuxi/player.png"></img>
            <div className="chon">
            {player.map((value,index)=>{

                let border={};
                if(value.datCuoc){
                    border = {border:'3px solid rgb(255, 230, 4)'}


                }
               return <button onClick={()=>{this.props.item(value.ma)}} style={border}className="btnitem" key={index}>
                <img className="butto" style={{width:"50px",height:"50px"}} src={value.hinhAnh} alt={value.hinhAnh}></img>
                </button>

            })
        }
        

            </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
return {
    player:state.userReducer.player
};
};
const mapDispatchToProp = (disPatch)=>{

    return{
       item:(macuoc)=>{
        disPatch({

            type:'CHON_THE',
            macuoc,

        })

       }


    }

}


export default connect(mapStateToProps,mapDispatchToProp)(Player)
