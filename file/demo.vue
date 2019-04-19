<template>
	<Tree :data="data3" :load-data="loadData" show-checkbox></Tree>
</template>
<script>
export default {
	data() {
		return {
			layerList: [
				{
					id: '001',
					name: 'layer01'
				},
				{
					id: '002',
					name: 'layer02'
				}
			],

			data3: [
				{
					title: 'parent',
					loading: false,
					id:'000',
					children: []
				}
			]
		};
	},
	methods: {
		loadData(item, callback) {
			const data = this.query(item);
			console.log(item);
			callback(data);
		},

		query(id) {
			var layers = [];
			this.layerList.forEach(i => {
				layers.push({
					title: i.name,
					loading: false,
					children: []
				});
			});
			return layers;
		}
	}
};
</script>
