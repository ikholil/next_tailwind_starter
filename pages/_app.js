import '../styles/globals.css'
import '../styles/popup.scss'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}