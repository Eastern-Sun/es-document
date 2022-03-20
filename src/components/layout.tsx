import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link';

function Layout({ pageTile, children }) {
    return (
        <>
            <Head>
                <title>{pageTile}</title>
            </Head>
            <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <Link href="/">
                    <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3">Tài liệu EasternSun</a>
                </Link>
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </header>
            {children}
            <Script src="/bootstrap.bundle.min.js"></Script>
        </>
    );
}

export default Layout;