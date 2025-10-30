import { NextResponse } from "next/server";
import { verifyJwt } from "@/lib/jwt";
import { prisma } from "@/lib/prisma";

export async function GET(req) {
  try {
    const cookieHeader = req.headers.get("cookie");
    const token = cookieHeader?.match(/token=([^;]+)/)?.[1];

    if (!token)
      return NextResponse.json({ error: "Token bulunamadı" }, { status: 401 });

    const decoded = verifyJwt(token);
    if (!decoded)
      return NextResponse.json({ error: "Geçersiz token" }, { status: 401 });

    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      select: { id: true, name: true, email: true, createdAt: true },
    });

    if (!user)
      return NextResponse.json(
        { error: "Kullanıcı bulunamadı" },
        { status: 404 }
      );

    return NextResponse.json({ user }, { status: 200 });
  } catch (err) {
    console.error("me route error:", err);
    return NextResponse.json({ error: "Sunucu hatası" }, { status: 500 });
  }
}
