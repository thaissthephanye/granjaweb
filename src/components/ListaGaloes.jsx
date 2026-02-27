import React, { useState, useEffect } from 'react';
import { Table, Button, Spinner, Alert } from 'react-bootstrap';
import { getGaloes } from '../services/api';
import './ListaGaloes.css';

function ListaGaloes({ onEdit, refresh }) {
    const [galoes, setGaloes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        carregarGaloes();
    }, [refresh]);

    const carregarGaloes = async () => {
        try {
            setLoading(true);
            const data = await getGaloes();
            setGaloes(data);
            setError(null);
        } catch (err) {
            setError('Erro ao carregar galpões');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="loading-container">
                <Spinner animation="border" variant="primary" className="custom-spinner" />
                <p>Carregando galpões...</p>
            </div>
        );
    }

    if (error) {
        return <Alert variant="danger" className="custom-alert">{error}</Alert>;
    }

    return (
        <div className="table-container">
            <Table striped bordered hover responsive className="custom-table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Frangos</th>
                        <th>Comedouros</th>
                        <th>Bebedouros</th>
                        <th>Ventiladores</th>
                        <th>Exaustores</th>
                        <th>Responsáveis</th>
                        <th>Termômetro</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {galoes.length === 0 ? (
                        <tr>
                            <td colSpan="9" className="empty-table-message">
                                <div className="empty-state">
                                    <span className="empty-icon"></span>
                                    <p>Nenhum galpão cadastrado</p>
                                    <small>Clique em "Adicionar Novo Galpão" para começar</small>
                                </div>
                            </td>
                        </tr>
                    ) : (
                        galoes.map((galpao) => (
                            <tr key={galpao.id} className="table-row">
                                <td className="nome-cell"><strong>{galpao.nome}</strong></td>
                                <td>{galpao.quantidadeFrangos.toLocaleString()}</td>
                                <td>{galpao.quantidadeComedouros}</td>
                                <td>{galpao.quantidadeBebedouros}</td>
                                <td>{galpao.quantidadeVentiladores}</td>
                                <td>{galpao.quantidadeExaustores}</td>
                                <td>{galpao.quantidadeResponsaveis}</td>
                                <td>
                                    {galpao.termometroAmbiente ? (
                                        <span className="badge-success">✓ Sim</span>
                                    ) : (
                                        <span className="badge-danger">✗ Não</span>
                                    )}
                                </td>
                                <td>
                                    <Button
                                        variant="outline-primary"
                                        size="sm"
                                        onClick={() => onEdit(galpao)}
                                        className="edit-button"
                                    >
                                        Editar
                                    </Button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>
        </div>
    );
}

export default ListaGaloes;