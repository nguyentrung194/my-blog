import React from 'react'

const TestComponent = () => {
    return (
        <div style={{  }}>
            <div className='container' style={{ background: 'yellow', width: '300px', height: '300px', border: '1px solid #ddd', borderRadius: '4px', padding: '5px' }}>
                <img src="1.jpg" className='img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}' alt="" />
                <h3>Title</h3>
                <div className="progress">
                    <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}>
                        60% hoàn thành (success)
                    </div>
                </div>
                <h5>Price: 200$ {/** giá cả của từng món */}</h5>
                <p>Mô tả chi tiết</p>
                <p>Đánh giá</p>
                <button className="btn" style={{ background: 'green', color: 'white' }}>
                    Thêm vào giỏ <span className="badge badge-primary" />
                </button>
            </div>
        </div>
    )
}
export default TestComponent;