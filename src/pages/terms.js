import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { Link } from 'gatsby';

const Terms = () => (
  <Layout>
    <SEO pathname="/terms/" />
    <div className="container text-center mx-auto">
      <h1 className="text-3xl lg:text-4xl text-gray-600 py-12">Fyli Terms of Service</h1>
      <div className="text-xl text-left lg:text-justify px-6 text-gray-600 lg:text-2xl font-light lg:px-12">
        <p className="text-2xl pb-4 font-semibold lg:text-3xl">1. Terms</p>
        <p className="pb-6 sm:pl-6">
          By accessing the website at http://www.fyli.me, you are agreeing to be bound by these
          terms of service, all applicable laws and regulations, and agree that you are responsible
          for compliance with any applicable local laws. If you do not agree with any of these
          terms, you are prohibited from using or accessing this site. The materials contained in
          this website are protected by applicable copyright and trademark law.
        </p>
        <p className="text-2xl pb-4 font-semibold lg:text-3xl">2. Use License</p>
        <p className="sm:pl-6 pb-4">
          a. Permission is granted to temporarily download one copy of the materials (information or
          software) on Fyli's website for personal, non-commercial transitory viewing only. This is
          the grant of a license, not a transfer of title, and under this license you may not:
        </p>
        <p className="pl-4 sm:pl-12 pb-4">i. modify or copy the materials;</p>
        <p className="pl-4 sm:pl-12 pb-4">
          ii. use the materials for any commercial purpose, or for any public display (commercial or
          non-commercial);
        </p>
        <p className="pl-4 sm:pl-12 pb-4">
          iii. attempt to decompile or reverse engineer any software contained on Fyli's website;
        </p>
        <p className="pl-4 sm:pl-12 pb-4">
          iv. remove any copyright or other proprietary notations from the materials; or
        </p>
        <p className="pl-4 sm:pl-12 pb-4">
          v. transfer the materials to another person or "mirror" the materials on any other server.
        </p>
        <p className="sm:pl-6 pb-6 sm:pl-6">
          b. This license shall automatically terminate if you violate any of these restrictions and
          may be terminated by Fyli at any time. Upon terminating your viewing of these materials or
          upon the termination of this license, you must destroy any downloaded materials in your
          possession whether in electronic or printed format.
        </p>

        <p className="text-2xl pb-4 font-semibold lg:text-3xl">3. Disclaimer</p>
        <p className="sm:pl-6 pb-6 sm:pl-6">
          a. The materials on Fyli's website are provided on an 'as is' basis. Fyli makes no
          warranties, expressed or implied, and hereby disclaims and negates all other warranties
          including, without limitation, implied warranties or conditions of merchantability,
          fitness for a particular purpose, or non-infringement of intellectual property or other
          violation of rights.
        </p>
        <p className="sm:pl-6 pb-6 sm:pl-6">
          b. Further, Fyli does not warrant or make any representations concerning the accuracy,
          likely results, or reliability of the use of the materials on its website or otherwise
          relating to such materials or on any sites linked to this site.
        </p>
        <p className="text-2xl pb-4 font-semibold lg:text-3xl">4. Limitations</p>
        <p className="pb-6 sm:pl-6">
          In no event shall Fyli or its suppliers be liable for any damages (including, without
          limitation, damages for loss of data or profit, or due to business interruption) arising
          out of the use or inability to use the materials on Fyli's website, even if Fyli or a Fyli
          authorized representative has been notified orally or in writing of the possibility of
          such damage. Because some jurisdictions do not allow limitations on implied warranties, or
          limitations of liability for consequential or incidental damages, these limitations may
          not apply to you.
        </p>
        <p className="text-2xl pb-4 font-semibold lg:text-3xl">5. Accuracy of materials</p>
        <p className="pb-6 sm:pl-6">
          The materials appearing on Fyli's website could include technical, typographical, or
          photographic errors. Fyli does not warrant that any of the materials on its website are
          accurate, complete or current. Fyli may make changes to the materials contained on its
          website at any time without notice. However Fyli does not make any commitment to update
          the materials.
        </p>
        <p className="text-2xl pb-4 font-semibold lg:text-3xl">6. Links</p>
        <p className="pb-6 sm:pl-6">
          Fyli has not reviewed all of the sites linked to its website and is not responsible for
          the contents of any such linked site. The inclusion of any link does not imply endorsement
          by Fyli of the site. Use of any such linked website is at the user's own risk.
        </p>
        <p className="text-2xl pb-4 font-semibold lg:text-3xl">7. Modifications</p>
        <p className="pb-6 sm:pl-6">
          Fyli may revise these terms of service for its website at any time without notice. By
          using this website you are agreeing to be bound by the then current version of these terms
          of service.
        </p>
        <p className="text-2xl pb-4 font-semibold lg:text-3xl">8. Governing Law</p>
        <p className="pb-6 sm:pl-6">
          These terms and conditions are governed by and construed in accordance with the laws of
          Govt. of India and you irrevocably submit to the exclusive jurisdiction of the courts in
          India.
        </p>
      </div>
    </div>
  </Layout>
);

export default Terms;
