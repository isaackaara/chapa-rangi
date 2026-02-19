export default function WaveDivider({ from = 'cream', to = 'teal', flip = false }) {
  const colorMap = {
    cream: '#F5F0E8',
    teal: '#1A3A3A',
    pink: '#E8638B',
  }

  // Normal: wave rises up from bottom, "from" color is background, "to" color fills the wave rising up
  // Flip: wave hangs down from top, "from" color fills the wave hanging down, "to" color is background
  // No CSS rotation needed, we just draw different SVG paths

  if (flip) {
    // Wave hangs down: from-color on top (wave), to-color on bottom (background)
    return (
      <div
        className="w-full overflow-hidden leading-none"
        style={{ backgroundColor: colorMap[to], marginTop: '-1px' }}
      >
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          {/* Background rect of "from" color filling the top */}
          <rect width="1440" height="80" fill={colorMap[from]} />
          {/* Wave cutout: to-color rises up, eating into the from-color */}
          <path
            d="M0 40C240 0 480 80 720 40C960 0 1200 80 1440 40V81H0V40Z"
            fill={colorMap[to]}
          />
        </svg>
      </div>
    )
  }

  // Normal: wave rises up from bottom
  return (
    <div
      className="w-full overflow-hidden leading-none"
      style={{ backgroundColor: colorMap[from], marginBottom: '-1px' }}
    >
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto block"
        preserveAspectRatio="none"
      >
        <path
          d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V81H0V40Z"
          fill={colorMap[to]}
        />
      </svg>
    </div>
  )
}
