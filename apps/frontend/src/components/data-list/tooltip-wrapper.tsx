import type { FC, ReactNode } from "react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "../ui/tooltip";

export const TooltipWrapper: FC<{
    children: ReactNode;
    content: string;
  }> = ({ children, content }) => {
    return (
      <TooltipProvider>
        <Tooltip delayDuration={200} >
          <TooltipTrigger asChild>{children}</TooltipTrigger>
          <TooltipContent>
            <p>{content}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  };
  