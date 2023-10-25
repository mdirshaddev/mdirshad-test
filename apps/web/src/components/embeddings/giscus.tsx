"use client";

import Giscus from "@giscus/react";
import { useTheme } from "next-themes";

/**
 * The `GiscusCommentBox` component is a TypeScript React component that renders a comment box using
 * the Giscus library, with various props for customization.
 */
export const GiscusCommentBox: React.FC = () => {
  const { theme, systemTheme } = useTheme();
  return (
    <Giscus
      repo={`${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/mdirshad`}
      repoId={process.env.NEXT_PUBLIC_GITHUB_REPO_ID as string}
      category="General"
      categoryId="DIC_kwDOKgI5BM4CaU2d"
      strict="1"
      mapping="title"
      inputPosition={"top"}
      theme={
        theme == "system" ? systemTheme : theme == "light" ? "light" : "dark"
      }
      lang={"en"}
      loading="lazy"
      emitMetadata="1"
      reactionsEnabled="1"
    />
  );
};
