// Part B — d_homework.js หลังแก้ตามคำแนะนำรีวิวข้อ 1 (ใช้ devs ซ้ำ ไม่ filter 2 รอบ)
const team = [
  { name: "ฟ้า", role: "PO", tasksDone: 5 },
  { name: "ต้น", role: "Dev", tasksDone: 8 },
  { name: "มายด์", role: "SM", tasksDone: 3 },
  { name: "เจ", role: "Dev", tasksDone: 6 },
];

// (1) map: รายชื่อแบบ "ชื่อ (บทบาท)"
const members = team.map(m => `${m.name} (${m.role})`);
console.log("สมาชิก:", members);

// (2) filter: เฉพาะ Dev
const devs = team.filter(m => m.role === "Dev");
console.log("Dev:", devs);

// (3) reduce: รวม tasksDone ทั้งทีม
const totalTasks = team.reduce((sum, m) => sum + m.tasksDone, 0);
console.log("งานเสร็จทั้งทีม:", totalTasks); // 22

// (4) รวม tasksDone เฉพาะ Dev — ใช้ devs จากข้อ (2) ซ้ำ ไม่ต้อง filter ใหม่
const devTasks = devs.reduce((sum, m) => sum + m.tasksDone, 0);
console.log("งานเสร็จของ Dev:", devTasks); // 14
