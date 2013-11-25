# Pterodactyl Paths

In this game, pterodactyls fly toward you along predefined paths.  Here, we
will discuss the nature of these paths and the tool we built for constructing
them.

![path-preview](img/path-preview.png)

## A Smooth Path

To create a simple paths for the pterodactyls, we used something called Cubic
Hermite splines.  It generates a complete smooth path from a set of timed
waypoints.

![path-hermite](img/path-hermite.png)

The curvature of the path changes depending on the timing at each waypoint.

![path-hermite](img/path-hermite.gif)

This was a sufficient solution for us, and it helped simplify the tool
requirements for creating smooth paths.

## The Tool

