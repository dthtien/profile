import Head from 'next/head';
import React, { FC } from 'react'
import Nav from './Nav'

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <Head>
      <title>Dau The Tien</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,900&display=swap" rel="stylesheet" />
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
