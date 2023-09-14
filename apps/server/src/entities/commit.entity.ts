export type Commit = {
  sha: string;
  commit: {
    author: {
      name: string;
      date: string;
    };
  };
  message: string;
  verification: {
    verified: boolean;
  };
  html_url: string;
};
