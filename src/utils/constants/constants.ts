export const desktopWidth = 1200;

export const ALL_FILTERS_ID = 'all';

export const postRequestData = {
  includes: ['authors', 'tags'],
  fields: ['id', 'feature_image', 'title', 'published_at', 'slug'],
};

export const subscriptionProcessStatuses = {
  sending: 'sending',
  error: 'error',
  success: 'success',
};

export const pathsToRedirect = {
  reference: '../reference/index.md',
  types: './types.md',
  accountBilling: '../account/billing.md',
};
