import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AppWrapper from './components/AppWrapper'
import Landing from './routes/Landing'
import { toast } from 'react-hot-toast'

const defaultContext = {
    toast,
    foo: 'bar',
}

export type AppContextSchema = typeof defaultContext

export const AppContext = React.createContext<AppContextSchema>(defaultContext)

function App() {
    return (
        <AppWrapper contextValue={{ ...defaultContext }}>
            <Routes>
                <Route path="/" element={<Landing />} />
            </Routes>
        </AppWrapper>
    )
}

export default App
