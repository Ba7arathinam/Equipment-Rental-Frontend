import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.valpak.com/img/bpp/Aabergs-Tool-Equipment-Rentals-Banner-Image.jpg"
          alt="First slide"
          style={{ height: "600px", width: "80%" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/R.117c74a3c2cbd060f2df3e6f6498343c?rik=XTMTdt8QB%2fSbeA&riu=http%3a%2f%2fwww.stjoetractor.com%2fsiteart%2fslideshow%2fnhzero-6-30.jpg&ehk=fVAUzH3vdIKLBqvElow2wb61DrxXJT5XLDtG6f9x%2fWc%3d&risl=&pid=ImgRaw&r=0"
          alt="Second slide"
          style={{ height: "600px", width: "80%" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.jondon.com/media/wysiwyg/lp/concrete-rental/ConcreteRental_1240_325.jpg"
          alt="Third slide"
          style={{ height: "600px", width: "80%" }}
        />
      </Carousel.Item>
    </Carousel>
  );
}

// render(<ControlledCarousel />);
