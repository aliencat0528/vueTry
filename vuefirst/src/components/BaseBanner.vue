<template>
<header class='main-header'>
    <div class="space">
    <h1><a href="#">TestBannerRender</a></h1>
    <nav>
        <ul class="main-menu">
        <li><a href="#">About</a></li>
        <li>
            <a href="#">Feature</a>
            <ul class="sub-menu">
            <li><a href='#'>Feature-1</a></li>
            <li><a href='#'>Feature-2</a></li>
            <li><a href='#'>Feature-3</a></li>
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
        <li><a href="#">Login</a></li>
        </ul>
    </nav>
    </div>
</header>
</template>

<script>
export default {
  name: 'BaseBanner'
}
</script>

<style>

a {
    display: block;
    text-decoration: none;
    color:darkslategrey;
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
    justify-content:space-between;
}

.main-header h1 {
    line-height: 80px;
    margin: 0 10px;
}

.main-menu {
    display: flex;
    position: relative;
}

.main-menu li {
    position: relative;
    transition: .5s;
}

.main-menu li a {
    padding: 0 30px;
    line-height: 60px;
}

.main-menu li::after {
    content: '';
    position: absolute;
    height: 4px;
    left: 50%;
    right: 50%;
    bottom: 0;
    background-color:bisque;
    transition: .5s;
}
.main-menu a:hover{
    color:deeppink;
}

.main-menu li:hover {
    background-color:lightgoldenrodyellow;
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
    background-color:lemonchiffon;
    width: 150%;
    text-align: center;
    transform: translate(-50%, -150%);
    transition: .8s;
    /*z-index: -1;*/
}
ul{
    list-style-type: none;
}

</style>
