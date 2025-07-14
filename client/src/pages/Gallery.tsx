import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const Gallery = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  const galleryImages = [
    {
      src: "/images/gallery1.jpg",
      caption: "Beach Sunset Walk",
      aspectRatio: "aspect-[4/3]"
    },
    {
      src: "/images/gallery2.jpg",
      caption: "Our First Coffee Date",
      aspectRatio: "aspect-square"
    },
    {
      src: "/images/gallery3.jpg",
      caption: "Garden Adventures",
      aspectRatio: "aspect-square"
    },
    {
      src: "/images/gallery4.jpg",
      caption: "Cozy Movie Night",
      aspectRatio: "aspect-[4/3]"
    },
    {
      src: "/images/gallery5.jpg",
      caption: "Candlelit Dinner",
      aspectRatio: "aspect-[4/3]"
    },
    {
      src: "/images/gallery6.jpg",
      caption: "Perfect Picnic Day",
      aspectRatio: "aspect-[4/3]"
    },
    {
      src: "/images/gallery7.jpg",
      caption: "Perfect Picnic Day",
      aspectRatio: "aspect-[4/3]"
    },
    {
      src: "/images/gallery8.jpg",
      caption: "Perfect Picnic Day",
      aspectRatio: "aspect-[4/5]"
    },
    {
      src: "/images/gallery9.jpg",
      caption: "Perfect Picnic Day",
      aspectRatio: "aspect-[4/5]"
    },
    {
      src: "/images/gallery10.jpg",
      caption: "Perfect Picnic Day",
      aspectRatio: "aspect-[4/5]"
    },
    {
      src: "/images/gallery11.JPG",
      caption: "Perfect Picnic Day",
      aspectRatio: "aspect-[4/5]"
    },
    {
      src: "/images/selfie-time-1746866003004.jpg.jpg",
      caption: "Perfect Picnic Day",
      aspectRatio: "aspect-[4/5]"
    },
    {
      src: "/images/gallery13.jpg",
      caption: "Perfect Picnic Day",
      aspectRatio: "aspect-[4/5]"
    }
  ];

  useEffect(() => {
    if (galleryRef.current) {
      const items = galleryRef.current.querySelectorAll('.masonry-item');
      
      gsap.fromTo(items, 
        { 
          opacity: 0, 
          filter: 'blur(10px)',
          y: 50 
        },
        { 
          opacity: 1, 
          filter: 'blur(0px)',
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out"
        }
      );
    }
  }, []);

  return (
    <section className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-playfair text-5xl font-bold text-hot-pink mb-4">
            Our Beautiful Memories
          </h2>
          <p className="text-xl text-gray-600 font-inter">
            Every picture tells our love story
          </p>
        </motion.div>
        
        <div ref={galleryRef} className="masonry-grid">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="masonry-item relative group overflow-hidden rounded-2xl shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={image.src}
                alt={image.caption}
                className={`w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-500 ${image.aspectRatio}`}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-medium">{image.caption}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
