# STUDY-FLOW-by-VELLORA
Make your schedule feels like your brain
# STUDYFLOW by VELLORA

> Plan less. Focus better. Keep your momentum.

STUDYFLOW by VELLORA is a mobile-first personal productivity workspace designed to help users decide what matters next and organize it around their own life.

## Core ideas

- Custom folders such as School, Work, Personal, or anything the user wants
- 5-level priority system instead of confidence/readiness scoring
- Today / This Week / This Month / This Year / All planning filters
- Momentum-based streaks that do not require activity every single day
- Deadline reminders and browser notification support while the app is active
- Focus timer
- Calendar
- Progress and activity tracking
- English + Indonesian interface
- LocalStorage persistence
- No account, login, database, or backend required for the core app

## Run locally

Keep these files together and open `index.html` in a modern browser:

```text
index.html
style.css
script.js
```

The app stores its data in the browser's LocalStorage.

### Notifications

Browser notifications require permission and browser support. Background/push behavior is more reliable when the app is deployed over HTTPS (for example, a static hosting service) rather than opened as a local `file://` page.

## Project structure

```text
STUDYFLOW-by-VELLORA/
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── logo/
│   ├── icons/
│   ├── backgrounds/
│   ├── illustrations/
│   └── images/
├── README.md
└── LICENSE
```

## Tech stack

- HTML5
- CSS3
- Vanilla JavaScript
- LocalStorage
- Web Notifications API (when supported)

## Design direction

The interface follows a soft, premium mobile productivity aesthetic: light blue atmosphere, frosted glass bubbles, deep navy typography, blue primary actions, soft gold accents, rounded cards, subtle shadows, and restrained motion.

Custom visual assets can be placed in `assets/` when higher visual fidelity is needed.
