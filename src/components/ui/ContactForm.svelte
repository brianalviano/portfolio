<script lang="ts">
import { IconSend, IconCheck, IconMail } from "@tabler/icons-svelte";

let name = $state("");
let email = $state("");
let projectType = $state("ERP & Business System");
let timeline = $state("1 - 2 Months");
let message = $state("");
let statusMessage = $state("");
let isSubmitting = $state(false);

const projectTypes = [
	"ERP & Business System",
	"REST API & Backend Service",
	"Internal Tool / Dashboard",
	"High-Performance Web App",
	"Architecture Audit & Consulting",
];

const timelines = [
	"< 1 Month",
	"1 - 2 Months",
	"3+ Months",
	"Ongoing Retainer",
];

function handleSubmit(e: SubmitEvent) {
	e.preventDefault();
	if (!name || !email || !message) {
		statusMessage = "Please complete all required fields.";
		return;
	}

	isSubmitting = true;
	statusMessage = "Preparing email inquiry…";

	const subject = `Project inquiry — ${projectType}`;
	const body = [
		`Hi Brian,`,
		``,
		`My name is ${name}.`,
		`Email: ${email}`,
		`Project type: ${projectType}`,
		`Target timeline: ${timeline}`,
		``,
		`Project details:`,
		`${message}`,
	].join("\n");

	setTimeout(() => {
		window.location.href = `mailto:brianalviano.official@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
		statusMessage = "Opening your email client…";
		isSubmitting = false;
	}, 400);
}
</script>

<form onsubmit={handleSubmit} class="card-hard rounded-3xl p-6 sm:p-10 space-y-6">
	<div class="space-y-2 border-b border-ink/10 pb-4">
		<h3 class="display text-2xl sm:text-3xl font-bold text-ink flex items-center gap-3">
			<IconMail class="text-accent" size={28} /> Start a conversation
		</h3>
		<p class="text-sm text-ink/70">
			Have a project in mind or need an architectural consultation? Fill out the details below.
		</p>
	</div>

	<!-- Name & Email -->
	<div class="grid sm:grid-cols-2 gap-4">
		<div class="space-y-2">
			<label for="contact-name" class="block text-xs font-bold uppercase tracking-wider text-ink/70">Your Name *</label>
			<input
				id="contact-name"
				type="text"
				bind:value={name}
				required
				placeholder="e.g. Alex Turner"
				class="w-full px-4 py-3 rounded-xl border-2 border-ink bg-paper/50 text-sm font-medium focus:bg-white focus:outline-none transition-colors"
			/>
		</div>

		<div class="space-y-2">
			<label for="contact-email" class="block text-xs font-bold uppercase tracking-wider text-ink/70">Email Address *</label>
			<input
				id="contact-email"
				type="email"
				bind:value={email}
				required
				placeholder="alex@company.com"
				class="w-full px-4 py-3 rounded-xl border-2 border-ink bg-paper/50 text-sm font-medium focus:bg-white focus:outline-none transition-colors"
			/>
		</div>
	</div>

	<!-- Project Type -->
	<div class="space-y-2">
		<label for="project-type" class="block text-xs font-bold uppercase tracking-wider text-ink/70">Project Scope / Type</label>
		<select
			id="project-type"
			bind:value={projectType}
			class="w-full px-4 py-3 rounded-xl border-2 border-ink bg-paper/50 text-sm font-medium focus:bg-white focus:outline-none transition-colors"
		>
			{#each projectTypes as type}
				<option value={type}>{type}</option>
			{/each}
		</select>
	</div>

	<!-- Timeline Selection -->
	<div class="space-y-2">
		<span class="block text-xs font-bold uppercase tracking-wider text-ink/70">Target Timeline</span>
		<div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
			{#each timelines as item}
				<button
					type="button"
					onclick={() => (timeline = item)}
					class="px-3 py-2.5 rounded-xl border-2 text-xs font-bold transition-all {timeline === item ? 'border-accent bg-accent text-white shadow-md' : 'border-ink/20 bg-paper/30 text-ink hover:border-ink'}"
				>
					{item}
				</button>
			{/each}
		</div>
	</div>

	<!-- Message -->
	<div class="space-y-2">
		<label for="contact-message" class="block text-xs font-bold uppercase tracking-wider text-ink/70">Project Details / Goals *</label>
		<textarea
			id="contact-message"
			bind:value={message}
			required
			rows={4}
			placeholder="Tell me about your business goals, current bottlenecks, or system requirements..."
			class="w-full px-4 py-3 rounded-xl border-2 border-ink bg-paper/50 text-sm font-medium focus:bg-white focus:outline-none transition-colors"
		></textarea>
	</div>

	<!-- Submit Button & Feedback -->
	<div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
		<button
			type="submit"
			disabled={isSubmitting}
			class="w-full sm:w-auto px-8 py-4 rounded-full bg-ink text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-accent hover:-translate-y-0.5 transition-all shadow-[4px_4px_0_#151310] disabled:opacity-50"
		>
			Send Inquiry <IconSend size={18} />
		</button>

		{#if statusMessage}
			<p class="text-xs font-bold text-accent animate-fade-in">{statusMessage}</p>
		{/if}
	</div>
</form>
