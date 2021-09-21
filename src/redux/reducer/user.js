// import computer from "../../baitapRedux/oantuxi/computer"

const init = {
player:[
    { ma:"bua",
    hinhAnh:"./img/imgoantuxi/bua.png",
    datCuoc:false,
    },
    { ma:"keo",
    hinhAnh:"./img/imgoantuxi/keo.png",
    datCuoc:false,
    },
    { ma:"bao",
    hinhAnh:"./img/imgoantuxi/bao.png",
    datCuoc:true,
    },
],
ketQua:"I'm Iron Man !, Ai Love Du !!!! ",
banThang:0,
banchoi:0,
computer:
    { ma:"keo",
    hinhAnh:"./img/imgoantuxi/keo.png",
    }
    


}

const userReducer = (state=init,action)=>{

    switch (action.type) {
       case 'CHON_THE':{
        let playerupdate=[...state.player]
        playerupdate.map((value,index)=>{
            if(action.macuoc===value.ma){
            
              return  value.datCuoc=true
            }
        return {...value.datCuoc=false};
        })

state.player = playerupdate;
        return {...state}
       }

       case 'RAN_DOM':{
        let soNgauNhien=Math.floor(Math.random()*3)
        let quanDatCuoc = state.player[soNgauNhien]
        state.computer=quanDatCuoc;

        return {...state};
    
       }
       case 'END_GAME':{
        let player= state.player.find(item =>item.datCuoc === true)
        let computer = {...state.computer}
        state.banchoi +=1;

            switch (player.ma) {
                case "keo":
                    if(computer.ma==="keo"){
                        state.ketQua="Hòa"
                    }else if(computer.ma==="bao"){
                        state.banThang +=1;
                        state.ketQua="I'm Iron Man !, Ai Love Du !!!!"
                    }else{
                        state.ketQua="Thua rồi huynh ui!"

                    }


                    break;
                    case "bua":
                        if(computer.ma==="bua"){
                            state.ketQua="Hòa"
                        }else if(computer.ma==="keo"){
                            state.banThang +=1;
                            state.ketQua="I'm Iron Man !, Ai Love Du !!!!"
                        }else{
                            state.ketQua="Thua rồi huynh ui!"
    
                        }
    
    
                        break;
                        case "bao":
                            if(computer.ma==="bao"){
                                state.ketQua="Hòa"
                            }else if(computer.ma==="bua"){
                                state.banThang +=1;
                                state.ketQua="I'm Iron Man !, Ai Love Du !!!!"
                            }else{
                                state.ketQua="Thua rồi huynh ui!"
        
                            }
        
        
                            break;
            
                default:
                    break;
            }



        

        return {...state};
    
       }

        default: return {...state}
    }
}

export default userReducer;