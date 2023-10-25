"use client";

import dynamic from "next/dynamic";

import { useEffect, useRef } from "react";

import { ScrollArea, ScrollBar } from "src/components/scroll-area";

const TOCBody = dynamic(() => import("./toc-body").then((mod) => mod.TOCBody), {
  loading: () => (
    <div className="flex flex-col gap-2 px-2">
      <div className="rounded-md bg-transparent h-4 w-full" />
      <div className="animate-pulse rounded-md bg-muted h-4 w-full" />
      <div className="animate-pulse rounded-md bg-muted h-4 w-full" />
      <div className="animate-pulse rounded-md bg-muted h-4 w-full" />
      <div className="animate-pulse rounded-md bg-muted h-4 w-full" />
      <div className="animate-pulse rounded-md bg-muted h-4 w-full" />
      <div className="animate-pulse rounded-md bg-muted h-4 w-full" />
      <div className="animate-pulse rounded-md bg-muted h-4 w-full" />
      <div className="animate-pulse rounded-md bg-muted h-4 w-full" />
      <div className="animate-pulse rounded-md bg-muted h-4 w-full" />
      <div className="animate-pulse rounded-md bg-muted h-4 w-full" />
      <div className="animate-pulse rounded-md bg-muted h-4 w-full" />
      <div className="animate-pulse rounded-md bg-muted h-4 w-full" />
      <div className="animate-pulse rounded-md bg-muted h-4 w-full" />
      <div className="animate-pulse rounded-md bg-muted h-4 w-full" />
      <div className="animate-pulse rounded-md bg-muted h-4 w-full" />
      <div className="animate-pulse rounded-md bg-muted h-4 w-full" />
      <div className="animate-pulse rounded-md bg-muted h-4 w-full" />
      <div className="animate-pulse rounded-md bg-muted h-4 w-full" />
      <div className="animate-pulse rounded-md bg-muted h-4 w-full" />
    </div>
  ),
  ssr: false,
});

type TableOfContentsProps = {
  toc?: HeadingScrollSpy;
  activeSection: string | null;
  minLevel: number;
};

export type HeadingScrollSpy = Array<{
  id: string;
  level: number;
  text: string;
}>;

/**
 * The code is defining a React functional component called `TOC` (Table of Contents). It takes in
props of type `TableOfContentsProps` which includes properties like `toc`, `minLevel`, and
`activeSection`.
 */
export const TOC: React.FC<TableOfContentsProps> = (props): JSX.Element => {
  const { toc, minLevel, activeSection } = props;
  //#region  //*=========== Scroll into view ===========
  const lastPosition = useRef<number>(0);

  useEffect(() => {
    const container = document.getElementById("toc-container");
    const activeLink = document.getElementById(`link-${activeSection}`);

    if (container && activeLink) {
      // Get container properties
      const cTop = container.scrollTop;
      const cBottom = cTop + container.clientHeight;

      // Get activeLink properties
      const lTop = activeLink.offsetTop - container.offsetTop;
      const lBottom = lTop + activeLink.clientHeight;

      // Check if in view
      const isTotal = lTop >= cTop && lBottom <= cBottom;

      const isScrollingUp = lastPosition.current > window.scrollY;
      lastPosition.current = window.scrollY;

      if (!isTotal) {
        // Scroll by the whole clientHeight
        const offset = 25;
        const top = isScrollingUp
          ? lTop - container.clientHeight + offset
          : lTop - offset;

        container.scrollTo({ behavior: "smooth", top });
      }
    }
  }, [activeSection]);
  //#endregion  //*======== Scroll into view ===========

  return (
    <div className="rounded-lg border pb-2">
      <h3 className="hidden cursor-pointer select-none px-4 pb-2 pt-4 text-gray-900 dark:text-gray-100 md:text-xl lg:block">
        Table of Contents
      </h3>
      <div className="divide-y divide-dashed" />
      <ScrollArea>
        <TOCBody toc={toc} activeSection={activeSection} minLevel={minLevel} />
        <ScrollBar />
      </ScrollArea>
    </div>
  );
};
