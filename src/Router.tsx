import { Routes, Route } from 'react-router-dom'
import { Homepage } from './pages/Homepage'
import { Time } from './pages/Time'
import { Pedido } from './pages/Pedido'
import { Menu } from './pages/Menu';

export function Router() {
    return (
        <Routes >

            <Route path='/' element={<Homepage />} />
            <Route path="/menu" element={<Menu />} />
            <Route path='/pedido' element={<Pedido />} />
            <Route path='/tempodopedido' element={<Time />} />

        </Routes>
    )
}