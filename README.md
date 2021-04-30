# The-Daily-Planner-JG
Github repository:https://github.com/JG-77/The-Daily-Planner-JG.git 

Github Pages link:https://jg-77.github.io/The-Daily-Planner-JG/ 

![The Daily Business Planner Homepage](https://user-images.githubusercontent.com/76461629/116637493-f0d91580-a918-11eb-9c90-2857fc1e710f.png)

![The Daily Business Planner Screenshot](https://user-images.githubusercontent.com/76461629/114281240-25c90b00-99f2-11eb-9d5a-aa46edb13631.png)


## Description

This planner application allows for one to plan their day accordingly with standard bussiness hours. The page's header displays a jumbotron that shows the current date and time so one never loses track of the day. The main content of the page shows the standard business hours displayed in time blocks where each hour has its own section to insert and save any text. The 'save' button saves all values typed into the input boxes so that all saved events are not erased. To remove or change any value in the input boxes, simply click the specific input box and type in a new event or delete the text to keep it blank.

## Technologies

### HTML

* Jumbotron header element displaying heading and 'p' tags
* Div element conatiner for time blocks created through JQuery

### CSS

* Combination of standard CSS styling with Bootstrap CSS styling
* Jumbotron, time blocks, and button styling
* Color scheme for time of day color-coding

### JavaScript

* JS powered by JQuery
* Conatins all functions and event listeners

### JQuery

* Creating timeblock elements by appending divs to container
* Added footer element
* Variable object containing array of times (9 a.m.-5 p.m.)
* Loop to create time blocks and styling of elements using Bootstrap classes
* Styling for time blocks
* Added element attributes for input element
* Added individual id attribute to each time block based on the time block hour
* Function to compare the id of each time-block class to current hour and add styling classes based on time
* Created async function to handle run time for block elements and styling
* Function that stores input in local storage
* Click event for saving user input
* Function to display current date and time on jumbotron

### Moment.JS

* Function Displying current date and time
* Variable for the current date and time

### Bootstrap CSS

* Styling to HTML elements through class attributes
* Styling also added through JQuery 
* Styling combined with custom CSS styling

## Contact

Jessie Guadarrama: <jesguadarrama98@gmail.com>

## Licenses

The MIT License (MIT)

Copyright (c) 2011-2018 Twitter, Inc.

Copyright (c) 2011-2018 The Bootstrap Authors

Copyright (c) JS Foundation and other contributors

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
