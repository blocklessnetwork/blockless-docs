export const referenceRoutes = {
  overview: '/docs/reference',
  glossariesOverview: '/docs/glossaries',
  glossariesNetwork: '/docs/glossaries/network-platforms-and-user-groups',
  glossariesFunctions: '/docs/glossaries/functions',
  sdkOverview: '/docs/blockless-sdk',
  sdkMemory: '/docs/blockless-sdk/memory',
  sdkFile: '/docs/blockless-sdk/file',
  sdkHttp: '/docs/blockless-sdk/http',
  sdkIpfs: '/docs/blockless-sdk/ipfs',
  sdkS3: '/docs/blockless-sdk/s3',
};

export const referenceArticlesId = {
  overview: 'overview',
  glossaries: 'glossaries',
  glossariesOverview: 'glossaries_overview',
  glossariesNetwork: 'glossaries_network_platforms_and_user_groups',
  glossariesFunctions: 'glossaries_functions',
  sdk: 'sdk',
  sdkOverview: 'sdk_overview',
  sdkMemory: 'sdk_memory',
  sdkFile: 'sdk_file',
  sdkHttp: 'sdk_http',
  sdkIpfs: 'sdk_ipfs',
  sdkS3: 'sdk_s3',
};

export const referenceArticles = [
  {
    id: referenceArticlesId.overview,
    label: 'Overview',
    innerArticles: null,
    route: referenceRoutes.overview,
  },
  {
    id: referenceArticlesId.glossaries,
    label: 'Glossaries',
    innerArticles: [
      {
        id: referenceArticlesId.glossariesOverview,
        label: 'Overview',
        route: referenceRoutes.glossariesOverview,
      },
      {
        id: referenceArticlesId.glossariesNetwork,
        label: 'Network, Platforms, and User Groups Glossaries',
        route: referenceRoutes.glossariesNetwork,
      },
      {
        id: referenceArticlesId.glossariesFunctions,
        label: 'Functions Glossaries',
        route: referenceRoutes.glossariesFunctions,
      },
    ],
  },
  {
    id: referenceArticlesId.sdk,
    label: 'Blockless SDK',
    innerArticles: [
      {
        id: referenceArticlesId.sdkOverview,
        label: 'Overview',
        route: referenceRoutes.sdkOverview,
      },
      {
        id: referenceArticlesId.sdkMemory,
        label: 'Memory I/O',
        route: referenceRoutes.sdkMemory,
      },
      {
        id: referenceArticlesId.sdkFile,
        label: 'File I/o',
        route: referenceRoutes.sdkFile,
      },
      {
        id: referenceArticlesId.sdkHttp,
        label: 'HTTP',
        route: referenceRoutes.sdkHttp,
      },
      {
        id: referenceArticlesId.sdkIpfs,
        label: 'IPFS',
        route: referenceRoutes.sdkIpfs,
      },
      {
        id: referenceArticlesId.sdkS3,
        label: 'S3',
        route: referenceRoutes.sdkS3,
      },
    ],
  },
];
