import Home from '../components/common/Home'
import Dashboard from '../components/common/Dashboard'
import Create from '../components/common/Create'
import Edit from '../components/common/Edit'
import { Navigate } from 'react-router-dom'
const AppRoutes = [
    {
        path:'/',
        exact:true,
        element:<Home/>
    },
    {
        path:'/dashboard',
        exact:true,
        element:<Dashboard/>
    },
    {
        path:'/create',
        exact:true,
        element:<Create/>
    },
    {
        path:'/edit/:id',
        exact:true,
        element:<Edit/>
    },
    {
        path:'*',
        exact:false,
        element:<Navigate to="/"/>
    }
]

export default AppRoutes