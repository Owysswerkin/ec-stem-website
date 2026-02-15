
## Add YouTube Video Section Below Hero

A new section will be inserted between the hero and the wave divider on the Home page. It will embed the YouTube video (`cr1b_0xommY`) that autoplays silently in the background, with a styled overlay containing a "Watch Video" play button. Clicking the button hides the overlay and replays the video with sound.

### Design

```text
+--------------------------------------------------+
|                                                    |
|        [YouTube iframe - muted autoplay]           |
|                                                    |
|     +--------------------------------------+       |
|     |           OVERLAY (semi-dark)        |       |
|     |                                      |       |
|     |        [ Play icon button ]          |       |
|     |         "Watch Our Story"            |       |
|     +--------------------------------------+       |
|                                                    |
+--------------------------------------------------+
```

- 16:9 aspect ratio container
- On load: video autoplays muted in the background via YouTube iframe API (`autoplay=1&mute=1&loop=1&controls=0&showinfo=0`)
- Overlay: semi-transparent dark gradient with a centered play button (using Lucide `Play` icon) and text
- On click: overlay fades out, iframe `src` is swapped to unmuted version with `autoplay=1&mute=0&controls=1` so the user gets full playback with audio

### Technical Details

**File: `src/pages/Home.tsx`**

1. Add `useState` for tracking overlay visibility
2. Import `Play` icon from `lucide-react`
3. Insert a new `<section>` immediately after the hero section closing tag and before the first `<WaveDivider>`
4. The section contains:
   - A `relative` wrapper with `aspect-video` for 16:9 ratio
   - An `<iframe>` embedding `https://www.youtube.com/embed/cr1b_0xommY?autoplay=1&mute=1&loop=1&playlist=cr1b_0xommY&controls=0&showinfo=0&rel=0&modestbranding=1`
   - A conditional overlay `div` (absolute positioned, dark gradient bg) with a play button
   - On click handler: sets state to hide overlay and swaps iframe src to `autoplay=1&mute=0&controls=1` (unmuted with controls)
5. Background color matches surrounding sections (`bg-gray-50` or similar neutral)

No new dependencies required -- uses standard YouTube iframe embed.
