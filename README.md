# A Portfolio Template in ReactJS

A ReactJS app implementing a single-page portfolio website for showcasing categorized creative projects. Uses sample project and category metadata read dynamically from static JSON data files in lieu of API endpoints. Intended as a sample template to be further customized.

Live Demo: [https://www.garysmith.ca/demos/react-portfolio/](https://www.garysmith.ca/demos/react-portfolio/)

<a href="https://www.garysmith.ca/demos/react-portfolio/" target="_blank"><img src="https://www.garysmith.ca/assets/react-portfolio-screengrab.jpg" /></a>

# Requirements

This project has been tested with the following stack:

- Node 16.10.0
- npm 7.24.1
- npx 7.24.1


# Development & Test environment

To run this application on your local command line for testing or development:

1. `git clone https://github.com/garyesmith/react-porfolio.git`
2. `cd react-portfolio`
3. `npm install`
4. `npm start`

Then visit `http://localhost:3000/demo/react-portfolio` in your browser (if it does not open automatically)


# Production deployment

1. Edit `package.json` and set the `homepage` value to be the path where you will host the app inside your webserver docroot.
2. Run `npm run build` on the command line from inside the project folder.
3. FTP or push the contents of the resulting `/source` folder to  your webserver docroot, at the folder location specified in step 1, above.
4. In a browser, open the URL that corresponds to the location where you have deployed the app.


# Content customization

The sample demo reads configuration values, categories and project details from static JSON files included with this repository. On a production site, it should be straightforward to change the fetch calls in `App.js` to instead read data from API endpoints that return JSON in the correct format.

### Config data

The file `/data/config.json` defines a single JSON object describing the overall configuration of the app, as in the following example:
```
{
    "siteName": "React Portfolio",
    "siteDescription": "A project portfolio template built with React",
    "siteIntroduction": "<b>Welcome!</b> Here might be some text explaining who you are and what sorts of projects you are showcasing in this porfolio. Lorem ipsum dolor sit amet, lorem ipsum.",
    "footerText": "Gary E. Smith."
}
```

The configuration object must specify:
- A `siteName` string containing the name of the portfolio site
- A `siteDescription` string containing a short descrption of the site
- An optional `siteIntroduction` string of HTML to display above the main project index
- An `footerText` string specifying text to display after the copyright year in the footer

### Categories data

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
- a unique `id` string
- a descriptive `name` string for the category, which will appear in the navbar and subheadings.
- a URL-friendly `tag` that contains only lowercase alphanumeric characters and hyphens, which will appear in the URL hash.

### Projects data

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
- a unique `id` string
- a descriptive `title` string
- a URL-friendly `tag` that contains only lowercase alphanumeric characters and hyphens
- a `category` that matches one `id` field in the `/data/categories.json` file, as described above
- a `image` string that matches the name of a file in the `/src/images` folder
- a `description` string that provides a short summary of the project
- a `body` string containing HTML that describes the project in detail
