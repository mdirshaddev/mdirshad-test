"use client";

import { useContext } from "react";

import { PreloadContext } from "src/contexts/preload-context";

/**
 * The usePreloadState function returns the boolean value from the PreloadContext.
 */
export const usePreloadState: () => boolean = (): boolean =>
  useContext(PreloadContext);
