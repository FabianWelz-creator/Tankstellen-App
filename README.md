# 🚗 Tankstellen Köln – Vue 3 App

Einfaches Projekt zur Darstellung von Tankstellen in Köln, mit Sortier- und Suchfunktion. Optionaler Dark-/Light-Modus integriert.

## 🔧 Techstack

- [Vue 3](https://vuejs.org/) + [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS v4.1](https://tailwindcss.com/)
- [Open Data API Köln](https://offenedaten-koeln.de/dataset/tankstellen-koeln)

## ✨ Features

- 🔍 Suche nach Straßenname
- 🔀 Sortierung A–Z / Z–A
- 🌗 Dark-/Light-Mode (inkl. Theme-Persistenz via `localStorage`)
- 🎯 Responsive Design


## Kollaboratives Entwickeln & Codequalität

**Ziel:** Gemeinsame Entwicklung effizient gestalten und die Codequalität sichern.


- **Git + GitHub/GitLab:** Versionierung, Branches, Pull Requests
- **Branching-Modell:** `main`, `dev`, `feature/xyz`
- **Commit-Konventionen
- **Code Reviews:** 4-Augen-Prinzip vor jedem Merge

- **ESLint:** statisches Code-Checking
- **Type Checking:** via `vue-tsc`
- **Automatisierte Tests

- **Komponenten:** z. B. mit [Storybook](https://storybook.js.org/)
- **API:** Swagger / OpenAPI 

## CRUD-Architektur

### Problem:

Die aktuelle API ist nur lesend – kein Anlegen, Bearbeiten oder Löschen möglich.

### Ziel:

Eine eigene **CRUD-API**, um folgende Funktionen umzusetzen:

| Methode | Pfad                | Funktion                   |
|--------:|---------------------|-----------------------------|
| `GET`   | `/api/stations`     | Alle Tankstellen holen     |
| `GET`   | `/api/stations/:id` | Einzelne Tankstelle holen  |
| `POST`  | `/api/stations`     | Neue Tankstelle anlegen    |
| `PUT`   | `/api/stations/:id` | Tankstelle bearbeiten      |
| `DELETE`| `/api/stations/:id` | Tankstelle löschen         |


Techstack:
Backend: Node.js + Express (RESTful Apis) + TypeScript
DB: PostgreSQL (Prod) / SQLite (Dev)


## Hosting-Strategie

Frontend:
Netlify, Vercel oder GitHub Pages

Backend + Datenbank: 
optional Hetzner Cloud /VPS


