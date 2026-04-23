# Supabase Contact Form Setup Guide

## Overview
This guide walks you through setting up Supabase to store contact form submissions from your Axigear website with SweetAlert notifications.

## Step 1: Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up/login
2. Click "New Project" and fill in the details:
   - **Project Name**: axigear-contacts (or your preferred name)
   - **Database Password**: Create a strong password (save this!)
   - **Region**: Choose the region closest to your users (e.g., Asia Pacific - Singapore)
3. Wait for the project to initialize (2-3 minutes)

## Step 2: Create the Database Table

1. Go to the **SQL Editor** section in your Supabase dashboard
2. Click "New Query" and paste the SQL from `supabase-sql-schema.sql`
3. Click "Run" to execute all the SQL queries
4. Verify the table was created by going to **Table Editor** and looking for `contact_submissions`

### SQL Query Summary
The SQL script creates:
- `contact_submissions` table with fields for:
  - `id` (UUID primary key)
  - `full_name` (VARCHAR)
  - `email` (VARCHAR)
  - `inquiry_type` (VARCHAR)
  - `message` (TEXT)
  - `phone_number`, `company_name` (optional)
  - `status` (new/responded/archived)
  - `created_at`, `updated_at` (timestamps)
  - `ip_address`, `user_agent` (for analytics)

- **Indexes** for faster queries on email, created_at, and status
- **Row Level Security (RLS)** policies for secure submissions
- **Triggers** to automatically update timestamps
- **Functions** to get submission statistics

## Step 3: Get Your API Keys

1. Go to **Settings → API** in your Supabase dashboard
2. Copy these two keys:
   - **Project URL**: looks like `https://xxxxx.supabase.co`
   - **anon public**: the anonymous/public API key
3. **Do NOT share your API key publicly** - use environment variables

## Step 4: Configure Environment Variables

### Create a `.env.local` file in your project root:

```env
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Replace with your actual keys from Step 3**

### Or set them in your deployment platform:
- **Netlify**: Site Settings → Build & Deploy → Environment
- **Vercel**: Settings → Environment Variables
- **Railway**: Variables section
- **Builder.io**: Settings → Environment Variables

## Step 5: Enable RLS (Row Level Security)

The SQL script includes RLS policies, but verify they're enabled:

1. Go to **Settings → Authentication → Policies**
2. Make sure these policies exist:
   - "Allow anonymous inserts" - allows public form submissions
   - "Users can view their submissions" - for authenticated users

## Step 6: Test the Form

1. Fill out the contact form on your website
2. Submit and you should see a SweetAlert success message
3. Check your Supabase dashboard → **Table Editor → contact_submissions**
4. You should see your submission with all the data

## Features Implemented

### ✅ Form Validation
- Name validation (required, non-empty)
- Email validation (format check)
- Message validation (min 10 characters)
- Real-time error display

### ✅ SweetAlert Notifications
```typescript
// Success Alert
Swal.fire({
  title: 'Success!',
  text: 'Thank you for reaching out! We will get back to you within 24 hours.',
  icon: 'success',
  timer: 3000,
  timerProgressBar: true,
});

// Error Alert
Swal.fire({
  title: 'Error!',
  text: 'Failed to submit the form. Please try again.',
  icon: 'error',
});
```

### ✅ Data Captured
- Full Name
- Email Address
- Inquiry Type (General, Test Drive, Fleet Solutions, Investment)
- Message
- User Agent (browser/device info)
- IP Address (optional, add if needed)
- Timestamps (created_at, updated_at)
- Status (new/responded/archived)

## Database Queries Reference

### Get all submissions
```sql
SELECT * FROM contact_submissions ORDER BY created_at DESC;
```

### Get new submissions only
```sql
SELECT * FROM contact_submissions WHERE status = 'new' ORDER BY created_at DESC;
```

### Get submissions by inquiry type
```sql
SELECT * FROM contact_submissions 
WHERE inquiry_type = 'Test Drive Request' 
ORDER BY created_at DESC;
```

### Get submission statistics
```sql
SELECT get_contact_stats();
```

### Update submission status
```sql
UPDATE contact_submissions 
SET status = 'responded' 
WHERE id = 'your-submission-id';
```

### Get submissions from last 7 days
```sql
SELECT * FROM contact_submissions 
WHERE created_at >= NOW() - INTERVAL '7 days' 
ORDER BY created_at DESC;
```

### Export submissions as CSV
1. Go to Table Editor
2. Select contact_submissions
3. Click "Download" → CSV

## Security Best Practices

1. **Never commit `.env.local`** to Git - add it to `.gitignore`
2. **Use Environment Variables** in production
3. **RLS Policies** are already configured for security
4. **Rate Limiting**: Consider adding rate limiting in production
5. **Backup Regularly**: Set up Supabase automatic backups

## Monitoring & Analytics

View submission stats in Supabase:
```sql
-- Get daily submission count
SELECT 
  DATE(created_at) as date,
  COUNT(*) as count,
  COUNT(*) FILTER (WHERE status = 'new') as new_submissions
FROM contact_submissions
GROUP BY DATE(created_at)
ORDER BY date DESC;
```

## Troubleshooting

### "VITE_SUPABASE_URL is missing"
- Add your environment variables to `.env.local`
- Restart your dev server
- Check that variable names are exactly: `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`

### "Table contact_submissions doesn't exist"
- Run the SQL schema from `supabase-sql-schema.sql` again
- Check that you're in the correct database/project

### "RLS policy denies insert"
- Verify the "Allow anonymous inserts" policy exists
- Check that RLS is enabled on the table

### Form submits but no data appears
- Check browser console for errors
- Verify API keys in `.env.local`
- Check Supabase logs in the dashboard

## Next Steps

1. **Email Notifications**: Set up email triggers when new submissions arrive
2. **Webhooks**: Create webhooks to send data to other services
3. **Dashboard**: Build an admin dashboard to manage submissions
4. **Analytics**: Track submission sources and success rates
5. **Integration**: Connect to CRM or email marketing tools

## Support

- Supabase Docs: https://supabase.com/docs
- Contact Form Code: `src/components/ContactForm.tsx`
- Supabase Utils: `src/utils/supabase.ts`
