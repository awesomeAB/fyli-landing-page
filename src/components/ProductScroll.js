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
        }
      }
    }
  `);
  return (
    <div className="container mx-auto text-center">
      <Carousel className="mockup-container" itemsToShow={1} enableAutoPlay autoPlaySpeed={5000}>
        {data.images.nodes.map(image => (
          <Img key={image.id} fixed={image.childImageSharp.fixed} />
        ))}
      </Carousel>
    </div>
  );
};

export default Stats;
