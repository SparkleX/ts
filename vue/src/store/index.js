import vue from "vue"
import vuex from "vuex"

vue.use(vuex);

const store = new vuex.Store({
	state : {
		count :1
	}
});
export default store;