function Spinbutton({ onSpin, disabled, isSpinning }) {
  return (
    <button
      type="button"
      onClick={onSpin}
      disabled={disabled}
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-slate-900/90 px-8 py-3 text-sm font-semibold text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:-z-10 before:rounded-3xl before:bg-gradient-to-r before:from-fuchsia-500 before:via-cyan-400 before:to-violet-500 before:opacity-80 after:absolute after:inset-0 after:-z-20 after:bg-black after:rounded-3xl after:blur-[18px] ${disabled ? 'cursor-not-allowed opacity-50' : 'hover:scale-[1.02]'}`}
    >
      {isSpinning ? 'Spinning...' : "Let's Decide!"}
    </button>
  )
}

export default Spinbutton
