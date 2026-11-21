import { Skeleton } from '@/shared/ui/skeleton';

type LoadingSkeletonProps = {
  count?: number;
};

export function LoadingSkeleton({ count = 3 }: LoadingSkeletonProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }, (_, index) => (
        <div
          key={index}
          className="border-border bg-card flex flex-col gap-4 rounded-xl border p-5"
        >
          <div className="flex items-center gap-3">
            <Skeleton className="size-11 rounded-lg" />

            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-6 w-16" />
            </div>
          </div>

          <Skeleton className="h-2 w-full" />
        </div>
      ))}
    </div>
  );
}
