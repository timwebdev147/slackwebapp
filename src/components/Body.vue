<template>
    
    <div class="accordion">
        <h1>Where Shipping code happens</h1>
        <p>whatever you do, you can use Slack for your business</p>
        <div> 
            <button class="btn2">TRY SLACK</button>
            <button class="btn1">CONTACT SALES</button>
        </div>
    </div>
                
    <div class="teams">
        <div class="team-text">
            <h1>For all kind of teams</h1>
            <p>No matter which branch of the org chart you call home you can keep your team's communication organized and efficient in slack.</p>
        </div>
        <div class="grid">
            <div class="row">
                <div class="column">
                    <i class="fa fa-file-code" aria-hidden="true"></i>
                    <h1>Engineering</h1>
                    <p>release better code faster by bringing developers, code changes and tool into one place</p>
                    <i class="fa fa-arrow-right-long"></i>
                </div>
                <div class="column">
                    <i class="fa fa-desktop" aria-hidden="true"></i>
                    <h1>IT</h1>
                    <p>Resolve urgent issues, automate your workflow and keep users educated, all in less time</p>
                    <i class="fa fa-arrow-right-long"></i>
                </div>
                <div class="column">
                    <i class="fa fa-headphones " aria-hidden="true"></i>
                    <h1>Customer Service</h1>
                    <p>Keep your customers happy by getting answers and reaching resolutions with help from your organisation</p>
                    <i class="fa fa-arrow-right-long"></i>
                </div>
            </div>

            <div class="row">
                <div class="column">
                    <i class="fa fa-headphones " aria-hidden="true"></i>
                    <h1>Customer Service</h1>
                    <p>Keep your customers happy by getting answers and reaching resolutions with help from your organisation</p>
                    <i class="fa fa-arrow-right-long"></i>
                </div>
                
                     <div class="column column-row">
                        <div>
                    <i class="fa fa-file " aria-hidden="true"></i>
                    <h1>Project management</h1>
                    <i class="fa fa-arrow-right-long"></i>
                        </div>
                        <div>
                    <i class="fa fa-file " aria-hidden="true"></i>
                    <h1>Marketing</h1>
                    <i class="fa fa-arrow-right-long"></i>
                        </div>
                    </div>
                
                    <div class="column column-row">
                        <div>
                    <i class="fa fa-shield " aria-hidden="true"></i>
                    <h1>Security</h1>
                    <i class="fa fa-arrow-right-long"></i>
                        </div>
                        <div>
                    <i class="fa fa-person " aria-hidden="true"></i>
                    <h1>Human Resources</h1>
                    <i class="fa fa-arrow-right-long"></i>
                        </div>
                    </div>
                
            </div>        
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppBody'
    
}
</script>

<style>

.accordion > h1{
    color: black;
    font-weight: 800;
    font-size: 35px;
    
}
.accordion > p{
    color: black;
    font-weight: bold;
}
.accordion{
    margin-bottom: 50px;
}
.btn2{
  background: #4a154b;
  border: 1px solid #4a154b;
  padding: 10px 20px;
  color: #fff;
}
.btn1{
  background: transparent;
  border: 1px solid #4a154b;
  padding: 10px 20px;
  color: #4a154b;
  margin-left: 20px;
}
.teams{
    height: 120vh;
    max-width: 100%;
    /* border: 1px solid black; */
    background-color: #fdf1f3;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 50px;
    padding-top: 30px ;
    
}
.team-text{
    width: 33%;
    
}
.team-text > h1{
    text-align: left;
    color: black;
}
.team-text > p {
    text-align: left;
    color: black;
    font-size: 14px;
}
.teams::before{
    content: '';
    background-image: url('/src/assets/pngegg.png');
    z-index: 1;
    width: 40%;
    height: 50vh;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: top right;
    position: absolute;
    top: -80px;
    right: 50px;
    transform: scaleX(-1) rotate(35deg);
}
.grid{
    /* border: 1px solid black; */
    width: 75%;
    min-height: 78vh;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 20px;
    /* flex-wrap: wrap; */
}
.row{
    display: flex;
    /* flex-direction: column; */
    flex-wrap: wrap;
    width: 100%;
    height: 48%;
    justify-content: space-between;
    /* border: 1px solid black; */
}
.row > .column{
    width: calc(32% - 40px);
    height: 100%;
    /* border: 1px solid black; */
    background-color: white;
    box-shadow: 2px 2px 4px rgb(177, 176, 176);
    padding-left: 20px;
    padding-right: 20px;
}
.column-row{
    width: 66%;
    height: 100%;
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    /* flex-wrap: wrap; */

}
.column{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;

    /* padding-left: 20px; */
}
.column > h1{
    text-align: left;
    color: black;
    /* opacity: 0; */
    margin-top: 20px;
    margin-bottom: 0;
    font-size: 15px;
    /* font-stretch: semi-condensed; */
    font-weight: 10px;
}
.column > p{
    text-align: left;
    color: rgb(92, 90, 90);
    margin-top: 20px;
    font-size: 15px;
    /* font-stretch: semi-condensed; */
}
/* .column-row > div{
    width: 100%;
    height: 46%;
    border: 1px solid black;
   
} */

