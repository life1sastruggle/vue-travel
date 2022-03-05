<template>
  <div id="weather_wrapper"> 
    <div class="weatherCard" v-for="(element,index) in weatherArr"
    :key="index" :src="element" v-show="n==index" @mouseenter="clearGo" @mouseleave="go">      
      <div class="currentTemp" >
        <span class="temp">
            {{element.low}}</br>
            {{element.high}}</br>
        </span>
        <span class="location">{{element.date}}</span>
        <ul class="points">
          <li :style="{backgroundColor:n==indexs?'#7474BF':''}" @click="clickPoint(indexs)" v-for="(elements,indexs) in weatherArr" :key="indexs"></li>
        </ul>   
      </div>
      <div class="currentWeather">
        <span class="conditions" v-if="element.type=='晴'">&#xf00d;</span>
        <span class="conditions" v-else-if="element.type=='阴'">&#xf00c;</span>
        <span class="conditions" v-else-if="element.type=='多云'">&#xf002;</span>
        <div class="info">
          <span class="rain">{{element.type}}</span>
          <span class="wind">{{element.fengli.substring(9,11)}}</span>      
        </div>
      </div> 
      <span class = "left_btn" @click="clickPage('up')">&lt;</span>
      <span class = "right_btn" @click="clickPage('down')">&gt;</span>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        n:0,
        weatherArr:[],
        interId:null
      }
    },
    methods:{
        go(){
            this.interId=setInterval(()=>{
                this.n++;
                if(this.n == this.weatherArr.length){
                    this.n = 0
                }
            },2500)
        },
        clearGo(){
            clearInterval(this.interId)
        },
        clickPoint(str){
          console.log(str);
          this.n = str;
        },
        clickPage(str){
          if(str == "up"){
            if(this.n == 0){
                    this.n = this.weatherArr.length
                }
            this.n--;   
          }else if(str == "down"){
            this.n++;
            if(this.n == this.weatherArr.length){
                    this.n = 0
                }
            
          }
        },
        getStatus(str) {
          if (str == '晴') {
            return '&#xf00d'
          }
        },
        searchWeather(){
            var t = this;
            var city = this.city;
            axios.get("http://wthrcdn.etouch.cn/weather_mini?city=杭州").then(function(response){
                t.weatherArr = response.data.data.forecast.map( (ele) => {
                  ele.typeStr = 'f00d';
                  return ele;
                });
                console.log(response);
            },function(error){})
        },
        
    },
    mounted(){
        this.searchWeather()
        this.go()
        
    }
  }
        
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);
@import url(https://cdnjs.cloudflare.com/ajax/libs/weather-icons/1.2/css/weather-icons.min.css);
body {
  background: linear-gradient(90deg, #7474BF 10%, #348AC7 90%);
}
#weather_wrapper {
  width: 400px;
}
.weatherCard {
  width: 400px;
  height: 200px;
  font-family: 'Open Sans';
  box-shadow: 2px 4px 12px #99a9bf;
  position: relative;
}
.currentTemp {
  width: 220px;
  height: 200px;
  background: rgb(41, 41, 41);
  position: absolute;
  top: 0;
  left: 0;
}
.currentWeather {
  width: 180px;
  height: 200px;
  background: rgb(237, 237, 237);
  margin: 0;
  position: absolute;
  top: 0;
  right: 0;
}
.temp {
  font-size: 40px;
  text-align: center;
  display: block;
  font-weight: 400;
  color: rgb(255, 255, 255);
  padding: 20px 0 0;
}
.location {
  color: rgb(255, 255, 255);
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 30px;
  display: block;
}
.conditions {
  font-family: weathericons;
  font-size: 80px;
  display: block;
  padding: 20px 0 0;
  text-align: center;
}
.info {
  width: 180px;
  height: 50px;
  position: absolute;
  bottom: 0;
  right: 0;
  background: rgb(42, 178, 234);
  font-weight: 700;
  color: rgb(255, 255, 255);
  text-align: center;
}
.rain {
  width: 50%;
  position: absolute;
  left: 10px;
  word-spacing: 60px;
  top: 10px;
  text-align: center;
}
.rain::before {
  display: block;
  content: '\f04e';
  font-family: weathericons;
  font-size: 40px;
  left: 6px;
  top: -15px;
  position: absolute;
}
.wind {
  width: 50%;
  right: -10px;
  position: absolute;
  word-spacing: 60px;
  top: 10px;
}
.wind::before {
  display: block;
  content: '\f050';
  font-family: weathericons;
  font-size: 25px;
  left: -10px;
  position: absolute;
  top: -5px;
}
.left_btn{
  width: 18px;
  height: 20px;
  font-weight: bolder;
  background: rgba(180,180,180,0.05);
  color:#fff;
  display:block;
  left:0px;
  top:92.5px;
  position: absolute;
  border-radius:0px 7px 7px 0px; 
  line-height: 20px;
  cursor:pointer;
  transition:0.3s;
}
.left_btn:hover{
    background: rgba(180,180,180,0.7);
}
.right_btn{
  width: 18px;
  height: 20px;
  font-weight: bolder;
  background: rgba(180,180,180,0.05);
  color:#fff;
  display:block;
  text-align: right;
  right:0px;
  top:92.5px;
  position: absolute;
  border-radius:7px 0px 0px 7px; 
  line-height: 20px;
  cursor:pointer;
  transition:0.3s;
}
.right_btn:hover{
    background: rgba(180,180,180,0.7);
}
.points{
    width: 70px;
    height: 30px;
    position:absolute;
    /* background-color: black; */
    /* botton:15px; */
    left:40px;
    border-radius:7px

    
}
.points li{
    width: 8px;
    height: 8px;
    background-color: rgba(255,255,255,0.5);
    float:left;
    margin:3px;
    border-radius:50%;
    list-style: none;
}

</style>