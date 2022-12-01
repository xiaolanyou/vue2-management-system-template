// 按需引入element-ui
import Vue from 'vue'
import { Button, Input, Radio, Table, Form, Dialog, MessageBox, Loading, Message, Notification } from "element-ui";

const coms = [Button, Input, Radio, Table, Form, Dialog];
Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;

export default {
    install(Vue, options) {
        coms.map((c) => {
            Vue.component(c.name, c);
        });
    },
};