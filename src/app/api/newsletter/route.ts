import { NextResponse } from "next/server";
import connectDb from "@/lib/mongodb";
import Subscriber from "@/lib/models/Subscriber";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email =
      typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";

    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
    }

    await connectDb();

    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return NextResponse.json({ ok: true, message: "Already subscribed." });
    }

    await Subscriber.create({
      email,
      source: typeof body?.source === "string" ? body.source : "website",
    });

    return NextResponse.json({ ok: true, message: "Subscribed." }, { status: 201 });
  } catch (error) {
    console.error("newsletter POST error:", error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDb();

    const subscribers = await Subscriber.find(
      {},
      { email: 1, source: 1, action: 1, createdAt: 1, _id: 0 }
    )
      .sort({ createdAt: -1 })
      .limit(500)
      .lean();

    return NextResponse.json({ subscribers });
  } catch (error) {
    console.error("newsletter GET error:", error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}