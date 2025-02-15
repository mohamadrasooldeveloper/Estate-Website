import React from "react";
import Style from "@styles/Gallery.module.css";

export default function Gallery() {
  const images = [
    "gal-1.jpeg", "gal-2.jpeg", "gal-3.jpeg", "gal-4.jpeg",
    "gal-5.jpeg", "gal-6.jpeg", "gal-7.jpeg", "gal-8.jpeg",
    "gal-9.jpeg", "gal-10.jpeg", "gal-11.jpeg", "gal-12.jpeg",
    "gal-13.jpeg", "gal-14.jpeg"
  ];

  return (
    <div className={Style.gallery}>
      {images.map((image, index) => (
        <figure key={index} className={`${Style.gallery__box} ${Style[`gallery__box-${index + 1}`]}`}>
          <img src={`/img/${image}`} alt={`Gallery house-${index + 1}`} className={Style.gallery__img} />
        </figure>
      ))}
    </div>
  );
}
