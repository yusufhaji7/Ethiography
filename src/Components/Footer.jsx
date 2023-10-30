import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white" id="footer">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h4 className="text-xl font-bold mb-4">Ethiography</h4>
            <p className="text-sm">Ethiopia in the eyes of a camera</p>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h4 className="text-xl font-bold mb-4">Links</h4>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-white">Home</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-white">About</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-white">Contact: (+251) 960551073</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-xl font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} Ethiography. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;