# A Portfolio Template in ReactJS

A ReactJS implementation of a single-page portfolio website for showcasing categorized creative projects. Intended as an base template for future adaptation.

Live Demo: [https://www.garysmith.ca/demos/react-portfolio/](https://www.garysmith.ca/demos/react-portfolio/)

<a href="https://www.garysmith.ca/demos/react-portfolio/" target="_blank"><img src="https://www.garysmith.ca/assets/react-portfolio-screengrab.jpg" /></a>

## Requirements

This project has been tested with the following stack:

- Node 16.10.0
- npm 7.24.1
- npx 7.24.1


## Development environment

With the above dependencies install, you can run this application on your local command line for testing or development as follows:

1. `git clone https://github.com/garyesmith/react-portfolio.git`
2. `cd react-portfolio`
3. `npm install`
4. `npm start`

Then visit `http://localhost:3000/demos/react-portfolio` in your browser (if it does not open automatically)


## Production deployment

1. Edit `package.json` and set the `homepage` value to be the path where you will host the app inside your webserver docroot.
2. Run `npm run build` on the command line from inside the project folder.
3. FTP or push the contents of the resulting `/source` folder to  your webserver docroot, at the folder location specified in step 1, above.
4. In a browser, open the URL that corresponds to the location where you have deployed the app.


## Content customization

The sample demo reads configuration values, categories and project details from static JSON files included with this repository. On a production site, it should be straightforward to change the fetch calls in `App.js` to instead read data from API endpoints that return JSON in the correct format.

To change the logo image displayed in the header, replace the default image at `/src/images/logo.png` with your preferred image.

#### Config data

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

#### Categories data

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

#### Projects data

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

## Implementation

The site is implemented as a standard ReactJS application with seven components. The *App* component files are located in the document root; all the other component files are located within the `/components` subfolder.

### App

This component is at the top-level of the component hierarchy and is the parent of all other components in this app. It handles the following tasks:

- Reads and passes static data from the `config.json`, `projects.json` and `categories.json` data files discussed in the *Config data* section, above.

- Defines two routes using the [BrowserRouter library](https://v5.reactrouter.com/web/api/BrowserRouter) to output different content for the site index page (the `/` route) and the project detail pages (the `/project/:tag` route).

- Returns JSX to initiate rendering of all children elements, including the header, navbar, body content, and footer, depending on the route.

### Footer

Returns JSX to define HTML for the footer, populating it with the current year and the `footerText` value defined in `config.json`. 

If the `showSourceCodeLink` in `config.json` is set to `true`, an HTML link to this repository is also included.

### Header

Returns JSX to define HTML for the header, populating it with the `siteName` and `siteDescription` values defined in `config.json`.

### Navbar

Returns JSX to define HTML for the site navigation bar, populating it with category names defined in `categories.json` and setting the background color to `navColor` as defined in `config.json`.

The navigation links render as URL hashes, and the component automatically scrolls the browser window to the selected subheading.

### ProjectCategory

Returns JSX to define HTML to display related project summaries beneath a category subheading.

The parent *App* component maps through the categories and outputs instances of the *ProjectCategory* component by passing the category's `id`, `tag` and `name`, along with the projects and categories defined in the configuration files.

The `ProjectCategory` component outputs the correct category heading, and then loops to return instances of the `Project` component for all projects in that category.

### Project

Returns JSX to define HTML to display an summary box for a single project. The summary box outputs the project's `image`, `title` and `description` and links to the `ProjectDetails` component.

### ProjectDetails

Returns JSX to define HTML to display the full details of a single project, as defined in the `projects.json` configuration file. The *BrowserRouter* route defined in the *App* component displays this component under its own URL path, uniquely identifying it by the project's `tag` property. The component then outputs the `image`, `title`, and `body` of the project.