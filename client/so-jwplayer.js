Template.video.rendered = function () {
	jwplayer('my-video').setup({
		file: 'http://localhost:3000/mymp3.mp3',
		width: '640',
		height: '360'
	});
};