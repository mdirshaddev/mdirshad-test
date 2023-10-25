"use client";

import { TOCLink } from "./toc-link";

import { type HeadingScrollSpy } from "./toc";

export const TOCBody: React.FC<{
  toc: HeadingScrollSpy | undefined;
  minLevel: number;
  activeSection: string | null;
}> = (props) => {
  const { toc, minLevel, activeSection } = props;
  return (
    <div
      id="toc-container"
      className="hidden max-h-[calc(100vh-12rem-113px)] p-4 pb-4 lg:block"
    >
      <div className="mb-4 mt-0 flex flex-col space-y-2 text-sm">
        {toc &&
          toc.map(({ id, level, text }) => (
            <TOCLink
              key={id}
              id={id}
              activeSection={activeSection}
              level={level}
              minLevel={minLevel}
              text={text}
            />
          ))}
      </div>
    </div>
  );
};
