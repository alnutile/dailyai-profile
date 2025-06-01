import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

interface UseCase {
  id: string;
  Quote: { text: string; author: string } | null;
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
              className="w-full bg-[#f8f6ef] rounded-xl shadow p-8 flex flex-col md:flex-row items-center justify-between gap-8"
            >
              <div className="flex-1 min-w-0">
                <div className="text-lg italic text-gray-700 mb-2">
                  "{uc.Quote?.text || 'n/a'}"
                </div>
                <div className="text-sm text-gray-500 mb-4">
                  - {uc.Quote?.author || 'n/a'}
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
              <div className="flex flex-col items-center min-w-[180px]">
                {uc.qr_code_url ? (
                  <img
                    src={uc.qr_code_url}
                    alt="QR Code"
                    className="w-32 h-32 object-contain mb-2 border rounded"
                  />
                ) : (
                  <div className="w-32 h-32 flex items-center justify-center bg-gray-200 text-gray-400 rounded mb-2">
                    QR Code
                  </div>
                )}
                <div className="text-xs text-gray-500 mt-1">https://DailyAi.Studio</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SolutionsPage; 