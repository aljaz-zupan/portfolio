import { drawerStore, type DrawerSettings } from '@skeletonlabs/skeleton';
type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'sl') {
	const formatter = new Intl.DateTimeFormat(locales, { dateStyle });
	return formatter.format(new Date(date));
}

export function drawerClose(): void {
	drawerStore.close();
}

export function drawerOpen(): void {
	drawerStore.open(drawerSettings);
}

const drawerSettings: DrawerSettings = {
	id: 'example-3',
	// Provide your property overrides:
	bgBackdrop: 'bg-gradient-to-tr from-primary-600/25 via-black-900/50 to-secondary-600/25',
	width: 'w-[280px] md:w-[480px]',
	padding: 'p-2',
	rounded: 'rounded-xl'
};
