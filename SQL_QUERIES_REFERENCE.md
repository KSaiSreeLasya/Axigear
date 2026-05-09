# SQL Queries Reference for Contact Form Submissions

## 1. CREATE TABLE - Run This First in Supabase SQL Editor

```sql
-- Create the contact_submissions table
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

-- Create indexes for faster queries
CREATE INDEX idx_contact_submissions_email ON public.contact_submissions(email);
CREATE INDEX idx_contact_submissions_created_at ON public.contact_submissions(created_at);
CREATE INDEX idx_contact_submissions_status ON public.contact_submissions(status);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for public form submissions)
CREATE POLICY "Allow anonymous inserts" ON public.contact_submissions
  FOR INSERT
  WITH CHECK (true);

-- Allow viewing submissions
CREATE POLICY "Allow select submissions" ON public.contact_submissions
  FOR SELECT
  USING (true);
```

---

## 2. INSERT QUERY - Add New Submission

### Insert Single Submission
```sql
INSERT INTO public.contact_submissions (
  full_name, 
  email, 
  inquiry_type, 
  message, 
  user_agent
) VALUES (
  'John Doe',
  'john@example.com',
  'General Inquiry',
  'I am interested in purchasing an electric scooter. Can you provide more information about the Axigear Pro RTO model?',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
)
RETURNING *;
```

### Insert with Phone Number and Company
```sql
INSERT INTO public.contact_submissions (
  full_name,
  email,
  inquiry_type,
  message,
  phone_number,
  company_name,
  user_agent
) VALUES (
  'Rajesh Kumar',
  'rajesh@company.com',
  'Fleet Solutions',
  'We are looking to purchase 50 electric scooters for our delivery fleet. Please send pricing details.',
  '+91-9876543210',
  'Express Delivery Co.',
  'Mozilla/5.0'
)
RETURNING *;
```

---

## 3. SELECT QUERIES - Retrieve Data

### Get All Submissions (Newest First)
```sql
SELECT * FROM public.contact_submissions 
ORDER BY created_at DESC;
```

### Get Only NEW Submissions (Not Yet Responded)
```sql
SELECT * FROM public.contact_submissions 
WHERE status = 'new' 
ORDER BY created_at DESC;
```

### Get Submissions by Inquiry Type
```sql
SELECT * FROM public.contact_submissions 
WHERE inquiry_type = 'Test Drive Request' 
ORDER BY created_at DESC;
```

### Get Submissions from Last 7 Days
```sql
SELECT * FROM public.contact_submissions 
WHERE created_at >= NOW() - INTERVAL '7 days' 
ORDER BY created_at DESC;
```

### Get Submissions from Last 30 Days
```sql
SELECT * FROM public.contact_submissions 
WHERE created_at >= NOW() - INTERVAL '30 days' 
ORDER BY created_at DESC;
```

### Get Submissions by Email
```sql
SELECT * FROM public.contact_submissions 
WHERE email = 'john@example.com' 
ORDER BY created_at DESC;
```

### Get All Responded Submissions
```sql
SELECT * FROM public.contact_submissions 
WHERE status = 'responded' 
ORDER BY created_at DESC;
```

### Count Submissions by Status
```sql
SELECT 
  status,
  COUNT(*) as count
FROM public.contact_submissions 
GROUP BY status;
```

### Count Submissions by Inquiry Type
```sql
SELECT 
  inquiry_type,
  COUNT(*) as count
FROM public.contact_submissions 
GROUP BY inquiry_type 
ORDER BY count DESC;
```

---

## 4. UPDATE QUERIES - Change Submission Status

### Mark Single Submission as Responded
```sql
UPDATE public.contact_submissions 
SET status = 'responded' 
WHERE id = 'your-submission-id-here'
RETURNING *;
```

### Mark All New Submissions as Responded
```sql
UPDATE public.contact_submissions 
SET status = 'responded' 
WHERE status = 'new'
RETURNING *;
```

### Mark Multiple Submissions by Email as Responded
```sql
UPDATE public.contact_submissions 
SET status = 'responded' 
WHERE email = 'john@example.com'
RETURNING *;
```

### Archive Submission
```sql
UPDATE public.contact_submissions 
SET status = 'archived' 
WHERE id = 'your-submission-id-here'
RETURNING *;
```

---

## 5. DELETE QUERIES - Remove Data

### Delete Single Submission
```sql
DELETE FROM public.contact_submissions 
WHERE id = 'your-submission-id-here';
```

### Delete Old Submissions (Older than 90 Days)
```sql
DELETE FROM public.contact_submissions 
WHERE created_at < NOW() - INTERVAL '90 days';
```

### Delete All Archived Submissions
```sql
DELETE FROM public.contact_submissions 
WHERE status = 'archived';
```

---

## 6. ANALYTICS QUERIES - Get Insights

### Get Daily Submission Count
```sql
SELECT 
  DATE(created_at) as submission_date,
  COUNT(*) as total_submissions,
  COUNT(*) FILTER (WHERE status = 'new') as new_submissions,
  COUNT(*) FILTER (WHERE status = 'responded') as responded
FROM public.contact_submissions 
GROUP BY DATE(created_at)
ORDER BY submission_date DESC;
```

