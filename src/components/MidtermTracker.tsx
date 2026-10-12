import React, { useState } from 'react';

interface MidtermTrackerProps {
  onOpenDetails?: () => void;
}

export const MidtermTracker: React.FC<MidtermTrackerProps> = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="p-3 bg-[#f5f3f3] border border-[#E2E2E2] space-y-2">
        <span className="text-[0.6875rem] font-sans uppercase font-bold text-black block tracking-wider">
          2026 MIDTERM TRACKER
        </span>
        <p className="text-sm font-serif font-bold text-black">The Race for Congress</p>
        <div className="grid grid-cols-2 gap-2 text-xs font-sans pt-1">
          <div className="border border-[#E2E2E2] p-2 bg-white text-center">
            <span className="block text-[#5A5A5A] font-bold text-[0.6875rem]">SENATE</span>
            <span className="text-base font-serif font-bold text-black">50-49</span>
            <span className="text-[#2c638b] text-[0.625rem] font-semibold block">1 TOSS-UP</span>
          </div>
          <div className="border border-[#E2E2E2] p-2 bg-white text-center">
            <span className="block text-[#5A5A5A] font-bold text-[0.6875rem]">HOUSE</span>
            <span className="text-base font-serif font-bold text-black">218-214</span>
            <span className="text-[#2c638b] text-[0.625rem] font-semibold block">3 LEAN D</span>
          </div>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="w-full text-xs font-sans text-[#2c638b] hover:underline pt-1 text-center font-semibold cursor-pointer"
        >
          See the interactive state forecast ›
        </button>
      </div>

      {/* Midterm Tracker Detailed Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white max-w-xl w-full p-6 border-2 border-black space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start border-b border-black pb-3">
              <div>
                <span className="text-[0.6875rem] uppercase font-bold tracking-widest text-[#D0021B] font-sans">
                  Election Forecast Model
                </span>
                <h3 className="text-2xl font-serif font-bold text-black">2026 Race for Congress</h3>
                <p className="text-xs text-[#5A5A5A] font-sans">
                  Updated model projections based on polling consensus and economic indicators
                </p>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="text-black hover:text-[#5A5A5A] p-1 font-bold text-xl cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 font-sans text-xs">
              <div className="bg-[#f8f8f8] p-3 border border-[#E2E2E2]">
                <h4 className="font-bold text-sm mb-2 text-black">U.S. Senate Outlook (100 Seats)</h4>
                <div className="flex h-6 rounded-none overflow-hidden border border-[#E2E2E2]">
                  <div className="bg-[#2c638b] text-white flex items-center justify-center font-bold" style={{ width: '49%' }}>
                    Dem / Ind 49
                  </div>
                  <div className="bg-[#e9e8e7] text-black flex items-center justify-center font-bold text-[0.625rem]" style={{ width: '2%' }}>
                    1
                  </div>
                  <div className="bg-[#D0021B] text-white flex items-center justify-center font-bold" style={{ width: '49%' }}>
                    GOP 50
                  </div>
                </div>
                <div className="flex justify-between text-[0.6875rem] text-[#5A5A5A] mt-1">
                  <span>50 seats needed for control (with VP)</span>
                  <span className="text-[#2c638b] font-semibold">Toss-up: Ohio</span>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-sm mb-2 text-black font-serif">Key Senate Battlegrounds</h4>
                <div className="divide-y divide-[#E2E2E2] border border-[#E2E2E2]">
                  {[
                    { state: 'Ohio', status: 'Toss-Up', margin: '+0.4% D', turnout: 'High' },
                    { state: 'Montana', status: 'Lean R', margin: '+2.1% R', turnout: 'Moderate' },
                    { state: 'Arizona', status: 'Lean D', margin: '+1.8% D', turnout: 'High' },
                    { state: 'Pennsylvania', status: 'Lean D', margin: '+2.4% D', turnout: 'High' },
                    { state: 'Nevada', status: 'Toss-Up', margin: '+0.2% R', turnout: 'Moderate' }
                  ].map((row) => (
                    <div key={row.state} className="p-2.5 flex items-center justify-between hover:bg-[#f9f9f9]">
                      <span className="font-bold text-black">{row.state}</span>
                      <span className="px-2 py-0.5 bg-[#f0f0f0] text-black font-semibold text-[0.6875rem]">
                        {row.status}
                      </span>
                      <span className="font-mono text-black">{row.margin}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 text-[#5A5A5A] text-[0.6875rem] leading-relaxed">
                * Methodology combines registered voter state polls, historical mid-term turnout fundamentals, and district demographic shifts.
              </div>
            </div>

            <div className="border-t border-[#E2E2E2] pt-3 flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="bg-black text-white px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-[#333] cursor-pointer"
              >
                Close Forecast
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
