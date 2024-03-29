# A Portfolio Template in ReactJS

A ReactJS implementation of a single-page portfolio website for showcasing categorized creative projects. Intended as an base template for future adaptation.

Live Demo: [https://www.garysmith.ca/demos/react-portfolio/](https://www.garysmith.ca/demos/react-portfolio/)

<a href="https://www.garysmith.ca/demos/react-portfolio/" target="_blank"><img src="https://garysmith.ca/demos/demo-react-portfolio-screengrab.jpg" /></a>

## 1.0 Requirements

This project has been tested with the following stack:

- Node 16.10.0
- npm 7.24.1
- npx 7.24.1


## 2.0 Development environment

With the above dependencies install, you can run this application on your local command line for testing or development as follows:

1. `git clone https://github.com/garyesmith/react-portfolio.git`
2. `cd react-portfolio`
3. `npm install`
4. `npm start`

Then visit `http://localhost:3000/demos/react-portfolio` in your browser (if it does not open automatically)

## 3.0 Integrated Tests

The [Jest](https://jestjs.io/) Javascript Testing Framework has been used to create basic unit tests for most components in this application. Test cases are located in the files named with the convention `Component.test.js` in the `/src/components` folder, where `Component.js` defines the component to be tested.

To run all test cases, execute the following command from within the project folder:

`npm test`

To run tests for a single component, specify the name of the component's test file, for example:

`npm test Component.test.js`

After execution, the results (with passed cases in green and failed cases in red) will be output to the console, along with explanations for any failures. When components are updated in ways that change their output, these test cases will likely need to be updated as well.


## 4.0 Production deployment

1. Edit `package.json` and set the `homepage` value to be the path where you will host the app inside your webserver docroot.
2. Run `npm run build` on the command line from inside the project folder.
3. FTP or push the contents of the resulting `/source` folder to  your webserver docroot, at the folder location specified in step 1, above.
4. In a browser, open the URL that corresponds to the location where you have deployed the app.


## 5.0 Auth0 configuration (optional)

This application includes a placeholder administration route at `/admin`, intended to eventually house tools for creating, editing, and deleting content on the portfolio.

Access to this route is protected by [Auth0](https://auth0.com/) authentication. To make this route available, you will need to perform the following configuration:

**On the Auth0 website:**
- Register a free account at [Auth0](https://auth0.com/).
- Create an application: choose type *Single Page Web Application* and then *React*.
- Under *Settings* for your application, copy/obtain the *Domain* and *Client ID* values for use below.
- Enter your Portfolio application's domain and/or server paths into the *Allowed Callback URLs*, *Allowed Logout URLs*, and *Allowed Web Origins* boxes. Comma-separate multiple domain paths as necessary. Be sure to include the */admin* route as one of the allowed callbacks. If you are also testing locally, you can add `http://localhost:3000` domain paths here as well.
- Scroll to the bottom of the form and click the `Save Changes` button.

**On your server:**
- Create an `.env` file in the root of your application by copying the provided `.env-sample` file:

  `mv .env-sample .env`

- Edit the `.env` file and paste the *Domain* and *Client ID* values obtained in the Auth0 application form as `REACT_APP_AUTH0_DOMAIN` and `REACT_APP_AUTH0_CLIENT_ID` respectively; then save the file.
- Restart your application with `npm start` to ensure the `.env` changes are applied to the build.
- Open the Portfolio app in a browser, add `/admin` to the end of the URL, and confirm you can log in. If you receive errors, double check that you have the correct *Allowed* URLs in the Auth0 app as described in the previous section.

**Restricting access**

By default, Auth0 will permit anyone with a valid social media account to register and log in to the application. Since this path is intended to be a restricted admin panel, this behaviour is not desired. You can refer to the extensive Auth0 documentation to consider various ways to restrict access, such as using an invite-only setup, or restricting signups using rules or actions.

One quick way to restrict access to a small whitelist of trusted email addresses is to create *Rule* inside the Auth0 control panel under *Auth Pipeline* > *Rules*, [as described here](https://auth0.com/rules/simple-user-whitelist). You might also want to create a *Force email verification* rule for additional security. 


## 6.0 Content customization

The sample demo reads configuration values, categories and project details from static JSON files included with this repository. On a production site, it should be straightforward to change the fetch calls in `App.js` to instead read data from API endpoints that return JSON in the correct format.

To change the logo image displayed in the header, replace the default image at `/src/images/logo.png` with your preferred image.

Colors used for the navigation bar can be customized by assigning valid color values to these SCSS variables defined at the top of the `/components/Navbar.scss` file:

- **$navBackgroundColor**  - The default background color the navbar.
- **$navTextColor**  - The default text color for the navbar links.
- **$navSelectedBackgroundColor** - The background color for the currently active navbar link.
- **$navSelectedTextColor** - The text color for the currently actively navbar link.

#### 6.1 Config data

The file `/data/config.json` defines a single JSON object describing the overall configuration of the app, as in the following example:
```
{
    "siteName": "React Portfolio",
    "siteDescription": "A project portfolio template built with React",
    "siteIntroduction": "<b>Welcome!</b> Here might be some text explaining who you are and what sorts of projects you are showcasing in this porfolio. Lorem ipsum dolor sit amet, lorem ipsum.",
    "footerText": "Gary E. Smith.",
    "showSourceCodeLink": true
}
```

The configuration object must specify:
- A `siteName` string containing the name of the portfolio site.
- A `siteDescription` string containing a short descrption of the site.
- An optional `siteIntroduction` string of HTML to display above the main project index.
- An `footerText` string specifying text to display after the copyright year in the footer.
- A `showSourceCodeLink` boolean value specifying whether to display a link to this GitHub repo in the footer.

#### 6.2 Categories data

The file `/data/categories.json` defines an array of project category objects, with each category containing values defined as in the following example:

```
[
    {
        "id": "1",
        "name": "Web Development",
        "tag": "web-dev"
    }
]
```

There may be any number of categories defined in the array. 

For each category you must specify:
- A unique `id` string.
- A descriptive `name` string for the category, which will appear in the navbar and subheadings.
- A URL-friendly `tag` that contains only lowercase alphanumeric characters and hyphens, which will appear in the URL hash.

#### 6.3 Projects data

The file `/data/projects.json` defines an array of project details, with each project containing values defined as in the following example:

```
[
    {
        "id": "1",
        "title": "My Project",
        "tag": "my-project",
        "category": "1",
        "image": "project-image.png",
        "description": "This is the description of a project.",
        "body": "<p>Lorem ipsum dolor sit amet.</p>"
    }
]
```
There may be any number of projects defined in the array. 

For each project you must specify:
- A unique `id` string.
- A descriptive `title` string.
- A URL-friendly `tag` that contains only lowercase alphanumeric characters and hyphens.
- A `category` that matches one `id` field in the `/data/categories.json` file, as described above.
- An `image` string that matches the name of an image file in the `/src/images` folder.
- A `description` string that provides a short summary of the project.
- A `navBackgroundColor` string that specifies the background color to use for navbar elements. This value should be a valid color definition in CSS, ex. `#4444aa` or `blue`.
- A `body` string containing HTML that describes the project in detail.

## 7.0 Implementation

The site is implemented as a standard ReactJS application with nine functional components. The *App* component files are located in the document root; all the other component files are located within the `/components` subfolder.

### 7.1 App component

This component is at the top-level of the component hierarchy and is the parent of all other components in this app. It handles the following tasks:

- On initial mounting, this component uses the Effect Hook to read static data from the `config.json`, `projects.json` and `categories.json` data files discussed in the *Config data* section, above.

- Using the [BrowserRouter library](https://v5.reactrouter.com/web/api/BrowserRouter), this component defines two routes to output different content for the site index view (via the `/` route) and the project detail view (via the `/project/:tag` route).

- Depending on the route, this component returns JSX to initiate rendering of all children elements, including the header, navbar, body content, and footer.

### 7.2 Footer component

Returns JSX to display the footer, populating it with the current year, as well at the `footerText` value defined in `config.json`. 

If the `showSourceCodeLink` in `config.json` is set to `true`, an HTML link to this repository is also included.

### 7.3 Header component

Returns JSX to display the header, populating it with the `siteName` and `siteDescription` values defined in `config.json`.

### 7.4 Navbar component

Returns JSX to display the site navigation bar, populating it with category names defined in `categories.json`.

Note that this component uses SASS to easily allow the colors of the navbar to be customized (see section 6.0 above for details.)


The navigation links render as URL hashes, and the component automatically scrolls the browser window to the selected subheading.

### 7.5 ProjectCategory component

Returns JSX to display any number of related project summary boxes beneath a category subheading.

The parent *App* component maps through the categories and outputs instances of the *ProjectCategory* component by passing the category's `id`, `tag` and `name`, along with the projects and categories defined in the configuration files.

The `ProjectCategory` component outputs the correct category heading, and then loops to return instances of the `Project` component for all projects in that category.

### 7.6 Project component

Returns JSX to display an summary box for a single project. The summary box outputs the project's `image`, `title` and `description` and links to the `ProjectDetails` component.

### 7.7 ProjectDetails component

Returns JSX to display the full details of a single project, as defined in the `projects.json` configuration file. The *BrowserRouter* route defined in the *App* component displays this component under its own URL path, uniquely identifying it by the project's `tag` property. The component then outputs the `image`, `title`, and `body` of the project.

### 7.8 admin/LoginButton component

Returns JSX to display an [Auth0](https://auth0.com/) *Log in* button, and a *Cancel* button. The *Log in* button initiates a call to Auth0 to request secure login. The *Cancel* button redirect the user to the front page of the application.

When the current user is already logged in, this component does not render any JSX.


### 7.9 admin/AdminContainer component

Returns JSX to display placeholder text to indicate the the current user is successfully logged in with [Auth0](https://auth0.com/). This component will be expanded in the future to provide functionality related to creating, editing and deleting Portfolio content.

When the *Logout* button is clicked, a call to Auth0 is initiated to end the current session, and the user is redirected to the front page of the application.

When the current user is not logged in, this component does not render any JSX.