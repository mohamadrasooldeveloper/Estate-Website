import React, { useState, useEffect } from "react";
import Style from "@/styles/Allhomes.module.css";
import PropertyCard from "@/components/modules/PropertyCard";
import db from "./../../data/db.json";

export default function Index() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  const [homes, setHomes] = useState([]);
  const [filteredHomes, setFilteredHomes] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  useEffect(() => {
    if (db.homes && Array.isArray(db.homes)) { 
      setHomes(db.homes);
      setFilteredHomes(db.homes);
    }
  }, []);

  useEffect(() => {
    if (search.trim() === "") {
      setSuggestions([]);
    } else {
      const filteredSuggestions = [...new Set(
        homes
          .map((home) => home.title)
          .filter((title) => title.includes(search))
      )].slice(0, 5); 
  
      setSuggestions(filteredSuggestions);
    }
  }, [search, homes]);
  
  
  const handleSuggestionClick = (suggestion) => {
    setSearch(suggestion); 
    setSuggestions([]); 
  };
  

  useEffect(() => {
    let updatedHomes = homes.filter((home) =>
      home.title.toLowerCase().includes(search.toLowerCase()) 
    );
  
    switch (sort) {
      case "price":
        updatedHomes.sort((a, b) => b.price - a.price);
        break;
      case "room":
        updatedHomes.sort((a, b) => b.roomCount - a.roomCount); 
        break;
      case "meterage":
        updatedHomes.sort((a, b) => b.meterage - a.meterage);
        break;
    }
  
    setFilteredHomes(updatedHomes);
    setCurrentPage(0);
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
          {suggestions.length > 0 && (
            <ul className={Style.suggestionsList}>
              {suggestions.map((suggestion, index) => (
                <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
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
