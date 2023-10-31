import { React, useState } from 'react';
import photosData from '../../Photos.json';
import Modal from 'react-modal';

function Irrecha() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [irrecha, setIrrecha] = useState([]);

  useState(() => {
    setIrrecha(photosData.slice(0, 10));
  }, []);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setModalIsOpen(false);
  };

  return (
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mx-5 my-7">
      {irrecha.map((photo) => (
        <div key={photo.id} className="relative border border-gray-200 rounded shadow-md">
          <img
            src={photo.imageUrl}
            alt={photo.title}
            onClick={() => openModal(photo)}
            className="w-full h-auto object-cover rounded-t"
          />
          {selectedPhoto && selectedPhoto.id === photo.id && (
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={{
                content: {
                  maxWidth: '600px',
                  margin: 'auto',
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                },
              }}
            >
              <img src={selectedPhoto.imageUrl} alt="Your Photo" />
            </Modal>
          )}
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">{photo.title}</h3>
            <p className="text-gray-500 italic">"{photo.description}"</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Irrecha;
