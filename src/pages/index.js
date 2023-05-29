import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [dropdown, setDropdown] = useState(false)
  return (
    <div className="bg-gradient-to-b from-gray-600 to-gray-900 min-h-screen text-white">
      <nav className='py-10'>
        <div className="container mx-auto">
          <div className="flex items-center">
            <div className="w-4/12 flex items-center">
              <div className='w-10 h-10 bg-gray-500 rounded flex items-center justify-center mr-4 shadow-2xl'>E</div>
              Epictetus
            </div>
            <div className="w-8/12">
              <ul className='flex gap-6'>
                <li><a href='#' className='hover:underline'>UI Design</a></li>
                <li><a href='#' className='hover:underline'>Front-End</a></li>
                <li><a href='#' className='hover:underline'>Back-End</a></li>
                <li className='relative'>
                  <a href='#' className='hover:underline cursor-pointer flex items-center gap-2' onClick={() => setDropdown(!dropdown)}>
                    Lainnya
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 6L8 10L12 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                  </a>
                  {dropdown &&
                    <ul className='absolute w-[200px] mt-3'>
                      <li><a href='#' className='flex py-3 px-6 bg-gray-800 border-b border-white/5 hover:bg-gray-700/60'>Internet</a></li>
                      <li><a href='#' className='flex py-3 px-6 bg-gray-800 border-b border-white/5 hover:bg-gray-700/60'>Books</a></li>
                      <li><a href='#' className='flex py-3 px-6 bg-gray-800 hover:bg-gray-700/60'>Open Source</a></li>
                    </ul>
                  }
                </li>
              </ul>
            </div>
            <div className="w-2/12">
              <input className='bg-gray-700 py-1 px-6 w-full rounded-full bg-search pl-10' placeholder='Search' />
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
