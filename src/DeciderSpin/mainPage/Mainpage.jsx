import { useRef, useState } from 'react'
import { PRE_ROUNDS, selectChoice } from '../choices.js'
import Header from '../components/Header.jsx'
import OptionInput from '../components/OptionInput.jsx'
import OptionListItems from '../components/OptionListItems.jsx'
import SpinCard from '../components/SpinCard.jsx'
import Spinbutton from '../components/Spinbutton.jsx'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Mainpage() {
  const [optionList, setOptionList] = useState([])
  const [spin, setSpin] = useState(null)
  const nextId = useRef(0)
  const isSpinning = spin !== null

  function handleAdd(title) {
    if (isSpinning) return
    const choice = { id: nextId.current++, title }
    setOptionList((choices) => [...choices, choice])
  }

  function handleRemove(id) {
    if (isSpinning) return
    setOptionList((choices) => choices.filter((choice) => choice.id !== id))
  }

  function handleOptEdit(id, newName) {
    if (isSpinning) return;
    setOptionList((choices) => choices.map((choice) => choice.id === id ? ({id: choice.id, title: newName}) : choice));
  }

  function handleSpin() {
    if (!isSpinning) setSpin(selectChoice(optionList))
  }

  function handleTransitionEnd(event) {
    if (!spin || event.target !== event.currentTarget || event.propertyName !== 'transform') return
    toast.success(`Decided: ${spin.winner.title}`)
    setSpin(null)
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-slate-950 via-purple-900 to-slate-900 text-white">
      <Header />
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <OptionInput onAdd={handleAdd} disabled={isSpinning} />
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-20 sm:px-6 lg:flex-row lg:items-start lg:px-8">
        <aside className="w-full lg:w-72 shrink-0">
          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-lg backdrop-blur-md">
            <h2 className="mb-4 text-lg font-bold text-white">Your Choices</h2>
            <OptionListItems optionList={optionList} onEdit={handleOptEdit} onRemove={handleRemove} disabled={isSpinning} />
          </div>
        </aside>
        <main className="flex min-w-0 flex-1 flex-col items-center gap-8">
          <SpinCard
            optionList={optionList}
            index={spin?.index ?? optionList.length * PRE_ROUNDS}
            isSpinning={isSpinning}
            onTransitionEnd={handleTransitionEnd}
          />
          <Spinbutton onSpin={handleSpin} isSpinning={isSpinning} disabled={isSpinning || optionList.length === 0} />
        </main>
      </div>
      <ToastContainer position="top-center" theme="dark" autoClose={3000} pauseOnHover closeOnClick />
    </div>
  )
}

export default Mainpage
