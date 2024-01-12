try {
  const userAgent = window.navigator.userAgent;
  let os = "unknown";

  if (userAgent.indexOf("Win") != -1) os = "windows";
  if (userAgent.indexOf("Mac") != -1) os = "mac";
  if (userAgent.indexOf("X11") != -1) os = "unix";
  if (userAgent.indexOf("Linux") != -1) os = "linux";

  if (["windows"].includes(os)) {
    document.querySelector("html").classList.add("custom-scroll");
  }
} catch (err) {}
