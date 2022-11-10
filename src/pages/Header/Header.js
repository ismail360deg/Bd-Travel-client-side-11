import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 z-20'>
            <div className='relative flex items-center justify-between'>
                <Link
                    to='/'
                    aria-label='BD-Travel'
                    className='inline-flex items-center'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>


                    <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                        BD-Travel
                    </span>
                </Link>
                <ul className='flex items-center hidden space-x-8 lg:flex'>
                    <li>
                        <Link
                            to='/'
                            aria-label='services'
                            className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/servicesDetails'
                            aria-label='services'
                            className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/blog'
                            aria-label='blog'
                            className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                            Blog
                        </Link>
                    </li>


                    <li>
                        <Link href='#' className='mr-5 hover:text-gray-900'>
                            {
                                user?.uid ?

                                    <>

                                        <Link
                                            to='/review'
                                            aria-label='review'
                                            className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                        >
                                            My Review
                                        </Link>

                                        <Link
                                            to='/addService'
                                            aria-label='review'
                                            className='ml-4 font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                        >
                                            Add Service
                                        </Link>

                                        <Link to='/'>

                                            <button onClick={handleLogOut} className='inline-flex items-center bg-gray-300 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0'>
                                                Logout
                                            </button></Link>


                                        {/* <span>{user?.displayName}</span> */}


                                    </>
                                    :
                                    <>




                                        <Link to='/login' className='mr-5 font-semibold hover:text-gray-900'>Login</Link>

                                    </>
                            }
                        </Link>
                    </li>




                </ul>
                <div className='lg:hidden'>
                    <button
                        aria-label='Open Menu'
                        title='Open Menu'
                        className='p-2  -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                            <path
                                fill='currentColor'
                                d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                            />
                            <path
                                fill='currentColor'
                                d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                            />
                            <path
                                fill='currentColor'
                                d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                            />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div className='absolute z-40 top-0 left-0 w-full'>


                            <div className='p-5  bg-white border rounded shadow-sm'>
                                <div className='flex items-center justify-between mb-4'>
                                    <div>
                                        <Link

                                            aria-label='Company'
                                            title='Company'
                                            className='inline-flex items-center'
                                        >

                                            <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>

                                                <button
                                                    onClick={() => setIsMenuOpen(false)}
                                                >X</button>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                <nav>
                                    <ul className='space-y-4'>
                                        <li>
                                            <Link
                                                to='/'
                                                aria-label='Services'
                                                title='Home'
                                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                            >
                                                Home
                                            </Link>
                                        </li>

                                        <li>
                                            <Link
                                                to='/servicesDetails'
                                                aria-label='Services'
                                                title='Home'
                                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                            >
                                                Services
                                            </Link>
                                        </li>

                                        <li>
                                            <Link
                                                to='/blog'
                                                aria-label='services'
                                                title='Statistics'
                                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                            >
                                                Blog
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='#' className='mr-5 hover:text-gray-900'>
                                                {
                                                    user?.uid ?

                                                        <>

                                                            <Link
                                                                to='/review'
                                                                aria-label='review'
                                                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                                            >
                                                                My Review
                                                            </Link>

                                                            <Link
                                                                to='/addService'
                                                                aria-label='review'
                                                                className='ml-4 font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                                            >
                                                                Add Service
                                                            </Link>

                                                            <Link to='/'>

                                                                <button onClick={handleLogOut} className='inline-flex items-center bg-gray-300 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0'>
                                                                    Logout
                                                                </button></Link>


                                                            {/* <span>{user?.displayName}</span> */}


                                                        </>
                                                        :
                                                        <>




                                                            <Link to='/login' className='mr-5 font-semibold hover:text-gray-900'>Login</Link>

                                                        </>
                                                }
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header