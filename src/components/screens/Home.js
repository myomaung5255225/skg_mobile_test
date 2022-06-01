import { StyleSheet, Text, View,Button,Alert } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, updateName } from '../../store/reducers/main'
import { useNavigation } from '@react-navigation/native'

const Home = ({navigation}) => {
     const {appNm} = useSelector((state)=>state.main)
      const naviagate  = useNavigation()
     const dispatch = useDispatch()

      const updateData = ()=>{
        dispatch(updateName("updatedApp"))
      }
     
  return (
    <View>
      <Text style={{fontSize:40}}>{appNm}</Text>
         
        <Button  title='Action' onPress={()=>naviagate.navigate("contact_screen")} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})