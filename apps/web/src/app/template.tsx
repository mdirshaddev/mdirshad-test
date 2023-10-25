export default function Template(props: React.PropsWithChildren) {
  const { children } = props;
  return <div>{children}</div>;
}
