# Filstruktur

Dette dokumentet forklarer organiseringen av prosjektets filstruktur.

## Hovedmapper

```
my-awesome-cv/
├── docs/               # Dokumentasjon
├── public/            # Statiske filer
│   ├── images/       # Bilder og ikoner
│   └── ...
├── src/              # Kildekode
│   ├── app/         # Next.js app router
│   ├── components/  # React komponenter
│   ├── data/       # Data filer
│   └── hooks/      # Custom React hooks
└── ...
```

## Detaljert struktur

### `public/`
- `images/`: Inneholder alle bilder og ikoner
  - `cards/`: Bilder for info-kort
  - `icons/`: Teknologi-ikoner
  - `screenshots/`: Prosjekt-skjermbilder

### `src/app/`
- `page.jsx`: Hovedsiden
- `layout.jsx`: Hoved-layout
- Undersider:
  - `about/`: Om meg-seksjonen
  - `contact/`: Kontaktskjema
  - `experience/`: Erfaring og prosjekter
  - `skills/`: Ferdigheter
  - `startscreen/`: Velkomstskjerm

### `src/components/`
- `base/`: Grunnleggende komponenter
  - `Icon.js`
  - `NavButtons.jsx`
  - `ScrollCTA.jsx`
  - `ScrollSpy.jsx`
- `layout/`: Layout-komponenter
  - `footer/`: Footer-relaterte komponenter
  - `header/`: Header og navigasjon
- `Stars/`: Stjerne-animasjoner

### `src/data/`
- `cardsdata.js`: Data for info-kort
- Andre datafiler i underseksjonene

### `src/hooks/`
- `useLocalStorage.js`: Hook for lokal lagring
- `useScrollHide.js`: Hook for scroll-funksjonalitet

## Konfigurasjonsfiler
- `eslint.config.mjs`: ESLint konfigurasjon
- `next.config.mjs`: Next.js konfigurasjon
- `tailwind.config.js`: Tailwind CSS konfigurasjon
- `postcss.config.js`: PostCSS konfigurasjon
