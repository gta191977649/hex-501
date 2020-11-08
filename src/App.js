import React, { Component } from 'react';
import './App.css';
import Window from './compoment/window'
import List from './compoment/list'
import KCTV from './compoment/kctv'

import Tilt from 'react-tilt'
import AudioSpectrum from 'react-audio-spectrum'
import Terminal from 'terminal-in-react';

//import Draggable from 'react-draggable'; // The default

class App extends Component {
  constructor(props) {
    super(props)
    this.hexBGEffect = this.hexBGEffect.bind(this)
    this.playSFX = this.playSFX.bind(this)
    this.nextBGM = this.nextBGM.bind(this)
    this.setActiveWin = this.setActiveWin.bind(this)
    this.onPlayListSelect = this.onPlayListSelect.bind(this)
    this.state = {
      current: 0,
      win: "KCTV",
    }
    this.playlist = [
      {"title":"MAIN","src":"../res/audio/startup.mp3"},
      {"title":"그때처럼 우리가 살고있는가","src":"../res/audio/title.mp3"},
      {"title":"단숨에","src":"../res/audio/tansume.mp3"},
      {"title":"Ольга Зарубина - Земляника","src":"../res/audio/title3.mp3"},
      {"title":"그때처럼 우리가 살고있는가 (KCTV버전)","src":"../res/audio/title4.mp3"},
      {"title":"공격전이다","src":"../res/audio/title5.mp3"},
      {"title":"경음악과 노래련곡무장으로 받들자 우리의 최고사령관","src":"../res/audio/title6.mp3"},
      {"title":"Title 7","src":"../res/audio/title7.mp3"},
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
  loginWindow() {
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
          <input className="hex-input" defaultValue="NullPtr" onMouseOver={this.playSFX}/>
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
    <Tilt className="Tilt animate-in" options={{ max : 10,scale:1 }} style={{marginTop:"0", marginBottom:"10%"}}>
      <Window width="600px" title="참새껍질 - 로그인" content={content}/>
    </Tilt>)
  }
  playlistWindow() {
    let content = <React.Fragment>
        <List data={this.playlist} hover={this.playSFX} onSelect={this.onPlayListSelect} selected={this.state.current}/>
    </React.Fragment>
    let list = 
    <Tilt className="Tilt animate-in" options={{ max : 10,scale:1 }} style={{marginTop:"0", marginBottom:"3%"}}>
      <Window width="550px" title="재생목록" content={content}/>
    </Tilt>
  
    return list
  }
  consoleWindow() {
    
    let content =
        <Terminal
          color='#414433'
          prompt='#414433'
          backgroundColor='#848b6e'
          
          style={{ fontWeight: "bold", fontSize: "1.2em",height:"50vh"}}
          commands={{
            'sites': () => <p>List Of Sites:<br/><strong>My personal sites:</strong><br/>
              <a href="//buncho.moe">Sparrow Blog (My blog)</a><br/>
              <a href="//midi.sparrow.moe">Sparrow MIDI (My MIDI Collection)</a>
            </p>,
            'projects': () => <React.Fragment><h2>List Of Projects:</h2><h3>Github:</h3>
              <a href="//github.com/gta191977649">ヌルポ(Nurupo)</a>
              <p> link will take your to my github if you interested =w=</p>
              <h3>My projects</h3>
              <h3>Personal:</h3>
              <a href="//archive.sparrow.moe/tools/utsgpacalc/">UTA GPA Calculator</a><br/>
              <a href="//archive.sparrow.moe/mytimetable-w-/">MyTimetable -w- (Android,IOS) APP,i guess better than UTS Offcial =w=</a>
              <h3>UTS Assignments (Archive):</h3>
              <a href="//sep.project-sparrow.ml">SEP DEMO (Software Engineering Practice Spring 2017)</a><br/>
              <a href="//sdp.project-sparrow.ml">SDP DEMO (Systems Development Project Spring 2017) </a><br/>
              <a href="//wsd.sparrow.moe">WSD Group Assignment 2018 (Web Services Development Autumn 2018) </a>
            </React.Fragment>
          }}
          descriptions={{
            'sites': 'list all the sites avaiable in this server.',
            'projects': 'list all the project that i done in the past.',
          }}
          msg="Sparrow OS v1.1.5 [Build 114514] (C) Project Java Sparrow 2019"
          hideTopBar={true}
          allowTabs={false}
          showActions={true}
          startState="maximised"
        />
   
    let kon = 
    <Tilt className="Tilt animate-in" options={{ max : 10,scale:1 }} style={{marginTop:"0", marginBottom:"3%"}}>
      <Window width="800px" height="53vh" title="KC-CONSOLE" content={content}/>
    </Tilt>
    return kon
  }
  onPlayListSelect(idx) {
    //console.log(idx)
    this.setState({
      current:idx
    })
  }
  showWindow(window) {
    switch (window) {
      case "WIN_LOGIN":{
        return this.loginWindow()
      }
      case "WIN_PLIST":{
        return this.playlistWindow()
      }
      
      case "WIN_CONSOLE":{
        return this.consoleWindow()
      }

      default: {
        return (<p>NO WIN FOUND</p>)
      }

    }
  }
  setActiveWin(newWindow) {
    this.setState({
      win: newWindow
    })
  }
  render() {
    let OldInterface = <React.Fragment>
      {this.showWindow(this.state.win)}
          
          
    </React.Fragment>
    return (
      <div className="App">
        <audio 
          id="audio-element"
          src={this.playlist[this.state.current].src}
          autoPlay={true}          
          onEnded={this.nextBGM}
         />
         <audio ref="SFX" src='../res/audio/mouse_hover.ogg' autoPlay/>
        <canvas ref="canvas" width="100" height="900" style={{ float: "left" }} />

        <div className="container" style={{display:"flex", width:"100%", flexDirection: "column"}}>
          {this.state.win === "KCTV" ?  <KCTV/> : OldInterface}
          <Tilt className="Tilt" options={{ max : 10,scale:1 }} >
            <Window width="500px"  title={`KCPLAYER - ${this.playlist[this.state.current].title}`}content={
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
          <div className={this.state.win === "KCTV" ?  "app-lancher kctv" :  "app-lancher"}>
            <p className="float-right">ver 1.1</p>
            <a href="#" onClick={()=> {this.setActiveWin("KCTV")}} onMouseOver={this.playSFX}>Test Card</a>
            <a href="#" onClick={()=> {this.setActiveWin("WIN_LOGIN")}} onMouseOver={this.playSFX}>로그인</a>
            <a href="#" onClick={()=> {this.setActiveWin("WIN_PLIST")}} onMouseOver={this.playSFX}>재생 목록</a>
            <a href="#" onClick={()=> {this.setActiveWin("WIN_CONSOLE")}} onMouseOver={this.playSFX}>콘솔</a>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
