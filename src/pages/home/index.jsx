import React from 'react'
import Header from '../../component/header'
import image from '../../images/React-icon.png'

const HomePage = () => {
    return (
        <>
            <Header />
            <section id='id' className=' bg-slate-800 py-20'  >
                <div className='container px-4 lg:px-20 '>
                    <div className='flex flex-wrap gap-20 lg:gap-0'>
                        <div className='w-full self-start lg:w-1/2 font-Quicksand'>
                            <h2 className='text-xl lg:text-2xl text-green-400 pb-2'>Hallo saya </h2>
                            <h1 className='text-4xl lg:text-6xl text-green-400 font-black pb-6 '>Rizky Sentro Mahardy</h1>
                            <p className='text-lg lg:text-xl  pb-4 text-slate-300'>Software Engineer Enthusiastic | UI UX Designer</p>
                            <p className='text-base pb-10 text-slate-300 '>React.Js , 
                            </p>
                        </div>
                        <div className='w-full self-center flex justify-center lg:w-1/2'>
                            <img className='w-auto max-h-80' src={image}></img>
                        </div>
                    </div>
                </div>
            </section>
            <section id='about' className='py-20' >
                <div className='container px-4 lg:px-20'>
                    <div className='flex flex-wrap'>
                        <div className='w-full font-Quicksand'>
                            <h1 className='text-2xl lg:text-4xl pb-8 flex justify-center font-bold' >About Me</h1>
                            <div className='flex justify-center pb-10'>
                                <p className='max-w-4xl text-center'>
                                 Saya lulusan sistem informasi, Universitas Trunojoyo Madura. Memiliki minat terhadap pengembangan produk digital.
                                 Selain itu, saya tertarik untuk terus mengembangkan kemampuan saya menjadi seorang <span className='font-bold'>UI/UX Designer</span> dan <span className='font-bold'>Software Engineer</span>.
                                 Selalu mencari peluang kerja yang memberikan peluang untuk berkembang menjadi karir profesional.
                                </p>
                            </div>
                            <div className='flex justify-center gap-8'>
                                <a href='' className='w-6 hover:text-green-400'>
                                    <svg className='fill-current' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                                </a>
                                <a href='' className='w-6 hover:text-green-400'>
                                    <svg className='fill-current' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Figma</title><path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"/></svg>
                                </a>
                                <a href='' className='w-6 hover:text-green-400'>
                                    <svg className='fill-current ' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage