import { DataItem } from "./data-item";

export type Commit = {
  sha: string;
  author: string;
  date: string;
  message: string;
  verified: boolean;
  html_url: string;
  avatar_url: string;
};

export function DataList({data}: {data: Commit[]}) {

  return (
    <div className="w-full">
      <div className="w-10/12 rounded-md border mx-auto">
            {data.map((data) => (
              <div className="w-full flex flex-col items-center first:border-b-0 last:border-b-0" key={data.sha}>
                <DataItem commit={data} />
              </div>
            ))}
      </div>
    </div>
  );
}
