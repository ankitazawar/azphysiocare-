import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function VisitCounter() {
  const [visits, setVisits] = useState<number>(0);

  useEffect(() => {
    const fetchVisits = async () => {
      try {
        const now = new Date();
        const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

        const { count, error } = await supabase
          .from('page_visits')
          .select('*', { count: 'exact', head: true })
          .gte('visited_at', firstDayOfMonth.toISOString());

        if (!error && count !== null) {
          setVisits(count);
        }
      } catch (error) {
        console.error('Error fetching visits:', error);
      }
    };

    fetchVisits();
  }, []);

  if (visits === 0) return null;

  return (
    <div className="text-center py-6 bg-gray-100 border-t border-gray-200">
      <p className="text-gray-600 text-sm">
        <span className="font-semibold text-teal-600">{visits.toLocaleString()}</span> visits this month
      </p>
    </div>
  );
}
