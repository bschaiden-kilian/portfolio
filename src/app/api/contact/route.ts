// Route Handler — Next.js's way to create API endpoints in the App Router.
// This file exports named functions for HTTP methods (GET, POST, etc.).
// Unlike pages/api, route handlers run in the Edge or Node.js runtime.
//
// To add real email sending, swap the success response with:
//   import { Resend } from "resend";
//   const resend = new Resend(process.env.RESEND_API_KEY);
//   await resend.emails.send({ from: "...", to: "...", subject: "...", text: message });

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // TODO: wire up a real email provider (e.g. Resend, Nodemailer)
  console.log("Contact form submission:", { name, email, message });

  return NextResponse.json({ success: true });
}
