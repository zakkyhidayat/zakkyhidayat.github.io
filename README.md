# Portfolio site
Personal site served by GitHub Pages at https://zakkyhidayat.github.io (Deploy from branch: `main` / root). Edit projects in `assets/js/projects.js`; every push to `main` redeploys.

## Adding a project
Copy an entry in `assets/js/projects.js` and fill it in. If the code is on GitHub, set `repo`: the version badge then follows the repo's latest **stable GitHub Release** (drafts, pre-releases and non-version tags such as `quran-data` are ignored), cached in the visitor's browser for an hour. `version` in the entry is only the fallback shown when the lookup fails. To release, publish a GitHub Release tagged like `v1.2.0`; a bare tag without a Release is not picked up. Private repos have no public releases, so leave `repo` empty and set `version` by hand.
