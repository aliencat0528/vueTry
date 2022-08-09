<template>
    <nav class="navbar navbar-expand-lg navbar-light mb-5" style="background-color: peachpuff">
        <a class="navbar-brand h3" href="#">NavBstrapTest</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#TestBstrapNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="TestBstrapNav">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0 navbar-nav-scroll" style="max-height: 150px;">
                <li class="nav-item active">
                    <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" data-target="#BsDropFeature" href="#">Feature</a>
                        <div class="dropdown-menu" id="BsDropFeature">
                            <a class="dropdown-item" href="#">Feature-1</a>
                            <a class="dropdown-item" href="#">Feature-2</a>
                            <a class="dropdown-item" href="#">Feature-3</a>
                        </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" data-target="#BsDropActivity" href="#">Activity</a>
                        <div class="dropdown-menu" id="BsDropActivity">
                            <a class="dropdown-item" href="#">Activity-1</a>
                            <a class="dropdown-item" href="#">Activity-2</a>
                            <a class="dropdown-item" href="#">Activity-3</a>
                        </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Login</a>
                </li>

            </ul>
            <!--wrong
            <div class="navbar-nav mr-auto mt-2 mt-lg-0">
                <a class="nav-item nav-link active" href="#">About</a>
                <a class="nav-item nav-link dropdown-toggle" data-toggle="dropdown" data-target="#TestBstrapDrop" href="#">Feature</a>
                    <div class="dropdown-menu" id="TestBstrapDrop">
                        <a class="dropdown-item" href="#">Feature-1</a>
                        <a class="dropdown-item" href="#">Feature-2</a>
                        <a class="dropdown-item" href="#">Feature-3</a>
                    </div>
                <a class="nav-item nav-link" href="#">Activity</a>
                <a class="nav-item nav-link" href="#">Login</a>
            </div>
            -->
            <form class="form-inline mr-1">
                <div class="input-group">
                    <!--<div class="input-group-prepend">
                        <span class="input-group-text"></span>
                    </div>-->
                    <input type="search" class="form-control my-2 my-sm-2 mr-2 mr-sm-2" placeholder="search">
                    <button class="btn btn-outline-info my-2 my-sm-2" type="submit">Search</button>
                </div>
            </form>
        </div>
    </nav>

</template>

<script>
export default{
  name: 'NavBarBstrap'
}
</script>
<style>

</style>
