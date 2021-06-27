import React , {useState , useEffect} from 'react'
import {
  Text , SafeAreaView , StatusBar , Image , View , StyleSheet , ScrollView
} from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'

import Header from './Header'

let apikey = 'b40de8d5b2377db9bfe560154f5c1292' ;

const Home = (props)=>{
  
  const [info,setInfo] = useState({
    name:`loading`,
    temp:"loading",
    humidity:"loading",
    desc:"loading",
    icon:"loading"
  })


  const getWeather= async ()=>{
    try{
      
      let myCity =await  AsyncStorage.getItem('newcity');
      console.log(myCity)
      if(!myCity){
        const {city} = props.route.params ;
        myCity = city ;
      }
        
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${myCity}&appid=${apikey}`)
      .then(data => data.json())
      .then(result => {
        console.log(result)
          setInfo({
              name: result.name,
              temp: (result.main.temp - 273.15).toFixed(2),
              humidity: result.main.humidity,
              desc: result.weather[0].description,
              icon: result.weather[0].icon 
            })

          })
    } catch(error) {
        console.log(error)
    }
  }



useEffect(()=>{
  getWeather()
},[])

useFocusEffect(()=>{
  getWeather();
})
  
  
    
  return(
      < >
      <StatusBar backgroundColor="#60778f" barStyle="dark-content" />
        
      {
          info.icon === "loading"?(
              <Text>Loading...</Text>
          ):(
            <>
              <Header />
              <View style={{backgroundColor:"#d0d0d0",height:600}} >
                  <View>
                    <Text style={styles.head} >{info.name}
                    
                    </Text>
                  </View>
                  <Image 
                    style={{
                        width:120,
                        height:120,
                    }}
                    source={{uri:`https://openweathermap.org/img/w/${info.icon}.png`}}
                    />
                    <View style={styles.card}>
                      <Text style={styles.cardItem} >Temperature :  {info.temp}</Text>
                    </View >
                    <View style={styles.card}>
                      <Text style={styles.cardItem}>Humidity :  {info.humidity}</Text>
                    </View>
                    <View style={styles.card}>
                      <Text style={styles.cardItem}>Description :  {info.desc}</Text>
                    </View>
              </View>
              </>
          )
      }
    </>
  )
}

export default Home;


const styles = StyleSheet.create({
    card:{
        height:50,
        backgroundColor:"#fff",
        justifyContent:"center",
        marginTop:10
    },
    cardItem:{
        fontSize:22,
        fontWeight:"bold",
        marginLeft:10,
        color:"#00aaff"
    },
    head:{
      fontSize:22,
      fontWeight:"bold",
      alignSelf:"center",
      color:"#00aaff",
      textTransform:"uppercase",
      marginTop:15
    }
})