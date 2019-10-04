const axios = require('axios');
const brain = require('brain.js');
const math = require('mathjs');
import Head from 'next/head'
import { useState, useEffect, useRef  } from 'react'
import net10000000 from '../static/nets/net10000000.json'
import net01000000 from '../static/nets/net01000000.json'
import net00100000 from '../static/nets/net00100000.json'
import net00010000 from '../static/nets/net00010000.json'
import net00001000 from '../static/nets/net00001000.json'
import net00000100 from '../static/nets/net00000100.json'
import net00000010 from '../static/nets/net00000010.json'
import net00000001 from '../static/nets/net00000001.json'



const Index = props =>{
  const sidepanel = useRef(null);
  const panels = useRef(null);



  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const clickPanel = async (id,event) => {
    console.log("CLICKED");
    if (event['oddsHome'] && event['oddsAway'] && event['set2']){
    let st = sidepanel.current.state.events;
    st[id] = event;
    if (Object.entries(st).length === 1){
      const x = panels.current.state;
      x.shrink = true;
      await panels.current.setState(x)
    }
    await sidepanel.current.setState({events:st});
    sidepanel.current.openPanel(id);}
    else {}
  }

  const expand = () => {
    const x = panels.current.state;
      x.shrink = false;
      panels.current.setState(x)
  }
  

  useEffect(() => { setInterval(() => {
    const wrap = async function () {
      await sleep(120000);
      const live = await axios.post('https://us-central1-tennisml.cloudfunctions.net/helloWorld', {
        ids: Object.keys(panels.current.state.events).filter(id => panels.current.state.events[id].status !== 'finished')
      })
      
      let x = panels.current.state;
      x.events = live.data.finall
      panels.current.setState(x);
  
      if (Object.entries(sidepanel).length !== 0){
        let y = sidepanel.current.state.events; 
        for (let i of Object.keys(sidepanel.current.state.events)){
          if (y[i].status !== "finished"){
            y[i] = live.data.finall[i]
          } else {delete y[i]}
        }
        sidepanel.current.setState({events:y})
      }
      
    }
      wrap();
  },120000)
    


  });

  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/> 
      </Head>
      <style jsx global>{`
        body { 
          background: #1a1a1a;
          }`}
      </style>

      <div className={"w3-row"}>
       
        
        <Panels live={props} click={clickPanel} ref={panels}/>
        <SidePanel ref={sidepanel} live={props} expand={expand}/>
      </div>
      
      
    </div>
  );
}




class Panels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events:props.live.live,
      shrink:false
    };
  }
  
  render() {
    const cls = (this.state.shrink ? "w3-container w3-col l8 " : "w3-container  ");

  return (
    <div className={cls} style={{backgroundColor:'#1a1a1a'}}>
        
        {Object.keys(this.state.events).map(id =>
          
          <div key={id} style={{display:"inline-block",minWidth:"400px",width:"20%",color:"#1a1a1a"}}
          className={"w3-container w3-margin w3-padding w3-hover-sepia w3-card-4 w3-hide-small w3-hide-medium"} 
          onClick={(e)=>{this.props.click(id,this.state.events[id])}}>
            <div className={"w3-round-xlarge"} style={{backgroundColor:"#cc2900"}}>  
              <div >
                <span className={"w3-margin-left w3-large"}>{this.state.events[id]['teamHome']}</span>
                <span className={"w3-right w3-large w3-margin-right"}>{this.state.events[id]['currentHome']}</span>
              </div>
              <div >
                <span className={"w3-margin-left w3-large"}>{this.state.events[id]['teamAway']}</span>
                <span className={"w3-right w3-large w3-margin-right"}>{this.state.events[id]['currentAway']}</span>
              </div>
            </div>
            <div className={"w3-center w3-margin-top w3-text-white"}>
              <span className={"w3-margin-left w3-large"}>{this.state.events[id]['period1Home']}</span>
              <span className={"w3-margin-left w3-large"}>{this.state.events[id]['period2Home']}</span>
              <span className={"w3-margin-left w3-large"}>{this.state.events[id]['period3Home']}</span>
            </div>
            <div className={"w3-center w3-text-white"}>
              <span className={"w3-margin-left w3-large"}>{this.state.events[id]['period1Away']}</span>
              <span className={"w3-margin-left w3-large"}>{this.state.events[id]['period2Away']}</span>
              <span className={"w3-margin-left w3-large"}>{this.state.events[id]['period3Away']}</span>
            </div>
            {((this.state.events[id]['status'] !== 'finished') ? (<span className={'w3-left w3-text-red w3-xlarge'}>LIVE</span>) : '')}
            <span className={'w3-right w3-text-green w3-xlarge'}>{predsWrap(neural(this.state.events[id],this.props))}</span>
          </div>
         
        )}

{Object.keys(this.state.events).map(id =>
          
          <div key={id} style={{color:"#1a1a1a"}}
          className={"w3-container w3-margin w3-padding w3-hide-large  w3-mobile w3-hover-sepia w3-card-4"} 
          onClick={async (e)=>{await this.props.click(id,this.state.events[id]);
                                window.scrollBy(0,2000)}}>
            <div className={"w3-round-xlarge"} style={{backgroundColor:"#cc2900"}}>  
              <div >
                <span className={"w3-margin-left w3-large"}>{this.state.events[id]['teamHome']}</span>
                <span className={"w3-right w3-large w3-margin-right"}>{this.state.events[id]['currentHome']}</span>
              </div>
              <div >
                <span className={"w3-margin-left w3-large"}>{this.state.events[id]['teamAway']}</span>
                <span className={"w3-right w3-large w3-margin-right"}>{this.state.events[id]['currentAway']}</span>
              </div>
            </div>
            <div className={"w3-center w3-margin-top w3-text-white"}>
              <span className={"w3-margin-left w3-large"}>{this.state.events[id]['period1Home']}</span>
              <span className={"w3-margin-left w3-large"}>{this.state.events[id]['period2Home']}</span>
              <span className={"w3-margin-left w3-large"}>{this.state.events[id]['period3Home']}</span>
            </div>
            <div className={"w3-center w3-text-white"}>
              <span className={"w3-margin-left w3-large"}>{this.state.events[id]['period1Away']}</span>
              <span className={"w3-margin-left w3-large"}>{this.state.events[id]['period2Away']}</span>
              <span className={"w3-margin-left w3-large"}>{this.state.events[id]['period3Away']}</span>
            </div>
            {((this.state.events[id]['status'] === 'finished') ? (<span className={'w3-left w3-text-red w3-xlarge'}>LIVE</span>) : '')}
            <span className={'w3-right w3-text-green w3-xlarge'}>{predsWrap(neural(this.state.events[id],this.props))}</span>
          </div>
         
        )}

      </div>
  );
}
}

class SidePanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events:{}
    };
  }

   openPanel = (id) => {
    var i;
    var x = document.getElementsByClassName("sidePanel");
    var y = document.getElementsByClassName('bts');
    var z = document.getElementsByClassName('firstbtn');
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
      y[i].style.backgroundColor = "transparent";
      z[i].classList = "w3-button firstbtn";
    }
    document.getElementById(id).style.display = "block";
    document.getElementById(id+'btn').style.backgroundColor = "#cc2900";
    document.getElementById(id+'first').classList = "w3-show-inline-block firstbtn";
  }
  

  render(){
    const style = {};
    const classes = 'w3-container  '+(Object.entries(this.state.events).length === 0 ? '': 'w3-col l4');
    return (
      <div className={classes} style={style}>
        <div class="w3-bar w3-text-white w3-padding-32" style={(Object.entries(this.state.events).length === 0 ? {display:'none'}: {})}>
        {Object.keys(this.state.events).map(id =>
          <div class="w3-bar-item w3-round-xxlarge bts" id={[id]+'btn'}>
          <div className={'w3-button firstbtn'} id={[id]+'first'} onClick={()=>this.openPanel(id)}>{id}</div>
          <div className={'w3-button'} onClick={async (e)=>{
            let x = this.state.events;
            delete x[id];
            await this.setState({events:x});
            (Object.entries(this.state.events).length === 0 ? this.props.expand() : this.openPanel(Object.keys(this.state.events)[0]))
            }
            }>X</div>
          </div>)}
        </div> 
        {Object.keys(this.state.events).map(id => 
        <div className={"w3-card-4 w3-text-white w3-margin w3-padding-24 sidePanel"} id={id} style={{display:'none'}}>
          <div className={"w3-xlarge w3-center"}>
            {this.state.events[id].teamHome}<span style={{color:"#1a1a1a"}}>-------</span>{this.state.events[id].teamAway}
          </div>
          <div className={"w3-row w3-padding"} >
              <div className={"w3-half w3-center"} >
                <div className={"w3-xlarge w3-padding-48"}>Set 1</div>
                <div className={"w3-row w3-padding "} >
                  <div className={"w3-half w3-display-container"}>
                    {this.state.events[id].set1.map(gem=>(<div >{gem[0]}. </div>)).reverse()}
                  </div>
                  <div className={"w3-half w3-display-container"}>
                    {this.state.events[id].set1.map(gem=>(<div>{gem[1]}-{gem[2]}</div>)).reverse()}
                  </div>
                </div>
              </div>
              <div className={"w3-half w3-center"}>
              <div className={"w3-xlarge w3-padding-48"}>Set 2</div>
              <div className={"w3-row w3-padding"}>
                  <div className={"w3-half "}>
                    {this.state.events[id].set2.map(gem=>(<div>{gem[0]}. </div>)).reverse()}
                  </div>
                  <div className={"w3-half "}>
                    {this.state.events[id].set2.map(gem=>(<div>{gem[1]}-{gem[2]}</div>)).reverse()}
                  </div>
                </div>
              </div>
          </div>
          <div className={"w3-padding-large w3-row"}>
            <div className={"w3-half"}>
            {neural(this.state.events[id],this.props).map(pred=>(<div className={"w3-padding"}>{pred[1]}. {(pred[0]*100).toString()+'%'}</div>))}
            </div>
            <div className={"w3-half w3-xxlarge"}>
              {this.state.events[id].status}
            </div>
          </div>
        </div>)}
      </div>
    )
}
}


