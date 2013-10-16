# File Overview

There are two types of files that comprise the running "programs" for our game
and tools.  There are the __Javascript__ (.js) files that contain the logic
that runs everything, and the __HTML__ (.html) files that include the
javascript files and add visual elements around the page.

![code-overview](img/code-overview.png)

## Javascript Files

The source code for the game and tools is written in javascript.  The scope of
all the code is kept inside a `Ptero` namespace.  The code is sectioned into
different files, with lowercase names, in the "src/" directory.

For the most part, the file names reflect the name of the main object it
contains.  Other times, the file name represents a logical grouping of related
objects.

## HTML Files

HTML files can be considered the runnable programs for the browser.  In them,
they include all the appropriate source files to execute the game or a specific
tool.  The HTML files also define the visual interface outside of the canvas.

![html-overview](img/html-overview.png)

## CocoonJS files

The CocoonJS file can be considered the runnable program for mobile devices
using the CocoonJS Launcher.  It is a single Javascript file- a concatenation of
all the source files referenced by the game's HTML file.

This single Javascript file "cocoon.js" is then placed in a "cocoon.zip" file
together with all the other resources required to run the game (i.e. images,
sounds).  It is this zip file that is fed into CocoonJS to run the game on
mobile.

![cocoon-overview](img/cocoon-overview.png)
