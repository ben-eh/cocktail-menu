import './App.css';
import './index.css';
import { cocktails } from './cocktails';
import { Grid, Typography, List, ListItem } from '@mui/material';

function App() {

	return (
		<>
			<Typography
			variant="h3"
			align="center"
			>Cocktail Menu</Typography>
			<br />
			<Grid
				container
				style={{ minHeight: '100vh', width: '100vw' }}
				justifyContent="center"
				gap="2rem"
				padding={2}
			>

				{cocktails.map((cocktail) => {
					return (
						<>
							<Grid
								container
								item
								xs={12}
								sm={4}
								direction="column"
								style={{ minHeight: '15rem', backgroundColor: 'black', borderRadius: '20px', border: '1px solid white' }}
							>

								<Grid
									item
								>
									<Typography
										variant='h4'
										align='center'
										className='merriweather-regular'
										paddingTop={2}
									>
										{cocktail.name}
									</Typography>
								</Grid>
								<Grid
									container
									item
									padding="1rem"
								>

									<Grid
										item
										xs={6}
									>
										<div>
											<img src={require(`./images/${cocktail.photo}`)} alt={cocktail.photo} style={{ maxHeight: '300px', width: '100%', borderRadius: '20px' }}></img>
										</div>
									</Grid>

									<Grid
										item
										xs={6}
										style={{ paddingLeft: '1rem' }}
									>
										<List
										dense={true}
										>
											{cocktail.ingredients.map((ing, index) => {
												return (<ListItem key={index} variant="h6" style={{ lineHeight: '24px' }}>{ing}</ListItem>)
											})}
										</List>
									</Grid>

								</Grid>

							</Grid>
						</>
					)
				})}

			</Grid>
		</>
	);
}

export default App;
