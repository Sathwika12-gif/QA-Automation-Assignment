const { test, expect } = require('@playwright/test');
const { API_BASE_URL } = require('../test-data/urls');
require('dotenv').config();

const headers = {
    'x-api-key': process.env.REQRES_API_KEY
};

const user = {
    name: 'Sathwika',
    job: 'QA Engineer'
};

const updatedUser = {
    name: 'Sathwika Updated',
    job: 'Senior QA'
};

test('ReqRes API Assignment', async ({ request }) => {

    const createResponse = await request.post(`${API_BASE_URL}/users`, {
        headers,
        data: user
    });

    expect(createResponse.status()).toBe(201);

    const createData = await createResponse.json();

    expect(createData.name).toBe(user.name);
    expect(createData.job).toBe(user.job);
    expect(createData.id).toBeTruthy();

    const userId = createData.id;
    const getResponse = await request.get(`${API_BASE_URL}/users/${userId}`, {
        headers
    });

    if (getResponse.status() === 200) {

        const getData = await getResponse.json();

        expect(getData.data.id).toBe(Number(userId));
        expect(getData.data.first_name).toBeTruthy();

    } else if (getResponse.status() === 404) {

        console.log(
            `ReqRes limitation: Created users are not persisted. GET /users/${userId} returned 404.`
        );

    } else {

        throw new Error(`Unexpected status code: ${getResponse.status()}`);

    }


    const updateResponse = await request.put(`${API_BASE_URL}/users/${userId}`, {
        headers,
        data: updatedUser
    });

    expect(updateResponse.status()).toBe(200);

    const updateData = await updateResponse.json();

    expect(updateData.name).toBe(updatedUser.name);
    expect(updateData.job).toBe(updatedUser.job);
    expect(updateData.updatedAt).toBeTruthy();
});