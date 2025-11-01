"use server";
import { prisma } from "./prisma";


//VEHICLE CRUD OPERATIONS

export async function createVehicle(data) {
    try {
        const vehicle = await prisma.vehicle.create({
            data,
        });
        return vehicle;
    } catch (err) {
        console.error("createVehicle error:", err);
        return null;
    }
}

export async function updateVehicle(id, data) {
    try {
        const vehicle = await prisma.vehicle.update({
            where: { id: id },
            data,
        });
        return vehicle;
    } catch (err) {
        console.error("updateVehicle error:", err);
        return null;
    }
}

export async function deleteVehicle(id) {
    try {
        const vehicle = await prisma.vehicle.delete({
            where: { id: id },
        });
        return vehicle;
    } catch (err) {
        console.error("deleteVehicle error:", err);
        return null;
    }
}

export async function getAllVehicles(companyId) {
    try{
        const vehicles = await prisma.vehicle.findMany({
            where: { companyId: companyId },
        });
        return vehicles;
    }
    catch(err){
        console.error("getAllVehicles error:", err);
        return [];
    }
}

export async function getVehicleById(id) {
    try {
        const vehicle = await prisma.vehicle.findUnique({
            where: { id: id },
        });
        return vehicle;
    } catch (err) {
        console.error("getVehicleById error:", err);
        return null;
    }
}

export async function getVehicleByPlate(plate) {
    try {
        const vehicle = await prisma.vehicle.findUnique({
            where: { plate: plate },
        });
        return vehicle;
    } catch (err) {
        console.error("getVehicleByPlate error:", err);
        return null;
    }
}

export async function getVehicleByDriverId(driverId) {
    try {
        const vehicle = await prisma.vehicle.findFirst({
            where: { driverId: driverId },
        });
        return vehicle;
    } catch (err) {
        console.error("getVehicleByDriverId error:", err);
        return null;
    }
}

export async function getVehiclesByStatus(status) {
    try {
        const vehicles = await prisma.vehicle.findMany({
            where: { status: status },
        });
        return vehicles;
    } catch (err) {
        console.error("getVehiclesByStatus error:", err);
        return [];
    }
}

export async function getVehicleByInsuranceStatus(insuranceStatus) {
    try {
        const vehicles = await prisma.vehicle.findMany({
            where: { insuranceStatus: insuranceStatus },
        });
        return vehicles;
    } catch (err) {
        console.error("getVehicleByInsuranceStatus error:", err);
        return [];
    }
}

export async function getVehicleByServiceStatus(serviceStatus) {
    try {
        const vehicles = await prisma.vehicle.findMany({
            where: { serviceStatus: serviceStatus },
        });
        return vehicles;
    } catch (err) {
        console.error("getVehicleByServiceStatus error:", err);
        return [];
    }
}

