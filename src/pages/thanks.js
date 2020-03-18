import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';

const Terms = ({ location }) => (
  <Layout>
    <SEO pathname="/thanks/" />
    <div className="container mx-auto">
      <h1 className="px-4 text-2xl text-gray-600 text-center pt-12">
        Thanks for applying{location.state ? `, ${location.state.name}` : ''}.
      </h1>

      <p className="px-4 text-xl text-gray-600 text-center pt-12">
        Due to a high volume of incoming requests, it might take us a few days to review your
        application. Hope to get in touch with you soon &#128524;
      </p>
      <p className="px-4 text-xl text-gray-600 text-center pt-4 pb-12">
        Meanwhile, feel free to write to us: <a href="mailto:hello@fyli.me">hello@fyli.me</a>
      </p>
    </div>
  </Layout>
);

export default Terms;
