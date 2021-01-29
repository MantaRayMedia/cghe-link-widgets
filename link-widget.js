"use strict";
!(function (e, t) {

  const container = document.querySelector('[data-cghe-widget="HelpDesk"]');

  // Create an iframe.
  const iframe = document.createElement("iframe");
  // Add css
  const cssLink = document.createElement("link");
  cssLink.href = "https://cdn.jsdelivr.net/gh/MantaRayMedia/cghe-link-widgets@v1.1/style.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";
  // Insert iframe before script's next sibling, i.e. after the script.
  container.parentNode.insertBefore(iframe, container.nextSibling);

  // Widget content
  const content =
    '<div class="link-widget-logo"></div>' +
    '<div class="link-widget-title">Hepatitis Elimination Help Desk</div>' +
    '<div class="link-widget-text">Submit a question or request</div>' +
    '<a class="link-widget-button" href="https://www.globalhep.org/help-desk-viral-hepatitis-elimination" target="_parent">Go to Help desk</a>';

  // Create a div element
  const div = document.createElement("div");
  div.classList.add('link-widget-content');

  div.innerHTML = content;
  // Append div to iframe's body.
  iframe["width"] = '340';
  iframe["height"] = '380';
  iframe["frameBorder"] = "0";

  iframe.contentWindow.document.head.appendChild(cssLink);
  iframe.contentWindow.document.body.appendChild(div);

})(window, document);
