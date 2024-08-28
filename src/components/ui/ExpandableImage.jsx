import { useState } from "react";
import "./ImageModal.css";

export default function ImageModal({ images }) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const openModal = (image) => {
        setCurrentImage(image);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setCurrentImage(null);
    };
    console.log("Render");
    return (
        <>
            <div className="thumbnails">
                {images.map((image, index) => (
                    <img
                        key={index}
                        title={image.alt}
                        src={image.src}
                        alt={image.alt}
                        className="thumbnail"
                        onClick={() => openModal(image)}
                    />
                ))}
            </div>

            {isOpen && (
                <div className="modal" onClick={closeModal}>
                    <span className="close" onClick={closeModal}>
                        &times;
                    </span>
                    <img
                        src={currentImage.src}
                        alt={currentImage.alt}
                        className="modal-image"
                    />
                </div>
            )}
        </>
    );
}
