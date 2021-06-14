import React, { useState, useEffect } from 'react';
import { DataTable } from 'asab-webui';
import { Container, Button, Card, CardHeader, CardFooter, CardBody, Table, Col, Row } from 'reactstrap';
import axios from 'axios'


function CatFacts(props) {

	/* 

		Fetch Cat fact from  `https://catfact.ninja/fact` on page initialization and render it to CardHeader

		Example of the response: 

		{ data: { fact: 'Some fact', length: 9}, status: 200, statusText: "OK", headers: {…}, config: {…}, request: XMLHttpRequest }

		
		Fetch Cat breeds from `https://catfact.ninja/breeds` on `Get breeds` button click and render the data to Table

		Example of the response:

		{ data: {
			...
			data: [{breed: 'Some', coat: 'Some', country: 'Distant', origin: 'Natural', pattern: 'None'}, {…}, ...],
			...
		}, status: 200, statusText: "OK", headers: {…}, config: {…}, request: XMLHttpRequest }


		-----------------------------------

		+ points :)

		Get another fact with `Get fact` button

		Remove the breeds from the table by `Remove breeds`

		All the components you need are already imported

	*/

	return (
		<Container fluid>
			<Row className="justify-content-md-center pt-5">
				<Col md={8}>
					<Card>
						<CardHeader>
							<strong>Cat fact: </strong> No cat fact yet :-(
						</CardHeader>
						<CardBody>
							<Table>
								<thead>
									<tr>
										<th>Breed</th>
										<th>Country</th>
										<th>Origin</th>
										<th>Coat</th>
										<th>Pattern</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<p>No cat breed yet :-(</p>
										</td>
									</tr>
								</tbody>
							</Table>
						</CardBody>
						<CardFooter>
							<Button color="primary">Get fact</Button>
							{' '}
							<Button>Get breeds</Button>
							{' '}
							<Button color="danger">Remove breeds</Button>
						</CardFooter>
					</Card>
				</Col>
			</Row>
		</Container>
	)
}

export default CatFacts;