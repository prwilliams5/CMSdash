<<<<<<< HEAD
import { Copy, Server } from "lucide-react";
import { toast } from "react-hot-toast";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge, BadgeProps } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ApiAlertProps {
  title: string;
  description: string;
  variant: 'public' | 'admin',
};


const textMap: Record<ApiAlertProps["variant"], string> = {
  public: 'Public',
  admin: 'Admin'
};

const variantMap: Record<ApiAlertProps["variant"], BadgeProps["variant"]> = {
  public: 'secondary',
  admin: 'destructive'
};
=======
'use client'

import { toast } from 'react-hot-toast'
import { Copy, Server } from 'lucide-react'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge, BadgeProps } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface ApiAlertProps {
  title: string
  description: string
  variant: 'public' | 'admin'
}

// Map existing props to determine whether logged in user is admin or regular.
const textMap: Record<ApiAlertProps['variant'], string> = {
  public: 'Public',
  admin: 'Admin'
}

const variantMap: Record<ApiAlertProps['variant'], BadgeProps['variant']> = {
  public: 'secondary',
  admin: 'destructive'
}
>>>>>>> origin/main

export const ApiAlert: React.FC<ApiAlertProps> = ({
  title,
  description,
<<<<<<< HEAD
  variant = "public"
}) => {
  const onCopy = (description: string) => {
    navigator.clipboard.writeText(description);
    toast.success('API Route copied to clipboard.');
  }

  return ( 
=======
  variant = 'public'
}) => {
  const onCopy = () => {
    navigator.clipboard.writeText(description)
    toast.success('Copied to clipboard')
  }

  return (
>>>>>>> origin/main
    <Alert>
      <Server className="h-4 w-4" />
      <AlertTitle className="flex items-center gap-x-2">
        {title}
<<<<<<< HEAD
        <Badge variant={variantMap[variant]}>
          {textMap[variant]}
        </Badge>
      </AlertTitle>
      <AlertDescription className="mt-4 flex items-center justify-between">
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
          {description}
        </code>
        <Button variant="outline" size="sm" onClick={() => onCopy(description)}>
=======
        <Badge variant={variantMap[variant]}>{textMap[variant]}</Badge>
      </AlertTitle>
      <AlertDescription className="mt-4 flex items-center justify-between">
        <code className="relative roudned bg-muted px-[0.3rem] py-[0.2rme] font-mono text-sm font-semibold">
          {description}
        </code>
        <Button variant="outline" size="icon" onClick={onCopy}>
>>>>>>> origin/main
          <Copy className="h-4 w-4" />
        </Button>
      </AlertDescription>
    </Alert>
<<<<<<< HEAD
   );
};
=======
  )
}
>>>>>>> origin/main
