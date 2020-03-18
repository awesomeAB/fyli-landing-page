import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'gatsby';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const count = (url.match(/\//g) || []).length;
  const showAnchors = !(count > 3);
  return (
    <header className="sticky top-0 bg-gray-100 px-6 shadow items-center sm:flex sm:justify-between md:px-12 xl:px-64">
      <div className="flex sm:flex-row justify-between items-center py-4 sm:px-2">
        <Link to="/" className="hover:none">
          <div className="flex items-center text-3xl font-bold mr-2">
            <div className="w-12 mr-3">
              <LogoIcon />
            </div>
            Fyli
          </div>
        </Link>
        <div className={`${showAnchors ? '' : 'hidden'} sm:hidden`}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="block text-gray-500 hover:text-primary focus:outline-none"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen && (
                <path
                  fillRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              )}

              {!isOpen && (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`${isOpen && showAnchors ? 'block' : 'hidden'} 
        px-4 pb-4 text-lg font-semibold sm:${showAnchors ? 'flex' : 'hidden'} sm:p-0`}
      >
        <AnchorLink className="py-1 block sm:px-4" href="#features">
          Features
        </AnchorLink>
        <AnchorLink className="py-1 block sm:px-4" href="#works">
          How it works
        </AnchorLink>
        <AnchorLink className="py-1 block sm:px-4" href="#products">
          Products
        </AnchorLink>
        <AnchorLink className="py-1 block sm:px-4" href="#contact">
          Contact
        </AnchorLink>
      </div>
      <div className="hidden mr-6 lg:block">
        <Link to="/register/">
          <Button
            className="text-sm"
            onClick={e => {
              trackCustomEvent({
                category: 'Signup initiate',
                action: 'Click',
                label: 'Header - get started button'
              });
            }}
          >
            Get Started
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
