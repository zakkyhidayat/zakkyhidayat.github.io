// Edit the project list here. Leave live/download/why empty if not available.
// To add a project: copy an entry, set title, summary, icon, platform, tags and, if the code is on
// GitHub, repo ("https://github.com/<user>/<name>"). The version badge then updates itself from the
// repo's latest stable GitHub Release; `version` below is only the fallback shown if that lookup fails.
const PROJECTS = [
  {
    title: "Baca PDF",
    summary: "Tabbed PDF reader with favorites, recent files, and dark mode.",
    icon: "assets/img/projects/baca-pdf-icon.png",
    tint: "#c62828",  // optional background tint for icon-only cards
    platform: "Windows 11",
    version: "v1.0.0",
    why: "Built because I wanted a lightweight PDF reader that looks and feels native on Windows 11.",
    tags: ["App", "Documents"],
    repo: "https://github.com/zakkyhidayat/baca-pdf",
    download: "https://github.com/zakkyhidayat/baca-pdf/releases",
  },
  {
    title: "Profil Kesehatan Jabar",
    summary: "West Java health profile data, summarized in an easy-to-read form.",
    icon: "assets/img/projects/profil-kesehatan-icon.svg",
    tint: "#2a78d6",
    platform: "Web",
    why: "Built as a ready-to-use base for planning documents, reports, and situation analysis, with maps and processed data tables already in place.",
    tags: ["Data", "Planning"],
    repo: "",  // private repo
    live: "https://profil-kesehatan-jabar.vercel.app/",
  },
  {
    title: "Quran",
    summary: "The Qur'an in the Uthmani script of the Madani mushaf, page for page like the printed edition: 604 pages, 15 lines, tajweed colouring. Translations, search, bookmarks, and reminders. No ads, no account, no tracking.",
    icon: "assets/img/projects/quran-icon.png",
    tint: "#1b6b4a",
    platform: "Android 8.0+",
    version: "v0.5.2",
    why: "Built because I wanted a simple, modern app that gets straight to reading, with audio recitation planned.",
    tags: ["App", "Quran", "Material 3"],
    repo: "https://github.com/zakkyhidayat/quran",
    download: "https://github.com/zakkyhidayat/quran/releases",
  },
];

// "Now" section: what you are currently building. Leave empty to hide it.
const NOW = [];
