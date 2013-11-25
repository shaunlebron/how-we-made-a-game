# Pterodactyl Paths

In this game, pterodactyls fly toward you along predefined paths.  Here, we
will discuss the nature of these paths and the tool we built for constructing
them.

![path-preview](img/path-preview.png)

## A Smooth Path

To create a simple paths for the pterodactyls, we used something called [Cubic
Hermite splines](http://en.wikipedia.org/wiki/Cubic_Hermite_spline).  It
generates a complete smooth path from a set of timed waypoints.

![path-hermite](img/path-hermite.png)

The curvature of the path changes depending on the timing at each waypoint.

![path-hermite](img/path-hermite.gif)

This was a sufficient solution for us, and it helped simplify the tool
requirements for creating smooth paths.

## The Tool

To create, save, preview, and share the paths for the pterodactyls, we created
a tool called Ptalaga, a name chosen as a play on the game Galaga, which we
admired for having beautiful enemy paths.

### Views

Like any other 3D tool provides, Ptalaga provides three orthographic views and the
perspective view.  This allows us to move the points from different perspectives
to position them where we wanted.

![path-tool-views](img/path-tool-views.png)
