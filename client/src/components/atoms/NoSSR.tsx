'use client'

import React, { PropsWithChildren, useEffect, useState } from "react";

export const NoSSR: React.FC<PropsWithChildren> = ({ children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return <>{children}</>
};