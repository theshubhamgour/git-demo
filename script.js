// script.js
const playlistUrl = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=PLBr8obKbpkYtWIluvSsDCNphB0CGqV0lD&key=YOUR_YOUTUBE_API_KEY";

// Fetch videos from the playlist
fetch(playlistUrl)
    .then(response => response.json())
    .then(data => {
        const videos = data.items;

        // Populate the video grid
        const videoGrid = document.getElementById("video-grid");
        videos.forEach(video => {
            const videoTitle = video.snippet.title;
            const videoThumbnail = video.snippet.thumbnails.medium.url;
            const videoId = video.snippet.resourceId.videoId;

            const videoCard = document.createElement("div");
            videoCard.classList.add("video-card");

            const thumbnail = document.createElement("img");
            thumbnail.src = videoThumbnail;
            thumbnail.alt = videoTitle;

            const title = document.createElement("h2");
            title.textContent = videoTitle;

            videoCard.appendChild(thumbnail);
            videoCard.appendChild(title);

            // Open video in a new tab when clicked
            videoCard.addEventListener("click", () => {
                window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
            });

            videoGrid.appendChild(videoCard);
        });
    })
    .catch(error => console.log(error));
