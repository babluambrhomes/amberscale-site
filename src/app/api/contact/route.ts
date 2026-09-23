import { NextResponse } from "next/server";
import connectDb from "@/lib/mongodb";
import ContactMessage from "@/lib/models/ContactMessage";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  subject?: unknown;
  message?: unknown;
};

export async function POST(request: Request) {
  try {
    const body: ContactPayload = await request.json();

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email =
      typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const company = typeof body.company === "string" ? body.company.trim() : "";
    const subject = typeof body.subject === "string" ? body.subject.trim() : "";

    if (!name || !email || !EMAIL_REGEX.test(email) || !message) {
      return NextResponse.json(
        { error: "Name, a valid email, and a message are required." },
        { status: 400 }
      );
    }

    await connectDb();

    await ContactMessage.create({
      name,
      email,
      company: company || null,
      subject: subject || null,
      message,
    });

    return NextResponse.json({ ok: true, message: "Message received." }, { status: 201 });
  } catch (error) {
    console.error("contact POST error:", error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDb();

    const messages = await ContactMessage.find(
      {},
      {
        name: 1,
        email: 1,
        company: 1,
        subject: 1,
        message: 1,
        action: 1,
        createdAt: 1,
        _id: 0,
      }
    )
      .sort({ createdAt: -1 })
      .limit(200)
      .lean();

    return NextResponse.json({ messages });
  } catch (error) {
    console.error("contact GET error:", error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}