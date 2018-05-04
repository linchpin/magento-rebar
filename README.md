# Magento 2 Theme by Linchpin is Magento theme scaffold

The project is a grunt-init scaffold *YOU MUST HAVE GRUNT-INIT installed*

In order for this to work properly you will need to clone this repo into your local ```.grunt-init``` folder (typically within your user ```~``` folder if you're on a mac)

The purpose of our version of this project is to act as a small and handy toolbox that contains the essentials needed for a base Magento 2 theme. This theme is meant to be a starting point not a parent theme.

*Please fork, copy, modify, delete, share or do whatever you like with this.*

All contributions are welcome!

## Requirements

*You'll need to have the following items installed before continuing.*
  * [Node.js](http://nodejs.org): Use the installer provided on the NodeJS website.
  * [Gulp](http://gulpjs.com/): Run `[sudo] npm install -g gulp-cli`
  * [Bower](http://bower.io): Run `[sudo] npm install -g bower`
  * [grunt-init](http://gruntjs.com/project-scaffolding): Run `[sudo] npm install -g grunt-init`
  
## Quickstart / Installation

Once grunt-init is installed, place this template (either manually or cloned from github) into your `~/.grunt-init/` directory. It's recommended that you use git to clone this template into that directory, as follows:

### Linux/Mac Users

```
git clone https://github.com/linchpin/magento2-rebar.git ~/.grunt-init/magento-2-theme
```
This will create a folder named 'rebar' within your .grunt-init the name of the folder is utilized later on when using the project scaffold.

### Windows Users

```
git clone https://github.com/linchpin/magento2-rebar.git %USERPROFILE%/.grunt-init/magento-2-theme
```

## Usage

At the command-line, ```cd``` into an empty directory, run the following command and follow the prompts.

```
grunt-init magento-2-theme
```

## Once grunt init completes ##

While you're working on your project you might need to run:

`npm install`

Lastly just run the gulp command

`gulp` You might need to install other dependencies as well. Install them as needed by using `npm install yadda yadda`

**If you're having issues with Gulp after an update, run the following commands in terminal**
```
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
```