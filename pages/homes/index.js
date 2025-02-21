import React, { useState, useEffect } from "react";
import Style from "@/styles/Allhomes.module.css";
import PropertyCard from "@/components/modules/PropertyCard";
import Home from "@/data/Home"; // فرض بر این است که داده‌ها از اینجا می‌آید

export default function Index() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("-1");
  const [homes, setHomes] = useState([]);
  const [filteredHomes, setFilteredHomes] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    if (Home.homes && Array.isArray(Home.homes)) {
      setHomes(Home.homes);
      setFilteredHomes(Home.homes);
    }
  }, []);

  useEffect(() => {
    let updatedHomes = homes.filter((home) =>
      home.title.includes(search)
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

    setFilteredHomes(updatedHomes);
    setCurrentPage(0); // بازنشانی صفحه به اول بعد از فیلتر کردن
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
            <option value="-1">انتخاب کنید</option>
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

      <div className={Style.propertyCards}>
        {filteredHomes
          .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
          .map((home, index) => (
            <PropertyCard key={index} {...home} />
          ))}
      </div>

      <div className={Style.pagination}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index)}
            className={currentPage === index ? Style.active : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
