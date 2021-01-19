<template>
  <div class="row">
      <div class="col-3">
          <label class="sr-only" for="inlineFormInputname2">
              Quantity
          </label>
          <input type="number" v-model="quantity" class="form-control mb-2 mr-sm-2"  />
      </div>
      <button
        v-if="!isInCartProp"
        @click.stop="addCart({ product, quantity })"
        type="button"
        class="btn btn-primary btn-lg btn-block col-9"
      >
          ADD TO CART
      </button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
    props: ["product"],
    data() {
        return {
            isInCartProp: false,
            quantity: 1,
        };
    },
    computed: {
        ...mapState("product", ["cart"]),
    },
    methods: {
        ...mapActions["product", ["addCart", "removeCart"]],
        isInCart(id) {
            for (let i = 0; i < this.cart.length; i++) {
                const element = cart[i];
                if (element.id === id) {
                    return true;
                }
            }
            return false;
        },
    },
    watch: {
        product(val) {
            this.isInCartProp = this.isInCart(val.id);
        },
        cart() {
            this.isInCartProp = this.isInCart(this.product.id);
        },
        quantity(val) {
            if (val <= 0) {
                this.quantity = 1;
            }
        },
    }
}
</script>

<style>

</style>