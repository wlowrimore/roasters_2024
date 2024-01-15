import { Roboto } from 'next/font/google'
import './globals.css'
import MobileMenu from './components/MobileMenu'

const roboto = Roboto({ subsets: ['latin'], weight: ['300', '400', '500', '700', '900'] })

export const metadata = {
  title: 'International Coffee Roasters',
  description: 'The best source for finding the best coffee beans.  Internationally harvested, roasted, and shipped.',
  author: 'William Lowrimore, fakenamedev',
  keywords: ['coffee', 'roast', 'cacao', 'java', 'beans', 'roasted', 'arabica', 'robusta', 'excelsa', 'liberica',]
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
