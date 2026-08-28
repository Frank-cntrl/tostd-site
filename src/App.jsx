import { Outlet, ScrollRestoration } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-ink">
      <Nav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  )
}
