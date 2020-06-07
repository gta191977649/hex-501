import React, { Component } from 'react';
import './App.css';
import Window from './compoment/window'
import Tilt from 'react-tilt'
import AudioSpectrum from 'react-audio-spectrum'

class App extends Component {
  constructor(props) {
    super(props)
    this.hexBGEffect = this.hexBGEffect.bind(this)
    this.playSFX = this.playSFX.bind(this)
    this.nextBGM = this.nextBGM.bind(this)
    this.state = {
      current: 0,
    }
    this.playlist = [
      {"title":"그때처럼 우리가 살고있는가","src":"../res/audio/title.mp3"},
      {"title":"단숨에","src":"../res/audio/tansume.mp3"},
      {"title":"Re-awake","src":"../res/audio/Re-awake.mp3"},
    ]
  }
  componentDidMount() {
    this.hexBGEffect()
  }

  hexBGEffect() {
    var c = this.refs.canvas
    var ctx = c.getContext("2d");

    //making the canvas full screen
    c.height = window.innerHeight;
    c.width = window.innerWidth;

    //chinese characters - taken from the unicode charset
    var chinese = "SPARROW OS";
    //converting the string into an array of single characters
    chinese = chinese.split("");

    var font_size = 25;
    var columns = c.width / font_size; //number of columns for the rain
    //an array of drops - one per column
    var drops = [];
    //x below is the x coordinate
    //1 = y co-ordinate of the drop(same for every drop initially)
    function animation() {
      for (var x = 0; x < columns; x++)
        drops[x] = 1;

      function draw() {
        //Black BG for the canvas
        //translucent BG to show trail
        ctx.fillStyle = "rgb(150,156,128,0.03)";
        ctx.fillRect(0, 0, c.width, c.height);

        ctx.fillStyle = "#414433";
        ctx.font = font_size + "px pixel-kr";
        //looping over drops
        for (var i = 0; i < drops.length; i++) {
          //a random chinese character to print
          var text = chinese[Math.floor(Math.random() * chinese.length)];
          //var text = chinese[Math.floor((i+1)%chinese.length)];
          //x = i*font_size, y = value of drops[i]*font_size

          ctx.fillText(text, i * font_size, drops[i] * font_size);

          //sending the drop back to the top randomly after it has crossed the screen
          //adding a randomness to the reset to make the drops scattered on the Y axis
          if (drops[i] * font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;

          //incrementing Y coordinate
          drops[i]++;
        }
      }
      setInterval(draw, 45);
    }
    setTimeout(animation,10000)

  }
  playSFX(e){
    let event = e
    console.log(e)
    this.refs.SFX.play()
    event.stopPropagation();
    event.preventDefault();
  }
  nextBGM() {
    
    let newIndex = this.state.current+1 < this.playlist.length ? this.state.current+1 : 0
    this.setState({
      current:newIndex
    })
    console.log(`SET BGM ${newIndex}`)
  }
  render() {
    const content = <React.Fragment>
      <div className="logo-area" style={{ width: "200px" }}>
      <div className="window-logo"  onMouseOver={this.playSFX}>HEX-501
</div>
        <p className="window-text">Build:0x20DFE<br />Powered By Project-Sparrow</p>
      </div>
      <br />
      <form style={{ width: "60%" }}>
        <div className="form-group">
          <label>사용자 이름:</label>
          <input className="hex-input" value="NullPtr" onMouseOver={this.playSFX}/>
        </div>
        <div className="form-group">
          <label>암호:</label>
          <input className="hex-input" onMouseOver={this.playSFX}/>
        </div>
        <div className="form-group" style={{ textAlign: "right" }}>
          <a className="hex-primary"  onMouseOver={this.playSFX}>닫기</a>
          <a className="hex-primary" onMouseOver={this.playSFX}>로그인</a>
        </div>
      </form>
      <br />
    </React.Fragment>
    return (
      <div className="App">
        <audio 
          id="audio-element"
          src={this.playlist[this.state.current].src}
          autoPlay={true}          
          loop={true}
         />
         <audio ref="SFX" src='../res/audio/mouse_hover.ogg' autoPlay/>
        <canvas ref="canvas" width="100" height="900" style={{ float: "left" }} />
        <br />
        <br />
        <br />
        <br />
      
        <div className="container" style={{
          display:"flex", width:"100%", flexDirection: "column"
        }}>
          <Tilt className="Tilt" options={{ max : 10,scale:1 }} style={{marginTop:"0", marginBottom:"10%"}}>
            <Window width="600px" title="참새껍질 - 로그인" content={content}/>
          </Tilt>
          <Tilt className="Tilt" options={{ max : 10,scale:1 }} >
            <Window width="500px"  title={`SPECTURM - ${this.playlist[this.state.current].title}`}content={
              <React.Fragment>
              <AudioSpectrum
              id="audio-canvas"
              height={50}
              width={495}
              audioId={'audio-element'}
              capColor={'#414433'}
              capHeight={2}
              meterWidth={5}
              meterCount={512}
              meterColor={[
                {stop: 0, color: '#414433'},
                {stop: 0.5, color: '#848b6e'},
                {stop: 1, color: '#848b6e'}
              ]}
              gap={2}
            />
            </React.Fragment>
            }  onClick={this.nextBGM}/>
           
          </Tilt>
        </div>
       
      </div>
    );
  }
}

export default App;
