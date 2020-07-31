import React, { useContext } from 'react';
import LineChart from './LineChart';
import PropTypes from 'prop-types';
import { Context } from '../../Provider';

const ChartContainer = ({ selectedLabel }) => {
  const { value } = useContext(Context);
  const { data: dataset } = value;

  const chartLabels = dataset.map((dataPoint) => dataPoint.timestamp);
  const chartValues = dataset.map((dataPoint) => dataPoint.amount);

  return (
    <div>
      <LineChart
        chartLabels={chartLabels}
        chartValues={chartValues}
        label={selectedLabel}
      />
    </div>
  );
};

ChartContainer.propTypes = {
  selectedLabel: PropTypes.string.isRequired,
};

export default ChartContainer;
