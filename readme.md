# Brief

I've decided to make a project out of the Odin Project exercise adding dynamic user interface interactions for the following reasons:

- I want it to be accessible online to whomever might wish to see it
- As mentioned at the end of the last exercise, I need to improve my git commit frequency

## Thoughts before beginning

I will try and put the three exercises in to one webpage, that is to say:

- A dynamic dropdown menu at desktop size
- A menu sliding in from the side at mobile size
- Some sort of photo carousel

I also want the JS functions to be as reusable as possible, in the hope that they may come in handy for future projects.

## Thoughts after completion

Once again, I'm left with a lingering feeling of dissatisfaction from a mixture of feeling like I've been hitting the wall of my abilities and needing to 'abandon' the project before 'completion' because of the endless layers of polish I could always spend more time on. As such, I'm actually going to include a new section called '[**Were time infinite**](#were-time-infinte)'.

The brief didn't describe this as a portfolio project and its wording was very much telling me to 'get it working', so I've decided to stop when:

- The dropdown menu works (the box slides down and the inner links fade in or out as appropriate)
- The burger menu works (I didn't add animation purely because, as I understand, mobile performance is a major factor and any animation I could have added would have been costly, see [below](#the-problems))
- The gallery has full functionality, albeit insufficiently adaptive for mobile use

### The problems

So the course invited me to watch [this](https://www.youtube.com/watch?v=8kK-cA99SA0) video (referencing [this](https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/) article) which **specifically** states that *only* `position`, `scale`, `rotate` and `opacity` are easy enough to process to guarantee that the transition will be smooth (I work on a 2016 ThinkPad with an Intel Celeron, which is excellent for testing when something's processor-intensive enough to stutter(!)), so I settled on using `scaleY` from 0 to 1 to achieve the dropdown effect. The caveat I only discovered after implementation is, of course, that the entire space for the element is reserved in the DOM even when scaled to 0, necessitating a set of empty space below for the gallery to still be visible. As such, everything ended up being positioned absolutely, leading to very complicated mobile formatting and a lot of general overcomplication. Were I to redo the task I guess I would have to implement the `max-height` solution suggested on tutorials, despite the fact that this conflicts with the initial assertion on performant transition properties.

Should this be the case, I could also use `max-width` to animate the sidebar in a similar style, or even accordion down space between main links to make room for sublinks to fade in and accommodate a global function for expanding and fading in / fading out and contracting. These are all things I'd like to revisit at a later point with more skill.

As I wanted all of the dropdown links to share the same container below the top nav bar, it meant completely altering the semantic structure of the HTML. I have no idea if this was 'correct', but I tried to keep the HTML as semantically clear as possible (e.g. for those using screen-readers with JavaScript disabled) and had each of my menu functions firstly relocate all of the links in to a newly created `<div>` for display purposes. The problem with *this* approach is that the page doesn't reformat from a dropdown to a sidebar if the window is resized, it only renders correctly for the screen size on initial load (otherwise the function would have to be ready to look not only in the `<nav>` element for the links but any created `<div>` from the alternative menu style). However, at this stage I'm not sure if in deployment two individual CSS files would even be loaded depending on screen size.

Another small thing I noticed was that a previous article in the course specifically advised against inline style (I use it here because the value is reliant upon JS calculation), instead suggesting that JS only toggle classes on and off, which in general I've tried to adhere to. One side-effect is that classes cannot invalidate or update styles applied to a specific element through an ID selector in the .css file (for being lower priority), so for now I have used classes as ID selectors for some elements. The alternative would have been to apply inline style, which would be the solution for a future attempt.

## Were time infinite

- Adjust gallery to be correctly adaptive for smaller screens
- Extend both side and dropdown menus with `max-[width/height]` properties
- Toggle dropdown header arrows between down and up when accordion is contracted or extended respectively
- Find solution for screen to render dropdown or sidebar on resize (note: the same page offering both was *not* specified by the exercise brief)

## Areas for improvement

### Code organisation

Still, I find organising code such a challenge! I *must* find a resource with some simple programs written out in their entirety with model code organisation. As things stand I'm comfortable putting functions and variables in modules, but struggle to divide scope within the module. I've also read that IIFE's are rarely if ever needed, when for now I use them for page loads as I don't know what the industry standard is!

### Higher Order Functions

Related to the above, I'm trying to keep code DRY but I'm sure there is greater DRYness possible. I feel like there's more order in my gallery function than my menu functions. the function `fillOrClosePanel` specifically looks like a mess, but I can't see refactoring it to higher order functions saving lines of code, as each function would just be to apply one line of code.

### Approaching problems

I guess I just need more experience approaching problems. This took me so long to figure out how to go about the sliding image gallery, but it felt partly just a symptom of having never approached this kind of problem before. I'm just a bit intimidated that YouTube tutorials last about 25mins and it took me days to do this incomplete page(!) Hopefully this is normal, I've emailed some companies based near me to ask if anyone from the team would be free to meet up and discuss my questions and progress for half an hour.

## Lessons learned

### Skewed elements reserve their entire space in the DOM

### Use inline style if a style applied to an ID needs updating in JS

### Avoid absolute or fixed positioning if not appropriate for the entire page layout

i.e. don't use it as a 'fix'.

### Install Prettier locally from the start

I thought it would make more sense to run 'Prettier' at the end. I was wrong.
