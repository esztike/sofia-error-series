# Sofia, an error series
by Eszti Hollenback, UX Designer and Design Engineer

*Sofia means wisdom in Greek.*

Sofia is a personal productivity agent, and the subject of a design case study exploring error and recovery UX for agentic AI. As more of what we do gets delegated to systems that can act on our behalf, the distance between a person and an outcome grows. This project is an attempt to take the shift seriously: to map how agents fail, and to design for what happens after.

**Live:** [sofia-error-series.vercel.app](https://sofia-error-series.vercel.app)
Also linked from my portfolio at [esztihollenback.com](https://esztihollenback.com)

## Stack 
- React
- Vite
- MDX (@mdx-js/rollup)
- Lucide React
- Built with Claude Code
- CSS approach ?
- React Router ?
- else ?
- Deployed on Vercel, auto-deploy from GitHub

## Notable decisions
- Design and copy by me, code by Claude Code: Finishing up my full-stack dev studies, I had two project ideas in mind: a hand-coded rebuild of my UX portfolio, and a project that would test what I'd learned about working with Claude Code. That meant planning ahead, reasoning through the code, writing specifications, and recovering when a build did not match the intent. Funnily, the process echoes the case study itself. Not what it's based on, but a fitting parallel. 
- MDX living editorial source: Content and layout can change independently. Writing can be revised without touching the build, and the build can adapt without touching the writing. 


## What's inside
- **An error taxonomy** — six error classes covering how agents fail 
  (misread intent, tool failure, scope exceeded, partial completion, stale 
  context, wrong inference), plus two cross-cutting failure properties 
  (cascading failure, silent failure)
- **Eight design principles** — derived from the taxonomy, each mapped to 
  the error classes it addresses
- **Episode 1** — the full case study: Partial Completion, told through 
  Maya, Sofia, and the people affected by what Sofia got wrong. Live now.
- **An interactive prototype** — a working walkthrough of one failure, 
  end to end

## Status
Episode 1 is published. Episode 2 and 3 are planned.

