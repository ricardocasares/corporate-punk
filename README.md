# corporate punk
## Self-hosted image placeholder server

[![Greenkeeper badge](https://badges.greenkeeper.io/ricardocasares/corporate-punk.svg)](https://greenkeeper.io/)

Sometimes you need a placeholder server with your own stock or corporate images.
Punk allows you to throw a bunch of images inside a folder and run the server

### Installation
Make sure you have `imagemagick` installed in your OS then:

`npm i -g corporate-punk`

### Usage

To run the server you can provide your own directories from where to pull the images.

#### Server parameters

parameter | description	| example
----------|-------------|---------
--images | Path to images folder | `punk --images='/path/to/images'`
--cache | Path to processed images cache folder | `punk --cache='/path/to/cache'`
--port | Port to listen on | `punk --port=3000`

#### URL parameters

parameter | description	| example
----------|-------------|---------
resize | Resizes the final image by given width and height | `/hold?resize=400x400`
crop | Crops the final image by given width and height | `/hold?crop=200x250`
quality | Sets the image quality: [1-100] | `/hold?quality=25`
image | Select an specific image, if not present, a random image will be returned | `/hold?image=calaveras.jpg`

#### Clearing the cache
Sometimes you might want to clear the cache for different reasons, in that case just go to the UI and hit the *Clear cache* button.
Note this action is publicly available so far, probably in the future will be password protected.

### Disclaimer
This app is just passing query parameters directly to an `imagemagick` wrapper, without any kind of sanity check, **bad shit can happen**.

### Todo
Sanitize query strings