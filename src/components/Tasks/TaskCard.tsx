import { Card, CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';

type TaskCardProps = {
	title: string;
	description: string;
};

export default function TaskCard({ title, description }: TaskCardProps): JSX.Element {
	return (
		<Card sx={{ maxWidth: 400 }}>
			<CardContent>
				<Typography variant="h5" component="div">
					{title}
				</Typography>
				<Typography sx={{ mb: 1.5 }} color="text.secondary">
					{description}
				</Typography>
			</CardContent>
		</Card>
	);
}
