import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    const response = await resend.emails.send({
      from: "onboarding@resend.dev",

      // TEMPORARY: Send to your own email for testing
      to: "muji.techie@gmail.com",

      subject: "🌿 New Contact Form Submission - Aavudan Website",

      html: `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: auto; padding: 24px; border: 1px solid #e5e5e5; border-radius: 12px;">
          
          <h2 style="color:#173B2D; margin-bottom:20px;">
            🌿 New Contact Form Submission
          </h2>

          <table style="width:100%; border-collapse:collapse;">
            <tr>
              <td style="padding:10px; font-weight:bold;">Name</td>
              <td style="padding:10px;">${name}</td>
            </tr>

            <tr>
              <td style="padding:10px; font-weight:bold;">Email</td>
              <td style="padding:10px;">${email}</td>
            </tr>

            <tr>
              <td style="padding:10px; font-weight:bold;">Phone</td>
              <td style="padding:10px;">${phone}</td>
            </tr>
          </table>

          <hr style="margin:25px 0;" />

          <h3 style="color:#173B2D;">Message</h3>

          <div style="background:#f8f8f8; padding:18px; border-radius:8px;">
            ${message}
          </div>

          <br/>

          <p style="color:#777; font-size:14px;">
            This enquiry was submitted through the
            <strong>Aavudan Website Contact Form</strong>.
          </p>

        </div>
      `,
    });

    console.log("========== RESEND RESPONSE ==========");
    console.log(response);
    console.log("=====================================");

    if (response.error) {
      return NextResponse.json(
        {
          success: false,
          error: response.error,
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      data: response.data,
    });

  } catch (error) {
    console.error("CONTACT API ERROR:");
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}