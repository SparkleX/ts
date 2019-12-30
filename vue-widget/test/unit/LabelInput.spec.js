import { mount } from "@vue/test-utils";
import LabelInput from "@/widget/LabelInput.vue";

//https://github.com/vuejs/vue-test-utils-getting-started/blob/master/test.js
/*describe("LabelInput", () => {
	// describe 代表一个作用域
	it("create", () => {
		const wrapper = mount(LabelInput, {
			propsData: {
				label: "my label"
			}
		});
		console.debug(wrapper.html());
		expect(wrapper.html()).toContain('my label');
		//expect(wrapper.vm.visible).toBe(true);
	});
});*/
test("create", () => {
	const wrapper = mount(LabelInput, {
		propsData: {
			label: "my label"
		}
	});
	console.debug(wrapper.html());
	expect(wrapper.html()).toContain('my label');
	//expect(wrapper.vm.visible).toBe(true);
});
