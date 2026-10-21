/* Course Hub — navigation, rendering and small interactions.
   Content comes from js/data.js. Nothing is saved or sent anywhere. */
(function () {
  "use strict";

  var C = window.COURSE;
  var cfg = C.config;
  var PANELS = ["overview", "course-requirements", "timetable", "resource-persons", "participants", "feedback"];
  var SITE = "Course Hub · Exploring the labour dimensions of climate change and human mobility";
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function isHttps(u) { return typeof u === "string" && /^https:\/\/[^\s]+$/i.test(u.trim()); }
  function icon(id) { return '<svg class="icon" aria-hidden="true"><use href="#i-' + id + '"/></svg>'; }

  var DOW = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var DOW_S = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var MON = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var MON_S = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  function parseYMD(s) { var p = s.split("-"); return { y: +p[0], m: +p[1] - 1, d: +p[2] }; }
  function hm(s) { var p = s.split(":"); return { h: +p[0], m: +p[1] }; }
  function utcOf(session, t) {
    var d = parseYMD(session.date), x = hm(t);
    return new Date(Date.UTC(d.y, d.m, d.d, x.h - cfg.utcOffsetHours, x.m));
  }
  function dayOfWeek(session) { var d = parseYMD(session.date); return new Date(Date.UTC(d.y, d.m, d.d)).getUTCDay(); }
  function longDate(session) {
    var d = parseYMD(session.date);
    return DOW[dayOfWeek(session)] + " " + d.d + " " + MON[d.m] + " " + d.y;
  }
  function timeLabel(s) { return s; }

  /* ---------- timetable ---------- */
  function localRange(session) {
    try {
      var tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      var t = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: tz });
      var dFmt = new Intl.DateTimeFormat("en-GB", { weekday: "short", day: "numeric", month: "short", timeZone: tz });
      var zFmt = new Intl.DateTimeFormat("en-GB", { timeZoneName: "short", timeZone: tz });
      var a = utcOf(session, session.start), b = utcOf(session, session.end);
      var zone = (zFmt.formatToParts(a).filter(function (p) { return p.type === "timeZoneName"; })[0] || {}).value || tz;
      var label = t.format(a) + " – " + t.format(b) + " " + zone + " (" + tz.replace(/_/g, " ") + ")";
      // add the date if the local calendar day differs from the CET day
      var cetDay = new Date(Date.UTC(parseYMD(session.date).y, parseYMD(session.date).m, parseYMD(session.date).d)).getTime();
      var localParts = new Intl.DateTimeFormat("en-CA", { year: "numeric", month: "2-digit", day: "2-digit", timeZone: tz }).format(a).split("-");
      var localDay = Date.UTC(+localParts[0], +localParts[1] - 1, +localParts[2]);
      if (localDay !== cetDay) label = dFmt.format(a) + ", " + label;
      return label;
    } catch (e) { return ""; }
  }

  function zoomHtml(s) {
    var url = isHttps(s.zoomUrl) ? s.zoomUrl : (isHttps(cfg.zoomUrl) ? cfg.zoomUrl : "");
    if (s.format !== "online") return "";
    if (url) {
      return '<a class="btn btn--primary" href="' + esc(url) + '" target="_blank" rel="noopener noreferrer">' + icon("video") + 'Join on Zoom<span class="sr-only"> — Session ' + s.number + ' (opens in a new tab)</span></a>';
    }
    return '<button type="button" class="btn" disabled aria-disabled="true" aria-describedby="zoomhint-' + s.number + '">' + icon("video") + 'Zoom link coming soon</button>' +
      '<span class="hint" id="zoomhint-' + s.number + '">Placeholder — the course team will add the Zoom link.</span>';
  }

  function formatBadge(f) {
    if (f === "online") return '<span class="badge badge--online">' + icon("video") + "Live online · Zoom</span>";
    if (f === "in-person") return '<span class="badge badge--inperson">' + icon("pin") + "In person</span>";
    return '<span class="badge badge--independent">' + icon("pencil") + "Independent activity</span>";
  }

  function sessionHtml(s) {
    var d = parseYMD(s.date), dow = dayOfWeek(s);
    var h = "";
    h += '<article class="session session--' + esc(s.format) + '" id="session-' + s.number + '" data-session="' + s.number + '" aria-labelledby="st-' + s.number + '">';
    h += '<div class="session__when">';
    h += '<div class="datebox" aria-hidden="true"><span class="datebox__dow">' + DOW_S[dow] + '</span><span class="datebox__day">' + d.d + '</span><span class="datebox__mon">' + MON_S[d.m] + "</span></div>";
    h += '<p class="session__time"><span class="sr-only">' + esc(longDate(s)) + ", </span>" + timeLabel(s.start) + " – " + timeLabel(s.end) + " " + esc(cfg.timezoneLabel) +
      '<small>' + esc(longDate(s)) + '</small><span class="session__local" hidden></span></p>';
    h += "</div>";
    h += '<div class="session__body">';
    h += '<div class="session__badges">' + formatBadge(s.format) + '<span class="badge badge--next" hidden data-next-badge>Next live session</span>' +
      (s.titleTbc ? '<span class="badge badge--tbc draft-notice">Title to be confirmed</span>' : "") + "</div>";
    h += '<p class="session__num">Session ' + s.number + "</p>";
    h += '<h3 id="st-' + s.number + '">' + esc(s.title) + "</h3>";
    h += '<p class="session__abstract">' + esc(s.abstract) + "</p>";
    if (s.fullAbstract || (s.objectives && s.objectives.length)) {
      h += "<details><summary>Full abstract and learning objectives</summary>";
      if (s.fullAbstract) h += "<p>" + esc(s.fullAbstract) + "</p>";
      if (s.objectives && s.objectives.length) {
        h += "<h4>By the end of the session, participants will be able to:</h4><ul>" +
          s.objectives.map(function (o) { return "<li>" + esc(o) + "</li>"; }).join("") + "</ul>";
      }
      h += "</details>";
    }
    var z = zoomHtml(s);
    if (z) h += '<div class="session__actions">' + z + "</div>";
    h += "</div></article>";
    return h;
  }

  function renderTimetable() {
    var list = document.getElementById("timetable-list");
    var nav = document.getElementById("weeknav");
    if (!list) return;
    var html = "", navHtml = "";
    C.weeks.forEach(function (w) {
      var sessions = C.sessions.filter(function (s) { return s.week === w.number; })
        .sort(function (a, b) { return utcOf(a, a.start) - utcOf(b, b.start); });
      html += '<section class="week" id="week-' + w.number + '" aria-labelledby="wh-' + w.number + '">';
      html += '<div class="week__head"><span class="week__num">Week ' + w.number + '</span><h2 id="wh-' + w.number + '" tabindex="-1">' + esc(w.title) + '</h2><p class="week__dates">' + esc(w.dates) + "</p></div>";
      html += '<div class="week__list">' + sessions.map(sessionHtml).join("") + "</div></section>";
      navHtml += '<li><button type="button" data-week="' + w.number + '">Week ' + w.number + "</button></li>";
    });
    list.innerHTML = html;
    nav.innerHTML = navHtml;
    nav.addEventListener("click", function (e) {
      var b = e.target.closest("button[data-week]");
      if (!b) return;
      var el = document.getElementById("wh-" + b.getAttribute("data-week"));
      if (el) {
        el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
        el.focus({ preventScroll: true });
      }
    });
    markNext();
  }

  function nextSession() {
    var now = Date.now();
    var upcoming = C.sessions.filter(function (s) { return utcOf(s, s.end).getTime() > now && s.format !== "independent"; })
      .sort(function (a, b) { return utcOf(a, a.start) - utcOf(b, b.start); });
    return upcoming[0] || null;
  }
  function markNext() {
    var n = nextSession();
    document.querySelectorAll(".session--next").forEach(function (el) { el.classList.remove("session--next"); });
    document.querySelectorAll("[data-next-badge]").forEach(function (el) { el.hidden = true; });
    var box = document.getElementById("next-session");
    if (!n) { if (box) box.hidden = true; return; }
    var el = document.getElementById("session-" + n.number);
    if (el) { el.classList.add("session--next"); var b = el.querySelector("[data-next-badge]"); if (b) b.hidden = false; }
    if (box) {
      var live = utcOf(n, n.start).getTime() <= Date.now();
      box.innerHTML = '<div><p class="eyebrow">' + (live ? "Happening now" : "Next live session") + "</p>" +
        "<strong>Session " + n.number + ": " + esc(n.title) + "</strong>" +
        "<p>" + esc(longDate(n)) + ", " + timeLabel(n.start) + " – " + timeLabel(n.end) + " " + esc(cfg.timezoneLabel) + "</p></div>" +
        '<a class="btn btn--secondary" href="#timetable" data-goto-session="' + n.number + '">See session details</a>';
      box.hidden = false;
    }
  }

  function setupTimezoneToggle() {
    var btn = document.getElementById("tz-toggle");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var on = btn.getAttribute("aria-pressed") !== "true";
      btn.setAttribute("aria-pressed", on ? "true" : "false");
      C.sessions.forEach(function (s) {
        var el = document.querySelector("#session-" + s.number + " .session__local");
        if (!el) return;
        if (on) { var t = localRange(s); el.textContent = t ? "Your time: " + t : ""; el.hidden = !t; }
        else { el.hidden = true; el.textContent = ""; }
      });
    });
  }

  /* ---------- people ---------- */
  var AVATAR = '<svg viewBox="0 0 112 112" role="img" aria-hidden="true" focusable="false"><rect width="112" height="112" fill="#f3e3df"/><circle cx="56" cy="44" r="19" fill="#da845c"/><path d="M16 112c2-26 18-40 40-40s38 14 40 40Z" fill="#8f3b20"/></svg>';
  function personHtml(p, tag) {
    var photo = p.photo ? '<img src="' + esc(p.photo) + '" alt="Photograph of ' + esc(p.name) + '" loading="lazy" width="112" height="112">' : AVATAR;
    var h = '<li class="person"><div class="person__photo">' + photo + "</div>";
    h += "<" + tag + ">" + esc(p.name) + "</" + tag + ">";
    if (p.org) h += '<p class="person__org">' + esc(p.org) + "</p>";
    if (p.country) h += '<p class="person__org">' + esc(p.country) + "</p>";
    if (p.status === "tbc") h += '<span class="badge badge--tbc">To be confirmed</span>';
    h += "</li>";
    return h;
  }
  function renderPeople() {
    var g = document.getElementById("people-grid");
    if (g) g.innerHTML = C.people.map(function (p) { return personHtml(p, "h2"); }).join("");
    var pg = document.getElementById("participants-grid"), empty = document.getElementById("participants-empty");
    if (pg && C.participants && C.participants.length) {
      pg.innerHTML = C.participants.map(function (p) { return personHtml(p, "h2"); }).join("");
      pg.hidden = false; if (empty) empty.hidden = true;
    }
  }

  /* ---------- feedback ---------- */
  function renderFeedback() {
    var a = document.getElementById("feedback-action"), n = document.getElementById("feedback-note");
    if (!a) return;
    if (isHttps(cfg.feedbackUrl)) {
      a.innerHTML = '<p>Please share your feedback on the course using the link below.</p><a class="btn btn--primary" href="' + esc(cfg.feedbackUrl) + '" target="_blank" rel="noopener noreferrer">Open the feedback form' + icon("external") + '<span class="sr-only"> (opens in a new tab)</span></a>';
      n.textContent = "";
    } else {
      a.innerHTML = '<p>The feedback form for the 2026 cohort has not been published yet.</p><button type="button" class="btn" disabled aria-disabled="true" aria-describedby="feedback-note">Feedback form link coming soon</button>';
      n.textContent = "Placeholder — the course team will add the feedback form link here.";
    }
  }

  /* ---------- routing ---------- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll("#site-nav a[data-panel]"));
  var toggle = document.getElementById("menu-toggle");
  var sidePanel = document.getElementById("sidebar-panel");
  var firstRoute = true;

  function currentId() {
    var id = (location.hash || "").replace(/^#/, "");
    return PANELS.indexOf(id) > -1 ? id : null;
  }

  function show(id, userInitiated) {
    PANELS.forEach(function (p) {
      var el = document.getElementById("panel-" + p);
      if (el) el.hidden = p !== id;
    });
    navLinks.forEach(function (a) {
      if (a.getAttribute("data-panel") === id) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    var panel = document.getElementById("panel-" + id);
    document.title = (panel.getAttribute("data-title") || "") + " · " + SITE;
    closeMenu(false);
    if (!firstRoute || userInitiated) {
      window.scrollTo(0, 0);
      var h = panel.querySelector("h1");
      if (h) h.focus({ preventScroll: true });
    }
    firstRoute = false;
  }

  function route() {
    var id = currentId();
    if (!id) {
      // unknown or empty hash → Overview (keep the URL tidy without adding history entries)
      if (location.hash && location.hash !== "#") { try { history.replaceState(null, "", location.pathname + location.search + "#overview"); } catch (e) {} }
      id = "overview";
    }
    show(id, !firstRoute);
  }

  window.addEventListener("hashchange", route);

  document.addEventListener("click", function (e) {
    var g = e.target.closest("[data-goto-session]");
    if (g) {
      var n = g.getAttribute("data-goto-session");
      setTimeout(function () {
        var el = document.getElementById("session-" + n);
        if (el) { el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" }); }
      }, 60);
    }
    // skip link: move focus to the main content of the current tab without changing the URL
    var skip = e.target.closest("a.skip-link");
    if (skip) {
      e.preventDefault();
      var m = document.getElementById("main");
      m.focus({ preventScroll: true });
      m.scrollIntoView({ block: "start" });
      return;
    }
    // re-clicking the link for the current tab: still go to the top and move focus
    var a = e.target.closest('a[href^="#"]');
    if (a) {
      var id = a.getAttribute("href").slice(1);
      if (PANELS.indexOf(id) > -1 && id === currentId() && !g) {
        e.preventDefault();
        show(id, true);
      }
    }
  });

  /* mobile menu */
  function closeMenu(returnFocus) {
    if (!toggle) return;
    toggle.setAttribute("aria-expanded", "false");
    sidePanel.removeAttribute("data-open");
    if (returnFocus) toggle.focus();
  }
  function openMenu() {
    toggle.setAttribute("aria-expanded", "true");
    sidePanel.setAttribute("data-open", "true");
  }
  if (toggle) {
    toggle.addEventListener("click", function () {
      if (toggle.getAttribute("aria-expanded") === "true") closeMenu(false); else openMenu();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") { closeMenu(true); }
    });
    window.matchMedia("(min-width: 1024px)").addEventListener
      ? window.matchMedia("(min-width: 1024px)").addEventListener("change", function () { closeMenu(false); })
      : null;
  }

  /* ---------- init ---------- */
  if (cfg.showDraftNotices === false) document.documentElement.setAttribute("data-notices", "off");
  renderTimetable();
  renderPeople();
  renderFeedback();
  setupTimezoneToggle();
  route();
  setInterval(markNext, 60 * 1000);
})();
