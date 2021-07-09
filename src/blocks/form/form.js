import 'alpinejs';
import { randomNum, getNewUrl } from '../../js/import/helpers';

window.formData = function () {
  return {
    state: 'default',
    productsCount: 1,
    price: 24.99,
    email: null,
    sending: false,
    baseUrl:
      window.location.protocol +
      '//' +
      window.location.host +
      window.location.pathname,
    products: [
      {
        name: 'Product 1',
        id: 'product-1',
        keywordValue: '',
        linkValue: '',
      },
    ],
    productsInfo: {
      email: null,
      price: null,
      products: [],
    },
    addProduct() {
      this.state = 'add-product';
      this.productsCount = 5;
    },
    selectProductCount() {
      this.state = 'default';
      this.getProductsList();
      this.getPrice();
    },
    getProductsList() {
      this.productsCount = +this.productsCount;
      this.products = [];
      for (let i = 0; i < this.productsCount; i++) {
        let obj = {};
        obj.name = `Product ${i + 1}`;
        obj.id = `product-${i + 1}`;
        obj.keywordValue = '';
        obj.linkValue = '';
        this.products.push(obj);
      }
    },
    getPrice() {
      switch (+this.productsCount) {
        case 1:
          this.price = 24.99;
          break;
        case 2:
          this.price = 44;
          break;
        case 3:
          this.price = 60;
          break;
        case 4:
          this.price = 72;
          break;
        case 5:
          this.price = 80;
          break;
      }
    },
    deleteProduct(index) {
      this.products.splice(index, 1);
      this.productsCount--;
      this.getPrice();
    },
    getProductsInfo() {
      this.productsInfo.products = [];
      this.email = this.productsInfo.email;
      this.price = this.productsInfo.price;
      this.products.forEach((el) => {
        this.productsInfo.products.push(el);
      });
    },
    onSubmitForm() {
      this.sending = true;
      setTimeout(() => {
        let num = Math.round(randomNum(0, 1));
        if (num === 1) {
          this.sending = false;
          this.state = 'success-payment';
          getNewUrl(this.baseUrl, 'paymentsuccess');
          this.getProductsInfo();
          console.log('payment success');
          console.log(
            'products info ',
            this.$el.__x.getUnobservedData().productsInfo,
          );
        } else {
          this.sending = false;
          this.state = 'error-payment';
          getNewUrl(this.baseUrl, 'paymenterror');
          console.log('payment error');
        }
      }, 1000);
    },
    backToMainFormSuccess() {
      this.state = 'default';
      this.productsCount = 1;
      this.getProductsList();
      this.getPrice();
      getNewUrl(this.baseUrl, '');
    },
    backToMainFormError() {
      this.state = 'default';
      getNewUrl(this.baseUrl, '');
    },
  };
};
