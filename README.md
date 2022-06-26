
<h1 align="center">


  <br>
  <a href="https://swisscalc.netlify.app/"><img src="https://user-images.githubusercontent.com/61304986/174495678-741abd9b-a120-4779-bb9c-0c6a22b302b6.png" alt="swisscalc" width="150"></a>

</h1>

<h4 align="center">Swisscalc is a calculator inspired by the swiss knife. It includes many different calculators for a variety of purposes. </h4>



<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#about">About</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#challenges">Challenges</a> •
  <a href="#lessons-learned">Lessons Learned</a> •
  <a href="#improvements">Improvements</a> •
</p>

![screenshot](https://user-images.githubusercontent.com/61304986/172940259-10e1fd13-dc5a-4fc1-a4b4-f90fed073492.gif)

## Key Features

 
* Hex to Decimal - Convert Hexadecimal to Decimal or vice versa.

* BMI Calculator - Calculate your Body Mass Index.
* Binary to Decimal - Convert Binary to Decimal or vice versa.
* Download Time Calculator - Calculate how long it takes to download something.


## About
<p> This is a multiple purpose calculator. It can solve different problems but mostly its for programmers but there are a few general calculators in there like the BMI calculator. It can calculate things like how long it takes to download a certain file given the download speed and file size. The app is not complex at all. Each calculator has its own function for the calculation. Some of the calculators even have two way conversions for the values.   </p>

## Tech Stack
* React
* Framer-Motion
* Material-UI
* Styled-Components
* React


## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/hyusef/swisscalc

# Go into the repository
$ cd swisscalc

# Install dependencies
$ npm install

# Run the app
$ npm start
```

## Challenges
 One of the biggest challenges i faced was implementing the moving particles animation using the tsparticles library since it was the first time using it. There were so many errors that i didn't understand but i eventually got it to work. This is the code for the particles.
  
  ```
    <Particles
          className="particles"
          
            params={
              {fullScreen: {
                enable: false,zIndex:0
              },
              fpsLimit: 60,
              particles: {
                links: {
                  color: "white",
                  distance: 150,
                  enable: false,
                  opacity: 0.4,
                  width: 1,
                },
                move: {
                  attract: { enable: false, rotateX: 600, rotateY: 1200 },
                  bounce: true,
                  direction: "none",
                  enable: true,
                  out_mode: "out",
                  random: false,
                  speed: 2,
                  straight: false,
                },
                number: { density: { enable: true, area: 800 }, value: 8 },
                shape: {
                  character: [
                    {
                      fill: true,
                      font: "Verdana",
                      value: ["✙"],
                      style: "",
                      weight: 400,
                    },
                  ],
                  stroke: { color: "white", width: 1 },
                  type: "char",
                },
                size: {
                  anim: { enable: true, minimumValue: 8, speed: 10, sync: false },
                  random: { minimumValue: 8, enable: true },
                  value: 32,
                },
              },
              detectRetina: true,
            }}
          />
  
  ```
  The particles also have to be styled and i used styled-components for that.
  ```
 .particles{  
      top:10%;
      position: absolute;
      margin: 0;
      padding: 0;
      width: 100%;
      height:70vh;
      z-index: 10;
  }
  ```

## Lessons Learned
* I learned from this project the importance of trying something out whether that is a new library or framework even if it seems hard because after trying it you'll realise that it's not as bad as you think it is. I now have the confidence to try out different libraries because the worst thing that may happen is just an error and i'll learn from those errors. 


* The second thing i learnt is that planning is very important. After i finished the Headers,styling,animations and all that. It was time to code the calculators but i wasn't sure which ones i should add and it took me a long time just to decide what type of calculators to add and that interfered with the time i should have been coding. Planning the whole app beforehand would have eliminated all that.

## Improvements

* I think the design for this app is terrible which i only realised after completing the app. I intend to improve it and to add more calculators then group them by their purposes.

* I also feel the code is not DRY. A HOC would be a good implementation for this code.





## You may also like...

- [StockMore](https://github.com/hyusef/stockmore) - A Stock analysis App.
- [Wordy](https://github.com/hyusef/wordy) - A word collage generator. 

## License

MIT

---



