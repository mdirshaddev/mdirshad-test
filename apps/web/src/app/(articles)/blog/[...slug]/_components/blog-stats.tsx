/**
 * The `BlogStat` component is a rounded border container that displays blog statistics.
 * @returns The BlogStat component is returning a JSX element.
 */
export const BlogStats: React.FC = (): JSX.Element => {
  return (
    <div className="rounded-lg border">
      <h3 className="hidden cursor-pointer select-none px-4 pb-2 pt-4 text-gray-900 dark:text-gray-100 md:text-xl lg:block">
        Page Stats
      </h3>
      <div className="divide-y divide-dashed" />
      <div className="p-4">
        <p className="text-muted">Feature not available right now</p>
      </div>
    </div>
  );
};
