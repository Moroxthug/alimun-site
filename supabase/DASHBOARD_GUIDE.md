# Alimun — Teacher Status Management Guide

This guide describes how to manually approve, suspend, or edit a teacher's status directly from the Supabase Dashboard.

## Editing Status via Supabase Table Editor

1. **Log in** to your [Supabase Dashboard](https://supabase.com/dashboard).
2. **Select your Project** (e.g., `alimun-site`).
3. Click on the **Table Editor** icon (the spreadsheet/table icon on the left sidebar).
4. Select the `teacher_profiles` table from the schema list.
5. Locate the teacher you want to edit by searching for their `full_name` or `user_id`.
6. Double-click the cell in the `status` column for that teacher.
7. Change the value to one of the allowed statuses:
   - `pending`
   - `approved`
   - `suspended`
8. Double-click the cell in the `tier_level` column to update their tier level if needed (`community`, `focused`, `intensive`).
9. Click **Save** (or press Enter) to apply the changes.

## Editing Status via SQL Editor

If you need to make bulk changes or run queries:

1. Click on the **SQL Editor** icon (the console/SQL icon on the left sidebar).
2. Click **New Query**.
3. Paste one of the following commands:

### Approve a specific teacher by ID
```sql
UPDATE public.teacher_profiles
SET status = 'approved', tier_level = 'focused'
WHERE id = 'TEACHER_UUID';
```

### Suspend a specific teacher by ID
```sql
UPDATE public.teacher_profiles
SET status = 'suspended'
WHERE id = 'TEACHER_UUID';
```

4. Click **Run** to execute the query.
