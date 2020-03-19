import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';

const Shipping = () => (
  <Layout>
    <SEO pathname="/shipping/" />
    <div className="container text-center mx-auto">
      <h1 className="text-3xl lg:4xl text-gray-600 py-12">Fyli Shipping &amp; Return Policy</h1>
      <div className="text-xl text-left lg:text-justify px-6 text-gray-600 lg:text-2xl font-light lg:px-12">
        <p className="text-2xl pb-4 font-semibold lg:text-3xl">Shipping</p>
        <p className="pb-4">
          We have partnered with some of the best shipping providers like FedEx, DHL, Bluedart,
          Delhivery, etc. to get your orders delivered in the fastest possible way to the customers.
          It takes 48-72 hours to process and dispatch the orders depending upon the product and
          printing requirements.
        </p>
        <p className="pb-4">
          All domestic orders should be delivered in 2-7 working days and tracking details will be
          provided for all orders.
        </p>
        <p className="pb-8">
          We also support international shipping on a case-by-case basis. Please write to us at{' '}
          <a href="mailto:support@fyli.me">support@fyli.me</a> for international shipping or any
          other queries.
        </p>
        <p className="text-2xl pb-4 font-semibold lg:text-3xl">Returns &amp; Exchanges</p>
        <p className="pb-4">
          Issues related to misprinting, damaged or defective items must be communicated to Fyli
          within 3 days upon the delivery of the product. We will provide an exhchange or refund for
          such quality related issues subject to verification.
        </p>
        <p className="pb-6">
          We can not accept returns or exchanges for any custom printed order due to reasons that
          fall under the customer such as change of mind or size related issues. For all other
          genuine issues, please write to us at <a href="mailto:support@fyli.me">support@fyli.me</a>{' '}
          and we will try our best to resolve your issues.
        </p>

        <p className="text-2xl pb-4 font-semibold lg:text-3xl">Cancellations</p>
        <p className="pb-4">
          In case we receive a cancellation notice and the order has not been processed by us, we
          shall cancel the order immediately and refund the entire amount back as credits into your
          Printrove Account. If we have already printed and shipped the product, we will not be able
          to approve the cancellation request. In such cases, the product follows the normal
          lifecycle process.
        </p>
        <p className="pb-8">
          For cancellations, please mail us as soon as possible at{' '}
          <a href="mailto:cancel@fyli.me">cancel@fyli.me</a> along with your order details.
        </p>
        <p className="text-2xl pb-4 font-semibold lg:text-3xl">Disclaimer</p>
        <p className="pb-4">
          Under certain circumstances, it might not be possible for us to accept an order and we may
          be compelled to cancel the same. We reserve the right to refuse or cancel any order for
          any reason at our sole discretion.
        </p>
        <p className="pb-8">
          Some situations that may result in your order being canceled include limitations on
          quantities available for purchase, inaccuracies or errors in product or pricing
          information, or problems identified by our credit and fraud avoidance department. We may
          also ask for additional verification or information before accepting any order. We will
          contact you if all or any portion of your order is canceled or if additional information
          is required to accept your order. If your order is canceled after you are charged, the
          said amount will be reversed back in your bank account in the next 7-10 business days.
        </p>
      </div>
    </div>
  </Layout>
);

export default Shipping;
