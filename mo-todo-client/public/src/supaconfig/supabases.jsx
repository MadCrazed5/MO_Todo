import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://oubebvvkzwlddureklfw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im91YmVidnZrendsZGR1cmVrbGZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk4MzY0NzcsImV4cCI6MjAxNTQxMjQ3N30.ulxXOijwr4soySbehts1YuStKTH-B-_PTbf7_feP7zc'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase