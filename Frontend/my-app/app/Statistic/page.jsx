'use client'
import React, { Component } from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import Navbar from "../Navbar/page";

// Sample pollution data
const pollutionData = [
  { name: 'Air Pollution', value: 800 },
  { name: 'Water Pollution', value: 500 },
  { name: 'Plastic Pollution', value: 300 },
  { name: 'Soil Pollution', value: 200 },
];

// Assigning colors based on pollution categories
const COLORS = ['#FF5733', '#33FFC7', '#337BFF', '#FF33E6'];

export default class PollutionPieChart extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <PieChart width={800} height={400}>
          <Pie
            data={pollutionData}
            cx={200}
            cy={200}
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {pollutionData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
          <Tooltip />
        </PieChart>
      <div>
    <h3>Air Pollution</h3>
    <p>Air pollution refers to the release of harmful substances into the atmosphere, resulting in adverse effects on human health and the environment.</p>
    <h3>Water Pollution</h3>
    <p>Water pollution occurs when harmful substances contaminate bodies of water, such as rivers, lakes, and oceans, leading to negative impacts on aquatic life and human health.</p>
    <h3>Plastic Pollution</h3>
    <p>Plastic pollution is the accumulation of plastic waste in the environment, causing harm to wildlife, ecosystems, and human health.</p>
    <h3>Soil Pollution</h3>
    <p>Soil pollution involves the contamination of soil with harmful substances, such as chemicals and heavy metals, leading to degradation of soil quality and impacts on plant growth and human health.</p>
      </div>
      </div>
    );
  }
}
