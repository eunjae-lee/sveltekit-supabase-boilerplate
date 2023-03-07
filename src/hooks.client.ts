import * as SentrySvelte from '@sentry/svelte';
import { BrowserTracing } from '@sentry/tracing';
import type { HandleClientError } from '@sveltejs/kit';

if (process.env.NODE_ENV === 'production') {
	SentrySvelte.init({
		dsn: '<ADD-DSN>',
		integrations: [new BrowserTracing()],
		tracesSampleRate: 1.0
	});

	SentrySvelte.setTag('svelteKit', 'browser');
}

export const handleError = (({ error, event }) => {
	if (process.env.NODE_ENV === 'production') {
		SentrySvelte.captureException(error, { contexts: { sveltekit: { event } } });
	}

	return {
		message: (error as Error).message
	};
}) satisfies HandleClientError;
