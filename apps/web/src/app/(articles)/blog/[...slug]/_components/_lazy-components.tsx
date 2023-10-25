"use client";

import dynamic from "next/dynamic";

const GiscusCommentBox = dynamic(
  () => import("src/components/embeddings").then((mod) => mod.GiscusCommentBox),
  { ssr: false }
);

const NextLink = dynamic(
  () => import("src/components/links").then((mod) => mod.NextLink),
  { ssr: false }
);

const StyledLink = dynamic(
  () => import("src/components/links").then((mod) => mod.StyledLink),
  { ssr: false }
);

const BlogStats = dynamic(
  () =>
    import("src/app/(articles)/blog/[...slug]/_components").then(
      (mod) => mod.BlogStats
    ),
  { ssr: false }
);

export { GiscusCommentBox, NextLink, StyledLink, BlogStats };
