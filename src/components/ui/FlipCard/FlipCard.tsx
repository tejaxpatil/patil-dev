import { useState } from 'react';
import { ArrowUpRight, Code2, Rotate3D } from 'lucide-react';

function FlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleCard = () => {
    setIsFlipped((current) => !current);
  };

  return (
    <div
      className="relative h-full w-full cursor-pointer"
      style={{ perspective: '1400px' }}
      onClick={toggleCard}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          toggleCard();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={
        isFlipped
          ? 'Profile card. Click to see the front.'
          : 'Profile card. Click to reveal the profile.'
      }
    >
      <div
        className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] motion-reduce:transition-none"
        style={{
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* FRONT */}
        <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-white/10 bg-[#101114] [backface-visibility:hidden]">
          {/* Background grid */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)',
              backgroundSize: '42px 42px',
            }}
          />

          {/* Blue glow */}
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"
          />

          {/* Content */}
          <div className="relative flex h-full flex-col justify-between p-8 sm:p-10">
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/40">
                <Code2
                  size={20}
                  strokeWidth={1.8}
                  className="text-[var(--accent)]"
                />
              </div>

              <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/50">
                Engineering
              </span>
            </div>

            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-[var(--accent)]">
                Build · Explore · Create
              </p>

              <h3 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                PATIL<span className="text-[var(--accent)]">.</span>
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-6 text-white/55">
                Information Science & Engineering student building polished,
                production-quality web applications.
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-white/10 pt-5">
              <span className="flex items-center gap-2 text-xs text-white/45">
                <Rotate3D size={14} />
                Click to reveal
              </span>

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                <ArrowUpRight
                  size={16}
                  className="text-white/70"
                />
              </span>
            </div>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 overflow-hidden rounded-[2rem] border border-white/10 bg-[#101114] [backface-visibility:hidden]"
          style={{
            transform: 'rotateY(180deg)',
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(59,130,246,0.12),transparent_45%)]" />

          <div className="relative flex h-full flex-col items-center justify-center p-8 text-center sm:p-10">
            {/* Temporary profile visual */}
            <div className="flex h-28 w-28 items-center justify-center rounded-full border border-blue-400/20 bg-black/50 shadow-[0_0_60px_rgba(59,130,246,0.12)]">
              <span className="text-3xl font-bold tracking-tight text-white">
                TP<span className="text-[var(--accent)]">.</span>
              </span>
            </div>

            <p className="mt-7 text-xs font-medium uppercase tracking-[0.25em] text-[var(--accent)]">
              Tejas Patil
            </p>

            <h3 className="mt-3 text-xl font-semibold text-white">
              Your photo goes here.
            </h3>

            <p className="mt-3 max-w-xs text-sm leading-6 text-white/50">
              This space is ready for your professional profile photo whenever
              you're ready to add it.
            </p>

            <div className="mt-7 flex items-center gap-2 text-xs text-white/40">
              <Rotate3D size={14} />
              Click to flip back
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;