import { NextResponse } from 'next/server';
import { supabase } from '@/utils/supabase/client';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and phone are required fields.' },
        { status: 400 }
      );
    }

    // Insert into Supabase
    const { error } = await supabase
      .from('inquiries')
      .insert([
        {
          name,
          email,
          phone,
          message: message || '',
        },
      ]);

    if (error) {
      console.error('Supabase insertion error:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to submit inquiry. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred.' },
      { status: 500 }
    );
  }
}