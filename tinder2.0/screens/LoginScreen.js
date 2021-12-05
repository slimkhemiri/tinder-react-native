import React from 'react'
import { View, Text } from 'react-native'
import useAuth from '../hooks/useAuth'

const LoginScreen = () => {
    const {user} = useAuth()
    return (
        <View>
            <Text>Login</Text>
        </View>
    )
}

export default LoginScreen
