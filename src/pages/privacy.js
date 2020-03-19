import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { Link } from 'gatsby';

const Privacy = () => (
  <Layout>
    <SEO pathname="/privacy/" />
    <div className="container text-center mx-auto">
      <h1 className="text-3xl lg:text-4xl text-gray-600 py-12">Fyli Privacy Policy</h1>
      <div className="text-xl text-left lg:text-justify px-6 text-gray-600 lg:text-2xl font-light lg:px-12">
        <p className="pb-4">
          Your privacy is important to us. It is Fyli's policy to respect your privacy regarding any
          information we may collect from you across our website, (
          <Link to="/">https://www.fyli.me</Link>), and other sites we own and operate.
        </p>
        <p className="py-4">
          We only ask for personal information when we truly need it to provide a service to you. We
          collect it by fair and lawful means, with your knowledge and consent. We also let you know
          why we’re collecting it and how it will be used.
        </p>
        <p className="py-4">
          We only retain collected information for as long as necessary to provide you with your
          requested service. What data we store, we’ll protect within commercially acceptable means
          to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or
          modification.
        </p>
        <p className="py-4">
          We don’t share any personally identifying information publicly or with third-parties,
          except when required to by law.
        </p>
        <p className="py-4">
          Our website may link to external sites that are not operated by us. Please be aware that
          we have no control over the content and practices of these sites, and cannot accept
          responsibility or liability for their respective privacy policies.
        </p>
        <p className="py-4">
          You are free to refuse our request for your personal information, with the understanding
          that we may be unable to provide you with some of your desired services.
        </p>
        <p className="py-4">
          Your continued use of our website will be regarded as acceptance of our practices around
          privacy and personal information. If you have any questions about how we handle user data
          and personal information, feel free to contact us.
        </p>
        <p className="py-4">
          This policy is effective as of 19 March 2020. Fyli may periodically make changes to this
          Privacy Policy that will be posted on our website (<Link to="/">https://www.fyli.me</Link>
          ) or communicated to you through other reasonable means (e.g. email or mobile alerts). We
          encourage you to periodically review this page for the latest information on our privacy
          practices.
        </p>
      </div>
    </div>
  </Layout>
);

export default Privacy;
