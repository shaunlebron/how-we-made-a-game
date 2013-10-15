# Core Code Structure

This is an overview of the core architecture for the code that runs the game
and tools.

## File Overview

There are two types of files that comprise the running "programs" for our game
and tools.  There are the __Javascript__ files that contain the logic that runs
everything, and the __HTML__ files that combine the javascript files with a
visual interface to run them.

### Javascript Files

The source code for the game and tools is written in javascript.  The scope of
all the code is kept inside a `Ptero` namespace.  The code is sectioned into
different files, with lowercase names, in the "src/" directory.

For the most part, the file names reflect the name of the main object it
contains.  For example:

* "assets.js" contains the `Ptero.assets` object
* "scene_menu.js" contains the `Ptero.scene_menu` object.
* "billboard.js" contains the `Ptero.Billboard` object.

But sometimes, the file name represents a logical grouping of objects. For
example:

* "sprites.js" contains all sprite-related objects `Ptero.VectorSprite`,
  `Ptero.SpriteFont`, `Ptero.Sprite`, `Ptero.SpriteTable`, `Ptero.SpriteMosaic`,
  `Ptero.deferredSprites`.
* "interp.js" contains all interpolation functions `Ptero.makeInterp`, `Ptero.makeHermiteInterp`, etc.

### HTML Files


## Screen

## Asset-Loading

## Executive

## Scenes

## Sprites

## Input

## Settings
