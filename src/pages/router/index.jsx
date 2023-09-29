import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../home'
import AboutPage from '../about'
import PortfolioPage from '../portfolio'

const router = createBrowserRouter([
    {
        path: '/', element: <HomePage />
    },
    {
        path: '/about', element: <AboutPage />
    },
    {
        path: '/portfolio', element: <PortfolioPage />
    },
])

export default router