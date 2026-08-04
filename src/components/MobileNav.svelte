<script lang="ts">
	import { IconMenu2, IconX, IconArrowUpRight } from '@tabler/icons-svelte';

	let isOpen = $state(false);

	function toggleMenu() {
		isOpen = !isOpen;
	}

	function closeMenu() {
		isOpen = false;
	}
</script>

<div class="md:hidden">
	<!-- Hamburger Toggle Button -->
	<button
		type="button"
		onclick={toggleMenu}
		aria-label="Toggle Navigation Menu"
		class="grid place-items-center w-11 h-11 rounded-xl border-2 border-ink bg-white text-ink shadow-[3px_3px_0_#151310]"
	>
		{#if isOpen}
			<IconX size={22} />
		{:else}
			<IconMenu2 size={22} />
		{/if}
	</button>

	<!-- Mobile Drawer Overlay -->
	{#if isOpen}
		<div
			class="fixed inset-0 top-20 z-40 bg-ink/50 backdrop-blur-sm transition-opacity"
			onclick={closeMenu}
			onkeydown={(e) => e.key === 'Escape' && closeMenu()}
			role="button"
			tabindex={0}
		></div>

		<div class="fixed inset-x-4 top-24 z-50 rounded-3xl border-2 border-ink bg-paper p-6 shadow-[8px_8px_0_#151310] space-y-6">
			<nav class="flex flex-col space-y-4 text-base font-bold text-ink">
				<a href="#about" onclick={closeMenu} class="hover:text-accent transition-colors py-2 border-b border-ink/10">About</a>
				<a href="#services" onclick={closeMenu} class="hover:text-accent transition-colors py-2 border-b border-ink/10">Services</a>
				<a href="#process" onclick={closeMenu} class="hover:text-accent transition-colors py-2 border-b border-ink/10">Process</a>
				<a href="#skills" onclick={closeMenu} class="hover:text-accent transition-colors py-2 border-b border-ink/10">Skills</a>
				<a href="#work" onclick={closeMenu} class="hover:text-accent transition-colors py-2 border-b border-ink/10">Work</a>
				<a href="#testimonials" onclick={closeMenu} class="hover:text-accent transition-colors py-2 border-b border-ink/10">Testimonials</a>
				<a href="#insights" onclick={closeMenu} class="hover:text-accent transition-colors py-2 border-b border-ink/10">Insights</a>
				<a href="#contact" onclick={closeMenu} class="hover:text-accent transition-colors py-2">Contact</a>
			</nav>

			<a
				href="#contact"
				onclick={closeMenu}
				class="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-ink text-white font-bold text-sm hover:bg-accent transition-colors"
			>
				Let’s talk <IconArrowUpRight size={18} />
			</a>
		</div>
	{/if}
</div>
