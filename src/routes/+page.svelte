<script lang="ts">
	import { MetaTags } from 'svelte-meta-tags';
	import type { PageData } from './$types';
	import type { Session } from '@supabase/supabase-js';

	export let data: PageData;

	let { supabase, session } = data;

	$: if (data.session) {
		// loadData();
	}
</script>

<MetaTags title="Example Title" description="Example Description." />

<div class="navbar bg-base-100">
	<div class="flex-1">
		<a href="/" class="btn btn-ghost normal-case text-xl">🥐</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal px-1">
			<!-- <li><a>Item 1</a></li>
			<li tabindex="0">
				<a>
					Parent
					<svg
						class="fill-current"
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg
					>
				</a>
				<ul class="p-2 bg-base-100">
					<li><a>Submenu 1</a></li>
					<li><a>Submenu 2</a></li>
				</ul>
			</li> -->
			<li><a href="/sign_in">Sign In</a></li>
		</ul>
	</div>
</div>
