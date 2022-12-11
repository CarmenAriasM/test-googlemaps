// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  apiUrl: "http://127.0.0.1:8000/api/" //Change apiurl for the url of your API.
};
/* 

If you want to call that API url in any other file within the project, add the following at the start of the file:

If you want to use this API url in other files within your project, add the following at the start of the file:

    import { environment } from "./environment/environment.ts" // Change this to your file location

    //Whenever you want to call it, use environment.apiUrl, so for example:

    console.log("Current API URL:", enviroment.apiUrl); 
*/



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
