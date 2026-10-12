import React, { useState } from 'react';

interface SubscribeModalProps {
  onClose: () => void;
}

export const SubscribeModal: React.FC<SubscribeModalProps> = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white border-2 border-black max-w-md w-full p-6 space-y-4 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black hover:text-[#5A5A5A] text-xl font-bold p-1 cursor-pointer"
        >
          ✕
        </button>

        {!submitted ? (
          <div className="space-y-4">
            <div className="text-center space-y-1">
              <span className="text-[0.6875rem] font-sans font-bold uppercase tracking-widest text-[#2c638b]">
                Special Digital Introductory Offer
              </span>
              <h3 className="text-3xl font-serif font-bold text-black">
                The New York Times
              </h3>
              <p className="text-sm font-serif text-[#444] pt-1">
                Access independent, fact-checked journalism, Pulitzer Prize-winning reporting, Games, Cooking, and Wirecutter.
              </p>
            </div>

            <div className="bg-[#f5f3f3] p-4 border border-[#E2E2E2] text-center space-y-1">
              <div className="text-3xl font-bold font-serif text-black">$1 <span className="text-sm font-sans font-normal text-[#5A5A5A]">/ week</span></div>
              <p className="text-xs font-sans text-[#5A5A5A]">Billed as $4 every 4 weeks for the first year. Cancel anytime.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 font-sans">
              <div>
                <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-black p-2.5 text-sm outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#2c638b] hover:bg-[#1f4a6b] text-white font-bold py-3 text-xs uppercase tracking-widest transition-colors cursor-pointer"
              >
                Continue to Subscription
              </button>
            </form>

            <ul className="text-xs font-sans text-[#5A5A5A] space-y-1.5 pt-2">
              <li className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-sm text-[#2c638b]">check</span>
                <span>Unlimited News, Opinion, & Audio Dispatches</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-sm text-[#2c638b]">check</span>
                <span>Full access to Wordle, Spelling Bee, & The Mini</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-sm text-[#2c638b]">check</span>
                <span>19,000+ curated NYT Cooking recipes</span>
              </li>
            </ul>
          </div>
        ) : (
          <div className="py-8 text-center space-y-3 font-sans">
            <span className="material-symbols-outlined text-5xl text-[#2c638b]">verified</span>
            <h4 className="text-2xl font-serif font-bold text-black">Welcome to The Times</h4>
            <p className="text-xs text-[#555]">
              A verification confirmation has been dispatched to <strong>{email}</strong>. Enjoy full digital access.
            </p>
            <button
              onClick={onClose}
              className="bg-black text-white px-6 py-2 text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 cursor-pointer"
            >
              Start Reading
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
