import React, {useLayoutEffect} from 'react'
import {useNavigation} from '@react-navigation/core'
import { View, Text, Button, SafeAreaView, TouchableOpacity } from 'react-native'
import{ useAuth,user }from '../hooks/useAuth'
const HomeScreen = () => {
    const navigation = useNavigation()
    const {logout} = useAuth()
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[])
    return (
        <SafeAreaView>
            <View>
                <TouchableOpacity>
                    <Image source={{uri:user.photoUrl}} />
                </TouchableOpacity>
            </View>
          
            <Button title='Go to chat' onPress={()=>{navigation.navigate("Chat")}} />
            <Button title='logout' onPress={logout} />
        </SafeAreaView>
    )
}

export default HomeScreen
