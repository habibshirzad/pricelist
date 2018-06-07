 <template>
    
<div>
    <header class="pc">
        <div class="header-top">
            <div class="container">
                <div class="top">
                    <div class="top-left">
                        <a href="https://glav.kz/" class="item bold border">
                            <i class="fa fa-user"></i>
                            <span class="m-block m-none">Войти</span>
                        </a>
                        <a href="https://glav.kz/personal/private/?register=yes" class="item border">
                            <i class="fa fa-user-plus"></i>
                            <span>Регистрация</span>
                        </a>
                        <a href="https://glav.kz/catalog/compare/" class="item border">
                            <i class="fa fa-bar-chart"></i>
                            <span>Сравнение</span>
                            <!-- <span class="m-block count gray">0</span> -->
                        </a>
                        <a href="https://glav.kz/personal/cart/?delay=Y" class="item border">
                            <i class="fa fa-heart"></i>
                            <span>Отложенные</span>
                            <!-- <span class="m-block count">0</span> -->
                        </a>
                        <a href="#" class="item bold border">
                            <i class="fa fa-file-text"></i>
                            <span>Прайс-лист</span>
                        </a>
                    </div>
                    <div class="top-right">
                        <a href="https://glav.kz/personal/cart/" class="item bold cart">
                            <i class="fa fa-shopping-cart"></i>
                            <span>Моя корзина</span>
                            <!-- <span class="count dark">0</span> -->
                        </a>
                        <!-- <span class="sum_cont">
                            <span class="sum">
                                <span id="cartCounter">0</span>
                                <span class="curr"> KZT</span>
                            </span>
                        </span>
                        <button disabled>Оформить</button> -->
                    </div>
                </div>
            </div>
        </div>
                    
                   
                  
        <slider animation="fade">
            <slider-item v-for="(i, index) in topbanner" :key="index">
                <div :style="sliderStyle(i)"></div>
            </slider-item>
        </slider>
             

        

    </header>
    <!--    mobile header-->
    <header class="mobile">
        <div class="mob-header-top">
            <div class="mob-flex fixed">
                <a href="https://glav.kz/personal/private/?register=yes" class="mob-flex-item border">
                    <i class="fa fa-user"></i>
                </a>
                <a href="#" class="mob-flex-item border">
                    <i class="fa fa-file-text"></i>
                </a>
                <a href="https://glav.kz/personal/cart/?delay=Y" class="mob-flex-item border">
                    <i class="fa fa-heart"></i>
                    <!-- <span class="count">0</span> -->
                </a>
                <a href="https://glav.kz/personal/cart/" class="mob-flex-item">
                    <i class="fa fa-shopping-cart"></i>
                    <!-- <span class="count dark">0</span> -->
                </a>
            </div>
    
        </div>
        <div class="mob-header-img" style="margin-right:0px">
            <slider animation="fade">
                <slider-item v-for="(i, index) in topbanner" :key="index">
                <div :style="sliderStyle(i)">
                    <!-- <img :src="`http://pricelist.maint.kz/profile/uploads/boxers/`+i.ava"/>   -->
                </div>
                </slider-item>
            </slider>
        </div>
    </header>
    <!--    mobile header-->
    <section class="pc">
        <div class="container">
            <div class="main">
                <nav>
                    <p class="nav-title">{{mainFilter.name}}</p>


                    
                    <button v-on:click="newproduct" >New filter</button>


                    <div class="nav-box" >
                        <ul   v-for="value in mainFilter.values" :key="value.id">
                            <li class="list"  @click="filterAndCalculateDiscount(value)">{{value.name}}
                             <div class="arrow"></div></li>
                        </ul>
                        <div class="bottom-img">
                            <slider animation="fade">
                            <slider-item v-for="(i,index) in sidebanner" :key="index">
                            <div   :style="sliderStyle(i)">
                            <!-- <img style="height:400px" :src="`http://pricelist.maint.kz/profile/uploads/boxers/`+i.ava" /> -->
                            </div>
                            </slider-item>
                            </slider>
                        </div>
                    </div>
                </nav>
                <div class="catalog">
                    <div class="table-select">
                        <select  v-on:change="getDiscount" v-for="filter in filters" :name=filter.id :key="filter.name" class="custom-select">
                            <option selected disabled>{{filter.name}}</option>
                            <option v-for="value in filter.values" :key="value.name"  :value=value.sales[0].name>{{value.name}}</option>
                            
                        </select>
                    </div>
                    <table>
                        <tr class="orange">
                            <td width="10%">Изображение товара</td>
                            <td width="5%">Артикул</td>
                            <td width="8%">Наименование <br>товара</td>
                            <td width="13%">Описание</td>
                            <td width="8%">Наличие <br>(остаток на складе)</td>
                            <td width="4%">Единицы <br>измерени</td>
                            <td width="5%">Ваша Ценa</td>
                            <td width="5%">Рекомендованная ценa</td>
                        </tr>   
                        <tr v-for="product in filteredProducts" :key="product.name">
                            <td><div class="img-box">
                                <img class="image" :src="`http://pricelist.maint.kz/profile/uploads/pricelist/${product.image}`" alt="">
                            </div>
                            </td>
                            <td>{{product.article}}</td>
                            <td class="text-left">{{product.title}}</td>
                            <td class="text-left">{{product.description}}</td>
                            <td>{{product.availability}}</td>
                            <td>{{product.unit}}</td>
                            <td>{{product.price - (product.price * discount) / 100}}</td>
                            <td>{{product.price}}</td>
                        </tr>
                       
                       
                       
                       
                    </table>
                </div>
            </div>
        </div>
    </section>
    <!--    mobile section-->
    <section class="mobile">
        <div class="mobile-box">
            <div class="filter-block">
                <a class="filter-button" @click="showDropDown = !showDropDown">
                    <span>{{mainFilter.name}}</span>
                    <img src="~@/assets/img/select.jpg">
                </a>
                <div v-if="showDropDown">
                    <select @change="filterAndCalculateDiscount(model.mainSelect)" v-model="model.mainSelect" class="custom-select" >
                        <option   v-for="value in mainFilter.values" :key="value.name" :value="value">{{value.name}}</option>    
                    </select>
                    <select v-on:change="getDiscount" v-for="filter in filters" :name=filter.id :key="filter.name" class="custom-select" >
                        <option selected disabled>{{filter.name}}</option>
                        <option   v-for="value in filter.values" :key="value.name"  :value=value.sales[0].name>{{value.name}}</option>    
                    </select>
                </div>  
            </div>
            <div class="mobile-container">
                <div class="m-product"  v-for="product in filteredProducts" :key="product.name">
                    <div  class="m-img">
                       <img class="image" :src="`http://pricelist.maint.kz/profile/uploads/pricelist/${product.image}`" alt="">
                    </div>
                    <div class="m-text">
                        <p class="m-title">
                            {{product.title}}
                        </p>
                        <span class="roman">
                            {{product.description}}
                        </span>
                        <div class="info">
                            <span class="m-gray">Атикул</span>
                            <span class="m-bold">{{product.article}}</span>
                        </div>
                        <div class="cena">
                            <span>{{product.price}}</span>
                        </div>
                        <div class="info">
                            <span class="m-gray">Наличие (остаток на складе)</span>
                            <span class="m-bold">{{product.availability}}</span>
                        </div>
                        <div class="info">
                            <span class="m-gray">Единицы измерени</span>
                            <span class="m-bold">{{product.unit}}</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
        
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
                showDropDown: false,
				sidebanner:{},
				topbanner:{},
				filters: [],
				products: [],
				filteredProducts: [],
				selected: [],
				discount: 0,
				mainFilter: {},
                list: ['king.jpg', 'king1.jpg', 'king2.jpg', 'king3.jpg'],
                model: {
                    mainSelect: {}
                }
			}
    },

    methods: {
        sliderStyle (item) {
            return {
                backgroundColor: '#eee',
                width: '100%',
                height: '100%',
                backgroundImage: `url(http://pricelist.maint.kz/profile/uploads/boxers/${item.ava})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }
        },
        newproduct(){
            this.filteredProducts = this.products
        },
        filterAndCalculateDiscount (value) {
            // this.newfilteredProducts = this.products.filter(item=>item.section_id === value.id)
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
						 console.log('s', response);
						// almat console.log('response', response)
						this.sidebanner=response.data.filter(item => item.category_id == 2)
						this.topbanner = response.data.filter(item => item.category_id == 5)
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
                console.log('asd', response)
					this.products = response.data
					this.filteredProducts = response.data
			})

			this.getBanner()
		}
	}

</script>

<style>
.list{
    border-color: #f76800;
    padding: 0.6em 0.8em;
    font-size: 1.1em;
    text-decoration: underline;
    color: #575b71;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    border: 1px solid #dee0ee;
    border-radius: 4px;
    transition: all 0.5s;
    border:solid 1px gray;box-sizing:border-box;padding:5px;
    border-color: #f76800; 
    
}
</style>

