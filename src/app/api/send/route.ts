import { Resend } from 'resend'
import { Email } from '@/components/ContactForm';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
    const { name, email, message } = await req.json();
  try {
    console.log(req)
    const { data, error } = await resend.emails.send({
      from: email,
      to: `${process.env.NEXT_PUBLIC_EMAIL_USERNAME}`,
      subject: `nouveau message de ${name}`,
      react: Email({message})
    });
    console.log({data})
    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
