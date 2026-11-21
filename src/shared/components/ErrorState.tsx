import { AlertCircle } from 'lucide-react';
import { Button } from '@/shared/ui/button';

type ErrorStateProps = {
  title?: string;
  description?: string;
  onRetry: () => void;
};

export function ErrorState({
  title = 'حدث خطأ',
  description = 'تعذر تحميل البيانات. يرجى المحاولة مرة أخرى.',
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="border-border bg-card flex flex-col items-center justify-center gap-4 rounded-xl border p-8 text-center">
      <div className="bg-destructive/10 text-destructive flex size-14 items-center justify-center rounded-full">
        <AlertCircle className="size-7" />
      </div>

      <div className="space-y-2">
        <h3 className="text-foreground text-lg font-semibold">{title}</h3>
        <p className="text-muted-foreground max-w-md text-sm">{description}</p>
      </div>

      <Button variant="outline" onClick={onRetry}>
        Try again
      </Button>
    </div>
  );
}
