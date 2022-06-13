import React from 'react';
import { createRoot } from 'react-dom/client';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import App from 'App';

const theme = createTheme({
	status: {
		danger: '#e53e3e',
	},
	palette: {
		primary: {
			main: '#fff',
			darker: '#053e85',
		},
		neutral: {
			main: '#64748B',
			contrastText: '#fff',
		},
	},
});

declare module '@mui/material/styles' {
	interface Theme {
		status: {
			danger: React.CSSProperties['color'];
		};
	}

	interface Palette {
		neutral: Palette['primary'];
	}
	interface PaletteOptions {
		neutral: PaletteOptions['primary'];
	}

	interface PaletteColor {
		darker?: string;
	}
	interface SimplePaletteColorOptions {
		darker?: string;
	}
	interface ThemeOptions {
		status: {
			danger: React.CSSProperties['color'];
		};
	}
}

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>,
);
