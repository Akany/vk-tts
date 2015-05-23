chrome.tabs.onUpdated.addListener(function (id, info, tab) {
	if (info.status === 'complete') {
		if (/vk.com\/im/.test(tab.url)) {
			chrome.pageAction.show(id);
			chrome.tabs.executeScript(id, {
				file: 'launch.js'
			});
			listen();
		} else {
			chrome.pageAction.hide(id);
		}
	}
});

function listen() {
	chrome.runtime.onMessage.addListener(function (text, obj) {
		chrome.tts.speak(text);
	})
}