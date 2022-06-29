import { useEffect, useLayoutEffect, useState } from "react";
import { WifiIcon } from "../../assets/svg";

import "./networkNotification.css";

const NetworkNotification = () => {
  const [online, setOnline] = useState(true);

  const updateNetwork = () => {
    setOnline(window.navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("offline", updateNetwork);
    window.addEventListener("online", updateNetwork);

    return () => {
      window.removeEventListener("offline", updateNetwork);
      window.removeEventListener("online", updateNetwork);
    };
  });

  useLayoutEffect(() => {
    if (online) {
      document.body.style.overflow = "unset";
      return;
    }
    document.body.style.overflow = "hidden";
  }, [online]);

  if (online) {
    return null;
  } else {
    return (
      <div
        className="network-notification__backdrop"
        data-testid="network-notification"
      >
        <div className="network-notification">
          <div className="icon">
            <WifiIcon />
          </div>
          <h3 className="title">You are not connected to the internet</h3>
          <p>
            <span>Double-check your internet connection and try again.</span>
          </p>
        </div>
      </div>
    );
  }
};

export default NetworkNotification;
