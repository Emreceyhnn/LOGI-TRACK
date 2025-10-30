const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database with full data...");

  // --- USERS ---
  const admin = await prisma.user.create({
    data: {
      name: "Admin User",
      email: "admin@logitrack.com",
      password: "hashed_admin_password",
      role: "admin",
      phone: "+905551112233",
      isActive: true,
      lastLogin: new Date(),
    },
  });

  const operator = await prisma.user.create({
    data: {
      name: "Operator User",
      email: "operator@logitrack.com",
      password: "hashed_operator_password",
      role: "operator",
      phone: "+905554445566",
    },
  });

  const driverUser = await prisma.user.create({
    data: {
      name: "Driver User",
      email: "driver@logitrack.com",
      password: "hashed_driver_password",
      role: "driver",
      phone: "+905559998877",
    },
  });

  // --- DRIVER ---
  const driver = await prisma.driver.create({
    data: {
      name: "Ahmet Yılmaz",
      phone: "+905551234567",
      licenseNo: "34ABC12345",
      experience: 6,
      score: 98,
      status: "active",
    },
  });

  // --- VEHICLE ---
  const vehicle = await prisma.vehicle.create({
    data: {
      plate: "34LOG001",
      model: "Egea Multijet",
      brand: "Fiat",
      year: 2022,
      fuelType: "diesel",
      kilometer: 85600,
      lastServiceKm: 82000,
      status: "active",
      insuranceExpiry: new Date("2026-01-01"),
      insuranceStatus: "ok",
      serviceStatus: "ok",
      driverId: driver.id,
      telemetry: {
        create: [
          { speed: 72, fuel: 58, rpm: 2200, temp: 78 },
          { speed: 88, fuel: 54, rpm: 2450, temp: 80 },
          { speed: 65, fuel: 60, rpm: 2100, temp: 77 },
        ],
      },
      locationLogs: {
        create: [
          {
            latitude: 41.015137,
            longitude: 28.97953,
            speed: 72,
            heading: 135,
          },
          {
            latitude: 41.0205,
            longitude: 28.9901,
            speed: 65,
            heading: 130,
          },
        ],
      },
      documents: {
        create: [
          {
            type: "insurance",
            name: "Zorunlu Trafik Sigortası",
            fileUrl: "/uploads/documents/insurance-34LOG001.pdf",
            expiryDate: new Date("2026-01-01"),
            status: "valid",
          },
          {
            type: "inspection",
            name: "Araç Muayene Belgesi",
            fileUrl: "/uploads/documents/inspection-34LOG001.pdf",
            expiryDate: new Date("2025-07-01"),
            status: "valid",
          },
          {
            type: "license",
            name: "Ruhsat Belgesi",
            fileUrl: "/uploads/documents/license-34LOG001.pdf",
            expiryDate: new Date("2027-01-01"),
            status: "valid",
          },
        ],
      },
      maintenances: {
        create: [
          {
            type: "oil_change",
            description: "Motor yağı ve filtre değişimi",
            cost: 1200,
            serviceKm: 82000,
            nextServiceKm: 92000,
          },
          {
            type: "brake",
            description: "Ön fren balataları değişti",
            cost: 950,
            serviceKm: 78000,
            nextServiceKm: 88000,
          },
        ],
      },
      VehicleAlert: {
        create: [
          {
            code: "P0420",
            severity: "warning",
            message: "Catalyst system efficiency below threshold",
          },
          {
            code: "TEMP_HIGH",
            severity: "critical",
            message: "Motor sıcaklığı yüksek",
          },
          {
            code: "FUEL_LOW",
            severity: "info",
            message: "Yakıt seviyesi düşük",
          },
        ],
      },
    },
  });

  // --- NOTIFICATIONS ---
  await prisma.notification.createMany({
    data: [
      {
        userId: admin.id,
        title: "Yeni Araç Eklendi",
        message: `${vehicle.plate} plakalı araç sisteme eklendi.`,
        type: "info",
      },
      {
        userId: operator.id,
        title: "Servis Zamanı Yaklaşıyor",
        message: `${vehicle.plate} için 92000 km bakımına yaklaşıldı.`,
        type: "warning",
      },
      {
        userId: driverUser.id,
        title: "Hız Uyarısı",
        message: `${vehicle.plate} için 90 km/h hız aşıldı.`,
        type: "error",
      },
    ],
  });

  console.log("✅ All tables seeded successfully!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("❌ Seed failed:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
