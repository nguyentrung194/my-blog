import React from 'react';
import QuangCao from './NoiDungContext/QuangCao'
import KhuyenMai from './NoiDungContext/KhuyenMai'
import NoiBat from './NoiDungContext/NoiBat'
import TestComponent from './TestComponent'

const dataCard = [
    {
      img: '1.jpg',
      mota: 'Mỳ ly'
    },
    {
      img: '2.jpg',
      mota: 'Mỳ ăn liền'
    },
    {
      img: '3.jpg',
      mota: 'Thùng mỳ'
    },
    {
      img: '4.jpg',
      mota: 'Bánh kẹo'
    },
    {
      img: '5.jpg',
      mota: 'Bánh kẹo'
    },
    {
      img: '6.jpg',
      mota: 'Bánh kẹo'
    },
    {
      img: '7.jpg',
      mota: 'Bánh kẹo'
    },
    {
      img: '8.jpg',
      mota: 'Bánh kẹo'
    },
    {
      img: '9.jpg',
      mota: 'Bánh kẹo'
    },
    {
      img: '10.jpg',
      mota: 'Bánh kẹo'
    },
    {
      img: '11.jpg',
      mota: 'Bánh kẹo'
    },
]

const NoiDung = () => {
    return (
        <div>
            
            <div className='container'>
                <QuangCao />
                <div style={{ paddingBottom: '30px' }}></div>
                <div className="row row-cols-4">
                    {dataCard.map((el) => {
                        return (
                            <div className="col" >
                                <TestComponent img={el.img} mota={el.mota} />
                                <div style={{ paddingTop: '30px' }}></div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <NoiBat />
        </div>
    );
}

export default NoiDung;