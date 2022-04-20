<template>
    <div class="preFooter">
        <h1>Choose a better way to work</h1>
        <div>
        <a href=""><button class="btn2">TRY SLACK</button></a>
        <a href=""><button class="btn1">TALK TO SALES</button></a>
        </div>
    </div>

    <footer>
       <!-- <div class="footerNav">
            <div>
                <h1>WHY SLACK?</h1>
                <ul>
                    <a href="">
                        <li>
                            Slack vs Email
                        </li>
                    </a>
                    <a href="">
                        <li>
                            Channels
                        </li>
                    </a>
                    <a href="">
                        <li>
                            Engagement
                        </li>
                    </a>
                    <a href="">
                        <li>
                            Scale
                        </li>
                    </a>
                    <a href="">
                        <li>
                            Watch the demo
                        </li>
                    </a>
                </ul>
            </div>
            <div>
                <h1>PRODUCT</h1>
                <ul>
                    <a href="">
                        <li>
                            Features
                        </li>
                    </a>
                    <a href="">
                        <li>
                            Integrations
                        </li>
                    </a>
                    <a href="">
                        <li>
                            Enterprise
                        </li>
                    </a>
                    <a href="">
                        <li>
                            Solutions
                        </li>
                    </a>
                </ul>
            </div>
            <div>
                <h1>PRICING</h1>
                <ul>
                    <a href="">
                        <li>
                            Plans
                        </li>
                    </a>
                    <a href="">
                        <li>
                            Paid vs. Free
                        </li>
                    </a>
                </ul>
            </div>
            <div>
                <h1>RESOURCES</h1>
                <ul>
                    <a href="">
                        <li>
                            Partners
                        </li>
                    </a>
                    <a href="">
                        <li>
                            Developers
                        </li>
                    </a>
                    <a href="">
                        <li>
                            Community
                        </li>
                    </a>
                    <a href="">
                        <li>
                            Apps
                        </li>
                    </a>
                    <a href="">
                        <li>
                            Blogs
                        </li>
                    </a>
                    <a href="">
                        <li>
                            Help Center
                        </li>
                    </a>
                    <a href="">
                        <li>
                            Events
                        </li>
                    </a>
                </ul>
            </div>
            <div>
                <h1>COMPANY</h1>
                <ul>
                    <a href="">
                        <li>
                            About Us
                        </li>
                    </a>
                    <a href="">
                        <li>
                            Leadership
                        </li>
                    </a>
                    <a href="">
                        <li>
                            Investor Relations
                        </li>
                    </a>
                    <a href="">
                        <li>
                            News
                        </li>
                    </a>
                    <a href="">
                        <li>
                            Media Kits
                        </li>
                    </a>
                    <a href="">
                        <li>
                            Careers
                        </li>
                    </a>
                </ul>
            </div>
        </div> -->


        <div class="copyright">
            <div>
                <ul>
                    <a href="">Status</a>
                    <a href="">Privacy</a>
                    <a href="">Terms</a>
                    <a href="">Cookie preferences</a>
                    <a href="">Contact Us</a>
                    <a href="">Change region</a>
                </ul>
                <p>
                    &copy; 2022 Slack technologies, LLC, a Salesforce. All rights reserved. Various trademark heldby their respective owners.
                </p>
            </div>
            <div>
                <p>
                    Download Slack
                </p>
                <ul>
                    <i class="fa fa-car"></i>
                    <i class="fa fa-dashboard"></i>
                    <i class="fa fa-hotel"></i>
                    <i class="fa fa-house"></i>
                </ul>
            </div>
        </div>
    </footer> 
</template>

<script>
export default {
    name: 'fooTer'
}
</script>

