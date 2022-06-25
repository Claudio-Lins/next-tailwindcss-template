import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center p-4">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <h1 className="flex flex-grow text-xl font-bold text-pink-700">TailwindCss</h1>
      
    </div>
  )
}

export default Home
