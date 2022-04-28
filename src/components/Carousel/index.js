import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

export const Carousel = (props) => {
    const images = props.images;

    return (
        <div>
            <ImageGallery items={images} autoPlay={true}/>
        </div>
    )
}