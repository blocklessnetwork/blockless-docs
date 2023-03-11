import { DocSearch } from "@docsearch/react";
// import '@docsearch/css'
import "./style/_variables.css";
import "./style/button.css";
import "./style/modal.css";

const Index = () => {
  return (
    <DocSearch
      appId="TVAJ97SI13"
      indexName="blockless"
      apiKey="343ef034663c58773db97ab823982092"
    />
  );
};

export default Index;
