
import React, { useState, useCallback, useEffect } from 'react';
import Dice3D from './components/Dice3D';

const App: React.FC = () => {
  const [diceCount, setDiceCount] = useState<number>(2);
  const [isRolling, setIsRolling] = useState<boolean>(false);
  const [results, setResults] = useState<number[]>([1, 1]);

  // Sync results with dice count immediately when count changes
  useEffect(() => {
    if (!isRolling) {
      setResults(Array.from({ length: diceCount }, () => 1));
    }
  }, [diceCount]);

  const rollDice = useCallback(async () => {
    if (isRolling) return;

    setIsRolling(true);
    
    // Duration of physical roll animation
    const rollDuration = 1000;

    // Set results after animation completes
    setTimeout(() => {
      const newResults = Array.from({ length: diceCount }, () => Math.floor(Math.random() * 6) + 1);
      setResults(newResults);
      setIsRolling(false);
    }, rollDuration);
  }, [diceCount, isRolling]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-4 md:p-8 overflow-x-hidden">
      {/* Header */}
      <header className="text-center mt-4 mb-8">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-2">
          十八啦
        </h1>
        <p className="text-slate-400 uppercase tracking-widest text-xs">Let the numbers decide</p>
      </header>

      {/* Main Dice Area */}
      <main className="flex-1 w-full max-w-5xl flex flex-col items-center justify-center space-y-12">
        {/* 
            To ensure 6 dice are 3 on top and 3 on bottom, 
            we use a responsive max-width that allows exactly 3 dice to fit horizontally.
            Each Dice3D wrapper is roughly 112px wide (80px + p-4 padding).
        */}
        <div 
          className={`flex flex-wrap justify-center items-center gap-4 md:gap-8 min-h-[250px] w-full mx-auto transition-all duration-500 ${
            diceCount === 6 ? 'max-w-[420px] md:max-w-[500px]' : 'max-w-4xl'
          }`}
        >
          {results.map((val, idx) => (
            <div key={idx} className="flex justify-center items-center">
              <Dice3D value={val} isRolling={isRolling} />
            </div>
          ))}
        </div>

        {/* Totals */}
        <div className="text-center space-y-4">
          {!isRolling && (
            <div className="animate-in fade-in zoom-in duration-500">
              <div className="text-7xl font-bold text-white mb-2 tabular-nums">
                {results.reduce((a, b) => a + b, 0)}
              </div>
              <p className="text-slate-500 text-sm uppercase tracking-widest font-semibold">Total Score</p>
            </div>
          )}
          
          {isRolling && (
            <div className="h-[100px] flex items-center justify-center">
              <div className="text-slate-400 italic animate-pulse">
                Rolling the fate...
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Controls */}
      <footer className="w-full max-w-2xl mb-8 space-y-8">
        <div className="glass p-8 rounded-[2.5rem] shadow-2xl space-y-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center md:items-start space-y-3">
              <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">Dice Quantity</span>
              <div className="flex bg-black/40 rounded-2xl p-1.5 border border-white/5 backdrop-blur-sm">
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <button
                    key={num}
                    onClick={() => !isRolling && setDiceCount(num)}
                    disabled={isRolling}
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      diceCount === num 
                        ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/40 scale-110' 
                        : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'
                    }`}
                  >
                    <span className="font-bold text-lg">{num}</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={rollDice}
              disabled={isRolling}
              className={`group relative min-w-[220px] py-5 rounded-2xl font-black text-xl overflow-hidden transition-all active:scale-95 ${
                isRolling 
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed opacity-50' 
                  : 'bg-white text-slate-900 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:scale-[1.02]'
              }`}
            >
              <div className="relative z-10 flex items-center justify-center space-x-3 uppercase tracking-tighter">
                <i className={`fas fa-dice-d20 text-2xl ${isRolling ? 'animate-spin' : 'group-hover:rotate-12 transition-transform'}`}></i>
                <span>{isRolling ? 'Rolling...' : 'Play Now'}</span>
              </div>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
