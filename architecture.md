# Core Code Structure

This is an overview of the core code used by the game and tools.

## Screen

There is a screen module which controls:

- canvas size
- camera position and scaling
- screen shaking
- conversion between our space and screen coordinates

## Assets

There is an assets module which contains:

- list of asset file locations and types
- logic for building usable structures from assets
- logic for loading all assets at once

## Executive

There is an executive module that controls:

- main loop
- variable update rate
- computed framerate display
- execution speed for slowmo and pausing

## Scenes

A scene is any object that can be plugged into the main loop as a unit of
execution.  It has the following functions:

- init (called when we switch to this scene)
- update (called every frame with the time elapsed since last frame)
- draw (called every frame with canvas context)
- cleanup (called when we switch to another scene)

## Sprites

## Input

There is an input module which provides:

- touch/mouse events in screen or space coordinates

## Settings

There is a settings module that provides:

- access to all scores/settings variables
- persistence of all scores/settings variables
