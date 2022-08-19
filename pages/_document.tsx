import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script'

export default class CustomDocument extends Document {
    render() {
        return (
            <Html>
                <Head>

                    {/* cdn fontawesome */}
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" />

                    {/* cdn css for animation */}
                    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
                </Head>

                <body>
                    <Main />
                    <NextScript />

                    {/* cdn javascript for animation */}
                    <Script id="AOSLIBRARY" src="https://unpkg.com/aos@next/dist/aos.js" strategy="lazyOnload" async defer />
                    <Script id="AOS SCRIPT">AOS.init();</Script>
                </body>
            </Html>
        )
    }
}