import type { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/shared/ui/card';
import { Progress } from '@/shared/ui/progress';

type StatCardProps = {
  icon: LucideIcon;
  label: string;
  value: string | number;
  progress?: number;
};

export function StatCard({ icon: Icon, label, value, progress }: StatCardProps) {
  return (
    <Card>
      <CardContent>
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 text-primary flex size-11 shrink-0 items-center justify-center rounded-lg">
            <Icon className="size-5" />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-muted-foreground text-sm">{label}</p>
            <p className="text-foreground mt-1 text-xl font-bold">{value}</p>
          </div>
        </div>

        {progress !== undefined && <Progress value={progress} className="mt-2" />}
      </CardContent>
    </Card>
  );
}
