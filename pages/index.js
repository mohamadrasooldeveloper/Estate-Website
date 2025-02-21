import Feature from "@/components/templates/HomePage/Feature"
import Story from "@/components/templates/HomePage/Story"
import Gallery from "@/components/templates/HomePage/Gallery";
import PropertyCard from "@/components/modules/PropertyCard";
export default function Home() {
  return (
    <div>
     <Feature/>
     <Story/>
     <PropertyCard/>
     <Gallery/>
    </div>
  );
}
