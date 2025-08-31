import '../globals.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { getDictionary } from '../../dictionaries'

export const metadata = {
  title: 'MAWA — The First Living AI Bot for Communities',
  description: 'MAWA merges a next-gen AI community manager with a robust token ecosystem on Solana. More than a bot, a true AI member.'
}

export default async function RootLayout({ children, params }) {
  const dict = await getDictionary(params.lang)
  return (
    <html lang={params.lang}>
      <body>
        <Header lang={params.lang} nav={dict.nav} buy_url={dict.buy_url} />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer social={dict.social}/>
      </body>
    </html>
  )
}
