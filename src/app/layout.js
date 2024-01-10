import { Roboto } from 'next/font/google'
import './globals.css'
import MobileMenu from './components/MobileMenu'

const roboto = Roboto({ subsets: ['latin'], weight: ['300', '400', '500', '700', '900'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} 2xl:mx-52`}>
        <MobileMenu />
        {children}
      </body>
    </html>
  )
}
