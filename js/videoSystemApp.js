import VideoSystem from './videoSystemModel.js';
import videoSystemController from './videoSystemController.js';
import videoSystemView from './videoSystemView.js';

const VideoSystemApp =  new videoSystemController(
	VideoSystem.getInstance(), new videoSystemView()
);
// console.log(VideoSystemApp);
// VideoSystemApp.handleInit();
export default VideoSystemApp;