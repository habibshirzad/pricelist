 <template>
    
<div>
    <header class="pc">
        <div class="header-top">
            <div class="container">
                <div class="top">
                    <div class="top-left">
                        <a href="#" class="item bold border">
                            <i class="fa fa-user"></i>
                            <span class="m-block m-none">Войти</span>
                        </a>
                        <a href="#" class="item border" data-toggle="modal" data-target="#registration">
                            <i class="fa fa-user-plus"></i>
                            <span>Регистрация</span>
                        </a>
                        <a href="#" class="item border">
                            <i class="fa fa-bar-chart"></i>
                            <span>Сравнение</span>
                            <span class="m-block count gray">0</span>
                        </a>
                        <a href="#" class="item border">
                            <i class="fa fa-heart"></i>
                            <span>Отложенные</span>
                            <span class="m-block count">0</span>
                        </a>
                        <a href="#" class="item bold border">
                            <i class="fa fa-file-text"></i>
                            <span>Прайс-лист</span>
                        </a>
                    </div>
                    <div class="top-right">
                        <a href="#" class="item bold cart">
                            <i class="fa fa-shopping-cart"></i>
                            <span>Моя корзина</span>
                            <span class="count dark">0</span>
                        </a>
                        <span class="sum_cont">
                            <span class="sum">
                                <span id="cartCounter">0</span>
                                <span class="curr"> KZT</span>
                            </span>
                        </span>
                        <button disabled>Оформить</button>
                    </div>
                </div>
            </div>
        </div>


                    <slider animation="fade">
                        <slider-item v-for="(i, index) in topbanner" :key="index">
                        <div :style="i">
                    	<img :src="`http://pricelist.maint.kz/profile/uploads/boxers/`+i.ava" />  
                         </div>
                        </slider-item>
                    </slider>
       <!-- img header banner -->
        <div class="header-img">
            <div class="header-animate"></div>
            <div class="header-animate2"></div>
            <div class="container">
                <div class="header-img-box">
                    <slider animation="fade">
                        <slider-item v-for="(i, index) in topbanner" :key="index">
                        <div :style="i">
                    	<img :src="`http://pricelist.maint.kz/profile/uploads/boxers/`+i.ava" />  
                         </div>
                        </slider-item>
                    </slider>
                    <div class="logo">
                        <a href="index.php">
                            <img src="assets/img/logo.png">
                        </a>
                    </div>
                    <div class="logo-text">
                        <h3>
                            Для работы с прайс листом, Вам необходимо <br>заполнить форму Пользователя.
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </header>








       

       
            <div class="col-md-4" style="margin-top:10px">
                <h3>{{mainFilter.name}}</h3>
                <ul v-for="value in mainFilter.values" :key="value.id">
                    <li @click="filterAndCalculateDiscount(value)">{{value.name}}</li>
                </ul>
                <div style="margin-left:40px">
                <slider animation="fade">
                    <slider-item v-for="(i,index) in sidebanner" :key="index">
                        <div :style="i">
                            <img :src="`http://pricelist.maint.kz/profile/uploads/boxers/`+i.ava" />
                        </div>
                    </slider-item>
                </slider>
                </div>
            </div>
         
             <!-- main list -->
        
            <div class="col-md-8" style="margin-left:336px;margin-bottom:-35px;margin-top:-750px">
                <select  v-on:change="getDiscount" v-for="filter in filters" :name=filter.id :key="filter.name" class="custom-select" style="width:213px;">
                    <option selected disabled>{{filter.name}}</option>
                    <option  v-for="value in filter.values" :key="value.name"  :value=value.sales[0].name>{{value.name}}</option>
                </select>  
            </div>
                <br><br>
            <div class="table-responsive col-md-8" style="float:right">
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
                            <tr v-for="product in filteredProducts" :key="product.name">
                                <td >{{product.id}}</td>
                                <td><img class="image" :src="`http://pricelist.maint.kz/profile/uploads/pricelist/${product.image}`" alt=""></td>
                                <td>{{product.availability}}</td>
                                <td>{{product.description}}</td>
                                <td>{{product.price}}</td>
                                <td>{{product.article}}</td>   
                                <td>{{product.unit}}</td> 
                                <td>{{product.price - (product.price * discount) / 100}}</td>  
                            </tr>
                        </tbody>
                    </table>
            </div>
        
</div>
      

</template>

<script>
import axios from 'axios'
import { Slider, SliderItem } from 'vue-easy-slider'
export default {
    name: 'Final',
    components: {
        Slider,
        SliderItem
    },
    data () {
			return {
				sidebanner:{},
				topbanner:{},
				filters: [],
				products: [],
				filteredProducts: [],
				selected: [],
				discount: 0,
				mainFilter: {},
				list: ['king.jpg', 'king1.jpg', 'king2.jpg', 'king3.jpg'],
			}
    },

    methods: {
        filterAndCalculateDiscount (value) {
					this.filteredProducts = this.products.filter(item => item.section_id === value.id)
					this.getDiscount(value.sales[0].name)
        },
        getDiscount (event, eventName) {
            let discount, name
            if ((typeof event) === 'string') {
                discount = event
                name = eventName
            } else {
                discount = event.target.value
                name = event.target.name
            }
            let exists = false;
            this.selected = this.selected.map( filter => {
                if( filter.id == name ) {
                    exists = true
                    filter.sale = parseInt(discount)
                }
                return filter
            })
            if(!exists)
            this.selected.push({
                id: name,
                sale: parseInt(discount)
            })
            this.discount = this.selected.reduce( (val, item) => {
                return val += (item.sale)
            }, 0)

				},
				getBanner () {
					axios.get('http://159.89.98.114:3005/proxy?address=http://pricelist.maint.kz/profile/magaz/banners/').then(response => {
						 console.log(response);
						// almat console.log('response', response)
						this.sidebanner=response.data.filter(item => item.id == 3)
						this.topbanner = response.data.filter(item => item.id == 5)
					})
				}
    },
    mounted () {
			axios.get('http://159.89.98.114:3005/proxy?address=http://pricelist.maint.kz/profile/magaz/filters/').then(response => {
					// console.log(response);
					this.filters = response.data.filter(item => item.name !== 'Группы товаров')
					this.mainFilter = response.data.filter(item => item.name === 'Группы товаров')[0]
			}).catch(error =>{
					console.log(error);
			})
        
			axios.get('http://159.89.98.114:3005/proxy?address=http://pricelist.maint.kz/profile/magaz/products/')
			.then(response => {
					this.products = response.data
					this.filteredProducts = response.data
			})

			this.getBanner()
		}
	}

</script>

<style>
.slider-image {
    object-fit: contain;
    height:300px;
    width:100%;
    width:device-width
}

* {box-sizing: border-box}
body {font-family: Verdana, sans-serif; margin:0}
.mySlides {display: none}
img {vertical-align: middle;}

/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .prev, .next,.text {font-size: 11px}
}


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
        /* width: 67%; */
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
