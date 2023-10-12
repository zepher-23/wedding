// Get references to the video element and the download button
const video = document.getElementById('videoPlayer');
const downloadButton = document.getElementById('downloadButton');

// Add a click event listener to the download button
downloadButton.addEventListener('click', () => {
    // Create a link element
    const a = document.createElement('a');

    // Set the href attribute to the video's source URL
    a.href = video.src;

    // Set the download attribute with the desired filename and file extension
    a.download = 'sample.mp4';

    // Programmatically click the link to trigger the download
    a.click();
});
