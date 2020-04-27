import React from 'react';
import QuangCao from './NoiDungContext/QuangCao'
import KhuyenMai from './NoiDungContext/KhuyenMai'
import NoiBat from './NoiDungContext/NoiBat'

const NoiDung = () => {
    return (
        <div>
            <QuangCao />
            <KhuyenMai />
            <NoiBat />
        </div>
    );
}

export default NoiDung;