import { useState } from 'react';
import React from 'react';
import photosData from '../../assets/Photos.json';
import Modal from 'react-modal';


function Eid() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [eid, setEid] = useState([]);

  useState(() => {
    setEid(photosData.slice(10, 20));
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
      {eid.map((photo) => (
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

export default Eid;