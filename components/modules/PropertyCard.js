// pages/index.jsx
import Link from 'next/link';
import PropertyCard from '@/components/modules/PropertyCard';

const Home = ({ properties = [] }) => {
  const sortedProperties = properties.sort((a, b) => b.demand - a.demand);

  return (
    <div className="home-page">
      <h2>املاک با بیشترین تقاضا</h2>
      <div className="properties-list">
        {sortedProperties.slice(0, 4).map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </div>
      <Link href="/homes">
        مشاهده تمام املاک
      </Link>
    </div>
  );
};

export default Home;
