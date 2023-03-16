import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';

export default function Authenticated({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container">
                        <Link href={route('dashboard')}>
                            <ApplicationLogo className="navbar-brand" width={80} />
                        </Link>
                        
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled">Disabled</a>
                                </li>
                            </ul>
                            <div className="d-flex">

                                <div className="btn-group">
                                    <a href={route('dashboard')} type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                                        Dashboard    
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-lg-end">
                                        <li><button className="dropdown-item" type="button">Profile</button></li>
                                        <li>
                                            <ResponsiveNavLink method="post" href={route('logout')} as="button" className="dropdown-item">
                                                Log Out
                                            </ResponsiveNavLink>
                                        </li>


                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </nav>





            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
