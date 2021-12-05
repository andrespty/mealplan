import React from 'react'
import { PieChart, Pie, Cell } from 'recharts';

function ChartPie({data, size, colors}) {
    
    return (
            <PieChart width={size} height={size} >
                <Pie 
                    data={data}
                    dataKey='value' 
                    cx="50%" cy="50%" 
                    innerRadius={size/4}
                    outerRadius={size/2} 
                    fill="#82ca9d" 
                >
                    {
                        data.map((entry, key) => (
                            <Cell key={key} fill={colors[key]}  />
                        ))
                    }
                </Pie>
            </PieChart>
    )
    
}

export default ChartPie




// const data = [
//     {name:'Protein',value: 6,},
//     {name:'Carbs',value:6},
//     {name:'Fat',value:1}
// ]