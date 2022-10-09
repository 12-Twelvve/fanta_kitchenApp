import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useReducer } from 'react'
import { Card, Button } from 'react-native-elements'

 
const KotCard = ({kot}) => {
  return (
    <View style={styles.container}>
            <Card width='100%' >
            <Text style={styles.kotid}>
                {kot?.kotId}
            </Text>
            <View style={styles.kotcolumn}>
                <Text >item</Text>
                <Text >quantity</Text>
            </View>
            <View style={{marginBottom:5, marginHorizontal:"5%", height: 1, backgroundColor: 'lightgray'}} />
            {/* map through each items */}
            {
                kot?.items?.map(k=>(<View style={styles.kots}>
                    <Text style={{ fontSize: 15, color: "#F27405",fontWeight: "bold" }}>{k.title}</Text>        
                    <Text> {k.quantity} </Text>
                </View>))
            }            
            </Card>
        </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flexWrap:'wrap',
        margin:10,
        width:300,
    },
    kotid: {
        color: "#F27405",
        alignSelf: "center",
        marginBottom: 10,
    },
    kotcolumn:{
        flexDirection:'row',
        justifyContent:"space-between",
    },
    kots:{
        flexDirection:'row',
        justifyContent:'space-between'
    }

})
export default KotCard

