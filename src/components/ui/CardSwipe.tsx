import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css/effect-cards"
import { EffectCards } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-coverflow"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import OptimizedImage from '@/components/OptimizedImage'

interface CarouselProps {
  images: string[] // Array of image URLs from JSON
  title?: string
  description?: string
  autoplayDelay?: number
  slideShadows?: boolean
}

export const CardSwipe: React.FC<CarouselProps> = ({
  images,
  title = "Card Swipe",
  description = "Seamless Images carousel animation.",
  autoplayDelay = 1500,
  slideShadows = false,
}) => {
  const css = `
    .swiper {
      width: 100%;
      max-width: 400px;
      padding-bottom: 30px;
    }
    @media (max-width: 640px) {
      .swiper {
        max-width: 280px;
        padding-bottom: 20px;
      }
    }
    .swiper-slide {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 18px;
      font-size: 22px;
      font-weight: bold;
      color: #fff;
      aspect-ratio: 4/3;
      overflow: hidden;
      padding: 0;
      margin: 0;
    }
    .swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 18px;
      margin: 0;
      padding: 0;
    }
  `

  // Convert string array to object array with alt text
  const imageObjects = images.map((src, index) => ({
    src,
    alt: `${title} Image ${index + 1}`
  }))

  return (
    <section className="w-full space-y-2 sm:space-y-4">
      <style>{css}</style>
      <div className="mx-auto w-full max-w-full rounded-[16px] sm:rounded-[24px] p-1 sm:p-2 shadow-sm bg-black backdrop-blur-sm">
        <div className="relative mx-auto flex w-full flex-col rounded-[16px] sm:rounded-[24px]  bg-black-900/50 p-6 sm:p-2 shadow-sm md:items-start md:gap-4 lg:gap-8">
          <div className="flex flex-col justify-center pb-2 pl-2 sm:pl-4 pt-4 sm:pt-6 md:items-center">
            <div className="flex gap-2">
              <div className="text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl opacity-85 font-bold tracking-tight text-white">
                  {title}
                </h3>
                <p className="flex items-center justify-center md:justify-start gap-1 text-sm sm:text-base text-white/70">{description}</p>
              </div>
            </div>
          </div>
          <div className="flex w-full items-center justify-center gap-4 pb-2 sm:pb-4">
            <div className="w-full flex justify-center">
              <Swiper
                autoplay={{
                  delay: autoplayDelay,
                  disableOnInteraction: false,
                }}
                effect={"cards"}
                grabCursor={true}
                loop={true}
                slidesPerView={"auto"}
                rewind={true}
                cardsEffect={{
                  slideShadows: slideShadows,
                }}
                modules={[EffectCards, Autoplay, Pagination, Navigation]}
              >
                {imageObjects.map((image, index) => (
                  <SwiperSlide key={index}>
                    <OptimizedImage
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      loading={index < 3 ? 'eager' : 'lazy'}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}