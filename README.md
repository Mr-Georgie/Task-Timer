# A Task Timer 
A Task Timer App built with ReactJs and Bootstrap

## Preview
![tasker](https://user-images.githubusercontent.com/28518667/128606512-8623ea70-9d6f-42ae-b1a5-3b9c7f6321a4.gif)


## Functionalities
* Similar to a todo list app, user can add and remove individual task.
* Each task is added with a specified duration.
* Total duration of all task are calculated and display in the count-down timer.
* User can click on the start button to start countdown.
* User can also stop timer by clicking on button.
* User can clear all task at once.
* User can delete individual task.

## Bugs
* Negative countdown.
* Not responsive on mobile.
* User should not be able to add task once timer is running.
* As timer runs out, each task should fade out.

#### Want to test locally on your PC?

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

* make sure you're connected to the internet when loading app due to bootstrap cdn

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
