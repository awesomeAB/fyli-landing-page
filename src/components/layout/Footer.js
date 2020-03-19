import React from 'react';
import { Link } from 'gatsby';

const Footer = () => (
  <footer className="bg-gray-100 pt-16 px-4 sm:mt-48 pb-8 shadow-xs text-gray-600 items-center bottom-0">
    <div className="flex flex-col sm:flex-row">
      <div className="text-lg flex-1 px-3 leading-loose sm:pl-24 lg:pl-40 xl:pl-56">
        <h2 className="text-xl font-semibold">Contact Us</h2>
        <p className="mt-4">Fyli, Innov8 Koramangala, Bangalore, 560095.</p>
        <a href="tel:9353306268">
          <p>Call us: +91 935-330-6268</p>
        </a>
        <a href="mailto:hello@fyli.me">
          <p>Write to us: hello@fyli.me</p>
        </a>
      </div>
      <div className="flex-1 text-lg px-3 my-6 sm:my-0">
        <h2 className="text-xl font-semibold">Important Links</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <Link to="/terms/">Terms &amp; Conditions</Link>
          </li>
          <li>
            <Link to="/shipping/">Shipping &amp; Returns</Link>
          </li>
          <li>
            <Link to="/privacy/">Privacy Policy</Link>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-3 text-lg">
        <h2 className="text-xl font-semibold sm:px-4">Social Media</h2>
        <div className="flex justify-center sm:justify-between">
          <ul className="mt-4 leading-loose">
            <li className="my-2 inline-block px-2">
              <a href="#home">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 512 512">
                  <defs>
                    <radialGradient
                      r="684.4449"
                      id="SVGID_1_"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="matrix(5.660332e-002 -1.08 0.918 4.811314e-002 -5.988 520.5566)"
                      cy="13.5086"
                      cx="51.9924"
                    >
                      <stop stopColor="#FED576" offset="0" />
                      <stop stopColor="#F47133" offset="0.2634" />
                      <stop stopColor="#BC3081" offset="0.6091" />
                      <stop stopColor="#4C63D2" offset="1" />
                    </radialGradient>
                  </defs>
                  <g>
                    <title>background</title>
                    <rect
                      fill="none"
                      id="canvas_background"
                      height="402"
                      width="582"
                      y="-1"
                      x="-1"
                    />
                  </g>
                  <g>
                    <title>Layer 1</title>
                    <path
                      id="svg_2"
                      fill="url(#SVGID_1_)"
                      d="m0,249.5l0,13.8c3.6,132.4 110.2,238.7 237.1,248.7l39,0c127.6,-10.1 232.4,-117.3 235.9,-248.9l0,-13.6c-3.5,-133.9 -111.9,-242.5 -242.6,-249.2c-140.6,-7.1 -265.5,105.7 -269.4,249.2z"
                    />
                    <path
                      id="svg_4"
                      fill="#FFFFFF"
                      d="m257.2,128.6c40.8,0 45.6,0.1 61.8,0.9c14.9,0.6 22.9,3.2 28.3,5.3c7.1,2.8 12.2,6.2 17.5,11.6c5.3,5.4 8.7,10.6 11.5,17.8c2.1,5.5 4.5,13.7 5.3,28.9c0.8,16.4 0.9,21.3 0.9,62.8s-0.1,46.4 -0.9,62.8c-0.6,15.1 -3.1,23.4 -5.3,28.9c-2.8,7.2 -6.1,12.4 -11.5,17.8c-5.3,5.4 -10.4,8.8 -17.5,11.6c-5.4,2.2 -13.5,4.7 -28.3,5.3c-16.1,0.8 -21,0.9 -61.8,0.9s-45.6,-0.1 -61.8,-0.9c-14.9,-0.6 -22.9,-3.2 -28.3,-5.3c-7.1,-2.8 -12.2,-6.2 -17.5,-11.6s-8.7,-10.6 -11.5,-17.8c-2.1,-5.5 -4.5,-13.7 -5.3,-28.9c-0.8,-16.4 -0.9,-21.3 -0.9,-62.8s0.1,-46.4 0.9,-62.8c0.6,-15.1 3.1,-23.4 5.3,-28.9c2.8,-7.2 6.1,-12.4 11.5,-17.8c5.3,-5.4 10.4,-8.8 17.5,-11.6c5.4,-2.2 13.5,-4.7 28.3,-5.3c16.1,-0.7 21,-0.9 61.8,-0.9m0,-28c-41.5,0 -46.7,0.2 -62.9,1s-27.4,3.4 -37.1,7.2c-10.1,4 -18.6,9.3 -27,18c-8.5,8.7 -13.7,17.3 -17.6,27.6c-3.8,9.8 -6.4,21.2 -7.1,37.7c-0.8,16.5 -0.9,21.8 -0.9,64s0.2,47.5 0.9,64c0.8,16.5 3.4,27.8 7.1,37.7c3.9,10.2 9.1,18.9 17.6,27.6s17,14 27,18c9.7,3.9 20.9,6.5 37.1,7.2c16.3,0.8 21.5,1 62.9,1s46.7,-0.2 62.9,-1c16.2,-0.8 27.4,-3.4 37.1,-7.2c10.1,-4 18.6,-9.3 27,-18c8.5,-8.7 13.7,-17.3 17.6,-27.6c3.8,-9.8 6.4,-21.2 7.1,-37.7c0.8,-16.5 0.9,-21.8 0.9,-64s-0.2,-47.5 -0.9,-64c-0.8,-16.5 -3.4,-27.8 -7.1,-37.7c-3.9,-10.2 -9.1,-18.9 -17.6,-27.6s-17,-14 -27,-18c-9.7,-3.9 -20.9,-6.5 -37.1,-7.2c-16.2,-0.8 -21.5,-1 -62.9,-1l0,0z"
                    />
                    <path
                      id="svg_5"
                      fill="#FFFFFF"
                      d="m257.2,176.2c-43.4,0 -78.4,35.7 -78.4,79.8s35.1,79.8 78.4,79.8s78.4,-35.7 78.4,-79.8s-35.1,-79.8 -78.4,-79.8zm0,131.6c-28.1,0 -50.9,-23.1 -50.9,-51.8s22.8,-51.8 50.9,-51.8s50.9,23.1 50.9,51.8c0,28.7 -22.8,51.8 -50.9,51.8z"
                    />
                    <ellipse id="svg_6" ry="18.6" rx="18.3" fill="#FFFFFF" cy="173" cx="338.7" />
                  </g>
                </svg>
              </a>
            </li>

            <li className="my-2 inline-block px-2">
              <a href="#home">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 120 120">
                  <circle cx="56.098" cy="56.098" r="56.098" fill="#3b5998" />
                  <path
                    d="M70.201 58.294h-10.01v36.672H45.025V58.294h-7.213V45.406h7.213v-8.34c0-5.964 2.833-15.303 15.301-15.303l11.234.047v12.51h-8.151c-1.337 0-3.217.668-3.217 3.513v7.585h11.334l-1.325 12.876z"
                    fill="#fff"
                  />
                </svg>
              </a>
            </li>

            <li className="my-2 inline-block px-2">
              <a href="#home">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 128 128">
                  <circle cx="64" cy="64" fill="#25D366" r="64" />
                  <path
                    d="M92.346 35.49c-7.522-7.53-17.523-11.678-28.179-11.683-21.954 0-39.826 17.868-39.833 39.831a39.743 39.743 0 005.316 19.913L24 104.193l21.115-5.538a39.837 39.837 0 0019.036 4.847h.017c21.954 0 39.823-17.871 39.832-39.833.005-10.642-4.136-20.65-11.654-28.179M64.168 96.774h-.013a33.062 33.062 0 01-16.853-4.614l-1.209-.718-12.53 3.287 3.343-12.216-.787-1.256a32.998 32.998 0 01-5.062-17.619c.006-18.253 14.859-33.104 33.121-33.104 8.844.002 17.155 3.451 23.407 9.71 6.251 6.258 9.691 14.575 9.689 23.422-.006 18.256-14.859 33.108-33.106 33.108m18.16-24.795c-.996-.499-5.889-2.904-6.802-3.239-.913-.332-1.574-.497-2.238.499s-2.571 3.239-3.153 3.903c-.58.664-1.16.748-2.156.249s-4.202-1.549-8.001-4.941c-2.96-2.637-4.958-5.899-5.538-6.895s-.062-1.533.437-2.03c.448-.446.996-1.162 1.493-1.744.497-.582.663-.997.995-1.66.332-.664.167-1.245-.083-1.743-.25-.499-2.24-5.398-3.068-7.391-.809-1.941-1.629-1.678-2.239-1.708a41.082 41.082 0 00-1.908-.036c-.663 0-1.742.249-2.654 1.246-.911.996-3.483 3.403-3.483 8.304 0 4.898 3.566 9.632 4.064 10.295.498.663 7.018 10.718 17.002 15.029a57.94 57.94 0 005.674 2.097c2.384.759 4.554.65 6.27.394 1.912-.285 5.888-2.407 6.719-4.732.829-2.324.829-4.316.578-4.732-.251-.417-.915-.666-1.909-1.165"
                    fill="#FFF"
                  />
                </svg>
              </a>
            </li>

            <li className="my-2 inline-block px-2">
              <a href="#home">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 112 112">
                  <circle cx="56.099" cy="56.098" r="56.098" fill="#55acee" />
                  <path
                    d="M90.461 40.316a26.753 26.753 0 01-7.702 2.109 13.445 13.445 0 005.897-7.417 26.843 26.843 0 01-8.515 3.253 13.396 13.396 0 00-9.79-4.233c-7.404 0-13.409 6.005-13.409 13.409 0 1.051.119 2.074.349 3.056-11.144-.559-21.025-5.897-27.639-14.012a13.351 13.351 0 00-1.816 6.742c0 4.651 2.369 8.757 5.965 11.161a13.314 13.314 0 01-6.073-1.679l-.001.17c0 6.497 4.624 11.916 10.757 13.147a13.362 13.362 0 01-3.532.471c-.866 0-1.705-.083-2.523-.239 1.706 5.326 6.657 9.203 12.526 9.312a26.904 26.904 0 01-16.655 5.74c-1.08 0-2.15-.063-3.197-.188a37.929 37.929 0 0020.553 6.025c24.664 0 38.152-20.432 38.152-38.153 0-.581-.013-1.16-.039-1.734a27.192 27.192 0 006.692-6.94z"
                    fill="#f1f2f2"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <p className="text-gray-600 text-center mt-8">© Fyli 2020. All Rights Reserved.</p>
  </footer>
);

export default Footer;
