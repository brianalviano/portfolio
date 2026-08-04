<script lang="ts">
	let shineX = $state(50);
	let shineY = $state(50);
	let isHovered = $state(false);

	function handlePointerMove(e: PointerEvent) {
		const target = e.currentTarget as HTMLElement;
		const rect = target.getBoundingClientRect();
		shineX = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
		shineY = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
		isHovered = true;
	}

	function handlePointerLeave() {
		isHovered = false;
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="footer-name relative inline-block cursor-default select-none"
	onpointermove={handlePointerMove}
	onpointerleave={handlePointerLeave}
>
	<h2 class="display text-[clamp(2.8rem,10vw,8.5rem)] font-bold leading-[0.88] tracking-tighter text-white">
		BRIAN ALVIANO
	</h2>

	<div
		class="footer-shine absolute inset-0 pointer-events-none transition-opacity duration-300"
		style="--shine-x: {shineX}%; --shine-y: {shineY}%; opacity: {isHovered ? 1 : 0};"
	>
		<h2 class="display text-[clamp(2.8rem,10vw,8.5rem)] font-bold leading-[0.88] tracking-tighter">
			BRIAN ALVIANO
		</h2>
	</div>
</div>
