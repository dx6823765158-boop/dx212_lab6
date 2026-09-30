// TypeScript ใน VS Code — เปิดไฟล์นี้แล้วจะเห็นเส้นแดง 2 จุด (VS Code มี TypeScript ในตัว)
interface Bus {
  route: string;
  passengers: number;
  late: boolean;
}

const bus: Bus = {
  route: "NGV-1",
  passengers: 45,
  late: false,
};

bus.passengers = "เยอะมาก";   // ✘ Type 'string' is not assignable to type 'number'.
// bus.passengers = 60;       // ✔ แก้เป็นตัวเลขแล้ว error หาย

bus.driver = "สมชาย";          // ✘ Property 'driver' does not exist on type 'Bus'.

// Checkpoint D: TypeScript จับ error เรื่องชนิดข้อมูลและชื่อ property ที่ผิดได้ตั้งแต่ตอนพิมพ์โค้ด
// ก่อนรัน ขณะที่ JavaScript จะปล่อยผ่านแล้วไปพังตอนรันจริง (หรือเงียบ ๆ ให้ค่าผิด)
