export const conceptsRoutes = {
  overview: '/docs/concepts',
  network: '/docs/network',
  networkContributors: '/docs/network/contributors',
  networkOrchestrators: '/docs/network/orchestrators',
  networkWorkers: '/docs/network/workers',
  runtimeEnvironment: '/docs/runtime-environment',
  runtimeEnvironmentOverview: '/docs/runtime-environment',
  runtimeEnvironmentSecurity:
    '/docs/runtime-environment/runtime-environment-security',
};

export const conceptsArticlesId = {
  overview: 'overview',
  network: 'network',
  networkOverview: 'network_overview',
  networkContributors: 'network_contributors',
  networkOrchestrators: 'network_orchestrators',
  networkWorkers: 'network_workers',
  runtimeEnvironment: 'runtime-environment',
  runtimeEnvironmentOverview: 'runtime-environment-overview',
  runtimeEnvironmentSecurity: 'runtime-environment-security',
};

export const conceptArticles = [
  {
    id: conceptsArticlesId.overview,
    label: 'Overview',
    innerArticles: null,
    route: conceptsRoutes.overview,
  },
  {
    id: conceptsArticlesId.network,
    label: 'Network',
    innerArticles: [
      {
        id: conceptsArticlesId.networkOverview,
        label: 'Overview',
        route: conceptsRoutes.network,
      },
      {
        id: conceptsArticlesId.networkContributors,
        label: 'Contributors',
        route: conceptsRoutes.networkContributors,
      },
      {
        id: conceptsArticlesId.networkOrchestrators,
        label: 'Orchestrators',
        route: conceptsRoutes.networkOrchestrators,
      },
      {
        id: conceptsArticlesId.networkWorkers,
        label: 'Workers',
        route: conceptsRoutes.networkWorkers,
      },
    ],
  },
  {
    id: conceptsArticlesId.runtimeEnvironment,
    label: 'Runtime Environment',
    innerArticles: [
      {
        id: conceptsArticlesId.runtimeEnvironment,
        label: 'Overview',
        route: conceptsRoutes.runtimeEnvironmentOverview,
      },
      {
        id: conceptsArticlesId.runtimeEnvironmentSecurity,
        label: 'Runtime Environment Security',
        route: conceptsRoutes.runtimeEnvironmentSecurity,
      },
    ],
  },
];
