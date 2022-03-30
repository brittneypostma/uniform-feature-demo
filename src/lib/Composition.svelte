<script>
	import {
		CANVAS_DRAFT_STATE,
		createEventBus,
		subscribeToComposition,
		CANVAS_PERSONALIZE_TYPE,
		CANVAS_ENRICHMENT_TAG_PARAM,
		mapSlotToPersonalizedVariations,
		mapSlotToTestVariations
	} from '@uniformdev/canvas';

	export let composition;
	// map over composition and get value
	let component = '';
</script>

<svelte:component this={component} {composition} />
