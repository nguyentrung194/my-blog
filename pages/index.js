import React from 'react'
import Head from 'next/head'
import DieuHuong from '../components/DieuHuong'
import NoiDung from '../components/NoiDung'
import ChanTrang from '../components/ChanTrang'



export default function Index() {
  return (
    <div>
      <Head>
        <title>Ăn vặt Cần Thơ</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <DieuHuong />
      <h1 style={{textAlign: 'center', paddingBottom: '30px' }}>Trang chủ</h1>
      <NoiDung />
      <ChanTrang />
    </div>
  );
}