<template>
  	<div>
		<p class="underline">{{ title }}</p>
		<table>
			<tr>
				<template v-for="e in columns" >
					<th :key="e">{{ e }}</th>
				</template>
			</tr>
			<template v-for="(row,idx) in rows" >
				<tr :key="idx">
					<template v-for="col in columns" >
						<td :key="col">
							<!--<slot :name="col" v-bind:cell="row[col]"></slot>--->
							<slot :name="col" v-bind:row="row"></slot>
						</td>						
					</template>
				</tr>		
			</template>				
		</table>
  	</div>
</template>

<script>
export default {
	props: ['title','columns','rows'],
/*	data : function () {
		return {rows:[{a:11, b:12, c:13},{a:21, b:22, c:23},{a:31, b:32, c:33}]};
	}*/
}
</script>

<style scoped>
.underline { text-decoration: underline; }
table, th, td {
  border: 1px solid black;
}
table {
	width: 100%;
  	border-collapse: collapse;
}
</style>
