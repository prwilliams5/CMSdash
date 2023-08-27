<<<<<<< HEAD
import { useEffect, useState } from "react";

export const useOrigin = () => {
  const [mounted, setMounted] = useState(false);
  const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';

  useEffect(() => {
    setMounted(true)
  }, [])
=======
// This hook will help us get the window object while using Next.

import { useState, useEffect } from 'react'

export const useOrigin = () => {
  const [mounted, setMounted] = useState(false)
  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : ''

  // This is the same hyration error trick.
  useEffect(() => setMounted(true), [])
>>>>>>> origin/main

  if (!mounted) {
    return ''
  }

<<<<<<< HEAD
  return origin;
};
=======
  return origin
}
>>>>>>> origin/main
