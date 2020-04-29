import React from 'react'

const TestComponent = (props) => {
    return (
        <div>
            <div className='card' style={{ width: '16rem' }} >
                <img className="card-img-top" src={props.img} alt="Card image cap" style={{ width: '16rem', height: '18rem' }} />
                <div className='card-body' style={{ backgroundColor: '#ddd' }} >
                    <h5 className='card-title'>Title</h5>
                    <p className='card-text'>{props.mota}</p>
                    <a name="" id="" class="btn btn-primary" href="#" role="button">Thêm vào giỏ</a>
                </div>
            </div> 
        </div>
    )
}
export default TestComponent;