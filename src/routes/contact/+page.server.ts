import type { ActionResult } from '@sveltejs/kit';
import { z, ZodError, type ParseResult, type SafeParseError } from 'zod';
import type { Actions } from './$types';

const registerSchema = z.object({
	name: z
		.string({ required_error: 'Name is required' })
		.min(2, { message: 'Name needs at least 2 characters or more' })
		.max(64, { message: 'Name must not have more than 64 characters' })
		.trim(),
	email: z
		.string({ required_error: 'Email is required' })
		.min(1, { message: 'Email is required' })
		.max(64, { message: 'Email must be less than 65 characters' })
		.email({ message: 'Email must be a valid email address' }),
	message: z
		.string({ required_error: 'Message is required' })
		.min(1, { message: 'Message is required' })
		.max(2000, { message: 'Message must not have more than 2000 characters' })
		.trim()
});

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = Object.fromEntries(await request.formData());

		try {
			const result = registerSchema.parse(formData);
			console.log('resultFormData', result);
			const prefilledLink = `https://docs.google.com/forms/d/e/1FAIpQLSdGwHFlGE9I64cX3hyGDkQx1-4i-dxNwbgkwixA_L38mmPXPw/formResponse?usp=pp_url&entry.1476163538=${result.name}&entry.1140627475=${result.email}&entry.1122378468=${result.message}&submit=Submit`;

			const res = await fetch(prefilledLink);
			console.log(res);
			if (res.status !== 200) {
				return {
					message: 'Form was not submited',
					type: 'error'
				};
			}
		} catch (err: any) {
			const { fieldErrors: errors } = err.flatten();
			return {
				data: formData,
				errors
			};
		}
		return {
			message: 'Form was submited',
			type: 'success'
		};
	}
};
