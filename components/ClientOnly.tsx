import React, { useState, useEffect } from "react";

// https://www.joshwcomeau.com/react/the-perils-of-rehydration/#abstractions
const ClientOnly: any = ({ children }: { children: React.ReactNode }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return children;
};

export default ClientOnly;
