# MERN-gen

MERN generator is a package that can generate backend files for express api with some templates of frontend react js.

    To install this package make sure that you have already initialized your project (npm init) and you are in repository app.

1 - Install package:

$ npm install mern-gen

2 - Import express api

$ npx create-api

#OR:

$ npx create-template

- choose express api it's ready to use.
- Jump to backend folder ($ cd backend)
=> Now you can generate MRC files (Model/ Route/ Controller)

2 - To generate Model file:

$ npx create-model

=> then type the name of your file.
- NB: The package will generate controllers, Models and Routes folders if they not exist!.

3 - To generate controller file:

$ npx create-controller

=> then type the name of your file.

4 - To generate Route file:

$ npx create-route

=> then type the name of your file.

5 - To generate all files:

$ npx create-mrc

=> then type the name of your file.
You can also install the package globaly:

$ npm i -g mern-gen
You will be able to use direct command:

1 - for express api:

$ create-api

2 - for backend files:

$ create-model

$ create-controller

$ create-route

$ create-mrc
