import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

interface UseCase {
  id: string;
  Quote: string | null;
  Source: string | null;
  "If You Are": string | null;
  Time_Saved: string | null;
  Monthly_Cost: string | null;
  Ai: string | null;
  "Automation Tools": string | null;
  qr_code_url: string | null;
}

const SolutionsPage: React.FC = () => {
  const [useCases, setUseCases] = useState<UseCase[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUseCases = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('usecases')
        .select('*')
        .order('verified_at', { ascending: false });
      if (!error && data) {
        setUseCases(data);
      }
      setLoading(false);
    };
    fetchUseCases();
    console.log(useCases);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Solutions</h1>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="flex flex-col gap-8">
          {useCases.map((uc) => (
            <div
              key={uc.id}
              className="w-full bg-white rounded-xl shadow-sm border-l-8 border-custom-pink p-8 flex flex-col md:flex-row items-start gap-8"
            >
              <div className="flex-1 min-w-0">
                <div className="text-lg italic text-gray-700 mb-2">
                  {uc.Quote || 'n/a'}
                </div>
                <div className="text-sm text-gray-500 mb-4">
                  - {uc.Source || 'n/a'}
                </div>
                <div className="text-2xl font-bold mb-4">
                  {uc["If You Are"] || 'n/a'}
                </div>
                <div className="flex flex-col gap-1 mb-4">
                  <div className="flex items-center gap-2">
                    <span role="img" aria-label="clock">🕒</span>
                    <span className="font-semibold">Time Saved:</span> {uc.Time_Saved || 'n/a'}
                  </div>
                  <div className="flex items-center gap-2">
                    <span role="img" aria-label="money">💲</span>
                    <span className="font-semibold">Monthly Cost:</span> {uc.Monthly_Cost || 'n/a'}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">✔️ Ai Used</span>: {uc.Ai || 'n/a'}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">✔️ Automation Tool Used</span>: {uc["Automation Tools"] || 'n/a'}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SolutionsPage; 