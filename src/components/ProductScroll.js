import React from 'react';
import Carousel from 'react-elastic-carousel';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Stats = () => {
  const data = useStaticQuery(graphql`
    query mockups {
      images: allFile(filter: { relativeDirectory: {} }) {
        nodes {
          id
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
          base
        }
      }
    }
  `);
  return (
    <div className="container mx-auto text-center">
      <Carousel className="mockup-container" itemsToShow={1} enableAutoPlay autoPlaySpeed={10000}>
        {data.images.nodes.map(image => (
          <div key={image.id}>
            <Img key={image.id} fixed={image.childImageSharp.fixed} />
            <p className="text-gray-600 text-xl">{image.base.split('.')[0]}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Stats;
