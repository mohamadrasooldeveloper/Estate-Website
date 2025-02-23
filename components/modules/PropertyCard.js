import Link from "next/link";
import Image from "next/image";
import Style from "@/styles/HomePage.module.css";

const PropertyCard = ({ title, roomCount, meterage, price, img, id }) => {
  if (!id) console.warn("PropertyCard: id is missing");

  return (
    <div className={Style.property_card}>
  <Image
        src={img}
        alt={name} 
        className={Style.property_image}
        width={400}
        height={300} 
        layout="responsive" 
      />
      <div className={Style.property_info}>
        <h3>{title}</h3>
        <div className={Style.property_main}>
          <div className={Style.property_location}>
            <p>📍 مالدیو</p>
            <p>{roomCount} اتاق</p>
          </div>
          <div className={Style.property_price}>
            <p>{meterage} متر مربع</p>
            <p className={Style.price}>💰 {price.toLocaleString("fa-IR")} تومان</p>
          </div>
        </div>
        <Link href={id ? `/homes/${id}` : "#"}>
          <button className={Style.view_button}>مشاهده ملک</button>
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
