
import React from 'react'
import "typeface-roboto";
import './../assets/css/main.css'

export default function MyApp({ Component, pageProps }) {
    return(
        <>
            <Component {...pageProps} />
        </>
    ) 
        
}