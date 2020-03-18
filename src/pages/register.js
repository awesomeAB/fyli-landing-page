/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { navigate } from 'gatsby';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';

const isFormValid = () => {
  const email = document.getElementById('email').value;
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
};
const handleSubmit = () => {
  trackCustomEvent({
    category: 'Signup complete',
    action: 'Click',
    label: 'Form submitted'
  });
  const name = document.getElementById('username').value;
  navigate('/thanks/', { state: { name } });
};

const Register = () => {
  const [isValid, setIsValid] = useState(true);

  return (
    <Layout>
      <SEO pathname="/register/" />
      <div className="container mx-auto my-8">
        <h1 className="text-4xl text-gray-600 text-center py-12">
          Fyli Early Access Registrations
        </h1>
        <p className="text-xl px-8 pb-8 text-gray-600 font-light text-center">
          We are currently looking for enthusiastic influencers to kickstart operations in India,
          enter your details below to sign up.
        </p>
        <form
          action="https://docs.google.com/forms/u/2/d/e/1FAIpQLSfRQO0dqzyjQ6jTw1jvHv5LYkmKRAmhRKwoBrZ9WurJEgZZ5w/formResponse?embedded=true"
          target="_blank"
          method="POST"
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 sm:px-32 lg:px-56 xl:px-64"
          id="mG61Hd"
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              What is your name?
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              name="entry.985019420"
              type="text"
              placeholder="Enter name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email address *
            </label>
            <input
              className={`${
                isValid ? '' : 'border-red-500'
              } shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              id="email"
              name="emailAddress"
              type="email"
              placeholder="you@example.com"
              required
              onBlur={() => (isFormValid() ? setIsValid(true) : setIsValid(false))}
            />
            {!isValid && (
              <p className="text-red-500 text-xs italic">Please enter a valid email address.</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              What is the best way to get in touch with you?
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              name="entry.100862816"
              type="text"
              placeholder="Enter Phone/WhatsApp/Email/DM"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              YouTube Channel Link
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              name="entry.185149253"
              type="text"
              placeholder="https://www.youtube.com/user/MrBean"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Instagram Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              name="entry.400065935"
              type="text"
              placeholder="@instagram"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              TikTok Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              name="entry.1259872157"
              type="text"
              placeholder="@tiktok"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Any other social profiles that you wanna share?
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              name="entry.1376220157"
              type="text"
              placeholder="Twitter? Facebook?"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              What is the approximate size of your audience?
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              name="entry.683183847"
              type="text"
              placeholder="1.5M"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              What percentage of your audience do you think will be willing to buy your products?
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              name="entry.1388416262"
              type="text"
              placeholder="10%"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Any other thoughts/questions for us?
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              name="entry.873134478"
              type="text"
              placeholder="Shoot your questions!"
            />
          </div>
          <div className="flex items-center justify-center mt-12 mb-4">
            <button
              className="bg-primary hover:bg-primary-darker rounded text-white py-3 px-8"
              type="submit"
              onClick={() => (isFormValid() ? handleSubmit() : '')}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
