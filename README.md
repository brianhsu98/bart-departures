# BART Departures

The BART website is annoying, and makes me click many times to find the information I want.

This website displays the departure and arrival times to and from Berkeley/Montgomery Street station by querying the BART API.
It's currently deployed [here](https://brianhsu.me/bart-departures/), using Github Pages.

In the future, it'd probably be nice to support customizable destinations through a dropdown.
For now, though, if you want to display different locations, you could simply change the parameters called in `getDepartures` to change the to/from destinations. It'll probably work.

## Things to Do

- [ ] Add customizable to/from locations, probably through a dropdown.
- [ ] Add an option to select the number of before/after times to look at
- [ ] Actually display the transfer stations instead of just listing the number of transfers
- [ ] Perhaps add functionality to change the timespan you want to view
- [ ] Implement something, probably using `localstorage`, to persist the settings locally.
- [ ] Figure out how to do nice loading boxes, instead of just having a blank table
- [ ] Improve the aesthetic
- [ ] Figure out how to do the mobile CSS properly (i.e. make it so that you don't have to swipe through the table). Alternatively, make this a mobile app. 
- [ ] Move Bootstrap to the assets folder
- [ ] profit??
