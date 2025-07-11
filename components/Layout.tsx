import Head from 'next/head';
import React, { FC } from 'react'
import Nav from './Nav'

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <Head>
      <title>Dau The Tien</title>
    </Head>
    <div className="relative bg-white overflow-hidden font-be-vietnam-pro">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          <Nav />
          { children }
        </div>
      </div>
    </div>
  </>
)

export default Layout;
