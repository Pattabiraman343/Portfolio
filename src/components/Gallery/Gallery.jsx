// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// // import Swiper from 'swiper';
// import { Navigation, Pagination, EffectCoverflow, Keyboard } from 'swiper/modules';
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/effect-coverflow";
// import "./styles.css";


// import Illustration1 from "../../assets/screencapture-192-168-130-143-3002-index-2-html-2025-08-27-22_19_16.png"
// import Illustration2 from "../../assets/screencapture-localhost-3001-2025-08-27-21_27_52.png"
// import Illustration3 from "../../assets/screencapture-trackhereandnow-2025-08-27-21_28_33.png"

// import Illustration4 from "../../assets/Screenshot 2024-11-20 141404.png"

// import Illustration5 from "../../assets/Screenshot 2024-11-20 224005.png"

// import Illustration6 from "../../assets/Screenshot 2025-08-23 110031.png"

// import Illustration7 from "../../assets/Screenshot 2025-08-23 110638.png"

// import Illustration8 from "../../assets/Screenshot 2025-08-27 213343.png"

// import Illustration9 from "../../assets/Screenshot 2025-08-27 213428.png"

// import Illustration from "../../assets/Screenshot 2025-08-27 213440.png"
 

// import Illustration0 from "../../assets/Screenshot 2025-08-27 213448.png"
// const images = [
//   { src: Illustration },
//   { src: Illustration1 },
//   { src: Illustration2 },
//   { src: Illustration3 },
//   { src: Illustration4 },
//   { src: Illustration5 },
//   { src: Illustration6 },
//   { src: Illustration8 },
//   { src: Illustration7 },

//   { src: Illustration9 },
//   { src: Illustration0 },

// ];

// export default function Gallery() {
//   return (
//     <section className="gallery-section">
//       <div className="gallery-header">
//         <h1>Heading Should be Here</h1>
//         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, dolorum.</p>
//       </div>

//       <Swiper
//   modules={[Navigation, Pagination, EffectCoverflow, Keyboard]}
//   slidesPerView={4}
//   spaceBetween={0}
//   centeredSlides={true}
//   slideToClickedSlide={true}
//   effect="coverflow"
//   grabCursor={true}
//   loop={true}
//   keyboard={{ enabled: true, onlyInViewport: true }}
//   coverflowEffect={{
//     rotate: -10,
//     stretch: 10,
//     depth: 100,
//     modifier: 1,
//     slideShadows: true,
//   }}
//   navigation={true}
//   pagination={{ clickable: true }}
//   breakpoints={{
//     640: { slidesPerView: 3, spaceBetween: 20 },
//     320: { slidesPerView: 3, spaceBetween: 20 },
//   }}
//   className="swiper-full-mobile"
// >
//   {images.map((img, index) => (
//     <SwiperSlide key={index}>
//       <img src={img.src} alt={`Slide ${index + 1}`} />
//     </SwiperSlide>
//   ))}
// </Swiper>

//     </section>
//   );
// }
