import Image from 'next/image'
import { Inter } from 'next/font/google'
import Chat from '../components/Chat'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const messages = [
    { sender: 'John', time: '10:00 AM', content: 'Hello there!' },
    { sender: 'Jane', time: '10:01 AM', content: 'Hi John!' },
  ];

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Chat messages={messages} />
    </main>
  )
}