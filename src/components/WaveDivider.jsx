export default function WaveDivider({ from = 'cream', to = 'teal', flip = false }) {
  const colorMap = {
    cream: '#F5F0E8',
    teal: '#1A3A3A',
    pink: '#E8638B',
    white: '#FDFBF7',
  }

  if (flip) {
    // Wave hangs down: from-color on top, to-color on bottom
    return (
      <div
        className="w-full leading-none relative z-10"
        style={{
          marginTop: '-2px',
          marginBottom: '-2px',
        }}
      >
        <svg
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          {/* Top strip in "from" color to overlap section above */}
          <rect width="1440" height="100" fill={colorMap[from]} />
          {/* Wave: to-color rises up */}
          <path
            d="M0 50C240 10 480 90 720 50C960 10 1200 90 1440 50V101H0V50Z"
            fill={colorMap[to]}
          />
        </svg>
      </div>
    )
  }

  // Normal: wave rises up from bottom
  return (
    <div
      className="w-full leading-none relative z-10"
      style={{
        marginTop: '-2px',
        marginBottom: '-2px',
      }}
    >
      <svg
        viewBox="0 0 1440 100"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto block"
        preserveAspectRatio="none"
      >
        {/* Full rect in "from" color to overlap section above */}
        <rect width="1440" height="100" fill={colorMap[from]} />
        {/* Wave: to-color rises up */}
        <path
          d="M0 50C240 90 480 10 720 50C960 90 1200 10 1440 50V101H0V50Z"
          fill={colorMap[to]}
        />
      </svg>
    </div>
  )
}
