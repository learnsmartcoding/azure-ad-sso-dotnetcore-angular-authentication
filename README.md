# Azure AD SSO with .NET Core 8 Web API & Angular 18 - Authentication Sample

This repository contains a sample project demonstrating the implementation of **Azure Active Directory (Azure AD)** for authentication and **Single Sign-On (SSO)** in two separate .NET Core 8 Web API and Angular 18 applications. The project is split into two sets:

- **Set 1**:
  - `expense-tracker-web` (Angular 18 Frontend)
  - `expense-tracker-web-api` (.NET Core 8 Web API Backend)

- **Set 2**:
  - `expense-tracker-web-app2` (Angular 18 Frontend)
  - `expense-tracker-web-api-app2` (.NET Core 8 Web API Backend)

## Features
- Azure AD Authentication via **MSAL.js (Microsoft Authentication Library)**.
- Single Sign-On (SSO) between two separate Angular/ASP.NET Core applications.
- Secure access to APIs using **JWT tokens** issued by Azure AD.

## Prerequisites
1. **Node.js** (for Angular apps)
2. **.NET Core 8 SDK** (for Web API projects)
3. **Azure AD Tenant** (configured for both applications)
4. **MSAL.js library** configured for Angular authentication

## How to Get Started

### 1. Clone the Repository
```bash
git clone https://github.com/learnsmartcoding/azure-ad-sso-dotnetcore-angular-authentication.git
cd azure-ad-sso-dotnetcore-angular-authentication
```
### 2. Navigate to Angular app and perform npm install
```
npm install
```

### 3. Run Angular App from expense-tracker-web with
```
ng serve --port 4200
```

### 4. Run Angular App from expense-tracker-web-app2 with
```
ng serve --port 4300
```

### 5. For Web API project to run follow the steps
- There is a database script named "ExpenseTrackingApp.sql". make sure you run this database script and create the database in local

### Video Walkthrough : Azure AD + SSO (With 2 Applications)
For a detailed step-by-step guide, please refer to the video tutorial:  
**[Azure AD Authentication & SSO with .NET Core 8 & Angular 18](https://www.youtube.com/watch?v=SB1_zI11REI)**

### Video Walkthrough : Azure AD Roles & Security Groups | Setup & Integration for .NET Core API & Angular

In the JSON manifest, locate the appRoles property and add the roles you want. 

For a detailed step-by-step guide, please refer to the video tutorial:  
**[Azure AD Roles & Security Groups | Setup & Integration for .NET Core API & Angular](https://www.youtube.com/watch?v=VLbfh_kDwG4)**

Here is an example of an admin role:
```
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
    ```

