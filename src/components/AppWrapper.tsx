import React, { FC, ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom'
import { AppContext, AppContextSchema } from '../App'
import Theme from '../Theme'

interface Props {
    children?: ReactNode
    contextValue: AppContextSchema
}

const AppWrapper: FC<Props> = ({ children, contextValue }) => (
    <BrowserRouter>
        <Toaster />
        <AppContext.Provider value={contextValue}>
            <Theme>{children}</Theme>
        </AppContext.Provider>
    </BrowserRouter>
)

export default AppWrapper
