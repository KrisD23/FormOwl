import { auth, currentUser } from "@clerk/nextjs/server";
import prisma from "./db";
import type { User } from "./generated/prisma";

// Simple in-memory cache for user sync (you could use Redis in production)
const userSyncCache = new Map<string, { timestamp: number; user: User }>();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export async function syncUserWithDatabase() {
  try {
    const { userId } = await auth();
    const user = await currentUser();

    if (!userId || !user) {
      console.error("No user found");
      return null;
    }

    // Check cache first
    const cached = userSyncCache.get(userId);
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
      console.log("User sync from cache", userId);
      return cached.user;
    }

    // upsert user in database
    const dbUser = await prisma.user.upsert({
      where: {
        id: userId,
      },
      update: {
        email: user.emailAddresses[0].emailAddress || "",
        username: user.username || user.firstName || "user",
      },
      create: {
        id: userId,
        email: user.emailAddresses[0].emailAddress || "",
        username: user.username || user.firstName || "user",
      },
    });

    // Cache the result
    userSyncCache.set(userId, {
      timestamp: Date.now(),
      user: dbUser,
    });

    console.log("User synced with database", dbUser.id);
    return dbUser;
  } catch (e) {
    console.log("Error syncing user with database", e);
    return null;
  }
}
