<template>

    <section class="section">
        <div class="faq">
            <hr>
        <div @click="toggle1()" class="questions" :class="{active: !show1}">
            <h1>Why should my company use Slack?</h1>
            <button v-if="show1"><i class="fa fa-angle-down"></i></button>
            <button v-if="!show1"><i class="fa fa-times"></i></button>
            <p>ans: {{answers}}</p>
        </div>
        <hr>
        <div @click="toggle2()" class="questions" :class="{active: !show2}">
            <h1>How can we use Slack effectively?</h1>
            <button v-if="show2"><i class="fa fa-angle-down"></i></button>
            <button v-if="!show2"><i class="fa fa-times"></i></button>
            <p>ans: {{answers}}</p>
        </div>
        <hr>
        <div @click="toggle3()" class="questions" :class="{active: !show3}">
            <h1>Is Slack secure?</h1>
            <button v-if="show3"><i class="fa fa-angle-down"></i></button>
            <button v-if="!show3"><i class="fa fa-times"></i></button>
            <p>ans: {{answers}}</p>
        </div>
        <hr>
        <div @click="toggle4()" class="questions" :class="{active: !show4}">
            <h1>Is Slack more secure than email?</h1>
            <button v-if="show4"><i class="fa fa-angle-down"></i></button>
            <button v-if="!show4"><i class="fa fa-times"></i></button>
            <p>ans: {{answers}}</p>
        </div>
        <hr>
        <div @click="toggle5()" class="questions" :class="{active: !show5}">
            <h1>What is Slack connect?</h1>
            <button v-if="show5"><i class="fa fa-angle-down"></i></button>
            <button v-if="!show5"><i class="fa fa-times"></i></button>
            <p>ans: {{answers}}</p>
        </div>
        <hr>
        </div>

    </section>

</template>

<script>
export default {
    name: "faQ",
    data() {
        return {
            answers: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet sapien a mi rutrum scelerisque. In massa urna, consectetur",
            show1: true,
            show2: true,
            show3: true,
            show4: true,
            show5: true
        }
    },
    methods: {
        toggle1() {
            this.show1 = !this.show1
        },
        toggle2() {
            this.show2 = !this.show2
        },
        toggle3() {
            this.show3 = !this.show3
        },
        toggle4() {
            this.show4 = !this.show4
        },
        toggle5() {
            this.show5 = !this.show5
        }
    }
}
</script>

<style scoped>
    .section{
        width: calc(100% - 100px);
        min-height: 45vh;
        /* border: 1px solid black; */
        margin-top: 230px;
        margin-bottom: 100px;
        padding: 10px 50px;
    }
    .section > .faq{
        min-height: 45vh;
        width: 100%;
        /* background-color: aqua; */
        /* border: 1px solid red; */
    }
    .section > .faq > .questions{
        width: 100%;
        height: 6.5vh;
        /* border: 1px solid black; */
        position: relative;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
    }
    .section > .faq > .questions > button{
        position: absolute;
        right: 10px;
        top: 30%;
        background-color: transparent;
        border: none;
    }
    .section > .faq > .questions > h1{
        /* text-align: left; */
        /* padding-left: 20px; */
        font-size: 16px;
    }
    .section > .faq > .questions > p{
        display: none;
        position: absolute;
    }
    .section > .faq > hr{
        opacity: 0.2;
        
    }
    .section > .faq > .active{
        /* height: 20vh; */
         padding-bottom: 70px ;
        transition: 0.5s;
    }
    .section > .faq > .active > p{
        display: block;
        position: absolute;
        bottom: 2px;
        text-align: left;
    }
</style>
<style scoped>
@media (min-width: 375px) and (max-width: 812px){
    .section{
        width: calc(100% - 30px);
        min-height: 45vh;
        /* border: 1px solid black; */
        margin-top: 20px;
        padding: 0 15px;
    }
    .section > .faq{
        min-height: 50vh;
        width: 100%;
        /* background-color: aqua; */
        /* border: 1px solid red; */
    }
    .section > .faq > .questions{
        width: calc(100% - 40px) ;
        height: 10vh;
        /* border: 1px solid black; */
        padding: 0 20px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
    }
    .section > .faq > .active{
        /* height: 25vh; */
        padding-bottom: 100px ;
        transition: 0.5s;
    }
    
}
</style>
