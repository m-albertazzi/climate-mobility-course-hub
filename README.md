# Course Hub — Exploring the labour dimensions of climate change and human mobility

Participant course hub for the ITCILO online course (26 October – 4 December 2026).
A static site (HTML, CSS, JavaScript — no build step) with six tabs: **Overview**, **Course requirements**, **Timetable**, **Resource Persons**, **Participants** and **Feedback**.

Nothing is stored or submitted by the site: there are no forms, cookies or participant data.
Open points in the source material (conflicts, missing information) are listed in [`CONTENT_NOTES.md`](CONTENT_NOTES.md).

## Files

```
index.html          Page structure; Overview and Course requirements text
js/data.js          Timetable, sessions, resource persons, participants, Zoom and feedback links
js/app.js           Navigation, rendering, time-zone toggle (no content here)
css/styles.css      Styles and colour palette
assets/img/         Hero image, ITCILO logo, favicon
assets/people/      Put resource-person photographs here
assets/fonts/       Noto Sans (SIL Open Font License)
```

## Updating content

**Sessions and timetable** — edit `js/data.js`.
- `weeks[]`: week title, dates, suggested reading and the weekly forum prompt.
- `sessions[]`: title, date (`YYYY-MM-DD`), `start`/`end` (CET clock times), `speakers`, `abstract`, `objectives`.
- `format` is `"online"` (shows the Zoom button), `"in-person"` (shows an “In person” label, no Zoom button) or `"independent"`.
- To add a session, copy an existing block and give it the next `number` and the right `week`.
- Times are interpreted as CET (UTC+1), which applies to every session in this course. If a session falls in summer time, change `utcOffsetHours` in `config` or the session dates.

**Overview and Course requirements** — edit the text directly in `index.html` (search for the section, e.g. `panel-course-requirements`).

**Hiding the “To be confirmed” notices** — once the course team has settled the open points, set `showDraftNotices: false` in `js/data.js`. Individual “to be confirmed” labels on speakers are changed by editing the speaker (`status: "listed"`) or by removing the entry.

## Zoom and feedback links

In `js/data.js`, under `config`:

```js
zoomUrl: "https://…",      // one link for all live sessions (currently set)
feedbackUrl: "",           // paste the https:// feedback form link here
```

- With a `zoomUrl`, every online session shows a working **Join on Zoom** button. Without one, it shows a disabled **Zoom link coming soon** button.
- To give one session its own link, add `zoomUrl: "https://…"` to that session.
- With a `feedbackUrl`, the Feedback tab shows an **Open the feedback form** button; without one it shows a disabled **Feedback link coming soon** placeholder.
- Only `https://` links are accepted.

## Resource-person photographs

1. Save the image in `assets/people/`, for example `assets/people/atle-solberg.jpg` (square, at least 224 × 224 px; JPG or WebP).
2. In `js/data.js`, set `photo: "assets/people/atle-solberg.jpg"` on that person.

People without a photo show the common placeholder. Only add photographs that the person has agreed to share. To add a person, add one entry to `people[]` (each name once); to remove one, delete the entry.

## Participants

`participants` in `js/data.js` is empty, so the tab shows an empty state. When verified information is available, add entries such as `{ name: "…", org: "…", country: "…", photo: "" }`; the empty state disappears automatically.

## Preview locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000/
```

Direct links to a tab use the hash, e.g. `index.html#timetable`, `#course-requirements`, `#resource-persons`, `#participants`, `#feedback`.

## Publish with GitHub Pages

1. Push the changes to the `main` branch.
2. In the repository, go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, and save.
4. After a minute the site is available at `https://m-albertazzi.github.io/climate-mobility-course-hub/`.

All paths are relative, so the site works under the project path. The `.nojekyll` file stops GitHub from processing the folder.

## Credits

- ITCILO logo and brand: International Training Centre of the ILO.
- Fonts: Noto Sans, SIL Open Font License 1.1 (`assets/fonts/OFL-NotoSans.txt`).
- Course illustration: supplied by the course team; **the artist credit has not been supplied** — add it to the footer in `index.html` when known.
- The course handbook and module texts are background material only and are deliberately not part of this repository.