### Get Hourly Submission Count (Today)
```sql
SELECT 
  DATE_TRUNC('hour', created_at) as hour,
  COUNT(*) as count
FROM public.contact_submissions 
WHERE DATE(created_at) = TODAY()
GROUP BY DATE_TRUNC('hour', created_at)
ORDER BY hour DESC;
```

### Get Most Common Inquiry Types
```sql
SELECT 
  inquiry_type,
  COUNT(*) as count,
  ROUND(100.0 * COUNT(*) / (SELECT COUNT(*) FROM public.contact_submissions), 2) as percentage
FROM public.contact_submissions 
GROUP BY inquiry_type 
ORDER BY count DESC;
```

### Get Total Submissions and Stats
```sql
SELECT 
  COUNT(*) as total_submissions,
  COUNT(*) FILTER (WHERE status = 'new') as new_submissions,
  COUNT(*) FILTER (WHERE status = 'responded') as responded_submissions,
  COUNT(*) FILTER (WHERE status = 'archived') as archived_submissions,
  MAX(created_at) as latest_submission,
  MIN(created_at) as first_submission
FROM public.contact_submissions;
```

### Get Average Response Time (if response_date column added later)
```sql
SELECT 
  AVG(EXTRACT(DAY FROM (updated_at - created_at))) as avg_response_days
FROM public.contact_submissions 
WHERE status = 'responded';
```

---

## 7. EXPORT QUERIES - Get Data for Reports

### Export as CSV Format (Top 100 Recent)
```sql
SELECT 
  id,
  full_name,
  email,
  inquiry_type,
  message,
  phone_number,
  company_name,
  status,
  created_at,
  user_agent
FROM public.contact_submissions 
ORDER BY created_at DESC 
LIMIT 100;
```

### Export Specific Date Range
```sql
SELECT 
  full_name,
  email,
  inquiry_type,
  message,
  created_at
FROM public.contact_submissions 
WHERE created_at BETWEEN '2025-04-01' AND '2025-04-30'
ORDER BY created_at DESC;
```

---

## 8. MAINTENANCE QUERIES

### Check Table Size
```sql
SELECT 
  pg_size_pretty(pg_total_relation_size('public.contact_submissions')) as table_size;
```

### Get Column Information
```sql
SELECT 
  column_name, 
  data_type, 
  is_nullable
FROM information_schema.columns 
WHERE table_name = 'contact_submissions';
```

### Verify Indexes
```sql
SELECT indexname, indexdef 
FROM pg_indexes 
WHERE tablename = 'contact_submissions';
```

### Check RLS Policies
```sql
SELECT * FROM pg_policies 
WHERE tablename = 'contact_submissions';
```

---

## Quick Start Steps in Supabase:

### Step 1: Create Table
1. Go to **SQL Editor** in Supabase dashboard
2. Click **"New Query"**
3. Copy and paste the **CREATE TABLE** query above
4. Click **"Run"**

### Step 2: Test Insert
1. Run one of the **INSERT** queries to test
2. Should show "1 row affected"

### Step 3: View Data
1. Go to **Table Editor**
2. Click on **contact_submissions** table
3. You should see your test submission

### Step 4: Run Analytics
1. Go back to **SQL Editor**
2. Run the analytics queries to see statistics

---

## Common Use Cases:

### Use Case 1: Get All New Messages Waiting for Response
```sql
SELECT full_name, email, inquiry_type, message, created_at 
FROM public.contact_submissions 
WHERE status = 'new' 
ORDER BY created_at ASC;
```

### Use Case 2: Find Test Drive Requests from Last Week
```sql
SELECT * FROM public.contact_submissions 
WHERE inquiry_type = 'Test Drive Request' 
  AND created_at >= NOW() - INTERVAL '7 days'
ORDER BY created_at DESC;
```

### Use Case 3: Get Fleet Solution Inquiries with Contact Info
```sql
SELECT full_name, email, phone_number, company_name, message 
FROM public.contact_submissions 
WHERE inquiry_type = 'Fleet Solutions'
ORDER BY created_at DESC;
```

### Use Case 4: Find Duplicate Submissions from Same Email
```sql
SELECT email, COUNT(*) as submission_count 
FROM public.contact_submissions 
GROUP BY email 
HAVING COUNT(*) > 1
ORDER BY submission_count DESC;
```

### Use Case 5: Get Weekly Summary Report
```sql
SELECT 
  DATE_TRUNC('week', created_at)::DATE as week_starting,
  COUNT(*) as total,
  COUNT(*) FILTER (WHERE status = 'new') as pending,
  COUNT(*) FILTER (WHERE inquiry_type = 'Test Drive Request') as test_drives
FROM public.contact_submissions 
GROUP BY DATE_TRUNC('week', created_at)
ORDER BY week_starting DESC;
```

---

## Tips:

1. **Always use RETURNING \*** to see the result of your INSERT/UPDATE
2. **Use LIMIT** to avoid fetching too much data
3. **Use indexes** on frequently queried columns (email, created_at, status)
4. **Schedule cleanup** of old/archived submissions monthly
5. **Monitor table size** if you expect high volume
6. **Use RLS policies** to keep data secure

All queries can be run directly in **Supabase SQL Editor** or through your application code!
