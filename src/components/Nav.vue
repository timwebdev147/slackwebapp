<template>
  <nav v-bind:class="{pushDown: isActive, sticky: scrollPosition > 2}">
    
    <ul>
      <a href="">Slack</a>
      <a href=""><li>{{list1}}</li></a>
      <a href=""><li>{{list2}}</li></a>
      <a href=""><li>{{list3}}</li></a>
      <a href=""><li>{{list4}}</li></a>
      <a href=""><li>{{list5}}</li></a>
    </ul>

    <ol>
      <a class="sign" href=""><li>sign up</li></a>
      <a href=""><button class="btn1">TALK TO SALES</button></a>
      <a href=""><button class="btn2">TRY FOR FREE</button></a>
     <div>
        <button @click="toggle()" v-bind:class="{active: isActive, ddbtn1: !isActive}"><i ref="toggleIcon" class="fa" v-bind:class="{'fa-xmark': !isActive}" ></i></button>
        <button @click="toggle()" v-bind:class="{times: !isTimes, ddbtn2: isTimes}"><i ref="toggleIcon" class="fa fa-bars" ></i></button>
    </div>
    </ol>
   
<!-- <br> -->
    <div>
      
      <ul v-if="isActive" >
      <a href=""><li>{{list1}}</li></a>
      <a href=""><li>{{list2}}</li></a>
      <a href=""><li>{{list3}}</li></a>
      <a href=""><li>{{list4}}</li></a>
      <a href=""><li>{{list5}}</li></a>
      <a href=""><li>sign up</li></a>
      <a href=""><button class="btn1">TALK TO SALES</button></a>
      <a href=""><button class="btn2">TRY FOR FREE</button></a>
    </ul>

    </div>
  </nav>
  
  <!-- <HelloWorld msg="Hello World!"/> -->
  <!-- <button @click="count++">count is: {{count}}</button> -->
</template>

<script>
// import func from 'vue-editor-bridge'
// import HelloWorld from './components/HelloWorld.vue'



export default {
  name: 'NavBar',
  
  data() {
    return {
      count: 4,
      isActive: false,
      ham: false,
      isTimes: true,
      list1: "product",
      list2: "solution",
      list3: "enterprises",
      list4: "resources",
      list5: "prices",
      scrollPosition: 0,
      
    };
  },
  methods: {
    toggle () {
    this.isActive = !this.isActive;
    this.isTimes = !this.isTimes;
     console.log(this.$refs.toggleIcon)
    },
    updateScroll () {
      this.scrollPosition = window.scrollY;
      console.log(this.scrollPosition)
    }
    },
    mounted() {
      window.addEventListener('scroll', this.updateScroll)
    }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  width: 100%;
}
button {
  font-weight: bold;
}
nav{
  width: 100%;
  min-height: 80px;
  display: flex;
  /* background-color: #2c3e50; */
  align-items: center;
  /* border: 1px solid black; */
  position: relative;
  flex-wrap: wrap;
}
nav > ul > a:first-child{
  font-size: 30px;
  margin-left: 30px;
  color: #4a154b;
}
nav > ul{
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 50%;
  flex-wrap: wrap;
  list-style: none;
  /* border: 1px solid black; */
}
nav > ol{
  display: flex;
  justify-content: space-between;
  list-style: none;
  min-width: 40%;
  align-items: center;
  /* position: absolute; */
  /* right: 50px; */
  flex-wrap: wrap;
  /* border: 1px solid black; */
}
nav > ol > div {
  display: none;
}
nav > div{
  /* visibility: hidden; */
  display: none;
  background-color: #2c3e50;
  /* height: 800px; */
    /* width: 200px;
    border: 1px solid black;
    background-color: #2c3e50; */
}
nav > button{
  visibility: hidden;
}
nav > ul > a, nav > ol > a{
  text-decoration: none;
  color: #4a154b;
  font-weight: 600;
  text-transform: capitalize;


}
.sign{
  margin-left: 100px;
}
nav > ol > a > .btn1{
  background: transparent;
  border: 1px solid #4a154b;
  padding: 10px 20px;
  color: #4a154b;
}
nav > ol > a > .btn2{
  background: #4a154b;
  border: 1px solid #4a154b;
  padding: 10px 20px;
  color: #fff;
}
.sticky{
    position: fixed;
    z-index: 5;
    background-color: #fff;
    box-shadow: 0px 0px 4px grey;
    margin: 0;
    top: 0;
    left: 0;
    right: 0;
  }




</style>

<style>
@media (min-width: 375px) and (max-width: 812px) {
  nav{
    min-height: 80px;
    justify-content: space-between;
    
    background-color: #fff
    
    
    /* position: relative; */
  }
  .sticky{
    position: fixed;
    z-index: 5;
    background-color: #fff;
    box-shadow: 0px 0px 4px grey;
  }
  .pushDown{
  /* padding-bottom: 220px; */
}
nav > div > ol{
  
}
  nav > ul > a, nav > ol > a{
    display: none;
    /* visibility: none; */
  }
  nav > ul > a:first-child{
    display: block;
    margin-left: 0px;
  }
  nav > ul{
    min-width: 10%;
    /* border: 1px solid black; */
  }
  nav > ol > div{
    margin-left: auto;
    padding-right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  nav > ol > div > button{
    background: transparent;
    font-size: 30px;
    border: none;
  }
  nav > button{
    
  }
  nav > div{
    /* position: absolute; */
    display: block;
    min-height: 0px;
    /* border: 1px solid black; */
    /* right: 0; */
    background: transparent;
    /* top: 0; */
    width: 100%;
  }
  nav > div > div{
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    /* position: inherit; */
    /* right: 0; */
    border: 1px solid black;
  }
  /* nav > div > div > button{
    position: absolute;
    right: 10px;
    top: 20px;
    background: transparent;
    font-size: 30px;
    border: 1px solid black;
  } */
  .ddbtn1 {
    display: none;
  }
  .ddbtn2 {
    display: block;
  }
  /* button > .fa-xmark{
    display: none;
  } */
  
  /* svg{
    display: none;
  } */
  nav > div > ul{
    /* margin-top: 60px; */
    /* position: absolute; */
    list-style: none;
    /* visibility: hidden; */
    /* z-index: 3; */
    /* border: 1px solid black; */
    /* height: 250px; */
    
    padding: 20px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: space-evenly;
    border-top-left-radius: 30px;
    border-bottom-right-radius: 30px;
    animation-name: smooth;
    animation-delay: 0s;
    animation-duration: 0.5s;
    animation-timing-function: ease-in;
    animation-fill-mode: forwards;
    /* top: 50px; */
  }
  @keyframes smooth {
    from {background-color: rgba(128, 128, 128, 0);
          height: 0px;}
    to {background-color: rgba(128, 128, 128, 0.1);
        height: 250px;}
  }
  
  .active{
    visibility: initial;
    display: block;
    
  }
  .times{
    visibility: hidden;
    display: none;
  }
  
  nav > div > ul > a{
    text-decoration: none;
    color: #4a154b;
    text-transform: capitalize;
  }
  nav > div > ul > a  .btn1{
  background: transparent;
  border: 1px solid #4a154b;
  padding: 5px 10px;
  color: #4a154b;
  margin: 0;
  }
  nav > div > ul > a  .btn2{
  background: #4a154b;
  border: 1px solid #4a154b;
  padding: 5px 10px;
  color: #fff;
  margin: 0;
  }

}
</style>
