<template>
    <header class="main-header">
    <div class="space">
        <h1 class="title"><a href="#">TestHamburger</a></h1>
        <nav>
        <input type="checkbox" id="menu">
        <ul class="main-menu">
            <li><a href="#">About</a></li>
            <li>
            <a href="#">Feature</a>
            <ul class="sub-menu">
                <li><a href="#">Feature-1</a></li>
                <li><a href="#">Feature-2</a></li>
                <li><a href="#">Feature-3</a></li>
            </ul>
            </li>
            <li>
            <a href="#">Activity</a>
            <ul class="sub-menu">
                <li><a href="#">Activity-1</a></li>
                <li><a href="#">Activity-2</a></li>
                <li><a href="#">Activity-3</a></li>
            </ul>
            </li>
            <li><a href="#/login">Login</a></li>
            <label class="label" for="menu"><span></span></label>
        </ul>
        </nav>
    </div>
    </header>
</template>

<script>
// import Login from '@/components/LoginInfo.vue'

export default {
  name: 'HamburgerTest'
  /* components: {
    Login
  } */
}
</script>

<style>
a {
    display: block;
    text-decoration: none;
    color: darkslategrey;
}

.main-header {
    width: 100%;
    background-color: wheat;
    z-index: -1;
}

.space {
    width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
}

.main-header h1 {
    line-height: 80px;
    margin: 0 10px;
}

.main-menu {
    display: flex;
    position: relative;
    padding: 0px;
}

.main-menu li {
    position: relative;
    transition: 0.5s;
}

.label{
    display: inline-block;
    position: absolute;
    right: -10%;
    border: 3px solid #fff;
    width: 40px;
    height: 40px;
    border-radius: 2px;
}

span{
    width: 20px;
    height: 40px;
    padding: 0 20px;
    line-height: 40px;
}

span::before,
span::after{
    content:'';
    width: 80%;
    height:3px;
    margin:auto;
    background-color: burlywood;
    border-radius: 4px;
    position: absolute;
    transition: .5s;
}
span::before{
    top: 30%;
    left: 10%
}

span:after{
    bottom: 30%;
    left: 10%
}

#menu{
    /*width: 30px;
    height: 60px;*/
    display: none;
}

#menu:checked~ .main-menu li{
    display: none;

}

.main-menu li a {
    padding: 0 30px;
    line-height: 40px;
}

.main-menu li::after {
    content: "";
    position: absolute;
    height: 4px;
    left: 50%;
    right: 50%;
    bottom: 0;
    background-color: bisque;
    transition: 0.5s;
}
.main-menu a:hover {
    color: deeppink;
}

.main-menu li:hover {
    background-color: lightgoldenrodyellow;
}

.main-menu li:hover::after {
    left: 0;
    right: 0;
}
.main-menu li:hover .sub-menu {
    transform: translate(-50%, 0);
}
.sub-menu {
    /*display: flex;  橫向子選單*/
    position: absolute;
    left: 50%;
    background-color: lemonchiffon;
    width: 120%;
    text-align: center;
    transform: translate(-50%, -150%);
    transition: 0.8s;
    /*z-index: -1;*/
}
ul {
    list-style-type: none;
}
</style>
