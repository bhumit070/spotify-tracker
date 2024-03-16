var s = document.createElement('script');
console.log('injected.js loaded');
// must be listed in web_accessible_resources in manifest.json
s.src = chrome.runtime.getURL('js/injected.js');
s.onload = function () {
	console.log('injected.js loaded');
	this.remove();
};
(document.head || document.documentElement).appendChild(s);
