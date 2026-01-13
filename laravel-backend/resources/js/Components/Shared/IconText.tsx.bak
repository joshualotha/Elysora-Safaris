import type { FC } from 'react';
import type { Icon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface IconTextProps {
  icon: Icon;
  title: string;
  description: string;
}

const IconText: FC<IconTextProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default IconText;
