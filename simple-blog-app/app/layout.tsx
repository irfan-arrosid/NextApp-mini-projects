import './globals.css'
import Navbar from './components/navbar'
import ProfilePic from './components/profilePic'

export const metadata = {
  title: "Irfan's Blog",
  description: 'Created by Irfan Arrosid',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-slate-800'>
        <Navbar />
        <ProfilePic />
        {children}
      </body>
    </html>
  )
}
