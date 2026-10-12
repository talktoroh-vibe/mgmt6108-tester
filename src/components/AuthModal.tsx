import React, { useState } from 'react';

interface AuthModalProps {
  onClose: () => void;
  onLoginSuccess?: (email: string) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ onClose, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setLoggedIn(true);
      if (onLoginSuccess) onLoginSuccess(email);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white border-2 border-black max-w-sm w-full p-6 space-y-4 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black hover:text-[#5A5A5A] text-xl font-bold p-1 cursor-pointer"
        >
          ✕
        </button>

        {!loggedIn ? (
          <div className="space-y-4 font-sans">
            <div className="text-center space-y-1">
              <h3 className="text-2xl font-serif font-bold text-black">
                Log In to The Times
              </h3>
              <p className="text-xs text-[#5A5A5A]">
                Enter your email address to access your subscription, saved articles, and puzzles.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full border border-black p-2.5 text-xs text-black outline-none"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-xs font-bold text-black uppercase tracking-wider">
                    Password
                  </label>
                  <a href="#forgot" className="text-[0.625rem] text-[#2c638b] hover:underline">
                    Forgot?
                  </a>
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full border border-black p-2.5 text-xs text-black outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black hover:bg-neutral-800 text-white font-bold py-2.5 text-xs uppercase tracking-widest transition-colors cursor-pointer"
              >
                Log In
              </button>
            </form>

            <div className="relative py-2 text-center text-xs text-[#777]">
              <span className="bg-white px-2 relative z-10">or continue with</span>
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#E2E2E2]" />
              </div>
            </div>

            <button
              onClick={() => {
                setLoggedIn(true);
                if (onLoginSuccess) onLoginSuccess('subscriber@nytimes.com');
              }}
              className="w-full border border-black hover:bg-[#f5f5f5] text-black font-bold py-2 text-xs transition-colors cursor-pointer flex items-center justify-center space-x-2"
            >
              <span>Demo Quick Sign In (Subscriber)</span>
            </button>
          </div>
        ) : (
          <div className="py-6 text-center space-y-3 font-sans">
            <span className="material-symbols-outlined text-4xl text-[#2c638b]">check_circle</span>
            <h4 className="text-xl font-serif font-bold text-black">Welcome back</h4>
            <p className="text-xs text-[#555]">
              You are signed in as <strong>{email || 'subscriber@nytimes.com'}</strong>.
            </p>
            <button
              onClick={onClose}
              className="bg-black text-white px-6 py-2 text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 cursor-pointer"
            >
              Continue
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
