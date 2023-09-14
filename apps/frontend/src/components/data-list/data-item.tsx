import { FC, ReactNode } from "react";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@frontend/components/ui/dialog";
import { BadgeCheck, Code } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

import { Commit } from "./data-list";
import { formatTime } from "@frontend/lib/utils";
import { TooltipWrapper } from "./tooltip-wrapper";

type DataItemProps = {
  commit: Commit;
};

export const DataItem: FC<DataItemProps> = ({ commit }) => {
  return (
    <div className="h-full flex-col space-y-2 md:space-y-0 md:flex-row p-3 w-full flex justify-between border-b-2 hover:bg-zinc-100 duration-150 transition-colors">
      <div className="w-full flex flex-col">
        <p className="font-normal">{commit.message}</p>
        <div className="flex space-x-2 items-center">
          <Avatar className="w-6 h-6">
            <a href={`https://github.com/Delavalom`}>
              <AvatarImage
                src={commit.avatar_url}
                alt={`${commit.author}'s avatar`}
              />
            </a>
            <AvatarFallback>D</AvatarFallback>
          </Avatar>
          <p className="text-xs font-bold leading-none">{commit.author}</p>
          <p className="text-xs text-muted-foreground">
            committed {formatTime(commit.date)}
          </p>
        </div>
      </div>
      <div className="flex space-x-2 items-start">
        <VerifiedDialog>
          <Badge
            variant="outline"
            className="text-blue-600 hover:border-blue-600 py-1 hover:bg-blue-100 hover:cursor-pointer duration-300 transition-colors rounded-full"
          >
            {commit.verified ? "Verified" : "Unverified"}
          </Badge>
        </VerifiedDialog>
        <TooltipWrapper content="View commit details">
          <Button asChild className="w-16 h-7 text-xs" variant="outline">
            <a href={`${import.meta.env.VITE_REPO_URL}/commit/${commit.sha}`}>
              {commit.sha.substring(0, 7)}
            </a>
          </Button>
        </TooltipWrapper>
        <TooltipWrapper content="Browse the repository at this point in the history">
          <Button className="h-7" size="icon" variant="outline" asChild>
            <a href={`${import.meta.env.VITE_REPO_URL}/tree/${commit.sha}`}>
              <Code className="w-6 h-6 stroke-1" />
            </a>
          </Button>
        </TooltipWrapper>
      </div>
    </div>
  );
};

export const VerifiedDialog: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="grid gap-4 py-4">
          <BadgeCheck />
          <p>
            This commit was created on GitHub.com and signed with GitHub&apos;s
            verified signature.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
