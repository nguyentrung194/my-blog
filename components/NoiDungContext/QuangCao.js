import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'


function QuangCao() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const data = [
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
  const stylesItem = {
    background: 'yellow',
    marginRight: '5px',
    marginLeft: '5px',
    marginBottom: '5px',
    color: 'black',
    width: '1000px',
    textAlign: 'center',
    lineHeight: '50px',
  }
  const stylesList = {
  background: 'blue',
  width: '30%',
  border: '1px solid red',
  display: 'flex',
  flexWrap: 'wrap',
  border: '3px solid #00ff00',
  height: '500px',
  overflowX: 'hidden',
  overflowY: 'auto',
}

  return (
    <div className='container' style={{ paddingBottom: '50px' }}>
      <div className='row'>
        <div className='col-sm-12 col-md-4'>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            {data.map((el, i)=>{
              return(
                <Carousel.Item>
                  <img
                    style={{width: '100px', height: '400px'}}
                    className="d-block w-100"
                    src={el.img}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>Ảnh {i+1}</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              )
            })}
          </Carousel>
        </div>
        <div className='col-sm-12 col-md-8'> 
          <img src="11.jpg" className="d-block w-100" alt="" style={{ height: '400px' }} />
        </div>
      </div>
    </div>
  );
}

export default QuangCao