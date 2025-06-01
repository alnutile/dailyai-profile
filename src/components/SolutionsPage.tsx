import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { Clipboard } from 'lucide-react';

interface UseCase {
  id: string;
  Quote: string | null;
  Source: string | null;
  "If You Are": string | null;
  Time_Saved: string | null;
  Monthly_Cost: string | null;
  Ai: string | null;
  URL: string | null;
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
        .eq('valid', true)
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
    <div className="w-full max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Solutions</h1>
      <p className="text-center text-gray-500 mb-8">
        This is a list of solutions from the web and work we have done for our clients.
      </p>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((uc) => (
            <div
              key={uc.id}
              id={uc.id}
              className="group relative w-full bg-white rounded-xl shadow-sm border-l-8 border-custom-pink p-8 flex flex-col md:flex-row items-start gap-8"
            >
              <CopyLinkButton id={uc.id} />
              <div className="flex-1 min-w-0">
                <div className="text-lg italic text-gray-700 mb-2">
                  {uc.Quote || 'n/a'}
                </div>
                <div className="text-sm text-gray-500 mb-4">
                  - <a href={uc.URL || 'n/a'} 
                  className="text-custom-pink underline"
                  target="_blank" rel="noopener noreferrer">{uc.Source || 'n/a'}</a>
                </div>
                <div className="text-2xl font-bold mb-4">
                  {uc["If You Are"] || 'n/a'}
                </div>
                <div className="flex flex-col gap-1 mb-4">
                  <div className="flex items-center gap-2">
                    <span role="img" aria-label="clock">🕒</span>
                    <span className="font-semibold">Time Saved:</span> {uc.Time_Saved ? `${uc.Time_Saved} hrs` : 'n/a'}
                  </div>
                  <div className="flex items-center gap-2">
                    <span role="img" aria-label="money">💲</span>
                    <span className="font-semibold">Monthly Cost:</span> {uc.Monthly_Cost ? (`From ${uc.Monthly_Cost.trim().startsWith('$') ? '' : '$'}${uc.Monthly_Cost}`) : 'n/a'}
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

const CopyLinkButton: React.FC<{ id: string }> = ({ id }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    const url = `${window.location.origin}/solutions#${id}`;
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-4 right-4 p-2 rounded-full bg-white hover:bg-gray-100 border border-gray-200 shadow transition-opacity opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 focus:opacity-100"
      title="Copy link to this card"
      style={{ zIndex: 10 }}
    >
      {copied ? (
        <span className="text-xs text-custom-pink font-semibold">Copied!</span>
      ) : (
        <Clipboard className="w-5 h-5 text-gray-400 hover:text-custom-pink" />
      )}
    </button>
  );
};

export default SolutionsPage; 