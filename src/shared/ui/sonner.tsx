import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from 'lucide-react';
import { useTheme } from 'next-themes';
import { Toaster as Sonner, type ToasterProps } from 'sonner';

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      dir="rtl"
      position="bottom-right"
      closeButton
      className="toaster group"
      icons={{
        success: (
          <span className="flex size-10 items-center justify-center rounded-full bg-emerald-900/60 text-emerald-400">
            <CircleCheckIcon className="size-5" />
          </span>
        ),
        error: (
          <span className="flex size-10 items-center justify-center rounded-full bg-red-900/60 text-red-400">
            <OctagonXIcon className="size-5" />
          </span>
        ),
        warning: (
          <span className="flex size-10 items-center justify-center rounded-full bg-yellow-900/60 text-yellow-400">
            <TriangleAlertIcon className="size-5" />
          </span>
        ),
        info: (
          <span className="flex size-10 items-center justify-center rounded-full bg-blue-900/60 text-blue-400">
            <InfoIcon className="size-5" />
          </span>
        ),
        loading: <Loader2Icon className="size-5 animate-spin" />,
      }}
      toastOptions={{
        classNames: {
          toast:
            '!bg-[#173D35] !border !border-[#28594E] !rounded-2xl !p-5 !text-[#F5F1E6] !shadow-lg !min-h-[100px] !w-[360px]',
          title: '!text-[#F5F1E6] !font-semibold !text-base',
          description: '!text-[#A9C5BA] !text-sm',
          closeButton:
            '!absolute !left-4 !right-auto !top-4 !translate-x-0 !translate-y-0 !bg-transparent !border-0 !text-[#A9C5BA] hover:!text-white',
          content: '!flex-1 !min-w-0 !text-right !mr-6',
        },
      }}
      style={
        {
          '--normal-bg': '#173D35',
          '--normal-text': '#F5F1E6',
          '--normal-border': '#28594E',
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
