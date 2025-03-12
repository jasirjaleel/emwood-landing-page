
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide loading screen after all content is loaded
    const handleLoad = () => {
      setIsVisible(false);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="text-center">
        <Loader2 className="h-8 w-8 animate-spin text-brand-primary mx-auto" />
        <p className="mt-4 text-gray-600 font-light">Loading amazing spaces...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
