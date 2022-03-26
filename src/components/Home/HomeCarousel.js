import Slider from 'react-slick'

import Home2 from '../../assests/Home/Home2.jpg'
import Home3 from '../../assests/Home/Home3.jpg'
import Home4 from '../../assests/Home/Home4.jpg'
import Home5 from '../../assests/Home/Home5.jpg'

const images = [
    { id: Math.random().toString(), imageSrc: Home4 },
    { id: Math.random().toString(), imageSrc: Home5 },
    { id: Math.random().toString(), imageSrc: Home2 },
    { id: Math.random().toString(), imageSrc: Home3 },
    { id: Math.random().toString(), imageSrc: Home5 }
]

const HomeCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: 'linear'
    }

    return (
        <Slider {...settings}>
            {images.map((img) => {
                return (
                    <img
                        width="25%"
                        height="400"
                        key={img.id}
                        src={img.imageSrc}
                        alt="Home Carousel"
                    />
                )
            })}
        </Slider>
    )
}

export default HomeCarousel
