import css from './Modal.module.css';
const { useEffect } = require("react");

export const Modal = ({ onClick, url, alt }) => {
    const handleBackdropClick = evt => {
        if (evt.currentTarget === evt.target) {
            onClick();
        }
    };

    useEffect(() => {
        const handleKeyDown = evt => {
            if (evt.code === 'Escape') {
                onClick();
            }
        }
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.addEventListener('keydown', handleKeyDown);
        };
    }, [onClick]);
    
    return (
        <div className={css.overlay} onClick={handleBackdropClick}>
            <div className={css.modal}>
                <img src={url} alt={alt} onClick={handleBackdropClick}/>
                
            </div>
        </div>
    )

};
