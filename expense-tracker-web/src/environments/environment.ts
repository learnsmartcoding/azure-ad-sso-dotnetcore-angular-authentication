// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { EnvironmentConfiguration } from "../app/models/environment-configuration";


const serverUrl='https://localhost:44351/api';


// The list of file replacements can be found in `angular.json`.
export const environment: EnvironmentConfiguration = {
  env_name: 'dev',
  production: true,
  apiUrl: serverUrl,
  apiEndpoints: {
    userProfile:'user-profiles'
  },
  adConfig: {
    clientId: 'c6943290-87e7-4060-8cc2-2557ae153fb4',
    readScopeUrl: 'api://89be5bdf-cbf3-48f3-949a-bf9e7cd9cfbe/Expense.Read',
    writeScopeUrl: 'api://89be5bdf-cbf3-48f3-949a-bf9e7cd9cfbe/Expense.Write',
    scopeUrls: [
      'api://89be5bdf-cbf3-48f3-949a-bf9e7cd9cfbe/Expense.Read',
      'api://89be5bdf-cbf3-48f3-949a-bf9e7cd9cfbe/Expense.Write'
    ],
    apiEndpointUrl: 'https://localhost:44351/api',
    tenantId: "ebd39e7e-31bc-4973-bc73-fef8e127d164"
  },
  cacheTimeInMinutes: 30,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

// run this app in 4200 port

/*
azure ad user credentials, it will not work after 15 days of I created, comment in channel to send you new one

karthik@learnsmartcodinggmail.onmicrosoft.com or kannan@learnsmartcodinggmail.onmicrosoft.com
LSCamu745406
*/