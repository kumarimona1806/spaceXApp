# Objectives
  * Creating an Angular application to fetch record of spaceX programs and provide an user friendly user interface.

# Target Audience
  Developers

# Version History [Change, Version, Date(DD-MM-YYYY), Author, Email] 
  * Initial Version/0.1/25-10-2020/Mona Kumari/kumarimona1806@gmail.com

# Prerequisite tools/software used in this project to run and deploy

* Angular CLI(v9.1.9) commond to install `npm install -g @angular/cli`
* Node Js(v12.11.1)
* Source Code Management  `GIT`
* Hosting platform  `Heroku`                            


# Repository
  
  Code is available on github at `https://github.com/kumarimona1806/spaceXApp/tree/master` location. To clone thisproject Go to terminal window use `git clone {{repository path}}`.

## Development server

To Run on local `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

To make a build Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
 
## Server Side Rendering
 * To add SSR in code use `ng add @nguniversal/express-engine`
 * For build `npm run build:ssr` update in package.json
 * For serve `npm run serve:ssr` update in package.json

## Live URL
 I have used `heroku` hosting platform for deployement.
 Go to browser then  type `https://sapce-x-ssr.herokuapp.com/`
