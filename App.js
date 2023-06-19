import React,{useState,UseEffect, useEffect} from 'react';
import {View,Text,Button} from 'react-native';

const satva =()=>{

  const [sdata,setsdata]=useState(null);
  const pokename='mew'
  useEffect(() =>{
    fetchsdata();
  },[]
)
const fetchsdata=async ()=>{
  const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`);
  const pokedata=await response.json();
  setsdata(pokedata);

};

return (
 <View >
  <View style={{marginTop:400}}>
  <Button title='Click on me' onPress={fetchsdata}/>
  </View>

  {
    sdata &&(
      <View style={{marginTop:40}}>
        <Text>Name:{sdata.name}</Text>
        <Text>Name:{sdata.weight}</Text>
      </View>
    )
  }
 </View>

);
};
export default satva;