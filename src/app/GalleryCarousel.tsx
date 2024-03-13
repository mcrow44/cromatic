'use client';
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from 'react';

const IMAGE_DATA = [
  {
    src: '/image1.jpg',
    alt: 'Image 1',
    fill:true,
  },
  {
    src: '/image2.jpg',
    alt: 'Image 2',
    fill:true,
  },
  {
    src: '/image3.png',
    alt: 'Image 3',
    fill:true,
  },
]

const NUM_IMAGES = IMAGE_DATA.length

const GalleryCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const currentImageData = IMAGE_DATA[currentSlide];
  const slide = () => {
    return (
    <div className={styles.carouselitem}>
        <div className={styles.gradientLeft}></div>
        <div className={styles.prevImage}>
            <Image {...IMAGE_DATA[(currentSlide - 1 + NUM_IMAGES) % NUM_IMAGES]} />;
        </div>
        <div className={styles.currentImage}>
            <Image {...currentImageData} />;
        </div>
        <div className={styles.gradientRight}></div>
        <div className={styles.nextImage}>
            <Image {...IMAGE_DATA[(currentSlide + 1 + NUM_IMAGES) % NUM_IMAGES]} />;
        </div>
    </div>
    )
  }

  const prevSlide = (): void => {
    setCurrentSlide((currentSlide - 1 + NUM_IMAGES) % NUM_IMAGES);
  };

  const nextSlide = (): void => {
    setCurrentSlide((currentSlide + 1 + NUM_IMAGES) % NUM_IMAGES);
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselIn}>
        {slide()}
        <button className={styles.prev} onClick={() => prevSlide()}><Image
                src="/arrow.left.svg"
                alt="work text"
                className={styles.cromaticArrowLeft}
                width={55.567}
                height={150}
                priority
              /></button>
        <button className={styles.next} onClick={() => nextSlide()}><Image
                src="/arrow.right.svg"
                alt="work text"
                className={styles.cromaticArrowRight}
                width={55.567}
                height={150}
                priority
              /></button>
      </div>
    </div>
  );
};

export default GalleryCarousel;