import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import './App.css';

var data = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
    datasets: [{
        label: "A(H1N1) pdm 09",
        legend: {
            display: true,
            position: 'right'
        },
        backgroundColor: '#4682B4',
        data: [4, 14, 12, 2, 1],
    },

    {
        label: "A(H3N2) seasonal",
        legend: {
            display: true,
            position: 'right'
        },
        backgroundColor: '#B0E0E6',
        data: [3, 10, 5, 2, 20],
    },

    {
        label: "Influenza B",
        legend: {
            display: true,
            position: 'right'
        },
        backgroundColor: '#FFD700',
        data: [2, 12, 4, 7, 18],
    },

    {
        label: "Not yet subtyped",
        legend: {
            display: true,
            position: 'right'
        },
        backgroundColor: '#808080',
        data: [3, 14, 6, 9, 20],
    },

    {
        label: "A(H1N1) seasonal",
        legend: {
            display: true,
            position: 'right'
        },
        backgroundColor: '#FF0000',
        data: [3, 10, 5, 2, 20],
    },

    {
        label: "Influenza A non-subtypable",
        legend: {
            display: true,
            position: 'right'
        },
        backgroundColor: '#000000',
        data: [3, 10, 5, 2, 20],
    },

    {
        label: "Influenza A Subtype Inconclusive (CT value > 37)",
        legend: {
            display: true,
            position: 'right'
        },
        backgroundColor: '#008000',
        data: [3, 10, 5, 2, 20],
    },

    {
        label: "Percentage Influenza Positive SARI & ILI Samples",
        legend: {
            display: true,
            position: 'right'
        },
        backgroundColor: '#C0C0C0',
        data: [3, 10, 5, 2, 20],
    }
    ]
}

class FluenzaSpecimen extends Component {

    render() {
        return (
            <div className="row">
                <div className="col-12" id="disease_specific_chart">
                    <Bar data={data} className="fullsize"
                    />
                </div>
            </div>
        )
    }
}

export default FluenzaSpecimen;

