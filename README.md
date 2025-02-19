# frontend
Contains various code examples usable at frontend development.
To see how would HTML page looks like add (after click on page) prefix **https://htmlpreview.github.io/?**

## complete codes
* [primes.html](primes.html) - contains example of **generating primes** and check whether number **isPrime**
* [canvas.html](canvas.html) - drawing on canvas various elements (diagonal, cross, circles)
* [participant_list_as_json.js](participant_list_as_json.js) - extract (JQ) from webpage pretekaj.sk list of participants and transform it to JSON.
* [addJQueryOnFly.js](addJQueryOnFly.js) - script which add (through developer console of webrowser) JQuery library to displaied page.
* [ageNumOfDays.js](ageNumOfDays.js) - display in console number of days from specified date until now.
* [canvas_polygon.html](canvas_polygon.html) - after click on canvas display in the middle (at coordinates [x,y]) polygon with:
    * defined line length
    * defined length of inner circle
* [canvas_circle.html](canvas_circle.html) - draw arc with 90°, 180°, 270° and 360°.
* [canvas_flower.html](canvas_flower.html) - generate flowers on canvas.
* [canvas_clock.html](canvas_clock.html) - clock (only second hand)
* [canvas_anim_moving_rectangles.html](canvas_anim_moving_rectangles.html) - movement of squares through canvas. Various speed. Possible change direction of movement. Read cursor coordinates on click.
* [canvas_anim_moving_rectangles_key.html](canvas_anim_moving_rectangles_key.html) - movement of squares through canvas. Squares are moved on arrow keys press event.
* [canvas_game_avoid_obstacles.html](canvas_game_avoid_obstacles.html) - simple game. square has to be traversed through gaps in vertical obstacles. Code contains classes, class inheritance. Handling key arrow press and release, animation
* [canvas_game_click_squares.html](canvas_game_click_squares.html) - click all squares until all disappear. Below canvas is simple timer which track length of game.
* [basic_math_operations.html](basic_math_operations.html) - education of multiplication, division, addition and substraction. It is possible to define which mathematical
  operations will be generated. 
  
  If chosen multiplication it is possible to define value for *first factor* - **násobky** and *second factor* - **násobenie s**

  If chosen division it is possible to define value for *dividend* - **delitele** and *quotient (division result)* - **podiel - výsledok delenia**
* [tone_generator.html](tone_generator.html) - generates some basic tones after press key on keyboard (press of 'c' key => generate c4 tone).
* [canvas_square_circling.html](canvas_square_circling.html) - square is going in circle which has still the same diameter and speed is constant. Nothing depends on frame frequency
* [canvas_buble_sorting.html](canvas_buble_sorting.html) - sorting demo (quick sort). Demonstrate (step-by-step) how quick sort alrogithm works. It is possible to view it in automatic mode (no interaction) or manual mode where it is possible to klik on button to get to next step of algorithm. In automatic mode it is possible to specify frequency of rendering next sorting step.
* [dijkstra.html](dijkstra/dijkstra.html) - example of implementation of Dijsktra algorithm for finding of shorthest path in graph.
* [js_3digit_examples.html](js_3digit_examples.html) - example of generating 3 digit substraction exmples.

### graphs

* [graph-plotly.html](graph-plotly.html) - demonstrate usage of library **plotly**

## study code
Contains code which was developed during study of some frontend development aspect.

* [jq_study_attributes.html](jq_study_attributes.html) - demonstrate possibility of getting HTML tag attribute value by its name via JQ.
* [jq_study_dateMillisecondsChange.html](jq_study_dateMillisecondsChange.html) - demonstrate (via JQ):
    * string interpolation,
    * timing of execution of some action (**setInterval()**, **clearInterval()**) - updating date (like watch)
* [jq_study_events.html](jq_study_events.html) demonstrate (via JQ) usage of HTML events:
    * hide
    * hover
    * mouseenter
    * mouseleave
    * click
* [jq_study_fade.html](jq_study_fade.html) demonstrate (via JQ) usage of fading (miznutie) of HTML elements.
* [jq_study_slide.html](jq_study_slide.html) demonstrate (via JQ) sliding (appear, disappear) of HTML elements.
* [js_study_string_interpolation.html](js_study_string_interpolation.html) - demonstrate string interpolation
* [js_study_output.html](js_study_output.html) - demonstrate possibility to directly write on webpage (overwrite previous content)


# JAVA SCRIPT
## XPATH
```javascript
//for www.shmu.sk
//select all links with rel = 'dns-prefetch'
//it is also possible to use $x('//link[@rel="dns-prefetch"]/@href')
var links = document.evaluate('//link[@rel="dns-prefetch"]/@href', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
console.log(links);
for(var i = 1; i<=links.snapshotLength; i++) {
	console.log(links.snapshotItem(i));
}

```

