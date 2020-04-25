import React from 'react';
import ControlledCarousel from './NoiDungContext/QuangCao'
import KhuyenMai from './NoiDungContext/KhuyenMai'
import NoiBat from './NoiDungContext/NoiBat'

const NoiDung = () => {
    return (
        <div>
            <ControlledCarousel />
            <KhuyenMai />
            <NoiBat />
        </div>
    );
}

export default NoiDung;