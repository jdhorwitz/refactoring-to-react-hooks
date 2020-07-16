import React from "react";
import { Context } from '../../App';

const SummaryContainer = () => {
  return (
    <Context.Consumer>
      {context => (
        <div className="summary flex flex-row">
          <div className="card bg-indigo">
            <p>CellFast sales</p>
            <p>$ {context.salesTotal}</p>
          </div>
          <div className="card bg-blue">
            <p>CellNow subscriptions</p>
            <p>$ {context.subscriptionsTotal}</p>
          </div>
        </div>
      )}
    </Context.Consumer>
  );
};

export default SummaryContainer;
