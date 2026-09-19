import assert from 'node:assert/strict'
import { formatTitle, selectChoice, PRE_ROUNDS, SPIN_ROUNDS, REPEAT_COUNT } from './choices.js'

assert.equal(selectChoice([]), null)
assert.equal(formatTitle('bEER'), 'Beer')
assert.equal(formatTitle(''), '')
for (const count of [1, 2, 10, 100]) {
  const choices = Array.from({ length: count }, (_, id) => ({ id, title: `Choice ${id}` }))
  for (let index = 0; index < count; index++) {
    const spin = selectChoice(choices, (index + 0.5) / count)
    assert.equal(spin.winner, choices[index])
    assert.equal(spin.index % count, index)
    assert.equal(spin.index, (PRE_ROUNDS + SPIN_ROUNDS) * count + index)
    assert.ok(spin.index < REPEAT_COUNT * count)
  }
  assert.equal(selectChoice(choices, 0).winner, choices[0])
  assert.equal(selectChoice(choices, 1 - Number.EPSILON).winner, choices.at(-1))
}
