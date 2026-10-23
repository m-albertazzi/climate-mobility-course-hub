/* Three Shores: simulation player for the Simulation tab.
   Reads window.SCENARIO (js/scenario.js) and the scoring rules in js/sim-engine.js.
   Nothing is stored or sent anywhere: progress lives in memory until the page is closed. */
(function () {
  "use strict";
  var root = document.getElementById("sim-root");
  if (!root || !window.SCENARIO || !window.ThreeShoresEngine) return;

  var D = window.SCENARIO, E = window.ThreeShoresEngine(D);
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var TOTAL_SCENES = D.acts.reduce(function (n, a) { return n + a.scenes.length; }, 0);
  var BAND_WORD = ["Low", "Middle", "High"];
  var ACT_WORD = ["one", "two", "three", "four"];
  var IND = {}; D.indicators.forEach(function (i) { IND[i.k] = i; });

  var st, view; // st: engine state; view: what is on screen

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function icon(n) { return '<svg class="icon" aria-hidden="true"><use href="#i-' + n + '"/></svg>'; }
  function signed(n) { return (n > 0 ? "+" : n < 0 ? "−" : "") + Math.abs(n); }

  function reset() {
    st = E.newState();
    view = { screen: "intro", a: 0, s: 0, picked: null, last: null, confirm: false };
  }

  /* ---------- wording for changes (words as well as colour) ---------- */
  function changeWords(label, d) {
    if (d === 0) return label + " held steady";
    var size = Math.abs(d) >= 10 ? " sharply" : Math.abs(d) >= 5 ? "" : " slightly";
    return label + (d > 0 ? " rose" : " fell") + size;
  }
  function deltaChip(k, d, now) {
    var cls = d > 0 ? "up" : d < 0 ? "down" : "flat";
    var arrow = d > 0 ? "▲" : d < 0 ? "▼" : "●";
    return '<li class="delta delta--' + cls + '"><span class="delta__mark" aria-hidden="true">' + arrow + '</span>' +
      '<span><strong>' + esc(changeWords(IND[k].label, d)) + '</strong> (' + signed(d) + '), now ' + now + ' of 100</span></li>';
  }

  /* ---------- indicator strip ---------- */
  function hud() {
    var pos = "";
    if (view.screen === "scene" || view.screen === "result") {
      var n = 0; for (var i = 0; i < view.a; i++) n += D.acts[i].scenes.length;
      pos = "Act " + (view.a + 1) + " of " + D.acts.length + " · Decision " + (n + view.s + 1) + " of " + TOTAL_SCENES;
    } else if (view.screen === "brief") {
      pos = "Act " + (view.a + 1) + " of " + D.acts.length;
    } else if (view.screen === "end") {
      pos = "All " + TOTAL_SCENES + " decisions made";
    } else { pos = "Starting position"; }
    var items = D.indicators.map(function (ind) {
      var v = st.levels[ind.k], b = BAND_WORD[E.band(v)];
      return '<li class="ind"><span class="ind__row"><span class="ind__name">' + esc(ind.label) + '</span><span class="ind__val">' + v + '</span></span>' +
        '<span class="ind__bar" aria-hidden="true"><i style="width:' + v + '%"></i></span>' +
        '<span class="ind__band">' + b + '<span class="sr-only">, ' + v + ' out of 100</span></span></li>';
    }).join("");
    return '<section class="sim-hud" aria-label="The four indicators"><p class="sim-hud__pos">' + esc(pos) + '</p><ul class="inds">' + items + '</ul></section>';
  }

  /* ---------- screens ---------- */
  function intro() {
    var m = D.meta;
    var inds = D.indicators.map(function (i) {
      return '<li><strong>' + esc(i.label) + '</strong> (starts at ' + i.start + '). ' + esc(i.long) + '</li>';
    }).join("");
    var places = D.places.map(function (p) {
      return '<li class="place"><strong>' + esc(p[0]) + '</strong><span>' + esc(p[1]) + '</span></li>';
    }).join("");
    return '<article class="card sim-card sim-card--intro" aria-labelledby="sim-h">' +
      '<p class="eyebrow">Decision simulation · about ' + m.minutes + ' minutes</p>' +
      '<h2 id="sim-h" tabindex="-1">Four chairs, one country</h2>' +
      '<p class="lead-text">You will take four chairs in turn inside one fictional island state, the Republic of Alvara: a negotiator, a council representative, a union organiser and an employers’ representative. In each act you make three decisions. Every option has a cost, and some consequences follow you into later acts.</p>' +
      '<div class="sim-two">' +
        '<section aria-labelledby="sim-how"><h3 id="sim-how">How it works</h3><ol class="sim-steps">' +
          '<li>Read the dossier card and the briefing for each act. They link the story to the case studies in the group work.</li>' +
          '<li>For each decision, choose one option and confirm it. A decision cannot be undone, but you can play again.</li>' +
          '<li>You then see what happens, the instrument or principle behind it, and how it played out in practice.</li>' +
          '<li>Four indicators move with every decision. Some options only exist if you earned them earlier.</li>' +
          '<li>At the end you see where Alvara landed, what your decisions carried forward, and questions for reflection.</li></ol></section>' +
        '<section aria-labelledby="sim-ind"><h3 id="sim-ind">The four indicators</h3><ul class="sim-list">' + inds + '</ul></section>' +
      '</div>' +
      '<details class="sim-details"><summary>The setting: Alvara and its neighbours</summary><ul class="places">' + places + '</ul></details>' +
      '<p class="source-note">Alvara, Keru, Tamal, Vale, Halden and Meridian are fictional. The real events the story echoes come from the three case studies and the course modules.</p>' +
      '<div class="btn-row"><button type="button" class="btn btn--primary" data-sim="begin">Begin Act 1</button></div>' +
    '</article>';
  }

  function dossier(act) {
    var d = act.dossier; if (!d) return "";
    return '<section class="sim-dossier" aria-labelledby="sim-dos">' +
      '<p class="eyebrow">Dossier card</p>' +
      '<h3 id="sim-dos">' + esc(d.case) + ' <span class="badge badge--case">' + esc(d.tag) + '</span></h3>' +
      '<ul>' + d.points.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join("") + '</ul>' +
      '<p class="sim-dossier__link"><strong>Links to the group work.</strong> ' + esc(d.gq) + '</p></section>';
  }

  function brief() {
    var act = D.acts[view.a], prev = view.a > 0 ? D.acts[view.a - 1] : null;
    var bridge = prev && prev.bridge
      ? '<aside class="sim-bridge" aria-label="From the previous act"><p class="eyebrow">From the previous act</p><p>' + esc(prev.bridge) + '</p></aside>' : "";
    return '<article class="card sim-card" aria-labelledby="sim-h">' + bridge +
      '<p class="eyebrow">Act ' + ACT_WORD[view.a] + ' of four</p>' +
      '<h2 id="sim-h" tabindex="-1">' + esc(act.role) + '</h2>' +
      '<p class="sim-who"><strong>' + esc(act.who) + '</strong><br>' + esc(act.place) + ' · ' + esc(act.year) + '</p>' +
      '<p>' + esc(act.brief) + '</p>' +
      '<p class="sim-lens"><strong>Keep in mind.</strong> ' + esc(act.lens) + '</p>' +
      dossier(act) +
      '<div class="btn-row"><button type="button" class="btn btn--primary" data-sim="start-act">Start decision ' + esc(act.scenes[0].id) + '</button></div>' +
    '</article>';
  }

  function scene() {
    var act = D.acts[view.a], sc = act.scenes[view.s];
    var opts = sc.options.map(function (o, i) {
      var ok = E.isAvailable(st, o), id = "opt-" + o.id.replace(/\./g, "-");
      return '<div class="opt' + (ok ? "" : " opt--locked") + '">' +
        '<input type="radio" name="sim-opt" id="' + id + '" value="' + esc(o.id) + '"' + (ok ? "" : " disabled") + (view.picked === o.id ? " checked" : "") + ' aria-describedby="' + id + '-d">' +
        '<label for="' + id + '"><span class="opt__letter" aria-hidden="true">' + "ABCD".charAt(i) + '</span><span class="opt__text"><span class="opt__title">' + esc(o.title) + '</span>' +
        '<span class="opt__note" id="' + id + '-d">' + (ok ? esc(o.note) : esc(o.locked || "Not available.")) + '</span></span></label></div>';
    }).join("");
    return '<article class="card sim-card" aria-labelledby="sim-h">' +
      '<p class="eyebrow">Act ' + ACT_WORD[view.a] + ' · ' + esc(act.role) + ' · Decision ' + (view.s + 1) + ' of ' + act.scenes.length + '</p>' +
      '<h2 id="sim-h" tabindex="-1"><span class="snum">' + esc(sc.id) + '</span> ' + esc(sc.title) + '</h2>' +
      '<p>' + esc(sc.situation) + '</p>' +
      '<form id="sim-form" novalidate><fieldset class="opts"><legend>Choose one option</legend>' + opts + '</fieldset>' +
      '<div class="btn-row"><button type="submit" class="btn btn--primary" id="sim-confirm"' + (view.picked ? "" : " disabled") + '>Confirm this decision</button>' +
      '<span class="sim-hint" id="sim-hint">' + (view.picked ? "" : "Select an option to confirm it.") + '</span></div></form>' +
    '</article>';
  }

  function badgeFor(o) {
    var e = o.echoes;
    if (e === "Handbook") return '<span class="badge badge--case">Draws on the course modules</span>';
    return '<span class="badge badge--case">Echoes ' + esc(e) + '</span>';
  }

  function result() {
    var act = D.acts[view.a], sc = act.scenes[view.s], r = view.last, o = r.opt;
    var deltas = D.indicators.map(function (i) { return deltaChip(i.k, r.entry.deltas[i.k], r.entry.after[i.k]); }).join("");
    var vars = r.vars.length
      ? '<section class="sim-vars" aria-labelledby="sim-vars-h"><h3 id="sim-vars-h">Because of earlier decisions</h3>' +
        r.vars.map(function (v) { return '<p>' + esc(v.text) + '</p>'; }).join("") + '</section>' : "";
    var lastScene = view.s === act.scenes.length - 1, lastAct = view.a === D.acts.length - 1;
    var next = !lastScene ? "Next decision (" + act.scenes[view.s + 1].id + ")"
      : !lastAct ? "Continue to Act " + (view.a + 2) + ": " + D.acts[view.a + 1].role
      : "See where Alvara ended up";
    return '<article class="card sim-card" aria-labelledby="sim-h">' +
      '<p class="eyebrow">Decision ' + esc(sc.id) + ' · ' + esc(sc.title) + '</p>' +
      '<h2 id="sim-h" tabindex="-1">You chose: ' + esc(o.title) + '</h2>' +
      '<section aria-labelledby="sim-what"><h3 id="sim-what">What happens</h3><p>' + esc(o.what) + '</p></section>' +
      '<section aria-labelledby="sim-chg"><h3 id="sim-chg">What changed</h3><ul class="deltas">' + deltas + '</ul></section>' +
      vars +
      '<div class="sim-two sim-two--feedback">' +
        '<section class="sim-fb" aria-labelledby="sim-ins"><h3 id="sim-ins">The instrument</h3><p>' + esc(o.instrument) + '</p></section>' +
        '<section class="sim-fb" aria-labelledby="sim-prac"><h3 id="sim-prac">In practice</h3><p>' + esc(o.practice) + '</p></section>' +
      '</div>' +
      '<p class="sim-ref">' + badgeFor(o) + ' <span>Course reference: ' + esc(o.reference) + '.</span></p>' +
      '<div class="btn-row"><button type="button" class="btn btn--primary" data-sim="next">' + esc(next) + '</button></div>' +
    '</article>';
  }

  function notes() {
    var seen = {}, out = [];
    st.history.forEach(function (h) {
      h.sets.forEach(function (f) { if (!seen[f] && D.epilogue[f]) { seen[f] = 1; out.push(D.epilogue[f]); } });
    });
    return out;
  }

  function pathList() {
    return st.history.map(function (h) {
      var sc = E.findScene(h.scene), o = E.findOption(sc, h.option);
      var ch = D.indicators.map(function (i) { return esc(i.label) + " " + signed(h.deltas[i.k]); }).join(", ");
      return '<li><strong>' + esc(sc.id) + ' ' + esc(sc.title) + '.</strong> ' + esc(o.title) + '<br><span class="sim-path__ch">' + ch + '</span></li>';
    }).join("");
  }

  function end() {
    var cards = D.indicators.map(function (ind) {
      var v = st.levels[ind.k], b = E.band(v);
      return '<li class="band band--' + b + '"><p class="band__head"><strong>' + esc(ind.label) + '</strong> <span class="band__val">' + v + ' of 100 · ' + BAND_WORD[b] + '</span></p>' +
        '<p>' + esc(D.bands[ind.k][b]) + '</p></li>';
    }).join("");
    var nts = notes().map(function (n) { return '<li>' + esc(n) + '</li>'; }).join("");
    var deb = D.debrief.map(function (q) { return '<li>' + esc(q) + '</li>'; }).join("");
    return '<article class="card sim-card" aria-labelledby="sim-h">' +
      '<p class="eyebrow">Closing screen</p>' +
      '<h2 id="sim-h" tabindex="-1">Where Alvara ended up</h2>' +
      '<p class="lead-text">There is no single ending. This account is assembled from where the four indicators landed and from the consequences your decisions set in motion.</p>' +
      '<ul class="bands">' + cards + '</ul>' +
      '<section aria-labelledby="sim-carried"><h3 id="sim-carried">What your decisions carried forward</h3><ul class="sim-notes">' + nts + '</ul></section>' +
      '<section aria-labelledby="sim-deb"><h3 id="sim-deb">Questions for reflection</h3><ol class="sim-list sim-list--num">' + deb + '</ol></section>' +
      '<details class="sim-details"><summary>Your path: the twelve decisions you made</summary><ol class="sim-path">' + pathList() + '</ol></details>' +
      '<div class="btn-row"><button type="button" class="btn btn--secondary" data-sim="download">' + icon("download") + 'Download my path (.txt)</button>' +
      '<button type="button" class="btn btn--primary" data-sim="again">Play again</button></div>' +
    '</article>';
  }

  /* ---------- render ---------- */
  function restartBox() {
    if (view.screen === "intro") return "";
    if (view.confirm) {
      return '<div class="sim-restart sim-restart--ask" role="group" aria-label="Confirm restart"><p>Restart from the beginning? Your decisions so far will be lost.</p>' +
        '<button type="button" class="btn btn--small btn--primary" data-sim="restart-yes">Yes, restart</button> ' +
        '<button type="button" class="btn btn--small btn--secondary" data-sim="restart-no">Keep playing</button></div>';
    }
    if (view.screen === "end") return "";
    return '<div class="sim-restart"><button type="button" class="linkbtn" data-sim="restart-ask">Restart from the beginning</button></div>';
  }

  function render(opts) {
    opts = opts || {};
    var body = view.screen === "intro" ? intro() : view.screen === "brief" ? brief() : view.screen === "scene" ? scene() : view.screen === "result" ? result() : end();
    root.setAttribute("data-act", String(view.screen === "intro" ? 0 : view.a + 1));
    root.setAttribute("data-screen", view.screen);
    root.innerHTML = hud() + body + restartBox() + '<div id="sim-live" class="sr-only" role="status" aria-live="polite"></div>';
    if (opts.focus === "restart-yes") { var y = root.querySelector('[data-sim="restart-yes"]'); if (y) y.focus(); return; }
    if (opts.focus === "restart-ask") { var q = root.querySelector('[data-sim="restart-ask"]'); if (q) q.focus(); return; }
    if (opts.keepFocus) return;
    var h = document.getElementById("sim-h");
    if (opts.move !== false) {
      root.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      if (h) h.focus({ preventScroll: true });
    }
  }

  function announce(msg) {
    var el = document.getElementById("sim-live"); if (!el) return;
    el.textContent = ""; setTimeout(function () { el.textContent = msg; }, 50);
  }

  /* ---------- actions ---------- */
  function startAct() { view.screen = "scene"; view.s = 0; view.picked = null; render(); }
  function confirmChoice() {
    var act = D.acts[view.a], sc = act.scenes[view.s];
    var opt = E.findOption(sc, view.picked);
    if (!opt || !E.isAvailable(st, opt)) return;
    var ev = E.choose(st, sc, opt);
    view.last = { opt: opt, entry: st.history[st.history.length - 1], vars: ev.variants };
    view.screen = "result"; render();
  }
  function next() {
    var act = D.acts[view.a];
    view.picked = null;
    if (view.s < act.scenes.length - 1) { view.s++; view.screen = "scene"; }
    else if (view.a < D.acts.length - 1) { view.a++; view.s = 0; view.screen = "brief"; }
    else { view.screen = "end"; }
    render();
  }

  function pathText() {
    var L = ["Three Shores: my path", "Decision simulation, Course Hub, Exploring the labour dimensions of climate change and human mobility", ""];
    L.push("Final indicators");
    D.indicators.forEach(function (i) { L.push("  " + i.label + ": " + st.levels[i.k] + " of 100 (" + BAND_WORD[E.band(st.levels[i.k])] + ")"); });
    L.push("", "Decisions");
    st.history.forEach(function (h) {
      var sc = E.findScene(h.scene), o = E.findOption(sc, h.option);
      L.push(sc.id + " " + sc.title, "  " + h.option + ". " + o.title,
        "  " + D.indicators.map(function (i) { return i.label + " " + signed(h.deltas[i.k]); }).join(", "));
    });
    L.push("", "Carried forward");
    notes().forEach(function (n) { L.push("  - " + n); });
    return L.join("\r\n") + "\r\n";
  }
  function download() {
    try {
      var blob = new Blob([pathText()], { type: "text/plain;charset=utf-8" });
      var url = URL.createObjectURL(blob), a = document.createElement("a");
      a.href = url; a.download = "three-shores-my-path.txt"; a.style.display = "none";
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      setTimeout(function () { URL.revokeObjectURL(url); }, 4000);
      announce("Your path was downloaded as a text file.");
    } catch (e) { announce("The file could not be created in this browser."); }
  }

  root.addEventListener("click", function (e) {
    var b = e.target.closest("[data-sim]"); if (!b) return;
    var a = b.getAttribute("data-sim");
    if (a === "begin") { view.screen = "brief"; view.a = 0; render(); }
    else if (a === "start-act") startAct();
    else if (a === "next") next();
    else if (a === "download") download();
    else if (a === "again") { reset(); render(); }
    else if (a === "restart-ask") { view.confirm = true; render({ focus: "restart-yes" }); }
    else if (a === "restart-no") { view.confirm = false; render({ focus: "restart-ask" }); }
    else if (a === "restart-yes") { reset(); render(); }
  });
  root.addEventListener("change", function (e) {
    if (e.target && e.target.name === "sim-opt") {
      view.picked = e.target.value;
      var c = document.getElementById("sim-confirm"), h = document.getElementById("sim-hint");
      if (c) c.disabled = false; if (h) h.textContent = "";
    }
  });
  root.addEventListener("submit", function (e) { e.preventDefault(); if (view.picked) confirmChoice(); });

  reset(); render({ move: false });
})();
