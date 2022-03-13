import Link from 'next/link';

function Layout() {
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page">
                            <span data-feather="home"></span>
                            Trang chủ
                        </a>
                    </li>
                    <li className="nav-item">
                        <Link href="/sso">
                            <a className="nav-link">
                                Kết nối SSO
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/notification">
                            <a className="nav-link" >
                                Kết nối hệ thống notification
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link" >
                                Menu 1
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link" >
                                Menu 2
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link" >
                                Menu 3
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Layout;