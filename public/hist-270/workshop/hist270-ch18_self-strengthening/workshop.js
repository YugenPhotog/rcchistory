/* HIST 270 Ch. 18 Self-Strengthening workshop: autosave to localStorage, export to .txt, copy all, print, clear.
   Each role page sets data-role, data-role-file and data-store on <body>. Fields: #student-name, #group-names,
   and every textarea[data-key] inside .field, labeled by its <label>. */
(function () {
  var body = document.body;
  var ROLE = body.getAttribute("data-role") || "";
  var ROLE_FILE = body.getAttribute("data-role-file") || "Role";
  var STORE = body.getAttribute("data-store");
  if (!STORE) return;
  var status = document.getElementById("save-status");
  var fields = Array.prototype.slice.call(document.querySelectorAll("#student-name, #group-names, textarea[data-key]"));

  function keyOf(el) { return el.getAttribute("data-key") || el.id; }
  function say(t) { if (status) status.textContent = t; }
  function grow(el) {
    if (el.tagName !== "TEXTAREA") return;
    el.style.height = "auto";
    el.style.height = Math.max(el.scrollHeight + 2, 100) + "px";
  }
  function load() {
    try { return JSON.parse(window.localStorage.getItem(STORE) || "{}"); } catch (e) { return {}; }
  }
  function save() {
    var d = {};
    fields.forEach(function (el) { d[keyOf(el)] = el.value; });
    try {
      window.localStorage.setItem(STORE, JSON.stringify(d));
      say("Draft saved in this browser at " + new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }) + ".");
    } catch (e) {
      say("This browser could not save your draft. Export or copy your work before you close the page.");
    }
  }
  var saved = load(), restored = false;
  fields.forEach(function (el) {
    var v = saved[keyOf(el)];
    if (typeof v === "string" && v !== "") { el.value = v; restored = true; }
    grow(el);
  });
  if (restored) say("Your saved draft was restored.");
  var timer = null;
  fields.forEach(function (el) {
    el.addEventListener("input", function () {
      grow(el);
      window.clearTimeout(timer);
      timer = window.setTimeout(save, 500);
    });
  });

  function wrap(text, width) {
    return text.split(/\n/).map(function (para) {
      var words = para.replace(/\s+/g, " ").trim().split(" "), lines = [], line = "";
      words.forEach(function (w) {
        if (line && (line + " " + w).length > width) { lines.push(line); line = w; }
        else { line = line ? line + " " + w : w; }
      });
      lines.push(line);
      return lines.join("\n");
    }).join("\n");
  }
  function labelText(el) {
    var lab = document.querySelector('label[for="' + el.id + '"]');
    if (!lab) return keyOf(el);
    var c = lab.cloneNode(true);
    Array.prototype.slice.call(c.querySelectorAll(".hint")).forEach(function (h) { h.remove(); });
    return c.textContent.replace(/\s+/g, " ").trim();
  }
  function today() {
    return new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
  }
  function buildText() {
    var name = document.getElementById("student-name").value.trim();
    var group = document.getElementById("group-names").value.trim();
    var rule = "==================================================================";
    var out = [];
    out.push("HIST 270: History of China - Chapter 18, Lecture 3");
    out.push("Historian's Workshop: Self-Strengthening");
    out.push("Teaching page: " + ROLE);
    out.push("");
    out.push("Name: " + (name || "[not entered]"));
    if (group) out.push("Group members: " + group);
    out.push("Date: " + today());
    var section = "";
    Array.prototype.slice.call(document.querySelectorAll("textarea[data-key]")).forEach(function (el) {
      var s = el.closest("[data-section]");
      var sname = s ? s.getAttribute("data-section") : "";
      if (sname !== section) {
        section = sname;
        out.push(""); out.push(rule); out.push(section.toUpperCase()); out.push(rule);
      }
      var v = el.value.trim();
      out.push("");
      out.push(wrap(labelText(el), 72));
      out.push("");
      out.push(v ? wrap(v, 72) : "[left blank]");
    });
    out.push(""); out.push(rule); out.push("END");
    return out.join("\r\n");
  }
  window.SSWorkshop = { buildText: buildText };

  function fileName() {
    var name = document.getElementById("student-name").value.trim();
    var clean = name.normalize ? name.normalize("NFKD").replace(/[\u0300-\u036f]/g, "") : name;
    clean = clean.replace(/[^A-Za-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
    return "HIST270_SelfStrengthening_" + ROLE_FILE + "_" + (clean || "NoName") + ".txt";
  }

  document.getElementById("export-btn").addEventListener("click", function () {
    window.clearTimeout(timer); save();
    var fname = fileName();
    var blob = new Blob([buildText()], { type: "text/plain;charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url; a.download = fname;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    window.setTimeout(function () { URL.revokeObjectURL(url); }, 1500);
    say("Downloaded " + fname + ". Upload that file to Canvas.");
  });

  document.getElementById("copy-btn").addEventListener("click", function () {
    window.clearTimeout(timer); save();
    var text = buildText();
    function fallback() {
      var t = document.createElement("textarea");
      t.value = text; t.setAttribute("readonly", ""); t.style.position = "fixed"; t.style.opacity = "0";
      document.body.appendChild(t); t.select();
      var ok = false;
      try { ok = document.execCommand("copy"); } catch (e) {}
      document.body.removeChild(t);
      say(ok ? "Copied. Paste it into the Canvas text box." : "Copy did not work in this browser. Use Export instead.");
    }
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(function () { say("Copied. Paste it into the Canvas text box."); }, fallback);
    } else { fallback(); }
  });

  document.getElementById("print-btn").addEventListener("click", function () { window.print(); });

  document.getElementById("clear-btn").addEventListener("click", function () {
    if (!window.confirm("Clear every answer on this page? This cannot be undone.")) return;
    fields.forEach(function (el) { el.value = ""; grow(el); });
    try { window.localStorage.removeItem(STORE); } catch (e) {}
    say("Cleared.");
  });
})();
