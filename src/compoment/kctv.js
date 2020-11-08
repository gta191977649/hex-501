import React, { Component } from "react";
import logo from "../kctv.png"
class kctv extends Component {
  constructor(props) {
    super(props);
    this.state = {
        date:"",
        time:""
    };
  }
  update() {
    let now = new Date();
    let pad = (value) => value > 9 ? value : `0${value}`;
    this.setState({"date":`${pad(now.getDate())}/${pad(now.getMonth()+1)}/${pad(now.getYear()%100)}`,"time":`${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`})
  }
  componentDidMount(){
    this.update()
    setInterval(() => {
        this.update()
    }, 500)
  }

  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="-5 -5 200 150" 
        preserveAspectRatio="xMidYMid meet"
      >
        <clipPath id="diskMask">
          <circle cx="90" cy="70" r="65" />
        </clipPath>

        <defs>
          <pattern
            id="background"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="20" height="20" fill="white" />
            <rect x="0" y="0" width="10" height="10" fill="black" />
            <rect x="10" y="10" width="10" height="10" fill="black" />
          </pattern>

          <linearGradient id="sine" spreadMethod="repeat" x1="0" y1="0" y2="0">
            <stop offset="0%" stopColor="black" />
            <stop offset="45%" stopColor="white" />
            <stop offset="55%" stopColor="white" />
            <stop offset="100%" stopColor="black" />
          </linearGradient>
          <linearGradient id="sine1" href="#sine" x2="20%" />
          <linearGradient id="sine2" href="#sine" x2="16%" />
          <linearGradient id="sine3" href="#sine" x2="12%" />
          <linearGradient id="sine4" href="#sine" x2="8%" />
          <linearGradient id="sine5" href="#sine" x2="4%" />
        </defs>

        <rect
          x="-100"
          y="-5"
          width="268"
          height="150"
          style={{fill:"url(#background)"}}
        />
        <rect
          x="44"
          y="-5"
          width="268"
          height="150"
          style={{fill:"url(#background)"}}
        />

        <rect x="0" y="0" width="180" height="140" fill="#929292" />
        <g id="horizontalStripes">
          <line
            x1="0"
            y1="0"
            x2="180"
            y2="0"
            stroke="white"
            strokeWidth="0.5"
          />
          <line
            x1="0"
            y1="10"
            x2="180"
            y2="10"
            stroke="white"
            strokeWidth="0.5"
          />
          <line
            x1="0"
            y1="20"
            x2="180"
            y2="20"
            stroke="white"
            strokeWidth="0.5"
          />
          <line
            x1="0"
            y1="30"
            x2="180"
            y2="30"
            stroke="white"
            strokeWidth="0.5"
          />
          <line
            x1="0"
            y1="40"
            x2="180"
            y2="40"
            stroke="white"
            strokeWidth="0.5"
          />
          <line
            x1="0"
            y1="50"
            x2="180"
            y2="50"
            stroke="white"
            strokeWidth="0.5"
          />
          <line
            x1="0"
            y1="60"
            x2="180"
            y2="60"
            stroke="white"
            strokeWidth="0.5"
          />
          <line
            x1="0"
            y1="70"
            x2="180"
            y2="70"
            stroke="white"
            strokeWidth="0.5"
          />
          <line
            x1="0"
            y1="80"
            x2="180"
            y2="80"
            stroke="white"
            strokeWidth="0.5"
          />
          <line
            x1="0"
            y1="90"
            x2="180"
            y2="90"
            stroke="white"
            strokeWidth="0.5"
          />
          <line
            x1="0"
            y1="100"
            x2="180"
            y2="100"
            stroke="white"
            strokeWidth="0.5"
          />
          <line
            x1="0"
            y1="110"
            x2="180"
            y2="110"
            stroke="white"
            strokeWidth="0.5"
          />
          <line
            x1="0"
            y1="120"
            x2="180"
            y2="120"
            stroke="white"
            strokeWidth="0.5"
          />
          <line
            x1="0"
            y1="130"
            x2="180"
            y2="130"
            stroke="white"
            strokeWidth="0.5"
          />
          <line
            x1="0"
            y1="140"
            x2="180"
            y2="140"
            stroke="white"
            strokeWidth="0.5"
          />
        </g>
        <g id="verticalStripes">
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="140"
            stroke="white"
            strokeWidth="0.5"
          />
          <line
            x1="10"
            y1="0"
            x2="10"
            y2="140"
            stroke="white"
            strokeWidth="0.5"
          />
          <line
            x1="20"
            y1="0"
            x2="20"
            y2="140"
            stroke="white"
            strokeWidth="0.5"
          />
          <line
            x1="30"
            y1="0"
            x2="30"
            y2="140"
            stroke="white"
            strokeWidth="0.5"
          />
          <line
            x1="40"
            y1="0"
            x2="40"
            y2="140"
            stroke="white"
            strokeWidth="0.5"
          />
          <line
            x1="50"
            y1="0"
            x2="50"
            y2="140"
            stroke="white"
            strokeWidth="0.5"
          />
          <line
            x1="60"
            y1="0"
            x2="60"
            y2="140"
            stroke="white"
            strokeWidth="0.5"
          />
          <line
            x1="70"
            y1="0"
            x2="70"
            y2="140"
            stroke="white"
            strokeWidth="0.5"
          />
          <line
            x1="80"
            y1="0"
            x2="80"
            y2="140"
            stroke="white"
            strokeWidth="0.5"
          />
          <line
            x1="90"
            y1="0"
            x2="90"
            y2="140"
            stroke="white"
            strokeWidth="0.5"
          />
          <line
            x1="100"
            y1="0"
            x2="100"
            y2="140"
            stroke="white"
            strokeWidth="0.5"
          />
          <line
            x1="110"
            y1="0"
            x2="110"
            y2="140"
            stroke="white"
            strokeWidth="0.5"
          />
          <line
            x1="120"
            y1="0"
            x2="120"
            y2="140"
            stroke="white"
            strokeWidth="0.5"
          />
          <line
            x1="130"
            y1="0"
            x2="130"
            y2="140"
            stroke="white"
            strokeWidth="0.5"
          />
          <line
            x1="140"
            y1="0"
            x2="140"
            y2="140"
            stroke="white"
            strokeWidth="0.5"
          />
          <line
            x1="150"
            y1="0"
            x2="150"
            y2="140"
            stroke="white"
            strokeWidth="0.5"
          />
          <line
            x1="160"
            y1="0"
            x2="160"
            y2="140"
            stroke="white"
            strokeWidth="0.5"
          />
          <line
            x1="170"
            y1="0"
            x2="170"
            y2="140"
            stroke="white"
            strokeWidth="0.5"
          />
          <line
            x1="180"
            y1="0"
            x2="180"
            y2="140"
            stroke="white"
            strokeWidth="0.5"
          />
        </g>

