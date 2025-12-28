import React, { useState } from 'react';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(16); 

  const galleryItems = [
    { id: 1, title: "Summer Breeze", year: "2014", category: "casual", image: "/images/temp.jpg" },
    { id: 2, title: "Autumn Edit", year: "2015", category: "formal", image: "/images/temp.jpg" },
    { id: 3, title: "Bridal Couture", year: "2016", category: "ethnic", image: "/images/temp.jpg" },
    { id: 4, title: "Urban Chic", year: "2017", category: "casual", image: "./images/temp.jpg" },
    { id: 5, title: "Silk Drapes", year: "2018", category: "ethnic", image: "/images/temp.jpg" },
    { id: 6, title: "Winter Solstice", year: "2019", category: "formal", image: "/images/temp.jpg" },
    { id: 7, title: "Fusion Era", year: "2020", category: "art work", image: "/images/temp.jpg" },
    { id: 8, title: "Modern Heritage", year: "2024", category: "ethnic", image: "/images/temp.jpg" },
    { id: 9, title: "Summer Breeze", year: "2014", category: "casual", image: "/images/temp.jpg" },
    { id: 10, title: "Autumn Edit", year: "2015", category: "formal", image: "/images/temp.jpg" },
    { id: 11, title: "Bridal Couture", year: "2016", category: "ethnic", image: "/images/temp.jpg" },
    { id: 12, title: "Urban Chic", year: "2017", category: "casual", image: "/images/temp.jpg" },
    { id: 13, title: "Silk Drapes", year: "2018", category: "ethnic", image: "/images/temp.jpg" },
    { id: 14, title: "Winter Solstice", year: "2019", category: "formal", image: "/images/temp.jpg" },
    { id: 15, title: "Fusion Era", year: "2020", category: "art work", image: "/images/temp.jpg" },
    { id: 16, title: "Modern Heritage", year: "2024", category: "ethnic", image: "/images/temp.jpg" },
    { id: 17, title: "Extra Item", year: "2024", category: "ethnic", image: "/images/temp.jpg" },
  ];

  const categories = ["all", "ethnic", "formal", "casual", "art work"];

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter((item) => item.category === activeCategory);

  const visibleItems = filteredItems.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 20);
  };

  // 4. HANDLER: Switch Category & Reset Count
  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setVisibleCount(12); // Reset to top 4 rows whenever filter changes
  };

  return (
    <div className='w-screen ml-[50%] -translate-x-1/2 mb-20'>
      <section className='flex flex-col gap-8 justify-end text-start mt-40 mx-20'>
        <h1 className='text-9xl'>GALLERY</h1>
        <p className='w-1/2 pr-28'>
          For over a decade, we have been more than just a boutique—we are a destination for the modern woman. From breezy summer staples to luxurious wedding couture, explore the designs that have defined our journey
        </p>
      </section>

      <section className='mt-28 mx-20'>
        <div className='flex justify-between border-b pb-4'>
          <p>FILTER</p>
          <div className='flex gap-16 uppercase'>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`transition-colors duration-300 cursor-pointer uppercase ${
                  activeCategory === cat ? "text-[#800000]" : "text-gray-400 hover:text-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className='mt-16'>
          {/* Render the VISIBLE items only */}
          <div className="grid lg:grid-cols-4 gap-y-10 gap-x-6">
            {visibleItems.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full aspect-3/4 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex justify-between items-start mt-4 text-black bg-transparent">
                  <p className="text-sm font-medium uppercase tracking-widest">{item.title}</p>
                  <p className="text-sm font-medium text-neutral-500">{item.year}</p>
                </div>
              </div>
            ))}
          </div>

          {visibleCount < filteredItems.length && (
            <div className="flex justify-center mt-20">
              <button 
                onClick={handleLoadMore}
                className="px-8 py-3 border border-black uppercase tracking-widest hover:bg-[#800000] hover:text-white transition-all duration-300"
              >
                Load More
              </button>
            </div>
          )}

          {filteredItems.length === 0 && (
            <p className="text-center text-gray-500 mt-10">No items found in this category.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Gallery;