import React, { FC } from 'react'
import { Toaster, ToastBar } from 'react-hot-toast'

const CustomToaster: FC = () => (
    <Toaster containerStyle={{}}>
        {t => (
            <ToastBar toast={t} style={{}}>
                {({ icon, message }) => (
                    <>
                        {icon}
                        {message}
                    </>
                )}
            </ToastBar>
        )}
    </Toaster>
)

export default CustomToaster
