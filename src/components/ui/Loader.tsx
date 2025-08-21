import React, { useMemo } from "react";

interface LoaderProps {
  visible: boolean;
}

// Helper to force remount on refresh (animation restart)
const getRandomKey = () => Math.random().toString(36).slice(2);

const Loader: React.FC<LoaderProps> = ({ visible }) => {
  // This key will change on every refresh, remounting the SVG and restarting the animation
  const svgKey = useMemo(() => getRandomKey(), []);
  if (!visible) return null;
  return (
    <div className="loader-overlay" style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
      <svg
        key={svgKey}
        fill="#000000"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
        width="120"
        height="120"
        style={{ maxWidth: '80vw', maxHeight: '80vh' }}
      >
        <g>
          <g>
            <rect
              x="40.421"
              y="431.158"
              width="363.789"
              height="80.842"
              className="svg-elem-1"
            ></rect>
          </g>
        </g>
        <g>
          <g>
            <path
              d="M206.395,274.766c-14.137,28.316-43.155,47.935-76.749,48.56l61.792,67.41h121.263L206.395,274.766z"
              className="svg-elem-2"
            ></path>
          </g>
        </g>
        <g>
          <g>
            <path
              d="M204.345,66.762l-74.698,81.49c33.595,0.624,62.614,20.243,76.749,48.56l59.846-65.288
            C235.5,122.972,211.53,98.045,204.345,66.762z"
              className="svg-elem-3"
            ></path>
          </g>
        </g>
        <g>
          <g>
            <path
              d="M128,188.632c-26.003,0-47.158,21.155-47.158,47.158s21.155,47.158,47.158,47.158s47.158-21.155,47.158-47.158
            S154.003,188.632,128,188.632z"
              className="svg-elem-4"
            ></path>
          </g>
        </g>
        <g>
          <g>
            <path
              d="M289.684,0c-26.003,0-47.158,21.155-47.158,47.158s21.155,47.158,47.158,47.158s47.158-21.155,47.158-47.158
            S315.687,0,289.684,0z"
              className="svg-elem-5"
            ></path>
          </g>
        </g>
        <g>
          <g>
            <path
              d="M413.106,182.5l-56.992-78.366c-8.829,10.279-19.983,18.503-32.656,23.821l46.188,63.51
            c-19.634,11.785-32.803,33.28-32.803,57.798v53.895h40.421v-53.895c0-14.859,12.089-26.947,26.947-26.947
            c14.859,0,26.947,12.089,26.947,26.947v53.895h40.421v-53.895C471.579,215.133,446.061,186.868,413.106,182.5z"
              className="svg-elem-6"
            ></path>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Loader;
