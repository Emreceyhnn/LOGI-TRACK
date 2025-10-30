"use server";

import { cookies } from "next/headers";
import { prisma } from "./prisma";
import { verifyJwt } from "./jwt";

export async function getCurrentUserId() {
  try {
    const cookieStore = cookies();
    const token = (await cookieStore).get("token")?.value;
    if (!token) return null;
    const decoded = verifyJwt(token);
    if (!decoded) return null;
    return decoded.id;
  } catch (err) {
    console.error("getCurrentUserId error:", err);
    return null;
  }
}

export async function getCurrentUser() {
  try {
    const decodedId = await getCurrentUserId();

    const user = await prisma.user.findUnique({
      where: { id: decodedId },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        role: true,
      },
    });

    const filterUserData = {
      id: user.id,
      name: user.name,
      role: user.role,
      createdAt: user.createdAt,
    };

    return filterUserData;
  } catch (err) {
    console.error("getCurrentUser error:", err);
    return null;
  }
}

export async function deleteUser() {
  try {
    const decodedId = await getCurrentUserId();
    const deletedUser = await prisma.user.delete({
      where: { id: decodedId },
    });
    return deletedUser;
  } catch (err) {
    console.error("deleteUser error:", err);
    return null;
  }
}

export async function getAllUsers() {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        role: true,
      },
    });
    return users;
  } catch (err) {
    console.error("getAllUsers error:", err);
    return [];
  }
}

export async function promoteUserToAdmin(userId) {
  try {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { role: "admin" },
    });
    return updatedUser;
  } catch (err) {
    console.error("promoteUserToAdmin error:", err);
    return null;
  }
}

export async function demoteAdminToUser(userId) {
  try {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { role: "user" },
    });
    return updatedUser;
  } catch (err) {
    console.error("demoteAdminToUser error:", err);
    return null;
  }
}

export async function getUserById(userId) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        role: true,
      },
    });
    return user;
  }
  catch (err) {
    console.error("getUserById error:", err);
    return null;
  }
}

export async function updateUserPassword(userId, newPasswordHash) {
  try {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { password: newPasswordHash },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        role: true,
      },
    });
    return updatedUser;
  }
  catch (err) {
    console.error("updateUserPassword error:", err);
    return null;
  }
}

export async function countUsers() {
  try {
    const userCount = await prisma.user.count();
    return userCount;
  } catch (err) {
    console.error("countUsers error:", err);
    return 0;
  }
}

export async function updateUser(userId,data) {
  try {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: data,
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        role: true,
      },
    });
    return updatedUser;
  }
  catch (err) {
    console.error("updateUser error:", err);
    return null;
  }
}






