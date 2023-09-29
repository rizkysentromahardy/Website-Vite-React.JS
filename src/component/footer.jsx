import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header style={{display:'flex', justifyContent:'space-between',alignItems:'center', padding:120}} >
                <nav >
                    <div className='header'>
                        <ul style={{}}>
                            <li>
                                <Link to='/'> Home</Link>
                            </li>
                            <li >
                                <Link to='/about'> About</Link>
                            </li>
                            <li>
                                <Link to='/portfolio'>Portfolio</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header