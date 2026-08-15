import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";
import { Button } from "@/components/Button/Button";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipArrow,
} from "@/components/Tooltip/Tooltip";

const TooltipPage = () => {
  const usageCode = `import { Button } from "@/components/Button/Button";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipArrow,
} from "@/components/Tooltip/Tooltip";

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button>Hover me</Button>
    </TooltipTrigger>

    <TooltipContent>
      This is a tooltip
      <TooltipArrow />
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
`;

  const propsData = [
    {
      prop: "side",
      type: '"top" | "right" | "bottom" | "left"',
      default: '"top"',
      description: "Controls which side of the trigger the tooltip appears on.",
    },
    {
      prop: "sideOffset",
      type: "number",
      default: "4",
      description: "Controls the distance between the tooltip and its trigger.",
    },
    {
      prop: "className",
      type: "string",
      default: "-",
      description: "Allows custom CSS classes to be applied to the tooltip.",
    },
    {
      prop: "children",
      type: "ReactNode",
      default: "-",
      description: "Content displayed inside the tooltip.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Tooltip</h1>

        <p className="text-xl text-muted-foreground">
          A small popup that provides additional information when the user
          hovers over or focuses on an element.
        </p>
      </div>

      {/* Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>

        <ComponentDemo code={usageCode}>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button>Hover me</Button>
              </TooltipTrigger>

              <TooltipContent>
                This is a tooltip
                <TooltipArrow />
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </ComponentDemo>
      </section>

      {/* Positions */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Positions</h2>

        <ComponentDemo
          code={`<TooltipContent side="top">Top</TooltipContent>
<TooltipContent side="right">Right</TooltipContent>
<TooltipContent side="bottom">Bottom</TooltipContent>
<TooltipContent side="left">Left</TooltipContent>`}
        >
          <div className="flex items-center gap-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="sm">Top</Button>
                </TooltipTrigger>

                <TooltipContent side="top">
                  Tooltip on top
                  <TooltipArrow />
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="sm">Right</Button>
                </TooltipTrigger>

                <TooltipContent side="right">
                  Tooltip on right
                  <TooltipArrow />
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="sm">Bottom</Button>
                </TooltipTrigger>

                <TooltipContent side="bottom">
                  Tooltip on bottom
                  <TooltipArrow />
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="sm">Left</Button>
                </TooltipTrigger>

                <TooltipContent side="left">
                  Tooltip on left
                  <TooltipArrow />
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </ComponentDemo>
      </section>

      {/* API Reference */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>

        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default TooltipPage;
