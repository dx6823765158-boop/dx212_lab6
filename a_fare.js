// Part A2 — calcFare (โค้ดจาก prompt A2 แบบครบ 5 ส่วน)

// คำนวณค่ารถ NGV: 2 กม.แรก 10 บาท, กม.ถัดไป กม.ละ 2 บาท
const calcFare = (distanceKm) => {
  // ไม่ใช่ตัวเลข / NaN / Infinity / ติดลบ → คืน 0
  if (typeof distanceKm !== "number" || !Number.isFinite(distanceKm) || distanceKm < 0) {
    return 0;
  }

  // ปัดเศษกิโลเมตรขึ้น
  const km = Math.ceil(distanceKm);

  // ไม่เกิน 2 กม. จ่ายราคาเริ่มต้น
  if (km <= 2) return 10;

  // 10 บาท + (กม.ที่เกิน 2) × 2 บาท
  return 10 + (km - 2) * 2;
};

// ทดสอบ 3 กรณีตามโจทย์
console.log("1.5 km →", calcFare(1.5)); // คาดหวัง 10
console.log("2 km   →", calcFare(2));   // คาดหวัง 10
console.log("7.2 km →", calcFare(7.2)); // คาดหวัง 22 (ปัดเป็น 8 กม. → 10 + 6×2)

// ทดสอบเพิ่ม (กรณีขอบ)
console.log("-3     →", calcFare(-3));    // คาดหวัง 0
console.log("'5'    →", calcFare("5"));   // คาดหวัง 0
console.log("NaN    →", calcFare(NaN));   // คาดหวัง 0
