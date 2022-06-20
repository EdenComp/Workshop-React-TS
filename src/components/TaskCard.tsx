import React from 'react';

import { Card, CardActions, CardContent } from '@mui/material';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function TaskCard(): JSX.Element {
	return (
		<>
			<Card sx={{ maxWidth: 400 }}>
				<CardContent>
					<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
						Word of the Day
					</Typography>
					<Typography variant="h5" component="div">
						benevolent
					</Typography>
					<Typography sx={{ mb: 1.5 }} color="text.secondary">
						adjective
					</Typography>
					<Typography variant="body2">
						well meaning and kindly.
						<br />
						{'"a benevolent smile"'}
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small">Learn More</Button>
				</CardActions>
			</Card>
		</>
	);
}
