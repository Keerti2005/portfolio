import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ message: 'All fields are required.' }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: 'keerti-portfolio.vercel.app', // Use a domain verified in Resend
      to: ['keertimadhuvantika.a2022ece@sece.ac.in'], // Your target email
      subject: `Message from ${name}`,
      reply_to: email,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2>New Message Received</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Resend Error:', error);
    return NextResponse.json({ success: false, message: 'Failed to send email.' }, { status: 500 });
  }
}
