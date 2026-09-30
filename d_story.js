// Part D — User Story → Prompt → Code → Test
// User Story: "ในฐานะนักศึกษา ฉันอยากเห็นรถ NGV ที่จะมาถึงป้ายของฉันภายใน X นาที
//              เรียงจากคันที่มาถึงเร็วที่สุด เพื่อจะได้ตัดสินใจว่าจะรอหรือเดินไป"

// ข้อมูลจำลอง (mock data)
const buses = [
  { busId: "B01", route: "NGV-1", stopId: "S-DOME",    etaMinutes: 4,    inService: true  },
  { busId: "B02", route: "NGV-2", stopId: "S-DOME",    etaMinutes: 12,   inService: true  },
  { busId: "B03", route: "NGV-1", stopId: "S-LIBRARY", etaMinutes: 2,    inService: true  },
  { busId: "B04", route: "NGV-3", stopId: "S-DOME",    etaMinutes: 9,    inService: true  },
  { busId: "B05", route: "NGV-2", stopId: "S-DOME",    etaMinutes: 3,    inService: false }, // จอดพัก
  { busId: "B06", route: "NGV-3", stopId: "S-DOME",    etaMinutes: null, inService: true  }, // GPS ขาด
];

// คืนรายการรถที่จะถึงป้าย stopId ภายใน withinMinutes นาที (รวมค่าเท่ากับพอดี) เรียง ETA น้อย → มาก
const getUpcomingBuses = (buses, stopId, withinMinutes) => {
  // ข้อมูลเข้าไม่ถูกต้อง → คืน array ว่าง
  if (!Array.isArray(buses) || typeof stopId !== "string") return [];
  if (typeof withinMinutes !== "number" || !Number.isFinite(withinMinutes) || withinMinutes < 0) return [];

  return buses
    .filter(b => b.stopId === stopId)                       // เฉพาะป้ายที่เลือก
    .filter(b => b.inService)                               // ตัดรถที่ไม่ได้วิ่ง
    .filter(b => Number.isFinite(b.etaMinutes))             // ตัดรถที่ไม่มี ETA
    .filter(b => b.etaMinutes >= 0 && b.etaMinutes <= withinMinutes)
    .sort((a, b) => a.etaMinutes - b.etaMinutes)            // มาถึงเร็วสุดก่อน
    .map(({ busId, route, etaMinutes }) => ({ busId, route, etaMinutes }));
};

// ทดสอบ 3 กรณี
// 1) กรณีปกติ: ป้ายโดม ภายใน 10 นาที → B01 (4), B04 (9)  [B05 ไม่วิ่ง, B06 ไม่มี ETA, B02 เกิน]
console.log("กรณี 1:", getUpcomingBuses(buses, "S-DOME", 10));

// 2) กรณีขอบเขตพอดี: ภายใน 12 นาที → ต้องรวม B02 (12) ด้วย → B01, B04, B02
console.log("กรณี 2:", getUpcomingBuses(buses, "S-DOME", 12));

// 3) กรณีขอบ: ป้ายที่ไม่มีรถ / นาทีติดลบ → []
console.log("กรณี 3a:", getUpcomingBuses(buses, "S-CANTEEN", 10));
console.log("กรณี 3b:", getUpcomingBuses(buses, "S-DOME", -5));
