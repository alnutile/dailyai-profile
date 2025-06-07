import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { Clipboard } from 'lucide-react';
import confetti from 'canvas-confetti';

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
  const [email, setEmail] = useState('');
  const [emailLoading, setEmailLoading] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

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

  useEffect(() => {
    if (toast) {
      const timeout = setTimeout(() => setToast(null), 2500);
      return () => clearTimeout(timeout);
    }
  }, [toast]);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailLoading(true);
    setToast(null);
    try {
      const { error } = await supabase
        .from('emails')
        .insert([{ email, source: 'solutions_page' }]);
      if (error) throw error;
      setToast('Thank you');
      setEmail('');
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch (err) {
      setToast(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setEmailLoading(false);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Solutions</h1>
      <p className="text-center text-gray-500 mb-8">
        This is a list of solutions from the web and work we have done for our clients.
      </p>
      
      {/* Email Capture Section */}
      <div className="w-full max-w-2xl mx-auto mb-12 bg-white rounded-xl shadow p-8 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-2 text-center">Want to learn more?</h2>
        <p className="mb-4 text-center">Click <a href="https://calendly.com/alfrednutile/free-intro-consultation" target="_blank" rel="noopener noreferrer" className="text-custom-pink underline">here</a> for a free consult or add your email below!</p>
        <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
          <input
            type="email"
            required
            placeholder="Your email"
            className="input w-full max-w-xs border-2 border-custom-pink rounded-lg focus:ring-2 focus:ring-custom-pink focus:outline-none h-12 text-lg px-4"
            value={email}
            onChange={e => setEmail(e.target.value)}
            disabled={emailLoading}
          />
          <button
            type="submit"
            className="bg-custom-pink text-white px-6 h-12 rounded-md font-semibold text-lg w-full sm:w-auto hover:bg-opacity-90 transition-colors flex items-center justify-center"
            disabled={emailLoading}
          >
            {emailLoading ? 'Sending...' : 'Submit'}
          </button>
        </form>
        {toast && (
          <div className="toast toast-top toast-center">
            <div className="alert alert-success bg-green-500 text-white font-bold">{toast}</div>
          </div>
        )}
      </div>
      
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