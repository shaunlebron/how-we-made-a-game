# Pterodactyl Paths

In this game, pterodactyls fly toward you along predefined paths.  Here, we
will discuss the nature of these paths and the tool we built for constructing
them.

![path-preview](img/path-preview.png)

## A Smooth Path

To create a simple smooth path for the pterodactyls, we used something called
Catmull-Rom splines.  It allows us to animate the pterodactyl between a given
set of points.  With each point is an associated time, representing when the
pterodactyl should be at that location.

![path-catmullrom](img/path-catmullrom.png)

This was a good solution for creating very simple paths and helped simplify
the tool requirements for creating them.  We opted for this instead of the
industry standard method for animating objects along curves: a spatial Bezier
Spline curve to control position, and a temportal Bezier Spline curve to
control the speed.

![path-bezier](img/path-bezier.png)

## The Tool

