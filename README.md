# WAC Countdown

## Requirements

You'll need to have the following items installed before continuing.

  * [Ruby](https://www.ruby-lang.org/en/documentation/installation/): Use the installer provided on the website.
  * [Node.js](http://nodejs.org): Use the installer provided on the NodeJS website.
  * [Gulp](http://gruntjs.com/): Run `[sudo] npm install --global gulp`

## Quickstart

Open you terminal, go to the folder: `cd [your_path]/frontend-cubie/`
And then install the dependencies:

```
npm install
bower install
```

While you're working on your project, run:

`gulp` or `gulp serve` (sets up server with live reload) to generate the pages

And you're set!


## Directory Structure

* `src/`: The sources
* `src/index.html`: The content of the homepage
* `src/assets`: Images, fonts, icons...
* `src/scripts`: Javascripts
* `src/styles`: SASS files

* `app/`: The generated pages (overwritten overtime your run gulp)


## How to add an icon?

* Start by creating or choosing a vector icon from the [Entypo library](http://www.entypo.com/)
* Add the SVG-formatted icon in `src/assets/icons/`
* Link your icon in the html:

```
<svg class="icon-{name_of_you_icon}"><use xlink:href="#icon-{name_of_you_icon}"></use></svg>
```

* Run `gulp` again

## How to set the countdown Date
Open main.js and find the line where it says "// Init target date to count down to". Change the date accordingly

```
this.target = moment('2017-03-01');
```

## Author

WAC Countdown was made by [Joshua Schär](https://github.com/joshuaschaer) for [We Are Cube.³](https://github.com/wearecube). Credits to [Mayra Overney](http://www.fishatwork.ch/) for the Design and [Mathis Hofer](https://github.com/hupf) for tweaking the countdown script with momentjs.

## License

WAC Countdown is licensed under the Apache 2.0 License
