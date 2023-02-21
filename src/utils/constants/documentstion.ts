export const docsRoutes = {
  overview: '/overview',
  faqGeneral: '/faq',
  faqNetwork: '/faq/network',
  faqSecurity: '/faq/security',
  faqFunctions: '/faq/function',
  faqAccountBilling: '/faq/account-and-billing',
  functionGeneral: '/functions',
  functionQuickstart: '/functions/quickstart',
  functionTypes: '/functions/types',
  functionExtensions: '/functions/extensions',
  functionComposability: '/functions/composability',
  functionPublish: '/functions/publish',
  cliOverview: '/cli',
  accountOverview: '/account',
  accountBilling: '/account/billing',
};

export const docsArticlesId = {
  overview: 'overview',
  faq: 'faq',
  faqGeneral: 'faq_general',
  faqNetwork: 'faq_network',
  faqSecurity: 'faq_security',
  faqFunctions: 'faq_functions',
  faqAccountBilling: 'faq_account_billing',
  functions: 'functions',
  functionsGeneral: 'functions_general',
  functionsQuickstart: 'functions_quickstart',
  functionsFunctionTypes: 'functions_function_types',
  functionsExtensions: 'functions_extensions',
  functionsComposability: 'functions_composability',
  functionsPublish: 'functions_publish',
  account: 'account',
  accountOverview: 'account_overview',
  accountBilling: 'account_billing',
  cli: 'cli',
  cliOverview: 'cli_overview',
};

export const docsArticles = [
  {
    id: docsArticlesId.overview,
    label: 'Overview',
    innerArticles: null,
    route: docsRoutes.overview,
  },
  {
    id: docsArticlesId.faq,
    label: 'FAQ',
    innerArticles: [
      {
        id: docsArticlesId.faqGeneral,
        label: 'General',
        route: docsRoutes.faqGeneral,
      },
      {
        id: docsArticlesId.faqNetwork,
        label: 'Network',
        route: docsRoutes.faqNetwork,
      },
      {
        id: docsArticlesId.faqSecurity,
        label: 'Security',
        route: docsRoutes.faqSecurity,
      },
      {
        id: docsArticlesId.faqFunctions,
        label: 'Functions',
        route: docsRoutes.faqFunctions,
      },
      {
        id: docsArticlesId.faqAccountBilling,
        label: 'Account and Billing',
        route: docsRoutes.faqAccountBilling,
      },
    ],
  },
  {
    id: docsArticlesId.functions,
    label: 'Functions',
    innerArticles: [
      {
        id: docsArticlesId.functionsGeneral,
        label: 'General',
        route: docsRoutes.functionGeneral,
      },
      {
        id: docsArticlesId.functionsQuickstart,
        label: 'Quickstart',
        route: docsRoutes.functionQuickstart,
      },
      {
        id: docsArticlesId.functionsFunctionTypes,
        label: 'Function Types',
        route: docsRoutes.functionTypes,
      },
      {
        id: docsArticlesId.functionsExtensions,
        label: 'Extensions',
        route: docsRoutes.functionExtensions,
      },
      {
        id: docsArticlesId.functionsComposability,
        label: 'Composability',
        route: docsRoutes.functionComposability,
      },
      {
        id: docsArticlesId.functionsPublish,
        label: 'Publish',
        route: docsRoutes.functionPublish,
      },
    ],
  },
  {
    id: docsArticlesId.account,
    label: 'Account',
    innerArticles: [
      {
        id: docsArticlesId.accountOverview,
        label: 'Overview',
        route: docsRoutes.accountOverview,
      },
      {
        id: docsArticlesId.accountBilling,
        label: 'Billing',
        route: docsRoutes.accountBilling,
      },
    ],
  },
  {
    id: docsArticlesId.cli,
    label: 'CLI',
    innerArticles: [
      {
        id: docsArticlesId.cliOverview,
        label: 'Overview',
        route: docsRoutes.cliOverview,
      },
    ],
  },
];
