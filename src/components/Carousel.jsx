import React from "react";
import CarouselDots from "./CarouselDots";
import CarouselItem from "./CarouselItem";

const Carousel = () => {
  const carousel = [
    {
      link: "#",
      image:
        "https://images.unsplash.com/photo-1422190441165-ec2956dc9ecc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80",
      title: "Stripy Zig Zag Jigsaw Pillow and Duvet Set",
    },
    {
      link: "#",
      image:
        "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjM0MTM2fQ&auto=format&fit=crop&w=1600&q=80",
      title: "Real Bamboo Wall Clock",
    },
    {
      link: "#",
      image:
        "https://images.unsplash.com/photo-1519327232521-1ea2c736d34d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80",
      title: "Brown and blue hardbound book",
    },
  ];

  return (
    <div
      className="carousel relative container mx-auto"
      style={{ maxWidth: 1600 }}
    >
      <div className="carousel-inner relative overflow-hidden w-full">
        {carousel.map((item, index) => (
          <CarouselItem
            key={index}
            index={index}
            id={`carousel-${index}`}
            title={item.title}
            image={item.image}
            link={item.link}
          />
        ))}

        <CarouselDots items={carousel} />
      </div>
    </div>
  );
};

export default Carousel;
