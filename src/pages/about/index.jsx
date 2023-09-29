import React from 'react'
import Header from '../../component/header'


const AboutPage = () => {
    return (
        <>
            <Header />
            <section id='id' className=' bg-slate-800 py-36'  >
                <div className='container px-4 lg:px-20 '>
                    <div className='flex flex-wrap gap-8 lg:gap-0'>
                        <div className='w-full self-start lg:w-1/2 font-Quicksand'>
                            <h2 className='text-2xl text-green-400 pb-2'>Hallo perkenalkan, saya </h2>
                            <h1 className='text-6xl text-green-400 font-black pb-6'>Rizky Sentro Mahardy</h1>
                            <p className='text-xl pb-4 text-slate-300'>Front End Developer | UI UX Designer</p>
                            <p className='text-base pb-10 text-slate-300'>Saya suka mempelajari hal baru banyak hal yang saya pelajari ini hanyalah contoh saja
                                jadi jangan risau
                            </p>
                            <button className=' font-semibold py-3 px-6 bg-green-400 rounded-full text-slate-100 hover:bg-slate-400 '> Contact us</button>
                        </div>
                        <div className='w-full self-center flex justify-center lg:w-1/2'>
                            <img className='w-auto max-h-80' src={""}></img>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutPage