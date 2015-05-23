function ttsPlay(text) {
	/*
		@TODO
		looks like a hack
		change it
	*/
	chrome.runtime.sendMessage(null, text)
}

function onPlayBtnClick(e) {
	ttsPlay(this.dataset.content);
	/*
		prevent message selection
	*/
	e.stopPropagation();

	return false;
}

function playBtn(content) {
	var btnText = document.createTextNode('Play'),
		playBtn = document.createElement('button');

	playBtn.appendChild(btnText);
	playBtn.dataset.content = content;
	playBtn.addEventListener('click', onPlayBtnClick);

	return playBtn;
}

function launch() {
	var lastMeessages = document.querySelectorAll('.im_log_body .wrapped');
		
	Array.prototype.forEach.call(lastMeessages, function (wrapper) {
		var content = wrapper.querySelector('.im_msg_text').textContent;

		wrapper.appendChild(playBtn(content));
	});
}

launch();
