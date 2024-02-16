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
      </div>
    );
  }
}
