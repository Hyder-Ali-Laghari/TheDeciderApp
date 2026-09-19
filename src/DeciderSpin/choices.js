export const CARD_WIDTH = 160
export const CARD_GAP = 20
export const PRE_ROUNDS = 3
export const SPIN_ROUNDS = 4
export const REPEAT_COUNT = PRE_ROUNDS + SPIN_ROUNDS + 2

export function formatTitle(title) {
  return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()
}

export function selectChoice(choices, random = Math.random()) {
  if (!choices.length) return null
  const index = Math.floor(random * choices.length)
  return {
    winner: choices[index],
    index: (PRE_ROUNDS + SPIN_ROUNDS) * choices.length + index,
  }
}
