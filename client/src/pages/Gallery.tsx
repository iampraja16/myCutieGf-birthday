import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const Gallery = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      caption: "Beach Sunset Walk",
      aspectRatio: "aspect-[4/3]"
    },
    {
      src: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800",
      caption: "Our First Coffee Date",
      aspectRatio: "aspect-square"
    },
    {
      src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800",
      caption: "Garden Adventures",
      aspectRatio: "aspect-square"
    },
    {
      src: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      caption: "Cozy Movie Night",
      aspectRatio: "aspect-[4/3]"
    },
    {
      src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
      caption: "Candlelit Dinner",
      aspectRatio: "aspect-[4/5]"
    },
    {
      src: "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      caption: "Perfect Picnic Day",
      aspectRatio: "aspect-[4/3]"
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
