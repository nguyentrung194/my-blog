import React from 'react'
import Link from 'next/link'

// $("[data-trigger]").on("click", function(e){
//     e.preventDefault();
//     e.stopPropagation();
//     var offcanvas_id =  $(this).attr('data-trigger');
//     $(offcanvas_id).toggleClass("show");
//     $('body').toggleClass("offcanvas-active");
//     $(".screen-overlay").toggleClass("show");
// }); 

// $(".btn-close, .screen-overlay").click(function(e){
//     $(".screen-overlay").removeClass("show");
//     $(".mobile-offcanvas").removeClass("show");
//     $("body").removeClass("offcanvas-active");
// }); 

const DieuHuong = () => {
    return (
        <div>
            <b class="screen-overlay"></b>
            <button data-trigger="#navbar_main" class="d-lg-none btn btn-warning" type="button">  Show navbar </button>
            <nav className="navbar navbar-expand-md navbar-light bg-dark fixed-top">
                <button type="button" className="navbar-toggler bg-light" data-toggle="collapse" data-target="#nav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className='collapse navbar-collapse justify-content-between' id='nav' >
                    <ul className='navbar-nav'>
                        <li className="nav-item" >
                            <Link href="https://www.facebook.com/"><a className="nav-link text-light font-weight-bold px-3">Trang chủ</a></Link>
                        </li>
                        <form class="form-inline ml-3">
                            <div className='input-group'>
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                            </div>
                        </form>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default DieuHuong;