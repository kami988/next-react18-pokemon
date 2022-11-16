import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

type LayoutProps = Required<{
  children: React.ReactNode
}>

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang='ja'>
      <head />
      <body>
        <div className='flex min-h-screen flex-col items-center justify-center text-sm text-gray-600'>
          <header>
            <nav className='w-screen bg-gray-800'>
              <div className='flex h-14 items-center pl-8'>
                <div className='flex space-x-2'>
                  <Link href='/'>
                    <span className='rounded px-3 py-2 text-gray-300 hover:bg-gray-700'>Home</span>
                  </Link>
                  <Link href='/pokemon'>
                    <span className='rounded px-3 py-2 text-gray-300 hover:bg-gray-700'>
                      Pokemon
                    </span>
                  </Link>
                </div>
              </div>
            </nav>
          </header>
          <main className='flex w-screen flex-1 flex-col items-center justify-center'>
            {children}
          </main>
          <footer className='flex h-12 w-full items-center justify-center border-t-2'>
            <a
              className='flex items-center'
              href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
              target='_blank'
              rel='noopener noreferrer'
            >
              Powered by {/* <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" /> */}
              <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
            </a>
          </footer>
        </div>
      </body>
    </html>
  )
}
