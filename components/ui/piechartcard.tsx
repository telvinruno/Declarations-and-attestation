// "use client"

// import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// const data1 = [
//   { name: "Lorem", value: 40, color: "#A8B8A0" },
//   { name: "Lorem", value: 30, color: "#1B6B5F" },
//   { name: "Lorem", value: 15, color: "#2D4F4A" },
//   { name: "Lorem", value: 10, color: "#4A5D55" },
//   { name: "Lorem", value: 5, color: "#0D3D33" },
// ]

// const data2 = [
//   { name: "Lorem", value: 40, color: "#FFD700" },
//   { name: "Lorem", value: 30, color: "#FFA500" },
//   { name: "Lorem", value: 15, color: "#FF6347" },
//   { name: "Lorem", value: 10, color: "#FF4500" },
//   { name: "Lorem", value: 5, color: "#DC143C" },
// ]

// const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
//   const RADIAN = Math.PI / 180
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5
//   const x = cx + radius * Math.cos(-midAngle * RADIAN)
//   const y = cy + radius * Math.sin(-midAngle * RADIAN)

//   return (
//     <text
//       x={x}
//       y={y}
//       fill="white"
//       textAnchor={x > cx ? "start" : "end"}
//       dominantBaseline="central"
//       className="font-semibold"
//     >
//       {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   )
// }

// const renderLegend = (props, data) => {
//   return (
//     <div className="flex flex-wrap justify-center gap-4 mt-6">
//       {data.map((entry, index) => (
//         <div key={`legend-${index}`} className="flex items-center gap-2">
//           <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }}></div>
//           <span className="text-sm text-foreground">{entry.name}</span>
//         </div>
//       ))}
//     </div>
//   )
// }

// export function PieChartCard() {
//   return (
//     <Card className="w-full">
//       <CardHeader>
//         <CardTitle>Analytics Overview</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* First Donut Chart */}
//           <div className="flex flex-col items-center justify-center">
//             <ResponsiveContainer width="100%" height={350}>
//               <PieChart>
//                 <Pie
//                   data={data1}
//                   cx="50%"
//                   cy="50%"
//                   innerRadius={60}
//                   outerRadius={110}
//                   paddingAngle={0}f
//                   dataKey="value"
//                   label={renderCustomLabel}
//                 >
//                   {data1.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={entry.color} />
//                   ))}
//                 </Pie>
//               </PieChart>
//             </ResponsiveContainer>
//             {renderLegend(null, data1)}
//           </div>

//           {/* Second Donut Chart */}
//           <div className="flex flex-col items-center justify-center">
//             <ResponsiveContainer width="100%" height={350}>
//               <PieChart>
//                 <Pie
//                   data={data2}
//                   cx="50%"
//                   cy="50%"
//                   innerRadius={60}
//                   outerRadius={110}
//                   paddingAngle={0}
//                   dataKey="value"
//                   label={renderCustomLabel}
//                 >
//                   {data2.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={entry.color} />
//                   ))}
//                 </Pie>
//               </PieChart>
//             </ResponsiveContainer>
//             {renderLegend(null, data2)}
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   )
// }
