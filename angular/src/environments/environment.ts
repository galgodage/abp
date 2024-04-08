import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'Test',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44323/',
    redirectUri: baseUrl,
    clientId: 'Test_App',
    responseType: 'code',
    scope: 'offline_access Test',
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44323/',
      rootNamespace: 'Lakmal.Test',
    },
  },
} as Environment;
