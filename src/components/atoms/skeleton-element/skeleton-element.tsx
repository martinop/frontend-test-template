import cx from "classnames";

interface SkeletonElementProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export default function SkeletonElement({
  className = "",
  ...props
}: SkeletonElementProps) {
  return (
    <div
      className={cx("bg-gray-200 rounded animate-pulse", className)}
      role="presentation"
      {...props}
    />
  );
}
