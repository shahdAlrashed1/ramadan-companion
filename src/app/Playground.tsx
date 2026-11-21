import { useState } from 'react';
import { Heart, Target, TrendingUp, PackageOpen, Mail } from 'lucide-react';
import { toast } from 'sonner';

import { PageHeader } from '@/shared/components/PageHeader';
import { StatCard } from '@/shared/components/StatCard';
import { EmptyState } from '@/shared/components/EmptyState';
import { ErrorState } from '@/shared/components/ErrorState';
import { LoadingSkeleton } from '@/shared/components/LoadingSkeleton';

import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card';
import { Badge } from '@/shared/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui/dialog';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/shared/ui/sheet';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/select';
import { Switch } from '@/shared/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import { Progress } from '@/shared/ui/progress';
import { Skeleton } from '@/shared/ui/skeleton';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/shared/ui/avatar';
import { Separator } from '@/shared/ui/separator';

export function Playground() {
  const [progress, setProgress] = useState(65);

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-10 p-4 sm:p-6 lg:p-8">
      <PageHeader
        title="UI Playground"
        subtitle="Preview and test shared UI components"
        actions={
          <>
            <Button variant="outline">Cancel</Button>
            <Button variant="primary">Save changes</Button>
          </>
        }
      />

      {/* Buttons */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Buttons</h2>

        <Card>
          <CardContent className="flex flex-wrap gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="gold">Gold</Button>
            <Button variant="destructive">Destructive</Button>
            <Button disabled>Disabled</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </CardContent>
        </Card>
      </section>

      {/* Input */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Input & Label</h2>

        <Card>
          <CardContent className="max-w-md space-y-5">
            {/* Default */}
            <div className="space-y-2">
              <Label htmlFor="playground-name">Name</Label>
              <Input id="playground-name" placeholder="Enter your name" />
            </div>

            {/* Email with icon */}
            <div className="space-y-2">
              <Label htmlFor="playground-email">Email</Label>
              <div className="relative">
                <Mail className="text-muted-foreground absolute top-1/2 right-3 size-4 -translate-y-1/2" />
                <Input
                  id="playground-email"
                  type="email"
                  placeholder="name@example.com"
                  className="pr-10"
                />
              </div>
            </div>

            {/* Focused preview */}
            <div className="space-y-2">
              <Label htmlFor="playground-focused">Focused</Label>
              <Input
                id="playground-focused"
                placeholder="Focused input"
                className="border-ring ring-ring/50 ring-[3px]"
              />
            </div>

            {/* Error */}
            <div className="space-y-2">
              <Label htmlFor="playground-error">Error</Label>
              <Input
                id="playground-error"
                type="email"
                placeholder="Enter a valid email"
                aria-invalid={true}
              />
              <p className="text-destructive text-sm">Please enter a valid email address.</p>
            </div>

            {/* Disabled */}
            <div className="space-y-2">
              <Label htmlFor="playground-disabled">Disabled</Label>
              <Input id="playground-disabled" disabled placeholder="Disabled input" />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Cards and Badges */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Cards & Badges</h2>

        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Example Card</CardTitle>
            </CardHeader>
            <CardContent>Card content using the shared design tokens.</CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Badge examples</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stat Cards */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">StatCard</h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <StatCard icon={Heart} label="Donations" value={120} progress={75} />

          <StatCard icon={Target} label="Goals completed" value="8 / 12" progress={65} />

          <StatCard icon={TrendingUp} label="Growth" value="25%" />
        </div>
      </section>

      {/* Progress */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Progress</h2>

        <Card>
          <CardContent className="space-y-5">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Green Progress</span>
                <span className="text-muted-foreground">{progress}%</span>
              </div>
              <Progress value={progress} />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Gold Progress</span>
                <span className="text-muted-foreground">80%</span>
              </div>
              <Progress value={80} className="bg-gold-500/20" indicatorClassName="bg-gold-500" />
            </div>

            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                onClick={() => setProgress((value) => Math.max(0, value - 10))}
              >
                -10%
              </Button>

              <Button
                variant="outline"
                onClick={() => setProgress((value) => Math.min(100, value + 10))}
              >
                +10%
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Empty & Error States */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">States</h2>

        <div className="grid gap-4 lg:grid-cols-2">
          <EmptyState
            icon={PackageOpen}
            title="No data yet"
            description="Your content will appear here when you add your first item."
            action={{
              label: 'Add item',
              onClick: () => toast.success('Add item clicked'),
            }}
          />

          <ErrorState
            title="Unable to load data"
            description="Something went wrong while loading."
            onRetry={() => toast.info('Retry clicked')}
          />
        </div>
      </section>

      {/* Loading */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Loading Skeleton</h2>
        <LoadingSkeleton count={3} />

        <Card>
          <CardContent className="flex items-center gap-4">
            <Skeleton className="size-12 rounded-full" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-48" />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Tabs */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Tabs</h2>

        <Card>
          <CardContent>
            <Tabs defaultValue="overview">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="goals">Goals</TabsTrigger>
                <TabsTrigger value="donations">Donations</TabsTrigger>
              </TabsList>

              <TabsContent value="overview">Overview content</TabsContent>

              <TabsContent value="goals">Goals content</TabsContent>

              <TabsContent value="donations">Donations content</TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </section>

      {/* Select & Switch */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Select & Switch</h2>

        <Card>
          <CardContent className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="w-full max-w-xs space-y-2">
              <Label>Category</Label>

              <Select defaultValue="goals">
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="goals">Goals</SelectItem>
                  <SelectItem value="donations">Donations</SelectItem>
                  <SelectItem value="quran">Quran</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <Switch id="notifications-on" defaultChecked />
                <Label htmlFor="notifications-on">Notifications ON</Label>
              </div>

              <div className="flex items-center gap-3">
                <Switch id="notifications-off" />
                <Label htmlFor="notifications-off">Notifications OFF</Label>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Dialog */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Dialog</h2>

        <Card>
          <CardContent className="flex flex-wrap gap-3">
            {/* Confirmation Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Open Confirmation</Button>
              </DialogTrigger>

              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Confirm action</DialogTitle>
                  <DialogDescription>
                    Are you sure you want to continue with this action?
                  </DialogDescription>
                </DialogHeader>

                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>

                  <DialogClose asChild>
                    <Button variant="primary">Confirm</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {/* Delete Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="destructive">Open Delete Dialog</Button>
              </DialogTrigger>

              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Delete item?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. The selected item will be permanently deleted.
                  </DialogDescription>
                </DialogHeader>

                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>

                  <DialogClose asChild>
                    <Button variant="destructive">Delete</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      </section>

      {/* Sheet */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Sheet</h2>

        <Card>
          <CardContent>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Open Sheet</Button>
              </SheetTrigger>

              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Sheet example</SheetTitle>
                </SheetHeader>

                <p className="text-muted-foreground mt-4 text-sm">Sheet content.</p>
              </SheetContent>
            </Sheet>
          </CardContent>
        </Card>
      </section>

      {/* Dropdown Menu */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Dropdown Menu</h2>

        <Card>
          <CardContent>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Open menu</Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => toast.info('Profile clicked')}>
                  Profile
                </DropdownMenuItem>

                <DropdownMenuItem onClick={() => toast.info('Settings clicked')}>
                  Settings
                </DropdownMenuItem>

                <DropdownMenuItem onClick={() => toast.info('Logout clicked')}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardContent>
        </Card>
      </section>

      {/* Avatar & Separator */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Avatar & Separator</h2>

        <Card>
          <CardContent className="flex items-center gap-4">
            <Avatar>
              <AvatarFallback>RC</AvatarFallback>
            </Avatar>

            <Separator orientation="vertical" className="h-10" />

            <div>
              <p className="font-medium">Ramadan Companion</p>
              <p className="text-muted-foreground text-sm">UI Preview</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Sonner */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Sonner Toasts</h2>

        <Card>
          <CardContent className="flex flex-wrap gap-3">
            <Button
              onClick={() =>
                toast.success('تم الحفظ', {
                  description: 'سُجّلت قراءتك وتحدّث الورد.',
                })
              }
            >
              Success toast
            </Button>

            <Button
              variant="destructive"
              onClick={() =>
                toast.error('حدث خطأ', {
                  description: 'تعذّر حفظ بياناتك، حاول مرة أخرى.',
                })
              }
            >
              Error toast
            </Button>

            <Button
              variant="outline"
              onClick={() =>
                toast.warning('تنبيه', {
                  description: 'يرجى مراجعة المعلومات قبل المتابعة.',
                })
              }
            >
              Warning toast
            </Button>

            <Button
              variant="secondary"
              onClick={() =>
                toast.info('معلومة', {
                  description: 'تم تحديث المعلومات بنجاح.',
                })
              }
            >
              Info toast
            </Button>

            <Button variant="ghost" onClick={() => toast('Simple notification')}>
              Simple toast
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Additional example */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Page Header</h2>

        <Card>
          <CardContent>
            <PageHeader
              title="Ramadan Goals"
              subtitle="Manage your goals"
              actions={<Button variant="gold">Add Goal</Button>}
            />
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
