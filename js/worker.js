chrome.webRequest.onResponseStarted.addListener(
	function (responseDetails) {
		console.log('Response headers:', responseDetails);
		// You can inspect response headers here
	},
	{ urls: ['<all_urls>'] },
	['responseHeaders'],
);
