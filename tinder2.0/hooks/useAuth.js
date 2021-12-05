import React, { createContext } from 'react'
import { View, Text } from 'react-native'
const AuthContext = createContext({

})
export const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider value={null}>
            {children}
        </AuthContext.Provider>
    )
}

