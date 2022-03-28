import React,{useState} from 'react';
import { StyleSheet, Text, View, Button,TextInput } from 'react-native';
import { normalize } from 'react-native-elements';



export default function App(){

const[display, displayset]=useState(0);
const[memoria, memoriaSet]=useState(0);
const[operacao, operacaoSet]=useState("");

function tecla(valor){
    if(valor=="c"){
        displayset(0)
        memoriaSet(0)
        operacaoSet("")

    }else if(valor=="="){
      if(operacao=="+"){
        displayset(memoria+display)
      }else if(operacao=="-"){
        displayset(memoria-display)
      }else if(operacao=="x"){
        displayset(memoria*display)
      }else{
        displayset(memoria/display)
      }
    }else if(valor=="+"){
      memoriaSet(display)
      operacaoSet(valor)
      displayset(0)

    }else if(valor=="-"){
      memoriaSet(display)
      operacaoSet(valor)
      displayset(0)

    }else if(valor=="x"){
      memoriaSet(display)
      operacaoSet(valor)
      displayset(0)

    }else if(valor=="/"){
      memoriaSet(display)
      operacaoSet(valor)
      displayset(0)

    }else{
      displayset(display*10+valor)

    }

}

return(
    <View style={{
       

        width:360,
        height:360,
        borderWidth:2,
         padding:5,
        borderRadius:10,
        margin:50,
        backgroundColor:"#483D8B",
        borderColor:'black',
        flexDirection:'column',
        alignItems:"center",
        justifyContent:"center",
       
     
    
    }}>
      <Text>{memoria}{operacao}</Text>
      <Text>{display}</Text>
   <Text style={{width:"6em", textAlign:"center",  backgroundColor:"black", color:"white"}}>{display}</Text>

  <View style={{ flexDirection:"row", margin:"1em" , width:"50%",  justifyContent:"space-between"}}>
    <Button color="black" title="1"  onPress={()=>tecla(1)}></Button>
    <Button color="black" title="2"  onPress={()=>tecla(2)}></Button>
    <Button color="black" title="3"  onPress={()=>tecla(3)}></Button>
    <Button color="black" title="+"  onPress={()=>tecla("+")}></Button>
    
  </View>

  <View style={{ flexDirection:"row", margin:"1em" , width:"50%", justifyContent:"space-between"}}>
    <Button color="black" title="4"  onPress={()=>tecla(4)}></Button>
    <Button color="black" title="5"  onPress={()=>tecla(5)}></Button>
    <Button color="black" title="6"  onPress={()=>tecla(6)}></Button>
    <Button color="black" title="-"  onPress={()=>tecla("-")}></Button>
    
  </View>
  <View style={{ flexDirection:"row", margin:"1em" ,  width:"50%", justifyContent:"space-between"}}>
    <Button color="black" title="7"  onPress={()=>tecla(7)}></Button>
    <Button color="black" title="8"  onPress={()=>tecla(8)}></Button>
    <Button color="black" title="9"  onPress={()=>tecla(9)}></Button>
    <Button color="black" title="X"  onPress={()=>tecla("x")}></Button>
    
  </View>

  <View style={{ flexDirection:"row", margin:"1em" ,  width:"50%", justifyContent:"space-between"}}>
    <Button color="black" title="c"  onPress={()=>tecla("c")}></Button>
    <Button color="black" title="0"  onPress={()=>tecla(0)}></Button>
    <Button color="black" title="="  onPress={()=>tecla("=")}></Button>
    <Button color="black" title="/"  onPress={()=>tecla("/")}></Button>
    
  </View>
  </View>


);

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F4F4f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextInput: {
    textAlign: 'center',
    backgroundColor: '#F4A460',
      
  },


});