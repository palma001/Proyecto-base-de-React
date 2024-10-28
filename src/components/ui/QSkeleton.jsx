import { Skeleton } from "@nextui-org/react";

export const SkeletonLoading = () => {
  return (
    <div className="flex flex-col gap-3">
      <Skeleton className="w-full rounded-lg">
        <div className="h-10 w-full rounded-lg"></div>
      </Skeleton>
      <Skeleton className="w-full rounded-lg">
        <div className="h-10 w-full rounded-lg"></div>
      </Skeleton>
      <Skeleton className="w-full rounded-lg">
        <div className="h-10 w-full rounded-lg"></div>
      </Skeleton>
    </div>
  );
};

export default SkeletonLoading;
