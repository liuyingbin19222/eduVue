// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import myheader from '@/components/myheader'
import { Icon } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Row, Col } from 'vant';
import { Uploader } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Field } from 'vant';
import { Button } from 'vant';
import axios from 'axios'
import { Panel } from 'vant';
import { Tab, Tabs } from 'vant';
import { Tag } from 'vant';

Vue.use(Tag);
Vue.use(Tab).use(Tabs);
Vue.use(Panel);
Vue.use(axios);
Vue.use(Button);
Vue.use(Field);
Vue.use(Cell).use(CellGroup);
Vue.use(Uploader);
Vue.use(Row).use(Col);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Icon);   
// import Vant from 'vant';
Vue.config.productionTip = false
// Vue.use(Vant);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<app/>'
})
