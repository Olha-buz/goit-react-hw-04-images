import {imagesAPI} from "../api/api";
import { useEffect, useState } from "react"
import { Loader } from "./Loader/Loader";
import {SearchBar} from "./SearchBar/Searchbar";
import {Modal} from "./Modal/Modal";
import Notiflix from "notiflix";
import { Button } from "./Button/Button";
import { ImageGallery } from "./ImageGallery/ImageGallery";


export const App = () => {
  const [hits, setHits] = useState([]);
  const [name, setName] = useState('');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [tags, setTags] = useState('');
  const [visibleButton, setVisibleButton] = useState(false);

  const toggleModal = (imageUrl, tag) => {
    setShowModal(!showModal);
    setLargeImageURL(imageUrl);
    setTags(tag);
  };

  const handleButton = () => 
    setPage(state => state + 1);
  ;

  const handleSearchbarFormSubmit = name => {
    setName(name);
    setPage(1);
    setHits([]);
  };

  useEffect(() => {
    if (name !== '') {
    
    setIsLoading(true);
   
    imagesAPI(name, page)
      .then(data => {
        setHits(data.hits);
        setTotal(data.total);
        
      })
      .finally(() => {
        setIsLoading(false);
        setVisibleButton(page < Math.ceil(total / 12));
      })
      .catch((error) => {
        console.error(error.message);
        Notiflix.Notify.failure('Images no found');
      })
    }
    
    
  }, [name, page, total]);
  // componentDidUpdate(prevProps, prevState) {
  //   const { name, page } = this.state;
    
  //   if (prevState.name !== name || prevState.page !== page) {
  //     this.setState({ isLoading: true});
  //     imagesAPI(name, page)
  //       .then(({ hits, total }) => {
  //         this.setState(prevState => (
  //           {
  //             hits: [...prevState.hits, ...hits],
  //             total: total,
  //             visibleButton: this.state.page < Math.ceil(total/12)
  //         }
  //         ))
  //       })
  //       .finally(() => this.setState({ isLoading: false }))
  //       .catch((error) => {
  //         console.error(error.message);
  //         Notiflix.Notify.failure('Images no found');
  //       });
  //   };
    

  // };

    return (
      <>
        <SearchBar onSubmitHandler={handleSearchbarFormSubmit} />
        
        {isLoading && <Loader />}

        {showModal && (
          <Modal onClick={toggleModal} url={largeImageURL} alt={tags} />
        )}

        {hits.length!==0 && (
          <>
            <ImageGallery images={hits} onImageClick={toggleModal} />
          </>
        )}

        {!isLoading && <Button onClick={handleButton} isVisible={visibleButton} />}

      </>
    )

};
