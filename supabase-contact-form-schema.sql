-- Axigear contact form storage
-- Run this script in the Supabase SQL Editor.

CREATE TABLE IF NOT EXISTS public.contact_form_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone_number VARCHAR(20) NOT NULL,
  inquiry_type VARCHAR(100) NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR(50) NOT NULL DEFAULT 'new',
  user_agent TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_contact_form_submissions_email
  ON public.contact_form_submissions(email);

CREATE INDEX IF NOT EXISTS idx_contact_form_submissions_phone_number
  ON public.contact_form_submissions(phone_number);

CREATE INDEX IF NOT EXISTS idx_contact_form_submissions_created_at
  ON public.contact_form_submissions(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_contact_form_submissions_status
  ON public.contact_form_submissions(status);

ALTER TABLE public.contact_form_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public contact form inserts" ON public.contact_form_submissions;
CREATE POLICY "Allow public contact form inserts"
  ON public.contact_form_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "Allow authenticated contact form reads" ON public.contact_form_submissions;
CREATE POLICY "Allow authenticated contact form reads"
  ON public.contact_form_submissions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE OR REPLACE FUNCTION public.update_contact_form_submissions_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS contact_form_submissions_updated_at
  ON public.contact_form_submissions;

CREATE TRIGGER contact_form_submissions_updated_at
  BEFORE UPDATE ON public.contact_form_submissions
  FOR EACH ROW
  EXECUTE FUNCTION public.update_contact_form_submissions_updated_at();

COMMENT ON TABLE public.contact_form_submissions IS
  'Stores submissions from the Axigear website contact form';

COMMENT ON COLUMN public.contact_form_submissions.phone_number IS
  'Phone number provided by the visitor';

-- Test insert. Remove or comment out after confirming the table works.
-- INSERT INTO public.contact_form_submissions (
--   full_name, email, phone_number, inquiry_type, message, user_agent
-- ) VALUES (
--   'Test Visitor',
--   'test@example.com',
--   '+91 98765 43210',
--   'General Inquiry',
--   'Test contact form submission',
--   'Supabase SQL Editor'
-- )
-- RETURNING *;