const neural = (match,props) => {
  if (match['oddsHome'] && match['oddsAway'] && match['set2']){
    let sample = [match.period1Home,match.period1Away,0,0,0,0,0,0,0,0,0,0,0,0];
    for (let gem of match.set1){
      if (gem[2] === '0' && gem[3] === 1){sample[2] = sample[2]+1}
      if (gem[2] === '15' && gem[3] === 1){sample[3] = sample[3]+1}
      if (gem[2] === '30' && gem[3] === 1){sample[4] = sample[4]+1}
      if (gem[2] === '40' && gem[3] === 1){sample[5] = sample[5]+1}

      if (gem[1] === '0' && gem[3] === 2){sample[6] = sample[6]+1}
      if (gem[1] === '15' && gem[3] === 2){sample[7] = sample[7]+1}
      if (gem[1] === '30' && gem[3] === 2){sample[8] = sample[8]+1}
      if (gem[1] === '40' && gem[3] === 2){sample[9] = sample[9]+1}

      if (gem[3] !== gem[4] && gem[4] === 1){sample[10] = sample[10]+1}
      if (gem[3] !== gem[4] && gem[4] === 2){sample[11] = sample[11]+1}
    }
    sample[12] = match.oddsHome;
    sample[13] = match.oddsAway;
    const scale = [0.14285714, 0.14285714, 0.2, 0.2, 0.2, 0.166666, 0.2, 
      0.16666, 0.25, 0.166666, 0.2, 0.2, 0.04, 0.03030303];
    const min_ = [0,0,0,0,0,0,0,0,0,0,0,0,-0.04,-0.03030303];
    const sampleScaled = math.add(math.dotMultiply(sample,scale),min_);
    const net = new brain.NeuralNetwork();
    const preds = props.live.nets.map(mynet => {
      const net = new brain.NeuralNetwork();
      mynet[0].trainOpts.timeout = Infinity;
      net.fromJSON(mynet[0]);
      return [math.round(net.run(sampleScaled)[0],2),mynet[1]];
    })

    return(preds);
  }

}

const predsWrap = (preds) => {
  if (preds) {
    const max = Math.max(...preds.map(i=>i[0]));
    const index = preds.map(i=>i[0]).indexOf(max);
    const result = (max*100).toString()+'%'+'  '+preds.map(i=>i[1])[index];
    return(  result )
  } else {return <span className={"w3-text-white w3-large"}>Not enough data</span>}
} 


