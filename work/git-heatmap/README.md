Git Heatmap
===========

![heatmap](../../img/git-heatmap.png)

This is the page that I used to generate the Git heatmap that illustrates the
number of project commits for each day.

It uses the [Cal-Heatmap](http://kamisama.github.io/cal-heatmap/) project,
which is a customizable and open source implementation of the [Github
Contributions](https://github.com/blog/1360-introducing-contributions)
calendar.

To generate the `commit-timestamps.json` file, I executed this rather long
shell one-liner from the project's root directory:

```shell
git log --date=raw | grep "^Date:" | awk 'BEGIN { print "{";i=0} i>0 { print ","} { i++; printf "\"%s\":1", $2} END { print "}"}' > commit-timestamps.json
```