.column.column-row{
    /* margin: 50px 50px 0 250px; */
    padding: 0;
    background-color: transparent;
    width: 32%;
    
    
}
.row > .column-row{
    box-shadow: none;
}
.column.column-row > div{
    position: relative;
}
.column.column-row > div{
    width: calc(100% - 40px);
     display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 20px;

}
.column.column-row > div > h1{
    text-align: left;
    color: black;
    /* opacity: 0; */
    margin-top: 20px;
    margin-bottom: 0;
    font-size: 15px;
    /* font-stretch: semi-condensed; */
    font-weight: 10px;
}

.column-row > div {
    width: 100%;
    height: 46%;
    /* border: 1px solid black; */
     display: flex;
    /* justify-content: space-between; */
    flex-direction: column;
    background-color: white;
    box-shadow: 2px 2px 4px rgb(177, 176, 176);
}
.fa-headphones, .fa-desktop, .fa-file-code,.fa-person,.fa-shield,.fa-file {
    font-size: 40px;
    margin-top: 20px;
    color: black;
}
.column > .fa-arrow-right-long{
    /* margin: 0px 50px 0 250px;
     */
     position: absolute;
     bottom: 30px;
     right: 40px;
}
.column.column-row > div > .fa-arrow-right-long{
    position: absolute;
     bottom: 20px;
     right: 40px;
     
}


</style>


 <style>
 @media (min-width: 375px) and (max-width: 812px) {
     .team-text > h1{
    color: black;
    font-weight: 800;
    font-size: 30px;
    text-align: center;
    /* padding: 0 25px; */
    
}
.team-text{
    
    width: 90%;
    z-index: 1;
    /* border: 1px solid black; */
    height: 200px;
}
/* .team-text{
   
} */
.teams{
    align-items: center;
    padding-left: 0;
    min-height: calc(250vh + 200px);
}
.grid{
    width: 100%;
    min-height: 250vh;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}
.row{
    width: 90%;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    /* border: 1px solid black; */
    margin-bottom: 20px;
}
.row >.column{
    width: calc(100% - 40px);
    height: 32%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0;
    padding-left: 20px;
    padding-right: 20px;
}
.column{
    position: relative;
}
.column-row{
    /* width: 100%;
    height: 66%; */
    /* border: 1px solid black; */
    /* display: flex;
    flex-direction: column;
    justify-content: space-between; */
}
.column-row > div{
    /* width: 100%;
    height: 48%; */
    /* border: 1px solid black; */
    /* display: flex;
    justify-content: space-between; */
}
.team-text > p{
    color: black;
    font-weight: bold;
    text-align: center;
    /* padding: 0 50px; */
}
.column.column-row{
    /* margin: 50px 50px 0 250px; */
    padding: 0;
    background-color: transparent;
    width: 100%;
}
.column > .fa-arrow-right-long{
    /* margin: 0px 50px 0 250px;
     */
     position: absolute;
     bottom: 30px;
     right: 40px;
}

.btn2{
  background: #4a154b;
  border: 1px solid #4a154b;
  padding: 5px 15px;
  color: #fff;
}
.btn1{
  background: transparent;
  border: 1px solid #4a154b;
  padding: 5px 15px;
  color: #4a154b;
  margin-left: 20px;
}
 }
 </style>