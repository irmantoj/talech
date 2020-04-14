import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import _ from "lodash";

const Chart = (props) => {

    const { chartData , title, yAxisTitle } = props

    let updatedAt = chartData.map(d => d.updatedAt);
    let values = chartData.map(d => parseInt(d.value));

    updatedAt = _.takeRight(updatedAt, 5);
    values = _.takeRight(values, 5);

    const options = {
        chart: {
          type: "spline"
        },
        title: {
          text: title
        },
        xAxis : {
          categories: updatedAt
        },
        yAxis: {
            title: {
                text: yAxisTitle,
                allowDecimals: false,
            }
        },
        series: [{
            name: yAxisTitle,
            data: values,
        }]
    };

    return (
        <HighchartsReact highcharts={Highcharts} options={options} />
    )

}

export default Chart;