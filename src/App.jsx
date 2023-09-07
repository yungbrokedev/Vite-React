
import {Auth, Dashboard} from "./pages";
import {Routes, Route, useLocation, Outlet, Navigate} from 'react-router-dom';
import {useSelector} from "react-redux";
import Layout from "./layout/Layout.jsx";

function App() {

    const {isAuth} = useSelector((state) => state.auth)
    const location = useLocation()

    const PrivateRoute = () => {
        return ( isAuth ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />)
    }

    const RedirectRoute = ({route}) => {
        return ( <Navigate to={`/${isAuth ? route : 'login'}`} state={{ from: location }} replace />)
    }

    return (


        <Routes>
            <Route path="/login" element={<Auth />} />

            <Route element={<PrivateRoute />}>
                    <Route path={'/'} element={<Layout />} >
                        <Route index element={<RedirectRoute route={'dashboard'} />} />
                        <Route path='/dashboard' element={<Dashboard />} />
                    </Route>
                </Route>

        </Routes>

    )
}

export default App