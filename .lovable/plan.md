

## Set Team Photo as Hero Background

Move the team photo from the two-column grid into the hero section's background, with a gradient overlay for text readability.

### Changes

**File: `src/pages/JoinOurTeam.tsx`**

- Replace the current two-column grid layout with a single-column centered text layout
- Set `teamBuildingLego` as an inline background image on the hero `<section>` using `style={{ backgroundImage: url(...) }}` with `bg-cover bg-center`
- Add a dark gradient overlay (`bg-black/50` or similar) so the white/green text remains readable
- Update text colors to white for contrast against the photo background
- Remove the standalone `<img>` tag

### Technical Detail

The hero section will change from:
```
<section className="... bg-gradient-to-br from-emerald-50 ...">
  <div className="grid grid-cols-2">
    <div>text + CTA</div>
    <div><img /></div>
  </div>
</section>
```

To:
```
<section className="... bg-cover bg-center" style={{ backgroundImage: `url(${teamBuildingLego})` }}>
  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
  <div className="container relative z-10">
    <div className="max-w-3xl">
      text + CTA (white text)
    </div>
  </div>
</section>
```

- Headline and subtitle text switch to white/white-alpha for contrast
- CTA button styling stays the same (already solid emerald green)

