import React, { useState} from "react";
import Aside from "../../common/components/Aside";
import ChartContainer from "./ChartContainer";
import Layout from "../../common/components/Layout";
import Main from "../../common/components/Main";
import Select from "../../common/components/Select";
import SummaryContainer from "./SummaryContainer";

function DashboardShell () {
  const [selectedLabel, setSelectedLabel] = useState("")

  const handleSelectChange = async (event) => {
    const selectedLabel = event.target.selectedOptions[0].label;
    setSelectedLabel(selectedLabel);
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
      <Select
        handleChange={handleSelectChange}
        label="Please, select a chart"
        id="select-chart"
        options={optionsForSelect}
      />
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
