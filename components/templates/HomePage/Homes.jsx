import React, { useState, useEffect } from "react";
import PropertyCard from "@/components/modules/PropertyCard";
import Style from "@/styles/HomePage.module.css";

export default function Homes() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    import("@/data/db.json")
      .then((data) => {
        if (Array.isArray(data.default.homes)) {
          setProperties(data.default.homes);
        } else {
          console.warn("db.json format is incorrect");
        }
      })
      .catch((err) => console.error("Error loading db.json:", err));
  }, []);

  return (
    <div className={Style.home_page}>
      <div className={Style.properties_list}>
        {properties.length > 0 ? (
          properties.slice(0, 6).map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))
        ) : (
          <p>هیچ ملکی برای نمایش وجود ندارد.</p>
        )}
      </div>
    </div>
  );
}
