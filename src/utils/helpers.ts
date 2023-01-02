import { conceptArticles, conceptsRoutes } from './constants/concepts';
import { pathsToRedirect } from './constants/constants';
import { docsArticles, docsRoutes } from './constants/documentstion';
import { referenceArticles, referenceRoutes } from './constants/reference';

export const getHeadersCount = (str: string) => {
  const rule = /(<h2.*?>.*?<\/h2>)/gm;
  let res: string[] | null = null;
  res = str.match(rule);
  return res;
};

export const getHeaders = (str: string) => {
  const rule = /#{2}.+/gm;
  let res = str.match(rule)?.map((item) => item.slice(3));
  return res;
};

export const getInitialExpanded = (pathname: string) => {
  let currentArticles = docsArticles;
  if (Object.values(conceptsRoutes).some((item) => item === pathname))
    currentArticles = conceptArticles;
  if (Object.values(referenceRoutes).some((item) => item === pathname))
    currentArticles = referenceArticles;
  const selected = currentArticles?.find(
    (item: any) =>
      item?.innerArticles &&
      item.innerArticles.some((el: any) => el.route === pathname)
  );
  return selected?.id || '';
};

export const firstLetterUppercase = (str: string) =>
  str?.[0]?.toUpperCase() + str?.slice(1)?.toLowerCase() || '';

export const getActivePage = (pathname: string) => {
  if (Object.values(docsRoutes).some((item) => item === pathname))
    return 'documentation';
  if (Object.values(conceptsRoutes).some((item) => item === pathname))
    return 'concepts';
  if (Object.values(referenceRoutes).some((item) => item === pathname))
    return 'reference';
  return 'help';
};

export const getRedirect = (path: string) => {
  switch (path) {
    case pathsToRedirect.reference:
      return referenceRoutes.overview;
    case pathsToRedirect.types:
      return docsRoutes.functionTypes;
    case pathsToRedirect.accountBilling:
      return docsRoutes.accountBilling;
    default:
      return path;
  }
};
