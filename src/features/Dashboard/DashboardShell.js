import React, { useState} from "react";
import Aside from "../../common/components/Aside";
import ChartContainer from "./ChartContainer";
import Layout from "../../common/components/Layout";
import Main from "../../common/components/Main";
import SummaryContainer from "./SummaryContainer";

async function fetchDataset(endpoint) {
  const response = await fetch(endpoint);
  return response.json();
}

function DashboardShell (props) {
  const [selectedLabel, setSelectedLabel] = useState("")
  const [timeSeriesData, setTimeSeriesData] = useState([]);

  const handleSelectChange = async (event) => {
    const selectedLabel = event.target.selectedOptions[0].label;
    const response = await fetchDataset(event.target.value);
    setSelectedLabel(selectedLabel);
    setTimeSeriesData(response);
  }

  const buildSelect = () => {
    const optionsForSelect = [
      { label: "Sales", value: `${process.env.REACT_APP_BASE_URL}/sales/` },
      {
        label: "Subscriptions",
        value: `${process.env.REACT_APP_BASE_URL}/subscriptions/`
      }
    ];

    return (
      <>
        <label htmlFor="select-product">Please select a chart:</label>
        <div className="field">
          <select id="select-product" onChange={handleSelectChange}>
            <option value="">--</option>
            {optionsForSelect.map(option => (
              <option key={option.label} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="chevron-wrapper flex">
            <svg
              className="chevron"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
        {timeSeriesData.map(tsd => (
            <p key={tsd.timestamp}>{tsd.timestamp} - {tsd.amount}</p>
        ))}
      </>
    );
  }
  return (
    <Layout>
      <Aside>
        <h2># Polly dashboard</h2>
        {buildSelect()}
      </Aside>
      <Main>
        <h1>
          Welcome, <span className="bold">learner!</span>
        </h1>
        <SummaryContainer />
        <ChartContainer selectedLabel={selectedLabel} />
      </Main>
    </Layout>
  );
}

export default DashboardShell;
