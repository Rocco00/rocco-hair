import React from "react";
import {View,Text,Image,TouchableOpacity,TextInput,StyleSheet} from "react-native";
class Login extends React.Component {
    render (){
        return (
            <View style = {styles.centrale}>
                <Image source = {require ("../logo.png")} style = {styles.principale} resizeMode = "contain" />
                <TouchableOpacity>
                 <Text style = {styles.registrati}>
                    REGISTRATI
                </Text>
                </TouchableOpacity>
                <TextInput textContentType = "emailAddress" placeholder = "EMAIL" style = {styles.rettangolo}/>
                <TextInput textContentType = "password" placeholder = "PASSWORD" style = {styles.rettangolo}/>
                <TouchableOpacity>
                <Text style = {styles.scrittura}>
                    Hai dimenticato la password ?
                </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                        this.props.navigation.navigate("Principale") }}>
                <Text style = {styles.login}>
                    LOGIN
                </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    principale: {
        width:"60%",
        height:"40%",
    },
    centrale: {
        justifyContent:"center",
        alignItems:"center",
    },
    registrati: {
        fontSize:25,
        textAlign:"center",
        marginBottom:5,
    },
    rettangolo: {
        borderWidth:1,
        borderColor:"#ff0000",
        fontSize:25,
        textAlign:"center",
        marginTop:15,
        marginBottom:15,
        padding:10,
    },
    scrittura: {
        fontSize:20,
        textAlign:"center",
    },
    login:{
        fontSize:25,
        textAlign:"center",
        marginTop:15,
        marginBottom:15,
    },
})
export default Login