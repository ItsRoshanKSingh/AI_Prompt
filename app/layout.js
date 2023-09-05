import Nav from '@components/nav'
import '@styles/globals.css'

export const metadata = {
  title: 'AI Prompt',
  description: 'AI Prompt',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body >
        <div className='main'>
          <div className='gradient'></div>
        </div>
        <main className='app'>
          <Nav />
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout
