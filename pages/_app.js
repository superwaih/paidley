import DashboardProvider from '@/context/DashboardProvider'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return  (
    <>
    <DashboardProvider>
      <Component {...pageProps} />
    </DashboardProvider>
    </>
  )
  
}
