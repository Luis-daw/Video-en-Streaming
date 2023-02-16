import VideoSystem from './videoSystemModel.js';
import videoSystemController from './videoSystemController.js';
import videoSystemView from './videoSystemView.js';

let VideoSystemApp;
$(function() {
	VideoSystemApp = new videoSystemController(
		VideoSystem.getInstance(), new videoSystemView()
	);
});
export default VideoSystemApp;