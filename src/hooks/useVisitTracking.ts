import { useEffect } from 'react';
import { supabase } from '../lib/supabase';

export function useVisitTracking() {
  useEffect(() => {
    const trackVisit = async () => {
      try {
        const userAgent = navigator.userAgent;

        await supabase.from('page_visits').insert({
          user_agent: userAgent,
        });
      } catch (error) {
        console.error('Error tracking visit:', error);
      }
    };

    const hasVisited = sessionStorage.getItem('visited');
    if (!hasVisited) {
      trackVisit();
      sessionStorage.setItem('visited', 'true');
    }
  }, []);
}
