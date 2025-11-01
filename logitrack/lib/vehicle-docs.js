"use server";
import { prisma } from "./prisma";

export async function getVehicleDocument(vehicleId) {
  try {
    const vehicleDocuments = await prisma.VehicleDocument.findMany({
      where: { vehicleId },
    });
    return vehicleDocuments;
  } catch (error) {
    console.error("Error fetching vehicle documents:", error);
    throw error;
  }
}

export async function addVehicleDocument(vehicleId, data) {
  try {
    const newDocument = await prisma.VehicleDocument.create({
      data: {
        vehicleId,
        ...data,
      },
    });
    return newDocument;
  } catch (error) {
    console.error("Error adding vehicle document:", error);
    throw error;
  }
}

export async function deleteVehicleDocument(documentId) {
  try {
    await prisma.VehicleDocument.delete({
      where: { id: documentId },
    });
  } catch (error) {
    console.error("Error deleting vehicle document:", error);
    throw error;
  }
}

export async function updateVehicleDocument(documentId, data) {
  try {
    const updatedDocument = await prisma.VehicleDocument.update({
      where: { id: documentId },
      data: {
        ...data,
      },
    });
    return updatedDocument;
  } catch (error) {
    console.error("Error updating vehicle document:", error);
    throw error;
  }
}

export async function getAllVehicleDocumentsByType(type, companyId) {
  try {
    const vehicleDocuments = await prisma.VehicleDocument.findMany({
      where: {
        type,
        vehicle: {
          companyId,
        },
      },
      include: {
        vehicle: true,
      },
    });
    return vehicleDocuments;
  } catch (error) {
    console.error("Error fetching vehicle documents by type:", error);
    throw error;
  }
}

export async function getVehiclesWithDocumentsExpiringSoon(daysAhead, companyId) {
  try {
    const currentDate = new Date();
    const futureDate = new Date();
    futureDate.setDate(currentDate.getDate() + daysAhead);

    const dueToDocs = await prisma.VehicleDocument.findMany({
      where: {
        vehicle: { companyId },
        expiryDate: {
          gte: currentDate,
          lte: futureDate,
        },
      },
      include: {
        vehicle: true,
      },
    });

    const expiredDocs = await prisma.VehicleDocument.findMany({
      where: {
        vehicle: { companyId },
        expiryDate: {
          lt: currentDate,
        },
      },
      include: {
        vehicle: true,
      },
    });

    return {
      dueTo: dueToDocs,
      expired: expiredDocs,
    };
  } catch (error) {
    console.error("Error fetching vehicles with documents expiring soon:", error);
    throw error;
  }
}



