import React from 'react';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import { Link } from 'gatsby';
import Button from '../components/Button';
import Card from '../components/Card';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import ProductScroll from '../components/ProductScroll';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
import Money from '../svg/Money';
import Onboarding from '../svg/Onboarding';
import StoreIcon from '../svg/StoreIcon';
import DesignIcon from '../svg/DesignIcon';
import OrderIcon from '../svg/OrderIcon';
import PayIcon from '../svg/PayIcon';
import SEO from '../components/SEO';

export default () => (
  <Layout>
    <SEO pathname="" />
    <section id="home" className="sm:pt-20 md:pt-40 mt-20 mb-20">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center md:px-6 lg:text-left lg:w-1/2">
          <h1 className="text-3xl pb-4 lg:text-5xl xl:text-6xl font-bold leading-none">
            What's your story?
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Fyli is a free end-to-end platform for influencers, artists and content creators for
            selling their products and merch online. All you have to do is BE AWESOME. Leave the
            rest to us.
          </p>
          <p className="text-xl lg:text-2xl mt-4 text-gray-600 italic">
            "Find your tribe, tell your story."
          </p>
          <p className="mt-8 md:mt-12">
            <Link to="/register/">
              <Button
                size="lg"
                onClick={e => {
                  trackCustomEvent({
                    category: 'Signup initiate',
                    action: 'Click',
                    label: 'I am interested button'
                  });
                }}
              >
                I'm Interested
              </Button>
            </Link>
          </p>
          <p className="my-4 text-gray-600">Sign up for early access!</p>
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
    <section id="features" className="sm:py-20 lg:pb-40 lg:pt-40 xl:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Features</h2>
        <div className="flex flex-col mx-3 sm:flex-row flex-wrap py-10 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <StoreIcon className="inline-block" />
              <p className="font-semibold text-xl mt-6">Custom Store</p>
              <p className="mt-4">
                We will build a custom storefront tailored to your brand, which will be hosted and
                managed on our secure and reliable servers.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <DesignIcon />
              <p className="font-semibold text-xl mt-6">Bespoke Design</p>
              <p className="mt-4">
                Our team of in-house designers will make sure that your already awesome designs look
                even better on the real products.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <OrderIcon />
              <p className="font-semibold text-xl mt-6">Order Fulfilment</p>
              <p className="mt-4">
                We will produce, pack and ship your products directly to your fans. You focus on
                what you do best, CREATE. Forget about the rest.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <PayIcon />
              <p className="font-semibold text-xl mt-6">Monthly Payouts</p>
              <p className="mt-4">
                You can track all orders on the Fyli dashboard along with granular revenue data.
                Your profits will be paid out on a monthly basis.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <section id="works" className="sm:py-20 lg:py-30">
      <h2 className="text-3xl lg:text-5xl font-semibold text-center pt-4 pb-10">How it works?</h2>
      <SplitSection
        primarySlot={
          <div className="lg:pr-32 xl:pr-48">
            <h3 className="text-2xl font-semibold leading-tight">Onboarding</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Our team of enthusiastic marketers will work with you 1:1 to set up your store. We
              will help you finalize the products, designs, pricing and the look of your store.
            </p>
          </div>
        }
        secondarySlot={<Onboarding />}
      />
      <SplitSection
        reverseOrder
        primarySlot={
          <div className="lg:pl-32 xl:pl-48">
            <h3 className="text-2xl font-semibold leading-tight">Revenue analytics</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Upon onboarding you will be given access to the Fyli dashboard, which will bring all
              the store data in one place for you to analyze and optimize.
            </p>
          </div>
        }
        secondarySlot={<SvgCharts />}
      />
      <SplitSection
        primarySlot={
          <div className="lg:pr-32 xl:pr-48">
            <h3 className="text-2xl font-semibold leading-tight">Monthly Payouts</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              The profit generated from the sales of your products will be paid out to you on a
              monthly basis. This is negotiable depending upon your sales volume.*
            </p>
          </div>
        }
        secondarySlot={<Money />}
      />
    </section>
    <section id="products" className="py-20 lg:pt-32">
      <ProductScroll />
    </section>
    <section
      id="contact"
      className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center"
    >
      <h3 className="text-5xl font-semibold">Ready to grow your brand?</h3>
      <p className="mt-8 text-xl font-light">
        We are currently looking for super awesome influencers to kickstart Fyli in India.
      </p>
      <p className="mt-8">
        <Link to="/register/">
          <Button
            size="xl"
            onClick={e => {
              trackCustomEvent({
                category: 'Signup initiate',
                action: 'Click',
                label: 'Footer - Get started button'
              });
            }}
          >
            Get Started Now
          </Button>
        </Link>
      </p>
    </section>
  </Layout>
);
