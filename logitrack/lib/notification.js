"use server";

import { prisma } from "./prisma";


export const notifyUser = async (userId, title,message,type) => {
    try {
        const notification = await prisma.notification.create({
            data: {
                userId,
                title,
                message,
                type,
                isRead: false,
            },
        });
        return notification;
    } catch (err) {
        console.error("notifyUser error:", err);
        return null;
    }
}

export async function getNotificationsForUser(userId) {
    try {
        const notifications = await prisma.notification.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' },
        });
        return notifications;
    } catch (err) {
        console.error("getNotificationsForUser error:", err);
        return [];
    }
}

export async function markNotificationAsRead(notificationId) {
    try {
        const updatedNotification = await prisma.notification.update({
            where: { id: notificationId },
            data: { isRead: true },
        });
        return updatedNotification;
    }
    catch (err) {
        console.error("markNotificationAsRead error:", err);
        return null;
    }
}

export async function markAllNotificationsAsReadForUser(userId) {
    try {
        const updatedNotifications = await prisma.notification.updateMany({
            where: { userId, isRead: false },
            data: { isRead: true },
        });
        return updatedNotifications;
    } catch (err) {
        console.error("markAllNotificationsAsReadForUser error:", err);
        return null;
    }
}

export async function deleteNotification(notificationId) {
    try {
        const deletedNotification = await prisma.notification.delete({
            where: { id: notificationId },
        });
        return deletedNotification;
    } catch (err) {
        console.error("deleteNotification error:", err);
        return null;
    }

}

export async function deleteAllNotificationsForUser(userId) {
    try {
        const deletedNotifications = await prisma.notification.deleteMany({
            where: { userId },
        });
        return deletedNotifications;
    } catch (err) {
        console.error("deleteAllNotificationsForUser error:", err);
        return null;
    }
}

export async function getUnreadNotificationCountForUser(userId) {
    try {
        const count = await prisma.notification.count({
            where: { userId, isRead: false },
        });
        return count;
    } catch (err) {
        console.error("getUnreadNotificationCountForUser error:", err);
        return 0;
    }
}

export async function unMarkNotificationAsRead(notificationId) {
    try {
        const updatedNotification = await prisma.notification.update({
            where: { id: notificationId },
            data: { isRead: false },
        });
        return updatedNotification;
    } catch (err) {
        console.error("unMarkNotificationAsRead error:", err);
        return null;
    } 
}
