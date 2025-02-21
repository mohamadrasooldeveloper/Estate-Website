import { useState, useEffect } from "react";
import Link from "next/link";
import Style from "@/styles/HomePage.module.css";
import Home from "@/data/Home"; // فرض بر این است که داده‌ها از اینجا می‌آید

const PropertyCard = ({ name, rooms, area, price, imageUrl }) => {
  return (
    <div className={Style.property_card}>
      <img src={imageUrl} alt={name} className={Style.property_image} />
      <div className={Style.property_info}>
        <h3>{name}</h3>
        <div className={Style.property_main}>
        <div className={Style.property_location}>
        <p>📍 مالدیو</p>
        <p> {rooms} اتاق </p>

        </div>

        <div className={Style.property_price}>
        <p> {area} متر مربع</p>
        <p className={Style.price}>💰 {price.toLocaleString()} تومان</p>

        </div>

        </div>
        <button className={Style.view_button}>مشاهده ملک</button>
      </div>
    </div>
  );
};

const HomePage = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    if (Home && Array.isArray(Home)) {
      setProperties(Home);
    }
  }, []);

  return (
    <div className={Style.home_page}>
      <h2>🏡 املاک با بیشترین تقاضا</h2>
      <div className={Style.properties_list}>
        {properties.slice(0, 8).map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </div>
      <Link href="/homes" className={Style.view_all}>
        مشاهده تمام املاک
      </Link>
    </div>
  );
};

export default HomePage;
