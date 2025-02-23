import React, { useState, useEffect } from "react";
import Style from "@/styles/Allhomes.module.css";
import PropertyCard from "@/components/modules/PropertyCard";
import db from "./../../data/db.json";

export default function Index() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  const [homes, setHomes] = useState([]);
  const [filteredHomes, setFilteredHomes] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    if (db.homes && Array.isArray(db.homes)) { 
      setHomes(db.homes);
      setFilteredHomes(db.homes);
    }
  }, []);

  useEffect(() => {

    let updatedHomes = homes.filter((home) =>
      home.title.toLowerCase().includes(search.toLowerCase())
    );

    switch (sort) {
      case "price":
        updatedHomes.sort((a, b) => a.price - b.price);
        break;
      case "room":
        updatedHomes.sort((a, b) => a.roomCount - b.roomCount);
        break;
      case "meterage":
        updatedHomes.sort((a, b) => a.meterage - b.meterage);
        break;
      default:
        updatedHomes = [...homes];
        break;
    }

    console.log("Final filtered homes:", updatedHomes);
    setFilteredHomes(updatedHomes);
    setCurrentPage(0);  

    console.log("Search Query:", search);
    console.log("All Titles:", homes.map((home) => home.title));
  }, [search, sort, homes]);

  const totalPages = Math.ceil(filteredHomes.length / itemsPerPage);

  const handlePageChange = (index) => setCurrentPage(index);

  return (
    <div className={Style.container_home}>
      <div className={Style.Allhomes_filter}>
        <div className={Style.filters}>
          <select
            className={Style.filter_option}
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="default">انتخاب کنید</option>
            <option value="price">بر اساس قیمت</option>
            <option value="room">بر اساس تعداد اتاق</option>
            <option value="meterage">بر اساس اندازه</option>
          </select>
        </div>
        <div className={Style.filters}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="جستجو کنید"
          />
        </div>
      </div>
      <div className={Style.Allhomes_card}>

      
      <div className={Style.propertyCards}>
        {filteredHomes.length > 0 ? (
          filteredHomes
            .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
            .map((home) => <PropertyCard key={home.id} {...home} />)
        ) : (
          <p>هیچ خانه‌ای پیدا نشد.</p>
        )}
      </div>

      {totalPages > 1 && (
        <div className={Style.pagination}>
          {Array.from({ length: totalPages }).map((_, index) => (
           <button
           key={index}
           onClick={() => handlePageChange(index)}
           className={`${Style.btn_homes} ${currentPage === index ? Style.active : ""}`}
         >
           {index + 1}
         </button>
         
          ))}
          
        </div>
      
      )}
      </div>
    </div>
  );
}
