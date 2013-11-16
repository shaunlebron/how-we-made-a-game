# Core Code Structure

This is an overview of the core code used by the game and tools.

## Main

There is a "main" module for the game and each tool that coordinates modules
for initialization:

- initializes the screen
- starts the loading screen
- starts loading all assets
- triggers initialization events and starts executive when assets are loaded

## Screen

There is a screen module which controls:

- screen resolution
- camera offset and scale
- screen shaking
- conversion between our space and screen coordinates

## Assets

There is an assets module which contains:

- list of asset file paths and types
- logic for building game structures from assets
- logic for loading all assets at once

## Executive

There is an executive module that controls:

- the main loop
- variable update rate
- display of the computed framerate
- execution speed for slowmo and pausing

## Scenes

A scene is any object that can be plugged into the main loop as a unit of
execution.  It has the following functions:

- init (called when we switch to this scene)
- update (called every frame with the time elapsed since last frame)
- draw (called every frame with canvas context)
- cleanup (called when we switch to another scene)

## Sprites

There are various sprite classes which provide structures for:

- atlases ("packed" & "table" versions)
- bitmap fonts
- vector sprites
- z-sorting for correct drawing order

## Input

There is an input module which provides:

- touch/mouse events in screen or space coordinates

## Settings

There is a settings module that provides:

- access to all scores/settings variables
- persistence of all scores/settings variables
