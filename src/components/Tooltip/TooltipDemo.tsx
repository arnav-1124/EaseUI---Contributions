import React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./Tooltip";

type Props = {};

const TooltipDemo = (props: Props) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>Hover me</TooltipTrigger>

        <TooltipContent side="left" sideOffset={20}>Hello from EaseUI!</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipDemo;
