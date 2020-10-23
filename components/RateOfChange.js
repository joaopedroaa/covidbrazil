import React, { useState, useEffect } from 'react'
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts'


import useStats from '../utils/useStats'

function RateOfChange() {
  const endpoint = 'https://covid19.mathdro.id/api/daily'
  const { stats, loading, error } = useStats(endpoint)
  if (loading) {
    return <div>Loading ...</div>
  }

  console.log(stats)

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Confirmed Cases over time</h1>
      <ComposedChart
        width={1200}
        height={700}
        data={stats}
        margin={{
          top: 20,
          right: 80,
          bottom: 20,
          left: 20
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="reportDateString" />
        <YAxis label={{ value: 'Cases', angle: -90, position: 'insideLeft' }} />
        <Tooltip />

        <Area
          type="monotone"
          dataKey="totalConfirmed"
          fill="#8884d8"
          stroke="#8884d8"
        />
        <Bar dataKey="totalConfirmed" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="totalConfirmed" stroke="#ff7300" />
      </ComposedChart>
    </div>
  )
}

export default RateOfChange
