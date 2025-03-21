import { StrictMode, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "./components/providers/theme-provider.tsx";
import "./types/index.css";

// eslint-disable-next-line react-refresh/only-export-components
const Root = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <StrictMode>
      <div className="relative min-h-screen">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
        >
          <source src="/bgvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </div>
    </StrictMode>
  );
};

createRoot(document.getElementById("root")!).render(<Root />);
