"use client";

import { SessionProvider } from "next-auth/react";

/**
 * The RootProvider component is a wrapper that provides session context to its children components.
 * @param props - The `props` parameter is of type `React.PropsWithChildren`. It is a generic type that
 * allows you to pass any additional props to the `RootProvider` component, along with the `children`
 * prop. The `children` prop is a special prop in React that allows you to render
 * @returns The RootProvider component is returning the SessionProvider component with the
 * props.children passed as its children.
 */
export function RootProvider(props: React.PropsWithChildren) {
  return <SessionProvider>{props.children}</SessionProvider>;
}
