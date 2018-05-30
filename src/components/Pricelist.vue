<template>
    <div id="prc">

        <select v-on:change="getDiscount" v-for="filter in filters" :name=filter.id :key="filter.name" class="custom-select" style="width:auto;">
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
    
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
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
                if( filters.id == event.target.name ) {
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
    mounted(){
        axios.get('http://pricelist.maint.kz/profile/magaz/filters/').then(response => {
            console.log(response.data)
            this.filters = response.data
        }).catch(error =>{
            console.log(error);
        });
        
        axios.get('http://pricelist.maint.kz/profile/magaz/products/').then(response => {
            // console.log(response)
             this.products = response.data
        })
        }
    }

</script>

<style scoped>
#prc{
    margin-top: 100px
}
.image{
  
    height: 70px;
    width:70px
}
</style>
