import React ,{useState} from 'react'
import {
    Text , TouchableOpacity , StyleSheet , TextInput
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage'

const Search = ({navigation})=>{

    const [city , setCity] = useState("Mumbai");

    const btnClick= async ()=> {
        await AsyncStorage.setItem("newcity",city);
        navigation.navigate("Home",{city:city})
    }

    return(
        <>
        <TextInput
            style={styles.input}
            value={city}
            onChangeText={(text)=>setCity(text)}
        />
        <TouchableOpacity style={styles.btn}
            onPress={btnClick}
        >
            <Icon name="save" size={18} color="#fff" />
            <Text style={styles.btnText} >PRESS ME</Text>
        </TouchableOpacity>
        </>
    )
}


export default Search;

const styles = StyleSheet.create({
    btn:{
        display:"flex",
        width:"98%",
        flexDirection:"row",
        backgroundColor:"purple",
        paddingVertical:6,
        alignSelf:"center",
        borderRadius:8,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20
    },
    btnText:{
        color:"#fff",
        marginLeft:8,
        fontWeight:"bold"
    },
    input:{
        width:"100%",
        borderBottomWidth:2,
        borderBottomColor:"#707070",
        fontSize:20,
        paddingBottom:4
    }
})