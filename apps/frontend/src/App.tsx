import { RotateCcw } from "lucide-react";
import { DataList } from "./components/data-list/data-list";
import { TooltipWrapper } from "./components/data-list/tooltip-wrapper";
import { Button } from "./components/ui/button";
import { useList } from "./hooks/useList";

function App() {
  const { data, isLoading, refetch } = useList();

  return (
    <div className="flex h-full flex-1 flex-col space-y-8 p-8">
      <div className="w-10/12 mx-auto flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Welcome!</h2>
          <p className="text-muted-foreground">
            Here&apos;s the list of commits of the fulltimeforce test!
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <TooltipWrapper content="Refresh commits">
            {isLoading ? (
              <Button disabled variant="outline" size="icon" className="p-2">
                <RotateCcw className="h-5 w-5 motion-reduce:hidden animate-spin" />
              </Button>
            ) : (
              <Button
                variant="outline"
                size="icon"
                className="p-2"
                onClick={() => refetch()}
              >
                <RotateCcw className="h-5 w-5 motion-reduce:hidden" />
              </Button>
            )}
          </TooltipWrapper>
        </div>
      </div>
      {isLoading ? <></> : <DataList data={data || []} />}
    </div>
  );
}

export default App;
