// components/HearthMotionProvider.js
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function HearthMotionProvider({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize HearthMotion
    const initHearthMotion = () => {
      if (window.HearthMotion) {
        window.HearthMotion.init({
          scrollbar: {
            trackColor: "rgba(0,0,0,0.1)",
            thumbColor: "rgba(0,0,0,0.5)",
            hoverColor: "rgba(0,0,0,0.7)",
            trackWidth: "6px",
            thumbRadius: "4px",
            autoHide: true,
            hideDelay: 2000,
            edgeZone: 20,
          },
          animations: {
            threshold: 0.1,
            rootMargin: "0px 0px -20px 0px",
          },
        }).catch((error) => {
          console.error("HearthMotion initialization error:", error);
        });
      }
    };

    // Load HearthMotion script
    if (!window.HearthMotion) {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/gh/shakib-mia/hearthmotion-npm@main/src/hearthmotion-next.js";
      script.async = true;

      script.onload = () => {
        initHearthMotion();
      };

      script.onerror = () => {
        console.error("Failed to load HearthMotion script");
      };

      document.body.appendChild(script);
    } else {
      initHearthMotion();
    }

    return () => {
      // Cleanup on component unmount
      if (window.HearthMotion && window.HearthMotion.cleanup) {
        try {
          window.HearthMotion.cleanup();
        } catch (error) {
          console.warn("HearthMotion cleanup error:", error);
        }
      }
    };
  }, []);

  // Reinitialize on route change
  useEffect(() => {
    if (window.HearthMotion) {
      // Wait for Next.js to complete the DOM update
      setTimeout(() => {
        if (window.HearthMotion && window.HearthMotion.cleanup) {
          try {
            window.HearthMotion.cleanup();
          } catch (error) {
            // Ignore cleanup errors during route changes
            console.warn("Cleanup during route change:", error.message);
          }
        }

        if (window.HearthMotion && window.HearthMotion.init) {
          setTimeout(() => {
            try {
              window.HearthMotion.init();
            } catch (error) {
              console.error("Reinitialization error:", error);
            }
          }, 100);
        }
      }, 50);
    }
  }, [pathname]);

  return <>{children}</>;
}
