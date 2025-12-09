// app/api/contact/route.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";        // สำคัญ: ห้ามเป็น edge
export const dynamic = "force-dynamic"; // กัน cache ของ route

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Bad Request" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"LongTrade Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO || "academylongtrade@gmail.com",
      subject: `New contact from ${name}`,
      replyTo: email,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<h3>New Contact Message</h3>
             <p><b>From:</b> ${name} &lt;${email}&gt;</p>
             <p>${String(message).replace(/\n/g, "<br/>")}</p>`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Internal Error" }, { status: 500 });
  }
}
