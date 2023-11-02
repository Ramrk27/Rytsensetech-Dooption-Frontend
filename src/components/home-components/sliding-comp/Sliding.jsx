import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import "./sliding.css"
const Sliding = ({ items, itemsPerPage }) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    const totalItems = items.length;
  
  return (
    <div>
         <Carousel activeIndex={index} onSelect={handleSelect}>
        {Array.from({ length: Math.ceil(totalItems / itemsPerPage) }).map((_, slideIndex) => (
          <Carousel.Item key={slideIndex}>
            <div className="card-container">
              {items.slice(slideIndex * itemsPerPage, (slideIndex + 1) * itemsPerPage).map((item, cardIndex) => (
                <Card key={cardIndex} className="card" >
                  <Card.Img variant="top" src={item.src} alt={item.alt} />
                  <Card.Body>
                    <Card.Title class="card-title">{item.title}</Card.Title>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      
    </div>
  )
}

export default Sliding