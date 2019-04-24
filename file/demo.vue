<template>
	<div style="width:600px">
		<Tree :data="data5" :render="renderContent" @on-toggle-expand="addContent"></Tree>
	</div>

</template>
<script>
	export default {
		data() {
			return {
				data5: [
					{
						title: 'parent 1',
						layerId: '001',
						expand: false,
						render: (h, {root, node, data}) => {
							return h('span', {
								style: {
									display: 'inline-block',
									width: '100%'
								}
							}, [
								h('span', {
								}, [
									h('span', data.title)
								]),
								h('span', {
									style: {
										display: 'inline-block',
										float: 'right',
										marginRight: '32px'
									},

								})
							]);
						},
						children: [{}]
					}
				],
				buttonProps: {
					type: 'default',
					size: 'small',
				}
			}
		},
		methods: {
			renderContent(h, {root, node, data}) {
				return h('span', {
					style: {
						display: 'inline-block',
						width: '100%'
					}
				}, [
					h('span', {

					}, [
						h('span', data.title)
					]),
					h('span', {
						style: {
							display: 'inline-block',
							float: 'right',
							marginRight: '32px'
						}
					}, [
						h('Button', {
							props: Object.assign({}, this.buttonProps, {
								icon: 'ios-add'
							}),
							style: {
								marginRight: '8px'
							},
							on: {
								click: () => {
									alert(data.title)
								}
							}
						})
					])
				]);
			},
			addContent(data){
				console.log(data);
				let children = [{
					title: 'appended node' + data.layerId,
					expand: false,
					layerId: data.layerId + '1',
					children: [{}]
				}, {
					title: 'child 1-1' + data.id,
					expand: false,
					id: data.id + '02',
					children: [{}]
				}];
				this.$set(data, 'children', children);
			}
		}
	}
</script>
