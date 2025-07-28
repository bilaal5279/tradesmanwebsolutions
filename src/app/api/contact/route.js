import { Resend } from "resend";
import { NextResponse } from "next/server";

// Initialize Resend with API key validation
const apiKey = process.env.RESEND_API_KEY;
if (!apiKey) {
  console.error("RESEND_API_KEY environment variable is not set");
}

const resend = new Resend(apiKey || "re_5RceYoQz_KmrD7zySxNN9qor1YPfFarW6");

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, business, location, message } = body;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["Sales@tradesmanweb.co.uk"],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Business/Trade:</strong> ${business || "Not specified"}</p>
        <p><strong>Location:</strong> ${location || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "No message provided"}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
