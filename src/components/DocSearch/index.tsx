import { DocSearch } from "@docsearch/react";

const Index = () => {
  const appId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
  const apiKey=  process.env.NEXT_PUBLIC_SEARCH_API_KEY;
  
  return (
    <DocSearch
        appId={appId as string}
        indexName="blockless"
        apiKey={apiKey as string}
      />
  );
};

export default Index;
