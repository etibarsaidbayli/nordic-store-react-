function CarouselDots({ items }) {
  return (
    <ol className="carousel-indicators">
      {items.map((item, index) => (
        <li key={index} className="inline-block mr-3">
          <label
            htmlFor={`carousel-${index}`}
            className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
          >
            • 
          </label>
        </li>
      ))}
    </ol>
  );
}

export default CarouselDots;
