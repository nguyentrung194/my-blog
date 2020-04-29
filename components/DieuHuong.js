import React from 'react'
import Link from 'next/link'

const DieuHuong = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-primary">
                <Link href="https://www.facebook.com/"><a className="btn btn-light">Trang chủ</a></Link>
                <form class="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        </div>
    );
}

export default DieuHuong;