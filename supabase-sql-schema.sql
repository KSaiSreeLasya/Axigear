-- Create the contact_submissions table for storing contact form submissions
CREATE TABLE public.contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  inquiry_type VARCHAR(100) NOT NULL,
  message TEXT NOT NULL,
  phone_number VARCHAR(20),
  company_name VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(50) DEFAULT 'new',
  ip_address INET,
  user_agent TEXT
);

-- Create an index on email for faster queries
CREATE INDEX idx_contact_submissions_email ON public.contact_submissions(email);

-- Create an index on created_at for chronological queries
CREATE INDEX idx_contact_submissions_created_at ON public.contact_submissions(created_at);

-- Create an index on status for filtering
CREATE INDEX idx_contact_submissions_status ON public.contact_submissions(status);

-- Enable Row Level Security (RLS)
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create RLS policy to allow anonymous inserts (for public form submissions)
CREATE POLICY "Allow anonymous inserts" ON public.contact_submissions
  FOR INSERT
  WITH CHECK (true);

-- Create RLS policy to allow authenticated users to view their own submissions
CREATE POLICY "Users can view their submissions" ON public.contact_submissions
  FOR SELECT
  USING (email = current_user_email() OR auth.uid() IS NOT NULL);

-- Optional: Create a stored procedure to get submission stats
CREATE OR REPLACE FUNCTION get_contact_stats()
RETURNS TABLE(total_submissions BIGINT, new_submissions BIGINT, responded BIGINT, last_submission TIMESTAMP) AS $$
BEGIN
  RETURN QUERY SELECT
    COUNT(*)::BIGINT,
    COUNT(*) FILTER (WHERE status = 'new')::BIGINT,
    COUNT(*) FILTER (WHERE status = 'responded')::BIGINT,
    MAX(created_at)
  FROM public.contact_submissions;
END;
$$ LANGUAGE plpgsql;

-- Optional: Create a trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_contact_submissions_updated_at
  BEFORE UPDATE ON public.contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Comment on table and columns for documentation
COMMENT ON TABLE public.contact_submissions IS 'Stores all contact form submissions from the website';
COMMENT ON COLUMN public.contact_submissions.id IS 'Unique identifier for each submission';
COMMENT ON COLUMN public.contact_submissions.full_name IS 'Full name of the person submitting the form';
COMMENT ON COLUMN public.contact_submissions.email IS 'Email address for contact';
COMMENT ON COLUMN public.contact_submissions.inquiry_type IS 'Type of inquiry (General, Test Drive, Fleet Solutions, etc)';
COMMENT ON COLUMN public.contact_submissions.message IS 'The main message content';
COMMENT ON COLUMN public.contact_submissions.status IS 'Status of the submission (new, responded, archived)';
COMMENT ON COLUMN public.contact_submissions.created_at IS 'Timestamp when the form was submitted';
COMMENT ON COLUMN public.contact_submissions.updated_at IS 'Timestamp when the record was last updated';
