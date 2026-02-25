const API_URL = 'http://localhost:3001/galpoes';

export const getGaloes = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Erro na requisição');
        }
        return await response.json();
    } catch (error) {
        console.error('Erro ao buscar galpões:', error);
        throw error;
    }
};

export const getGalpaoById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) {
            throw new Error('Erro na requisição');
        }
        return await response.json();
    } catch (error) {
        console.error('Erro ao buscar galpão:', error);
        throw error;
    }
};

export const createGalpao = async (galpaoData) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...galpaoData,
                id: Date.now() // Gerar ID único
            })
        });

        if (!response.ok) {
            throw new Error('Erro ao criar galpão');
        }

        return await response.json();
    } catch (error) {
        console.error('Erro ao criar galpão:', error);
        throw error;
    }
};

export const updateGalpao = async (id, galpaoData) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(galpaoData)
        });

        if (!response.ok) {
            throw new Error('Erro ao atualizar galpão');
        }

        return await response.json();
    } catch (error) {
        console.error('Erro ao atualizar galpão:', error);
        throw error;
    }
};