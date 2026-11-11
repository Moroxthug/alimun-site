-- Owner, 10 Nov 2026: more material for the class board. The pages a teacher adds in class (empty pages, pages from
-- other lessons of the course, the last class's words) are kept with the board, in order. Idempotent; additive only.
alter table public.session_boards add column if not exists extra jsonb not null default '[]'::jsonb;
do $$ begin
  if not exists (select 1 from pg_constraint where conname = 'session_boards_extra_array') then
    alter table public.session_boards add constraint session_boards_extra_array check (jsonb_typeof(extra) = 'array' and jsonb_array_length(extra) <= 30);
  end if;
end $$;

-- Verify
select column_name, data_type, column_default from information_schema.columns
where table_schema = 'public' and table_name = 'session_boards' and column_name = 'extra';
