import React from 'react';
import { Link } from 'gatsby';

const Footer = () => (
  <footer className="bg-gray-100 pt-16 px-3 mt-48 pb-8 shadow-xs text-gray-600">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">About Us</h2>
        <p className="mt-5">Fyli is a greek word which means "Tribe".</p>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Important Links</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <Link to="/terms/">Terms &amp; Conditions</Link>
          </li>
          <li>
            <a href="#home">Privacy Policy</a>
          </li>
          <li>
            <a href="#home">Refund Policy</a>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Social Media</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="#home">Facebook</a>
          </li>
          <li>
            <a href="#home">Twitter</a>
          </li>
          <li>
            <a href="#home">Instagram</a>
          </li>
        </ul>
      </div>
    </div>
    <p className="text-gray-600 text-center mt-8">© 2020 Fyli. All Rights Reserved.</p>
  </footer>
);

export default Footer;
