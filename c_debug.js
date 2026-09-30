// Part C — ดีบักด้วย AI (โค้ดหลังแก้)
// ผลก่อนแก้ (จาก terminal):
//   สายที่มาสาย: []
//   ผู้โดยสารรวม: [object Object]6238

const buses = [
  { route: "NGV-1", passengers: 45, late: false },
  { route: "NGV-2", passengers: 62, late: true },
  { route: "NGV-3", passengers: 38, late: true },
];

// บั๊ก 1: arrow function ที่มี {} ต้อง return เอง — เดิม { b.late } คืน undefined ทุกตัว → filter ได้ []
// แก้: ใช้ implicit return (ไม่มีปีกกา)
const lateRoutes = buses.filter(b => b.late).map(b => b.route);

// บั๊ก 2: reduce ไม่มีค่าเริ่มต้น → sum รอบแรกคือ object ตัวแรก → ต่อ string เป็น "[object Object]6238"
// แก้: ใส่ค่าเริ่มต้น 0
const total = buses.reduce((sum, b) => sum + b.passengers, 0);

console.log("สายที่มาสาย:", lateRoutes);   // ควรได้ ["NGV-2", "NGV-3"]
console.log("ผู้โดยสารรวม:", total);        // ควรได้ 145
