const css = `
.leaflet-map {
  width: 100%;
  height: 420px;
  margin: 1.5rem 0;
  border-radius: 8px;
  overflow: hidden;
  background: #e5e5e5;
  z-index: 0;
}
.leaflet-map .leaflet-container {
  font: inherit;
}
html[saved-theme="dark"] .leaflet-map .leaflet-tile-pane {
  filter: invert(1) hue-rotate(180deg) brightness(0.9) contrast(0.9);
}
@media (max-width: 600px) {
  .leaflet-map {
    height: 320px;
  }
}
`

const script = `
(function () {
  var LEAFLET_CSS = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
  var LEAFLET_JS = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";

  function ensureLeaflet() {
    if (window.L) return Promise.resolve(window.L);
    if (window.__leafletLoading) return window.__leafletLoading;

    window.__leafletLoading = new Promise(function (resolve, reject) {
      if (!document.querySelector("link[data-leaflet]")) {
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = LEAFLET_CSS;
        link.dataset.leaflet = "1";
        document.head.appendChild(link);
      }

      var existing = document.querySelector("script[data-leaflet]");
      if (existing) {
        existing.addEventListener("load", function () { resolve(window.L); });
        existing.addEventListener("error", function () {
          reject(new Error("Leaflet konnte nicht geladen werden"));
        });
        return;
      }

      var js = document.createElement("script");
      js.src = LEAFLET_JS;
      js.async = true;
      js.dataset.leaflet = "1";
      js.onload = function () { resolve(window.L); };
      js.onerror = function () {
        reject(new Error("Leaflet konnte nicht geladen werden"));
      };
      document.head.appendChild(js);
    });

    return window.__leafletLoading;
  }

  function initMaps() {
    var nodes = document.querySelectorAll(".leaflet-map:not([data-map-ready])");
    if (nodes.length === 0) return;

    ensureLeaflet().then(function (L) {
      Array.prototype.forEach.call(nodes, function (el) {
        if (el.dataset.mapReady) return;
        el.dataset.mapReady = "1";

        var lat = Number(el.dataset.lat || "51.0482");
        var lng = Number(el.dataset.lng || "13.8689");
        var zoom = Number(el.dataset.zoom || "14");
        var height = el.dataset.height;
        if (height) {
          el.style.height = /^[0-9]+$/.test(height) ? height + "px" : height;
        }

        var map = L.map(el, {
          scrollWheelZoom: el.dataset.scrollWheel === "true"
        }).setView([lat, lng], zoom);

        L.tileLayer(el.dataset.tiles || "https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        var markers = [];
        try {
          markers = JSON.parse(el.dataset.markers || "[]");
        } catch (err) {
          console.error("[leaflet-map] data-markers ist kein gültiges JSON", err);
        }

        markers.forEach(function (m) {
          var mlat = Number(m.lat);
          var mlng = Number(m.lng);
          if (!isFinite(mlat) || !isFinite(mlng)) return;

          var marker = L.marker([mlat, mlng]).addTo(map);
          if (m.label) {
            var holder = document.createElement("span");
            if (m.href) {
              var a = document.createElement("a");
              a.href = m.href;
              a.textContent = m.label;
              holder.appendChild(a);
            } else {
              holder.textContent = m.label;
            }
            marker.bindPopup(holder);
          }
        });

        window.addCleanup(function () { map.remove(); });
      });
    }).catch(function (err) {
      console.error("[leaflet-map]", err);
    });
  }

  document.addEventListener("nav", initMaps);
  document.addEventListener("render", initMaps);
  initMaps();
})()
`

export const LeafletMap = () => {
  const Component = () => null
  Component.css = css
  Component.afterDOMLoaded = script
  return Component
}
