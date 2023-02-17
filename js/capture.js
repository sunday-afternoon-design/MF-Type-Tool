// Create a canvas element
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
const savepng = document.getElementById('savepng')

// Set the canvas size
window.addEventListener('resize', function() {
    canvas.width = window.innerWidth * window.devicePixelRatio;
    canvas.height = window.innerHeight * window.devicePixelRatio;
});

console.log(window.devicePixelRatio, 2)

// chrome.tabCapture.capture({ video: true, audio: false }).then(function(stream) {
//     var video = document.createElement('video');
//     video.srcObject = stream;
//     video.onloadedmetadata = function(e) {
//         video.play();
//     };
//     savepng.onclick = function() {
//         video.pause();
//         ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

//         var imageData = canvas.toDataURL('image/png', 1);
//         var link = document.createElement('a');
//         link.download = 'MF-assets.png';
//         link.href = imageData;
//         link.click();

//         video.play();
//     };
//     // document.addEventListener('keydown', function(event) {
//     //     if (event.code === 'KeyC' && (event.ctrlKey || event.metaKey)) {

//     //         video.pause();
//     //         ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

//     //         var imageData = canvas.toDataURL('image/png', 1);
//     //         var link = document.createElement('a');
//     //         link.download = 'MF-assets.png';
//     //         link.href = imageData;
//     //         link.click();

//     //         video.play();
//     //     };
//     // })
// })


navigator.mediaDevices.getDisplayMedia({ preferCurrentTab: true, video: true, audio: true })
    .then(function(stream) {
        // Create a video element to display the captured screen
        var video = document.createElement('video');
        video.srcObject = stream;
        video.onloadedmetadata = function(e) {
            video.play();
        };
        savepng.onclick = function() {
            video.pause();
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

            var imageData = canvas.toDataURL('image/png', 1);
            var link = document.createElement('a');
            link.download = 'MF-assets.png';
            link.href = imageData;
            link.click();

            video.play();
        };
        document.addEventListener('keydown', function(event) {
            if (event.code === 'KeyC' && (event.ctrlKey || event.metaKey)) {

                video.pause();
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

                var imageData = canvas.toDataURL('image/png', 1);
                var link = document.createElement('a');
                link.download = 'MF-assets.png';
                link.href = imageData;
                link.click();

                video.play();
            };
        })
    })
    .catch(function(err) {
        console.error('Error: ' + err);
    });