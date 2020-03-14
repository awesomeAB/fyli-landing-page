import React from 'react';
import StatsBox from './StatsBox';
import LabelText from './LabelText';

const Stats = () => (
  <div className="container mx-auto text-center">
    <LabelText className="text-gray-600">Our customers get results</LabelText>
    <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
      <div className="w-full sm:w-1/3">
        <StatsBox primaryText="+100%" secondaryText="Stats Information" />
      </div>
      <div className="w-full sm:w-1/3">
        <StatsBox primaryText="+100%" secondaryText="Stats Information" />
      </div>
      <div className="w-full sm:w-1/3">
        <StatsBox primaryText="+100%" secondaryText="Stats Information" />
      </div>
    </div>
  </div>
);

export default Stats;
