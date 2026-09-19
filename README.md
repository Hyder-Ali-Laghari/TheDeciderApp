# The Decider

A React app that randomly picks a choice with an animated card spinner.
Add choices, remove them with X, then press **Let's Decide!**. Choices are
locked during a spin, and the winner appears in a toast. Choices live only
in memory and reset on reload.

## Development

Use Node.js 22.12+ (or 20.19+).

```sh
npm ci
npm run dev
```

```sh
npm run lint
npm test
npm run build
npm run preview
```

The page owns choices and the active spin. The input owns its draft;
components share card dimensions, title formatting, and selection logic in
`src/DeciderSpin/choices.js`. CSS centers the track at any viewport width.