        <g id="dateContainer">
          <rect
            x="10"
            y="120"
            width="40"
            height="10"
            fill="black"
            strokeWidth="0.5"
            stroke="white"
          />
          <text
            id="dateText"
            x="30"
            y="125.5"
            fill="white"
            width="40"
            height="10"
            dominantBaseline="middle"
            textAnchor="middle"
            fontFamily="VCR"
            fontSize="8"
          >{this.state.date}</text>
        </g>

        <g id="timeContainer">
          <rect
            x="130"
            y="120"
            width="40"
            height="10"
            fill="black"
            strokeWidth="0.5"
            stroke="white"
          />
          <text
            id="timeText"
            x="150"
            y="125.5"
            fill="white"
            width="40"
            height="10"
            dominantBaseline="middle"
            textAnchor="middle"
            fontFamily="VCR"
            fontSize="8"
          >{this.state.time}</text>
        </g>

        <rect
          x="20"
          y="20"
          width="140"
          height="100"
          fill="#ff922b"
          stroke="white"
          strokeWidth="0.5"
        />

        <g id="disk" clipPath="url(#diskMask)">
          <circle cx="90" cy="70" r="65" fill="rgb(24,124,230)" />
          <g id="colorBars">
            <rect
              x="10"
              y="50"
              width="40"
              height="20"
              fill="yellow"
              id="colorBarYellow"
            />
            <rect
              x="50"
              y="50"
              width="20"
              height="20"
              fill="cyan"
              id="colorBarCyan"
            />
            <rect
              x="70"
              y="50"
              width="20"
              height="20"
              fill="lime"
              id="colorBarGreen"
            />
            <rect
              x="90"
              y="50"
              width="20"
              height="20"
              fill="magenta"
              id="colorBarMagenta"
            />
            <rect
              x="110"
              y="50"
              width="20"
              height="20"
              fill="red"
              id="colorBarRed"
            />
            <rect
              x="130"
              y="50"
              width="40"
              height="20"
              fill="blue"
              id="colorBarBlue"
            />
          </g>
          <g id="greyBars">
            <rect
              x="10"
              y="70"
              width="40"
              height="20"
              fill="hsl(0, 0%, 0%)"
              id="greyBar0"
            />
            <rect
              x="50"
              y="70"
              width="20"
              height="20"
              fill="hsl(0, 0%, 20%)"
              id="greyBar20"
            />
            <rect
              x="70"
              y="70"
              width="20"
              height="20"
              fill="hsl(0, 0%, 40%)"
              id="greyBar40"
            />
            <rect
              x="90"
              y="70"
              width="20"
              height="20"
              fill="hsl(0, 0%, 60%)"
              id="greyBar60"
            />
            <rect
              x="110"
              y="70"
              width="20"
              height="20"
              fill="hsl(0, 0%, 80%)"
              id="greyBar80"
            />
            <rect
              x="130"
              y="70"
              width="40"
              height="20"
              fill="hsl(0, 0%, 100%)"
              id="greyBar100"
            />
          </g>
          <g id="fineGrainCrosses">
            <line
              x1="55"
              y1="70"
              x2="125"
              y2="70"
              stroke="white"
              strokeWidth="0.5"
            />
            <line
              x1="85"
              y1="62.7"
              x2="95"
              y2="62.7"
              stroke="white"
              strokeWidth="0.5"
            />
            <line
              x1="85"
              y1="77.3"
              x2="95"
              y2="77.3"
              stroke="white"
              strokeWidth="0.5"
            />
            <line
              x1="90"
              y1="57.8"
              x2="90"
              y2="82.2"
              stroke="white"
              strokeWidth="0.5"
            />
            <line
              x1="60"
              y1="65"
              x2="60"
              y2="75"
              stroke="white"
              strokeWidth="0.5"
            />
            <line
              x1="70"
              y1="65"
              x2="70"
              y2="75"
              stroke="white"
              strokeWidth="0.5"
            />
            <line
              x1="80"
              y1="65"
              x2="80"
              y2="75"
              stroke="white"
              strokeWidth="0.5"
            />
            <line
              x1="100"
              y1="65"
              x2="100"
              y2="75"
              stroke="white"
              strokeWidth="0.5"
            />
            <line
              x1="110"
              y1="65"
              x2="110"
              y2="75"
              stroke="white"
              strokeWidth="0.5"
            />
            <line
              x1="120"
              y1="65"
              x2="120"
              y2="75"
              stroke="white"
              strokeWidth="0.5"
            />
          </g>
          <rect
            x="72"
            y="12"
            width="38"
            height="8"
            stroke="white"
            strokeWidth="2"
            fill="transparent"
          />
          <g id="sineBars">
            <rect x="20" width="20" y="90" height="20" fill="black" />
            <rect x="40" width="20" y="90" height="20" fill="url(#sine1)" />
            <rect x="60" width="20" y="90" height="20" fill="url(#sine2)" />
            <rect x="80" width="20" y="90" height="20" fill="url(#sine3)" />
            <rect x="100" width="20" y="90" height="20" fill="url(#sine4)" />
            <rect x="120" width="20" y="90" height="20" fill="url(#sine5)" />
            <rect x="140" width="20" y="90" height="20" fill="white " />
          </g>
          <g id="shift">
            <rect x="20" width="140" y="110" height="10" fill="white" />
            <rect x="60" width="60" y="110" height="10" fill="black" />
            <line
              x1="70"
              y1="110"
              x2="70"
              y2="120"
              strokeWidth="0.5"
              stroke="white"
            />
          </g>
          <text
            dominantBaseline="middle"
            textAnchor="middle"
            x="90"
            y="128"
            fill="black"
            fontSize="8"
            fontFamily="VCR"
          >
            ❥와선
          </text>
          <text
            dominantBaseline="middle"
            textAnchor="middle"
            x="89.5"
            y="127.5"
            fill="yellow"
            fontSize="8"
            fontFamily="VCR"
          >
            ❥와선
          </text>
        </g>

        <g id="tve" transform="translate(70 25)">
          <text
            y="13.5"
            x="20.5"
            fill="black"
            width="40"
            height="10"
            dominantBaseline="middle"
            textAnchor="middle"
            fontFamily="VCR"
            fontSize="11"
          >
            조선중앙텔레비죤
          </text>
          <text
            y="13"
            x="20"
            fill="white"
            width="40"
            height="10"
            dominantBaseline="middle"
            textAnchor="middle"
            fontFamily="VCR"
            fontSize="11"
          >
            조선중앙텔레비죤
          </text>
        </g>
  
        <image x="-48" y="3" href={logo} width="20" />
      </svg>
    );
  }
}

export default kctv;
