<script lang="ts">
	import { IconBrandSvelte, IconSparkles } from '@tabler/icons-svelte';

	interface Props {
		name?: string;
	}

	let { name = 'Developer' }: Props = $props();
</script>

<div class="flex items-center gap-2 p-4 rounded-xl bg-slate-900 text-white">
	<IconBrandSvelte size={24} class="text-orange-500" />
	<span class="font-semibold">Hello {name}!</span>
	<IconSparkles size={20} class="text-amber-400" />
</div>
