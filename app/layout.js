import { Header } from './components/Header'
import { Poppins } from 'next/font/google'
import variables from './styles/variables.module.scss'

import './globals.css'

const poppins = Poppins({ subsets: ['latin'],  weight: ['400', '500', '600', '700'], })

export const metadata = {
  title: 'hoo.be coding exercise',
  description: 'hoo.be coding exercise\'s hoo.be page. check out their latest content, links, social profiles & more.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={poppins.className} style={{ backgroundColor: variables.grey }}>
        <Header />
        {children}
      </body>
    </html>
  )
}
