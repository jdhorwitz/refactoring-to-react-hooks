import React from "react";
import LineChart from "./LineChart";
import { Context } from '../../App';

const ChartContainer = (props) => {
  return (
    <Context.Consumer>
      {context => (
        <div>
          <LineChart
            chartLabels={context.data.map(dataPoint => dataPoint.timestamp)}
            chartValues={context.data.map(dataPoint => dataPoint.amount)}
            label={props.selectedLabel}
          />
        </div>
      )}
    </Context.Consumer>
  );
};

export default ChartContainer;
