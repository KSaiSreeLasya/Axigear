import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseKey) {
  console.warn('Supabase configuration is missing. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your environment variables.');
}

export const supabase = createClient(supabaseUrl, supabaseKey);

export interface ContactSubmission {
  id?: string;
  full_name: string;
  email: string;
  inquiry_type: string;
  message: string;
  phone_number?: string;
  company_name?: string;
  status?: string;
  ip_address?: string;
  user_agent?: string;
  created_at?: string;
  updated_at?: string;
}

export async function submitContactForm(data: ContactSubmission) {
  try {
    const { data: response, error } = await supabase
      .from('contact_submissions')
      .insert([data])
      .select();

    if (error) {
      console.error('Error submitting contact form:', error);
      throw new Error(error.message);
    }

    return {
      success: true,
      data: response,
      message: 'Contact form submitted successfully'
    };
  } catch (error) {
    console.error('Error in submitContactForm:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An error occurred',
      message: 'Failed to submit contact form'
    };
  }
}

export async function getSubmissionStats() {
  try {
    const { data, error } = await supabase
      .rpc('get_contact_stats');

    if (error) {
      console.error('Error fetching stats:', error);
      throw new Error(error.message);
    }

    return {
      success: true,
      data: data
    };
  } catch (error) {
    console.error('Error in getSubmissionStats:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An error occurred'
    };
  }
}
