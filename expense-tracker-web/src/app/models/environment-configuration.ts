export interface EnvironmentConfiguration {
    env_name: string;
    production: boolean;
    apiUrl: string;
    apiEndpoints: {
        userProfile: string;      
    },
    adConfig: {
        clientId: string;
        tenantId:string;
        readScopeUrl: string;
        scopeUrls:string[];
        writeScopeUrl: string;
        apiEndpointUrl: string;
    }
    cacheTimeInMinutes: number;
}