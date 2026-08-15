import yt_dlp

def download_audio(youtube_url):
    ydl_opts = {
        'format': 'bestaudio/best',
        'postprocessors': [{
            'key': 'FFmpegExtractAudio',
            'preferredcodec': 'mp3',
            'preferredquality': '192',
        }],
        'outtmpl': 'resources/song.%(ext)s'
    }

    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        ydl.download([youtube_url])

    return "song.mp3"

if __name__ == "__main__":
    import sys
    if len(sys.argv) > 1:
        youtube_url = sys.argv[1]
        print("Downloading audio...")
        output_file = download_audio(youtube_url)
        print(f"Downloaded: {output_file}")
    else:
        print("No YouTube URL provided.")