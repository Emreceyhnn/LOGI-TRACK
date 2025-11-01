"use server";
import { prisma } from "./prisma";



// MAINTENANCE TASKS


export async function createMaintenance(vehicleId, data) {
    try{
        const maintenance = await prisma.maintenance.create({
            data: {
                vehicleId: vehicleId,
                ...data
            }
        });
        return maintenance;
    }
    catch(error){
        console.error("Error creating maintenance:", error);
        throw error;
    }
}

export async function getMaintenancesByVehicle(vehicleId) {
    try{
        const maintenances = await prisma.maintenance.findMany({
            where: { vehicleId: vehicleId },
            orderBy: { date: 'desc' }
        });
        return maintenances;
    }
    catch(error){
        console.error("Error fetching maintenances:", error);
        throw error;
    }
}

export async function updateMaintenance(maintenanceId, data) {
    try{
        const maintenance = await prisma.maintenance.update({
            where: { id: maintenanceId },
            data: data
        });
        return maintenance;
    }
    catch(error){
        console.error("Error updating maintenance:", error);
        throw error;
    }
}

export async function deleteMaintenance(maintenanceId) {
    try{
        const maintenance = await prisma.maintenance.delete({
            where: { id: maintenanceId }
        });
        return maintenance;
    }
    catch(error){
        console.error("Error deleting maintenance:", error);
        throw error;
    }
}

export async function getLatestMaintenancesByType(kmAhead,companyId) {
  try {
    // Şirkete ait tüm bakım kayıtlarını çek
    const maintenances = await prisma.maintenance.findMany({
      where: {
        vehicle: {
          companyId: companyId,
        },
      },
      include: {
        vehicle: true,
      },
      orderBy: { serviceDate: "desc" },
    });

    const lastServiceByType = {};
    for (const m of maintenances) {
      if (!lastServiceByType[m.type]) {
        lastServiceByType[m.type] = m;
      }
    }

    const upcoming = [];
    const overdue = [];

    for (const m of Object.values(lastServiceByType)) {
      if (m.nextServiceKm && m.vehicle?.kilometer !== undefined) {
        const diff = m.nextServiceKm - m.vehicle.kilometer;

        if (diff <= kmAhead && diff >= 0) {
          upcoming.push({ ...m, status: "upcoming", kmRemaining: diff });
        } else if (diff < 0) {

          const nearFuture = Math.abs(diff) <= kmAhead;

          const record = {
            ...m,
            status: nearFuture ? "upcoming" : "overdue",
            kmOver: Math.abs(diff),
          };

          overdue.push(record);

          if (nearFuture) {
            upcoming.push({
              ...m,
              status: "upcoming",
              kmRemaining: 0,
            });
          }
        }
      }
    }

    return { lastServiceByType, upcoming, overdue };
  } catch (error) {
    console.error("Error fetching latest maintenances:", error);
    throw error;
  }
}



