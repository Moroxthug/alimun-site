#!/bin/bash
# Web versions of the owner's product films: silent H.264 MP4 (crf 25, faststart) and VP9 WebM, 16:9 at 1600 px wide,
# 4:5 at 1080 px wide, plus a poster JPG from about 1 s in. Usage: encode.sh <source.mp4> <out-dir>
set -e
src="$1"; out="$2"; name=$(basename "$src" .mp4)
case "$name" in *-4x5) W=1080 ;; *) W=1600 ;; esac
vf="scale=${W}:-2:flags=lanczos,format=yuv420p"
ffmpeg -v error -y -i "$src" -an -vf "$vf" -c:v libx264 -preset slow -crf 25 -profile:v high -level 4.1 -movflags +faststart "$out/$name-transcode.mp4"
ffmpeg -v error -y -i "$src" -an -vf "$vf" -c:v libvpx-vp9 -crf 34 -b:v 0 -row-mt 1 -deadline good -cpu-used 2 "$out/$name-transcode.webm"
ffmpeg -v error -y -ss 1 -i "$src" -frames:v 1 -vf "scale=${W}:-2:flags=lanczos" -q:v 3 "$out/$name-poster-00001.jpg"
echo "done $name"
