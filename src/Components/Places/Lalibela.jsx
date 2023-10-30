import { useState } from 'react';
import React from 'react';
import photosData from '../../Photos.json';
import Modal from 'react-modal';


function Lalibela() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [lalibela, setLalibela] = useState([]);

  useState(() => {
    setLalibela(photosData.slice(20, 30));
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
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1">
      {lalibela.map((photo) => (
        <div key={photo.id} className="relative">
          <img
            src={photo.imageUrl}
            alt={photo.title}
            onClick={() => openModal(photo)}
            className="w-full h-auto object-cover rounded transform scale-75 hover:scale-100 transition duration-300 ease-in-out"
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
          <h3 className="text-center">{photo.title}</h3>
          <p className="text-center text-gray-400 italic">"{photo.description}"</p>
        </div>
      ))}
    </div>
  );
}

export default Lalibela;