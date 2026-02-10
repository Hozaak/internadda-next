// internadda-next/services/supabaseInterviews.ts
import { supabase } from './supabaseClient';

export const fetchInterviewDetails = async (id: string) => {
  const { data, error } = await supabase
    .from('interviews')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data;
};

export const updateInterviewStatus = async (id: string, status: string) => {
  const { data, error } = await supabase
    .from('interviews')
    .update({ status, updated_at: new Date() })
    .eq('id', id);

  if (error) throw error;
  return data;
};
