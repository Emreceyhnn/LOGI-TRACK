import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/auth/prisma";
import { signJwt } from "@/lib/auth/jwt";

export async function POST(req) {
  try {
    const { name, email, password,repeatPassword } = await req.json();

    if (!name || !email || !password || !repeatPassword || password !== repeatPassword) {
      return NextResponse.json(
        { error: "Lütfen tüm alanları doldurun" },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json(
        { error: "Bu email adresiyle zaten kayıt var" },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword },
    });

    const token = signJwt({ id: user.id, email: user.email });

    return NextResponse.json(
      {
        message: "Kayıt başarılı",
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
        token,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Register error:", error);
    return NextResponse.json(
      { error: "Sunucu hatası. Lütfen tekrar deneyin." },
      { status: 500 }
    );
  }
}
