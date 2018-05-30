<template>
    
<div>
        <!-- main content -->
    <div class="row" style="overflow-x:auto;">      
        <!-- side bar -->
        <div class="column aside" style="overflow-x:auto; ">
            <nav>
                <h2 style="text-align:center;color:gray">header for links</h2>
                <li>
                    <a class="nav-link" style="color:gray;" href="">aaaahhhhhhhhhhhhhhhhhhhhhhhh</a>
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
            <div>
                <select v-on:change="getDiscount" v-for="filter in filters" :name=filter.id :key="filter.name" class="custom-select" style="width:213px;">
                    <option selected disabled>{{filter.name}}</option>
                    <option  v-for="value in filter.values" :key="value.name"  :value=value.sales[0].name>{{value.name}}</option>
                </select>   
                <br><br>
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <td>id</td> 
                                <td>image</td>
                                <td>availability</td>
                                <td>description</td>
                                <td>price</td>
                                <td>article</td>
                                <td>unit</td>
                                <td>total</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="product in products" :key="product.name">
                                <td v-for="id in product.id" :key="id">{{product.id}}</td>
                                <td v-for="image in product.id" :key="image.id"><img class="image" :src="`http://pricelist.maint.kz/profile/uploads/pricelist/${product.image}`" alt=""></td>
                                <td v-for="availability in product.id" :key="availability.id">{{product.availability}}</td>
                                <td v-for="description in product.id" :key="description.id">{{product.description}}</td>
                                <td v-for="price in product.id" :key="price.id">{{product.price}}</td>
                                <td v-for="article in product.id" :key="article.id">{{product.article}}</td>   
                                <td v-for="unit in product.id" :key="unit.id">{{product.unit}}</td> 
                                <td v-for="unit in product.id" :key="unit.id">{{product.price - (product.price * discount) / 100}}</td>  
                            </tr>
                        </tbody>
                    </table>
                </div>
                <router-link to="/"> back </router-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Final',
    data () {
        return {
            filters: [],
            products: [],
            selected: [],
            discount: 0
        }
    },

    methods: {
        getDiscount (event) {

            let exists = false;
            this.selected = this.selected.map( filter => {
                if( filter.id == event.target.name ) {
                    exists = true
                    filter.sale = parseInt(event.target.value)
                }
                return filter
            })
            if(!exists)
            this.selected.push({
                id: event.target.name,
                sale: parseInt(event.target.value)
            })
            this.discount = this.selected.reduce( (val, item) => {
                return val += (item.sale)
            }, 0)

        }
    },
    mounted () {
        axios.get('http://pricelist.maint.kz/profile/magaz/filters/').then(response => {
            this.filters = response.data
        }).catch(error =>{
            console.log(error);
        });
        
        axios.get('http://pricelist.maint.kz/profile/magaz/products/').then(response => {
             this.products = response.data
        })
        }
    }

</script>



<style>

.image{
  
    height: 70px;
    width:70px
}

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
