import { Routes, Route } from 'react-router-dom'
import { Homepage } from './pages/Homepage'
import { Menu } from './pages/Menu'

export function Router() {
    return (
        <Routes >
            <Route path='/' element={<Homepage />} />
            <Route path='/menu' element={<Menu />} />
        </Routes>
    )
}