async function getEvents() {

   const response = await axios.get('https://www.sofascore.com/tennis/livescore/json',{
      headers: {
        'Host': 'www.sofascore.com',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:67.0) Gecko/20100101 Firefox/67.0',
        'Accept': '*/*',
        'Accept-Language': 'pl,en-US;q=0.7,en;q=0.3',
        'Accept-Encoding': 'gzip',
        'Content-type': 'application/json',
        'Referer': 'https://www.sofascore.com/pl/tenis/livescore',
        'X-Requested-With': 'XMLHttpRequest',
        'Connection':'keep-alive',
        'TE': 'Trailers'
  
      }
    });
    
      // handle success
    console.log(response.status);
    const ids = response.data['sportItem']['tournaments'].map(x => x['events'].map(y => y['id']));
    console.log(ids.reduce((ids,id) => ids.concat(id)));
    const codes = ids.reduce((ids,id) => ids.concat(id));

    // const codes = [ 8410894,
    //   8410371,
    //   8410380,
    //   8410228,
    //   8411686,
    //   8411685,
    //   8412178,
    //   8411494,
    //   8411495,
    //   8411501 ];

    let finall = {};
    
    
    for (let id of codes) {
      const event = await axios.get(`https://www.sofascore.com/event/${id}/json`,{
        headers: {
        'Host': 'www.sofascore.com',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:67.0) Gecko/20100101 Firefox/67.0',
        'Accept': '*/*',
        'Accept-Language': 'pl,en-US;q=0.7,en;q=0.3',
        'Accept-Encoding': 'gzip',
        'Content-type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Connection':'keep-alive',
        'TE': 'Trailers'
        }}
      );

      console.log(event.status);
      const r = event.data;
      console.log(r["event"]["status"]["type"]);
      console.log(r["event"]["homeTeam"]["name"]);
      console.log(r["event"]["awayTeam"]["name"]);
      console.log(r["event"]["homeScore"]["current"]);
      console.log(r["event"]["awayScore"]["current"]);
      console.log(r["event"]["homeScore"]["period1"]);
      console.log(r["event"]["awayScore"]["period1"]);
      console.log(r["event"]["homeScore"]["period2"]);
      console.log(r["event"]["awayScore"]["period2"]);
      console.log(r["event"]["homeScore"]["period3"]);
      console.log(r["event"]["awayScore"]["period3"]);
      if (r['pointByPoint'].length !== 0){
        for (let set of r['pointByPoint'].reverse()) {
          console.log(set['set']);
          console.log(set['games'].reverse().filter((game) => game['score'])
          .map(game => [
            game['game'],
            game['points'].slice(-1)[0]['homePoint'],
            game['points'].slice(-1)[0]['awayPoint'],
            game['score']['serving'],
            game['score']['scoring']]
            ));
      
          }
        }
        else {console.log("BRAK ----------------")}


      const odds = await axios.get(`https://api.sofascore.com/api/v1/event/${id}/odds/1/all`,{
            headers: {
              'Host': 'api.sofascore.com',
              'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:67.0) Gecko/20100101 Firefox/67.0',
              'Accept': '*/*',
              'Accept-Language': 'pl,en-US;q=0.7,en;q=0.3',
              'Accept-Encoding': 'gzip',
              'Content-type': 'application/json',
              'X-Requested-With': 'XMLHttpRequest',
              'Connection':'keep-alive',
              'TE': 'Trailers'
        
            }
          });

      //  if (odds.status === 200 && odds.data['markets'].length !== 0) { console.log(odds.status);
      //   console.log(eval(odds.data['markets'][0]['choices'][0]['fractionalValue'])+1);
      //   console.log(eval(odds.data['markets'][0]['choices'][1]['fractionalValue'])+1);}

        finall[`${id}`] = {
          'status': r["event"]["status"]["type"],
          'teamHome': r["event"]["homeTeam"]["name"],
          'teamAway': r["event"]["awayTeam"]["name"],
          'currentHome': r["event"]["homeScore"]["current"],
          'currentAway': r["event"]["awayScore"]["current"],
          'period1Home': r["event"]["homeScore"]["period1"],
          'period1Away': r["event"]["awayScore"]["period1"],
          'period2Home': r["event"]["homeScore"]["period2"],
          'period2Away': r["event"]["awayScore"]["period2"],
          'period3Home': r["event"]["homeScore"]["period3"],
          'period3Away': r["event"]["awayScore"]["period3"],
        };

        if (r['pointByPoint'].length !== 0){
          for (let set of r['pointByPoint'].reverse()) {
            finall[`${id}`]['set'+(set['set'])] = set['games'].reverse()
            .filter((game) => game['score'])
            .map(game => [
              game['game'],
              game['points'].slice(-1)[0]['homePoint'],
              game['points'].slice(-1)[0]['awayPoint'],
              game['score']['serving'],
              game['score']['scoring']]
              );
            }
          };
        if (odds.status === 200 && odds.data['markets'].length !== 0){
          try {
            finall[`${id}`]['oddsHome'] = eval(
              odds.data['markets'][0]['choices'][0]['fractionalValue'])+1;
            finall[`${id}`]['oddsAway'] = eval(
              odds.data['markets'][0]['choices'][1]['fractionalValue'])+1;}
              catch {}
              
          };
      
        
    }
    console.log(finall);
    // const fs = eval("require('fs')");
    let nets = [];
    for (let i of [
      [net10000000,'40:0'],
      [net01000000,'40:15'],
      [net00100000,'40:30'],
      [net00010000,'40:40'],
      [net00001000,'0:40'],
      [net00000100,'15:40'],
      [net00000010,'30:40'],
      [net00000001,'40:40']]){
      // let rawdata = fs.readFileSync(`nets/net${i[0]}.json`);
      const rawdata = i[0];
      // console.log(eval("net10000000"));
      // let net1 = JSON.parse(rawdata);
      let net1 = rawdata;
      net1.trainOpts.timeout = Infinity;
      console.log(net1.trainOpts.timeout)
      nets.push([net1,i[1]])

    }

    return {
      live:finall,
      nets:nets};
}


Index.getInitialProps = getEvents;

  
export default Index;
  