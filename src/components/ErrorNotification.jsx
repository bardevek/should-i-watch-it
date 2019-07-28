import React from "react";
import { StyledToast, ToastBody } from "../StyledComponents/ErrorNotification";

const ErrorNotification = ({ isVisible, hideNotification }) => {
  return (
    <StyledToast
      onClose={hideNotification}
      show={isVisible}
      delay={5000}
      autohide
    >
      <ToastBody>
        <h5>Something went wrong.</h5>
        <span>
          Check your internet connection status. If the problem occurs again you
          should contact the administrator.
        </span>
      </ToastBody>
    </StyledToast>
  );
};

export { ErrorNotification };
