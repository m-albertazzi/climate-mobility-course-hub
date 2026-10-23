/* Three Shores: scoring engine (no DOM, no content).
   Implements the rules written in the scenario file ("scoring" block):
     net   = raw value + the shifts of any variants whose flag is set + standing pressure
     loss  = round(net x 0.5 x level / 50)             (net below zero)
     gain  = round(net x 0.5 x (100 - level) / 50)     (net zero or above; diminishing returns)
     level = clamped to 0..100
   NOTE: the scenario file's "scoring.loss" text says round(net x 0.5). The storyboard's own
   figures (all 192 option chips) and its four reference runs only match when a loss is also
   scaled by level / 50, so that is what is implemented. See CONTENT_NOTES.md.
   Options with a "gate" are only available when that flag has been set earlier. */
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory;
  else root.ThreeShoresEngine = factory;
})(typeof window !== "undefined" ? window : this, function (D) {
  "use strict";
  var KEYS = D.indicators.map(function (i) { return i.k; });
  var pressure = {}, start = {};
  D.indicators.forEach(function (i) { pressure[i.k] = i.pressure; start[i.k] = i.start; });

  function clamp(v) { return Math.max(0, Math.min(100, v)); }
  function plain(n) { return n === 0 ? 0 : n; } // avoid -0

  function newState() {
    var levels = {};
    KEYS.forEach(function (k) { levels[k] = start[k]; });
    return { levels: levels, flags: [], history: [] };
  }
  function hasFlag(st, f) { return st.flags.indexOf(f) > -1; }
  function isAvailable(st, opt) { return !opt.gate || hasFlag(st, opt.gate); }
  function activeVariants(st, opt) {
    return (opt.variants || []).filter(function (v) { return hasFlag(st, v.flag); });
  }

  /* What would happen if this option were chosen now. Does not change the state. */
  function evaluate(st, opt) {
    var vs = activeVariants(st, opt), deltas = {}, after = {};
    KEYS.forEach(function (k) {
      var net = (opt.raw[k] || 0) + pressure[k];
      vs.forEach(function (v) { net += (v.raw && v.raw[k]) || 0; });
      var level = st.levels[k];
      var d = net < 0
        ? Math.round(net * 0.5 * level / 50)           // a loss is halved, and shrinks as the indicator nears zero
        : Math.round(net * 0.5 * (100 - level) / 50);  // a gain is halved, and shrinks as the indicator nears 100
      after[k] = clamp(level + d);
      deltas[k] = plain(after[k] - level);
    });
    return { deltas: deltas, after: after, variants: vs };
  }

  /* Choose an option: updates levels and flags, records the decision. */
  function choose(st, scene, opt) {
    if (!isAvailable(st, opt)) throw new Error("Option " + opt.id + " is not available");
    var ev = evaluate(st, opt), sets = opt.sets || [];
    KEYS.forEach(function (k) { st.levels[k] = ev.after[k]; });
    sets.forEach(function (f) { if (!hasFlag(st, f)) st.flags.push(f); });
    st.history.push({
      scene: scene.id, option: opt.id, deltas: ev.deltas,
      after: JSON.parse(JSON.stringify(st.levels)),
      variants: ev.variants.map(function (v) { return v.flag; }), sets: sets.slice()
    });
    return ev;
  }

  function band(value) {
    var b = D.scoring.bands;
    for (var i = 0; i < b.length; i++) if (value >= b[i][0] && value <= b[i][1]) return i;
    return 1;
  }

  function findScene(id) {
    for (var a = 0; a < D.acts.length; a++)
      for (var s = 0; s < D.acts[a].scenes.length; s++)
        if (D.acts[a].scenes[s].id === id) return D.acts[a].scenes[s];
    return null;
  }
  function findOption(scene, id) {
    return scene.options.filter(function (o) { return o.id === id; })[0] || null;
  }

  /* Replay a list of option ids (for tests). */
  function replay(ids) {
    var st = newState();
    D.acts.forEach(function (act) {
      act.scenes.forEach(function (sc) {
        var opt = null;
        ids.forEach(function (id) { var o = findOption(sc, id); if (o) opt = o; });
        if (opt) choose(st, sc, opt);
      });
    });
    return st;
  }

  return {
    KEYS: KEYS, newState: newState, evaluate: evaluate, choose: choose, isAvailable: isAvailable,
    hasFlag: hasFlag, band: band, findScene: findScene, findOption: findOption, replay: replay
  };
});
