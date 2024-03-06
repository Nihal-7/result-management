import {NavLink} from 'react-router-dom';
import "./Navbar.css"
import { useAuth } from '../store/auth';

export const Navbar = () => {
    const {isLoggedIn} = useAuth();
    return(
        <>
            <header>
                <div className="container">
                    <div className="logo">
                        <NavLink to="/">Result Management</NavLink>
                    </div>
                    <nav>
                        <ul>
                            {isLoggedIn ? (
                                <li><NavLink to="/logout"> Logout</NavLink></li>
                            ) : (
                                <>
                                <li><NavLink to="/"> Student</NavLink></li>
                                <li><NavLink to="/login"> Teacher</NavLink></li>
                                </>
                            )};
                        </ul>
                    </nav>

                </div>
            </header>
        </>
    )
}