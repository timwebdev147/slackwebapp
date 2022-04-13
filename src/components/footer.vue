<template>
    <div class="preFooter">
        <h1>Choose a better way to work</h1>
        <div>
        <a href=""><button class="btn2">TRY SLACK</button></a>
        <a href=""><button class="btn1">TALK TO SALES</button></a>
        </div>
    </div>

    <footer>
        
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
</style>