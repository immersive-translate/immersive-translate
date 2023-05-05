const shadowRootHost = document.querySelector("#shadow-host");
console.log("shadowRootHost", shadowRootHost);

// add shadow root to shadowRootHost
const shadowRoot = shadowRootHost.attachShadow({ mode: "open" });
// add content to shadowRoot
shadowRoot.innerHTML = `
  <p>This a paragraph from shadow root.</p>
  `;
