<template v-for="item in items">
	<p>{{item}}</p>
</template>

<script>
export default {
	props: {
		items: Array
	}
}
</script>
<!--Vue.component('list-view', {
	props: {
		items: Array
	},
	template: '<div><template v-for="item in items">1<br></template></div>',
	//components: {child: ListViewItem}
});-->