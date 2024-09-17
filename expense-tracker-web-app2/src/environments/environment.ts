// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { EnvironmentConfiguration } from "../app/models/environment-configuration";


const serverUrl='https://localhost:40351/api';


// The list of file replacements can be found in `angular.json`.
export const environment: EnvironmentConfiguration = {
  env_name: 'dev',
  production: true,
  apiUrl: serverUrl,
  apiEndpoints: {
    userProfile:'user-profiles'
  },
  adConfig: {
    clientId: 'c0492873-cdf0-409d-8035-dea3aa764b00',
    readScopeUrl: 'api://25afe139-c569-4636-879c-2f81d8ff4468/Expense.Read',
    writeScopeUrl: 'api://25afe139-c569-4636-879c-2f81d8ff4468/Expense.Write',
    scopeUrls: [
      'api://25afe139-c569-4636-879c-2f81d8ff4468/Expense.Read',
      'api://25afe139-c569-4636-879c-2f81d8ff4468/Expense.Write'
    ],
    apiEndpointUrl: 'https://localhost:40351/api',
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


// run this app in 4300 port. ng serve --port 4300
/*
azure ad user credentials, it will not work after 15 days of I created, comment in channel to send you new one

karthik@learnsmartcodinggmail.onmicrosoft.com or kannan@learnsmartcodinggmail.onmicrosoft.com
LSCamu745406


Roles to add in manifest

	{
			"allowedMemberTypes": [
				"User"
			],
			"description": "User role for accessing the application",
			"displayName": "User",
			"id": "8c8694bd-8e25-4d57-9656-66122cbf8e68",
			"isEnabled": true,
			"origin": "Application",
			"value": "User"
		},
		{
			"allowedMemberTypes": [
				"User"
			],
			"description": "Admin role for managing the application",
			"displayName": "Admin",
			"id": "ee4b3a10-2388-44b6-8d5f-134939288551",
			"isEnabled": true,
			"origin": "Application",
			"value": "Admin"
		}
*/