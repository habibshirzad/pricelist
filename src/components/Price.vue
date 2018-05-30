<template>
    
   <div>
        <div style="overflow-x:auto;">
       <div class="topnav" style="overflow-x:auto;">
           <div class="pc">
                <div class="container">
                    <div class="flex">
                        <div class="flex">
                             <a  href=""><i class="fa fa-user" aria-hidden="true"></i>  home</a>
                             <a  href=""><i class="fa fa-user-plus" aria-hidden="true"></i> home</a>
                             <a  href=""><i class="fa fa-bar-chart" aria-hidden="true"></i> home</a>
                            
                             <a  href=""><i class="fa fa-heart" style="color:#b19115" aria-hidden="true"></i> home
                                  <div class="count_border">0</div>
                             </a>
                             
                        </div>
                        <div class="flex">
                            <a  href=""><i class="fa fa-shopping-cart" aria-hidden="true"></i> home 
                            <div class="count_border">0</div></a> 

                            <div>
                                 <input type="text" style="width:50px" placeholder=" 0 KZT">
                                 <button style="border-radius:6%;border:0;width:80px;color:rgb(204, 136, 9);background-color:rgb(255, 230, 5)"> button </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mob">
                <button class="menu_btn">
                        <i class="fa fa-bars" aria-hidden="true"></i>
                </button>
                <div class="list_menu">
                    <a  href=""><i class="fa fa-user" aria-hidden="true"></i>  home</a>
                    <a  href=""><i class="fa fa-user-plus" aria-hidden="true"></i> home</a>
                    <a  href=""><i class="fa fa-bar-chart" aria-hidden="true"></i> home</a>
                    <a  href=""><i class="fa fa-heart" style="color:#b19115" aria-hidden="true"></i> home <div class="count_border">0</div></a>
                    <div class="flex">
                        <a  href=""><i class="fa fa-shopping-cart" aria-hidden="true"></i> home 
                        <div class="count_border">0</div></a> 
                        <div>
                            <input type="text" style="width:50px" placeholder=" 0 KZT">
                            <button style="border-radius:6%;border:0;width:80px;color:rgb(204, 136, 9);background-color:rgb(255, 230, 5)"> button </button>
                        </div>
                    </div>
                </div>     
            </div>
        </div>
    </div>
       <!-- banner -->
    <div>
        <img class="header" src="https://images.pexels.com/photos/5390/sunset-hands-love-woman.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""> 
    </div>

        <!-- main content -->
    <div class="row" style="overflow-x:auto;">      
            <!-- side bar -->
            <div class="column aside" style="overflow-x:auto; ">
                <nav>
                    <h2 style="text-align:center;color:gray">header for links</h2>
                    <li>
                        <a class="nav-link" style="color:gray;" href="">hhhhhhhhhhhhhhhhhhhhhhhh</a>
                    </li>
                    <li>
                        <a style="color:gray" href="">hhhhhhhhhhhhhhhhhhhhhhhh</a>
                    </li>
                    <li>
                        <a style="color:gray" href="">hhhhhhhhhhhhhhhhhhhhhhhh</a>
                    </li>
                    <li>
                        <a style="color:gray" href="">hhhhhhhhhhhhhhhhhhhhhhhh</a>
                    </li>
                </nav>
            </div>
            <!-- main list -->
            <div class="main column" style="overflow-x:auto;">
                
                <select name="one" id=""><option value="">asd</option></select>
                <select name="two" id=""><option value="">asd</option></select>
                <select name="three" id=""><option value="">asd</option></select>
                <select name="four" id=""><option value="">asd</option></select>

                <table>
                    <tr class="head">
                        <th >photo</th>
                        <th>v code</th>
                        <th>description</th>
                        <th>discount</th>
                        <th>the no of</th>
                        <th>price</th>
                        <th>price</th>
                    </tr>
                    <tr>
                        <td><img class="img" src="http://kaleagasi.net/wp-content/gallery/pictures/earthrise.jpg" alt=""></td>
                        <td class="description" >111111111111111</td>
                        <td class="description">john.com fdfasd dsdf dsfasdf fadsf  </td>
                        <td class="text">5%</td>
                        <td class="text">2000</td>
                        <td class="text">1800</td>
                        <td class="text">12</td>
                    </tr>
                </table>
            </div>
    </div>
   </div>

</template>

<script>
export default {
    
}
</script>


<style>
    * {
    box-sizing: border-box;
    }
   

    body {
        margin: 0;
    }
     
    .topnav{
       
        background-color: orange;
    }

    .topnav a{
        display: block;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        color: #f2f2f2;    
    }
    .topnav a:hover{
        background-color: #ddd;
        color: black;  
    }
    .column.aside{
        float: left;
        width: 33%;
        padding: 15px;
        
    }
    .main.column{
        float: left;
        width: 67%;
        padding: 15px;
        /* border: solid black 1px; */
        margin-top: 20px
    }
    /* Clear floats after the columns */
    .row:after{
        content: "";
        display: table;
        clear: both
    }
    .row{
        margin-left: 10px;
        margin-right: 20px
    }
   
    .header{
        height: 300px;
        width: 100%;
        text-align: center;
    }
    li{
    
        display: block;
        border: 1px solid gray; 
        margin-top: 5px;
        text-align: center;
        padding: 14px 25px; 
        
    }
    .img
    {   height: 100px;
        width: auto;
        display: block;
        margin-right: auto;
        margin-left: auto;
    }
    .text
    {  
       
        text-align: center;
        
        
    }

    .description{
        padding-top: auto;
        margin-top: auto;
        text-align: center;
        /* width: 10em; */
    }
    
    .active
    {
        color: aliceblue;
        background-color: pink
    }
    .head{
        text-align: center;
        background-color: orange;
        color: white;
        width: auto
    }
    .orange{
        border: 1px orange solid;
        margin-bottom: 20px;
        width: auto;
        align-content: center
    }
    .tablee{
        width: 100%;
    max-width: 100%;
    margin-bottom: 1rem;
    background-color: transparent;
    border-collapse: collapse;
    display: table;
    }
    *, ::after, ::before {
    box-sizing: border-box;
}
nav a {
    word-wrap: break-word;
    /* font-size: 5vw */
}
    
    .table-borderedd {
    border: 1px solid #dee2e6;
    }
    table td,th {
        border:1px solid orange ;
    }
    .container {
        width: 80%;
        margin:  0 auto;
    }
    .flex {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .mob{
        display: none;
    }
    .menu_btn {
        background: transparent;
        border: 0;
    }
    .menu_btn i {
        font-size: 26px;
        color: #ffffff;
    }
    .list_menu {
        background: #ffffff;
        display: none;
        text-align: left;
        padding-left: 1em;
    }
    .list_menu a {
        text-align: left;
        color: #000000;
    }
    @media  (max-width: 900px) {
        .pc {
            display: none;
        }
        .mob {
            display: block;
        }
    }
    @media  (max-width: 500px) {
        .column.aside h2 {
            font-size: 3vw;
        }
    }
    .count_border {
        background: #ffffff;
        border-radius: 50%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 23px;
        height: 23px;
    }
    select, select:focus, select:active, section:hover {
        color: orange;border-color: orange; outline: none;
    }
    .default{
        margin-left:4px;
        background-color:rgb(230, 158, 247, 147, 35);
        
        border-radius: 5%
    }
</style>

<!-- jquery src link -->

<script>
    var click = 0;
    $("body").on('click', '.menu_btn', function(){
        if(click == 0 ) {
            $('.list_menu').slideDown();
            click = 1;
        } else {
            click = 0;
            $('.list_menu').slideUp();
        }
    });
</script>