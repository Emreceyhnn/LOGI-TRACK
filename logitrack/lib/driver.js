"use server";
import { prisma } from "./prisma";


export async function addDriverToDatabase(driver) {
    try{
        const newDriver = await prisma.driver.create({
            data: driver
        });
        return newDriver;
    }
    catch(error){
        console.error("Error adding driver to database:", error);
        throw error;
    }
}

export async function getAllDriversFromDatabase(companyId) {
    try{
        const drivers = await prisma.driver.findMany({
            where: { companyId: companyId }
        });
        return drivers;
    }
    catch(error){
        console.error("Error retrieving drivers from database:", error);
        throw error;
    }
}

export async function getDriverByIdFromDatabase(driverId) {
    try{
        const driver = await prisma.driver.findUnique({
            where: { id: driverId }
        });
        return driver;
    }
    catch(error){
        console.error("Error retrieving driver from database:", error);
        throw error;
    }
}

export async function updateDriverInDatabase(driverId, updatedData) {
    try{
        const updatedDriver = await prisma.driver.update({
            where: { id: driverId },
            data: updatedData
        });
        return updatedDriver;
    }
    catch(error){
        console.error("Error updating driver in database:", error);
        throw error;
    }
}

export async function deleteDriverFromDatabase(driverId) {
    try{
        const deletedDriver = await prisma.driver.delete({
            where: { id: driverId }
        });
        return deletedDriver;
    }
    catch(error){
        console.error("Error deleting driver from database:", error);
        throw error;
    }
}

export async function getDriversByStatusFromDatabase(companyId, status) {
    try{
        const drivers = await prisma.driver.findMany({
            where: { companyId: companyId, status: status }
        });
        return drivers;
    }
    catch(error){
        console.error("Error retrieving drivers by status from database:", error);
        throw error;
    }
}

export async function getDriversByVehicleFromDatabase(vehicleId) {
    try{
        const drivers = await prisma.driver.findMany({
            where: { vehicleId: vehicleId }
        });
        return drivers;
    }
    catch(error){
        console.error("Error retrieving drivers by vehicle from database:", error);
        throw error;
    }
}

export async function assignVehicleToDriverInDatabase(driverId, vehicleId) {
    try{
        const updatedDriver = await prisma.driver.update({
            where: { id: driverId },
            data: { vehicleId: vehicleId }
        });
        return updatedDriver;
    }
    catch(error){
        console.error("Error assigning vehicle to driver in database:", error);
        throw error;
    }
}

export async function unassignVehicleFromDriverInDatabase(driverId) {
    try{
        const updatedDriver = await prisma.driver.update({
            where: { id: driverId },
            data: { vehicleId: null }
        });
        return updatedDriver;
    }
    catch(error){
        console.error("Error unassigning vehicle from driver in database:", error);
        throw error;
    }
}

