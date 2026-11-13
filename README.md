# Reef Reflex — Performance Digital

A browser game for learning Performance Digital's tactics. No installation, paid services, API keys, or build step required.

## Play on your computer

Extract the ZIP first, then double-click index.html. Keep styles.css, questions.js, engine.js, and game.js beside it. The game works offline.

## Publish with GitHub Pages

1. Sign into GitHub and create a new repository. Suggested name: pd-reef-reflex. Choose Public for the simplest free GitHub Pages setup. This publishes the game and its question bank for anyone with the link to view.
2. Open the repository's Code tab. Use the uploading an existing file link on an empty repository, or Add file → Upload files.
3. Upload index.html, styles.css, questions.js, engine.js, and game.js from the extracted ZIP. Upload the individual files, not the ZIP or its parent folder. index.html must appear at the top level of the repository. You can also upload this README.md.
4. Click Commit changes, committing to the main branch.
5. Open Settings → Pages.
6. Under Build and deployment, set Source to Deploy from a branch.
7. Set Branch to main and folder to /(root), then click Save.
8. Wait for deployment. GitHub says publication can take up to 10 minutes. Refresh Settings → Pages and click Visit site to get the game link.
9. Share that link with interns. When you upload future changes, commit them to main and GitHub Pages will republish them.

Official setup instructions:
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

If the page shows a 404, confirm index.html is at the repository root and Pages uses main / (root). If it looks unstyled or does not start, confirm all five game files were uploaded together, then refresh the browser.

## Controls and rules

- Press Space or Up arrow, tap the ocean, or use the Jump button to jump. One jump at a time.
- The clownfish swims automatically. Coral collisions pause swimming and open a question.
- Questions have four choices. Click a choice or press 1, 2, 3, or 4.
- Each question has a 20-second deadline. Answering at or after that deadline counts as a timeout.
- A correct answer shows an explanation. Select Keep swimming to resume.
- Ten correct answers wins. A wrong answer or timeout ends the run and shows the correct answer.
- Every run draws randomly from 50 questions without repeating any question in that run. Questions may reappear in later runs.
- Pause or Escape pauses swimming. Switching tabs also pauses swimming. An active question's deadline keeps counting when the tab is hidden.
- Resizing the window pauses swimming so the play area can adjust.
- This version does not collect names, save scores, or provide a leaderboard.

## Edit the questions

Edit questions.js. Every question has id, tactic, question, four options, correctIndex, and explanation. correctIndex is zero-based: 0 means the first option, 1 the second, 2 the third, and 3 the fourth. Match it carefully after editing options.

Source reviewed November 13, 2026: https://jameblast.my.canva.site/tactic-showcase
The hidden Pre-roll, YouTube, LinkedIn, and TikTok detail pages are excluded. YouTube still has a menu card but its hidden detail page was excluded.

## Files

- index.html — page layout
- styles.css — visual styling and responsive layout
- questions.js — editable 50-question bank
- engine.js — quiz rules, randomization, and collision helper
- game.js — animation, jumping, coral obstacles, question screens, controls

The fish and ocean are drawn in code; there are no external images, fonts, or network dependencies. The PD wordmark is a text treatment, not an official supplied logo asset.

## Validation

Automated checks covered the 50-item bank, valid answer indices, no repeated questions per run, the ten-answer win, wrong answers, the exact timeout boundary, restart, pause, collision geometry, and an integrated simulated animation/UI loop covering jump, collision, question display, correct-answer continuation, and timeout. Desktop layout and start controls were inspected in a browser. Full live-browser animation and touch-device behavior were not verified end-to-end; gameplay flow was validated through simulation.
