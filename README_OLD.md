# custom_website

This is my attempt at converting my old website into a new one with Bootstrap. I did not use any of the old files outside of media files.

## Custom CSS and JavaScript

I didn't actually add any custom CSS. It's not for lack of wanting, I just ran out of time to really figure out what I would change and how to change it.
As for the JavaScript, it was needed to get the tooltip and the toast to show up for the scream button. If I didn't add the JavaScript snippet, I would have to manually write show for the toast and tooltip to appear. I don't even know if it's possible to show tooltips withough JavaScript or some really roundabout way to enable them.

## The most challenging component

The harest one to implement was probably either the toast or the gallery. both of these components were giving me a load of grief for different reasons.

### Gallery

The gallery was giving me issues with image sizing, the indicators not working, and text not disappearing like is should. I found out part of the problem was that I was using an outdated version of Bootstrap. Since it was outdated, it made a lot of the code bloated. I actually found out it was outdated when I tried to implement toasts.

### Toast

The toast just straight up didn't seem to exist in the version of Bootstrap I was using. So when I tried to get it to work, I realized that I had to redo everything. Then on top of that, I didn't understand how I was supposed to get the toast to actually show up since they start out hidden. I learned i had to actually manually show them, or make some javascript to activate them.

## The easiest component

I feel that the easiest component to implement was the collapse component. It's like the modal in terms of how much was needed to code, but much simpler and didn't give me grief to implement.

## Code improvements

I feel that Bootstrap definitely made my code more compact. My CSS and JavaScript files grew fairly large in my other projects. It also helped me make fewer mistakes in terms of proper styling, as there was a lot less to keep track of.

## Framework features I liked

I'm personally a fan of how easy it is to switch between types of components using the class. the built in gallery is neat and modals are super easy to set up.