<style scoped>
    .preFooter{
        width: 100%;
        height: 45vh;
        border: 1px solid black;
        background-color: #4a154b;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .preFooter > h1{
        color: #fff;
    }
    .preFooter > div > a > .btn2{
        color: #4a154b;
        background-color: #fff;
        border: 2px solid #4a154b;
        font-size: 15px;
    }
    .preFooter > div > a > .btn1{
        color: #fff;
        background-color: #4a154b;
        border: 2px solid #fff;
        font-size: 15px;
    }
    footer{
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        /* justify-content: center; */
        /* border: 1px solid black; */
    }
    footer > .footerNav{
        width: 65%;
        min-height: 20vh;
        /* border: 1px solid black; */
        display: flex;
        padding:100px 0 ;
    }
    footer > .footerNav > div{
        width: 20%;
        /* border: 1px solid black; */
        height: 100%;
    }
    footer > .footerNav > div > h1{
        color: black;
        font-size: 15px;
        text-align: left;
    }
    footer > .footerNav > div > ul {
        list-style-type: none;
        padding: 0;
        /* border: 1px solid black; */
        line-height: 2.5;

    }
    footer > .footerNav > div > ul > a{
        text-decoration: none;
        color: black;
        text-align: left;
        font-size: 13px;
        opacity: 0.9;
        font-weight: 600;
        /* border: 1px solid black; */
        /* margin: 0; */
    }
    .copyright{
        display: flex;
        justify-content: space-between;
        width: calc(100% - 100px) ;
        padding: 0 50px;
    }
    .copyright > div:nth-child(1){
        /* border: 1px solid black; */
        display: flex;
        flex-direction: column;
        align-items: flex-start;

    }
    .copyright > div:nth-child(1) > ul{
        padding: 0;
        
    }
    .copyright > div:nth-child(1) > ul > a{
        margin-right: 40px;
        text-decoration: none;
        color: black;
        font-size: 13px;
        font-weight: 600;
    }
    .copyright > div:nth-child(1) > p{
        font-size: 11px;
    }
    .copyright > div:nth-child(2){
        display: flex;

    }
    .copyright > div:nth-child(2) > p{
        color: blue;
    }
    .copyright > div:nth-child(2) > ul {
       width: 100px;
       display: flex;
       justify-content: space-between;
    }
</style>


<style scoped>
@media (min-width: 375px) and (max-width: 812px){
    .preFooter{
        width: 100%;
        height: 30vh;
        margin: 0;
        border: 1px solid black;
        background-color: #4a154b;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .preFooter > h1{
        color: #fff;
    }
    .preFooter > div > a > .btn2{
        color: #4a154b;
        background-color: #fff;
        border: 2px solid #4a154b;
        font-size: 15px;
    }
    .preFooter > div > a > .btn1{
        color: #fff;
        background-color: #4a154b;
        border: 2px solid #fff;
        font-size: 15px;
    }
    footer{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0;
        margin: 0;
        /* justify-content: center; */
        /* border: 1px solid black; */
    }
    footer > .footerNav{
        width: calc(100% - 30px) ;
        min-height: 20vh;
        /* border: 1px solid black; */
        flex-wrap: wrap;
        display: flex;
        padding: 30px 15px;
    }
    footer > .footerNav > div{
        width: 30%;
        /* border: 1px solid black; */
        height: 100%;
    }
    footer > .footerNav > div > h1{
        color: black;
        font-size: 15px;
        text-align: left;
    }
    footer > .footerNav > div > ul {
        list-style-type: none;
        margin-left: 0;
        /* border: 1px solid black; */

    }
    footer > .footerNav > div > ul > a >li{
        text-decoration: none;
        color: black;
        text-align: left;
        /* border: 1px solid black; */
        margin-left: 0;
    }
     .copyright{
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-between;
        width: calc(100%) ;
        /* padding: 0 50px; */
    }
    .copyright > div:nth-child(1){
        /* border: 1px solid black; */
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        align-items: center;

    }
    .copyright > div:nth-child(1) > ul{
        padding: 0;
        display: flex;
        flex-direction: column;
        /* width: 100%; */
        justify-content: center;
        /* align-items: center; */
        /* border: 1px solid black; */
        /* height: 20vh; */
    }
    .copyright > div:nth-child(1) > ul > a{
        /* margin-right: 40px; */
        margin-bottom: 10px;
        /* padding: 0 10px; */
        width: 100%;
        /* border: 1px solid black; */
        text-decoration: none;
        text-align: center;
        color: black;
        font-size: 13px;
        font-weight: 600;
    }
    .copyright > div:nth-child(1) > p{
        font-size: 11px;
    }
    .copyright > div:nth-child(2){
        display: flex;
        /* border: 1px solid black; */
        justify-content: center;
    }
    .copyright > div:nth-child(2) > p{
        color: blue;
        /* border: 1px solid black; */
    }
    .copyright > div:nth-child(2) > ul {
       width: 100px;
       display: flex;
       justify-content: space-between;
    }
}
</style>